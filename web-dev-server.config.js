module.exports = {
    watch: true,
    nodeResolve: true,
    appIndex: 'api.html',
    open: true,
    cors: false,
    plugins: [
        {
            transform(context) {
                context.response.set('Access-Control-Allow-Origin', 'http://localhost:8080');
                if (/\.html$/.test(context.path)) {
                    const transformedBody = context.body.replace(
                        '</head>',
                        '<script>window.process = { env: { NODE_ENV: "production" } }</script></head>',
                    );
                    return transformedBody;
                }
            }
        }
    ]
};