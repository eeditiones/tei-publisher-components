module.exports = {
    watch: true,
    nodeResolve: true,
    appIndex: 'docs.html',
    open: true,
    responseTransformers: [
        function rewriteBasePath({ url, status, contentType, body }) {
            if (body) {
                const rewritten = body.replace(/process.env.NODE_ENV/g, JSON.stringify('production'));
                return { body: rewritten };
            }
        },
    ]
};