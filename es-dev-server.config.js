module.exports = {
    watch: true,
    nodeResolve: true,
    appIndex: 'api.html',
    open: true,
    cors: true,
    responseTransformers: [
        function rewriteBasePath({ url, status, contentType, body }) {
            if (body) {
                const rewritten = body.replace(/process.env.NODE_ENV/g, JSON.stringify('production'));
                return { body: rewritten };
            }
        },
    ]
};