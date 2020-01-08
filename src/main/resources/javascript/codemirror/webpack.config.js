const path = require('path');

module.exports = (env, argv) => {
    return {
        entry: {
            main: path.resolve(__dirname, 'src/codemirror.jahia.js')
        },
        output: {
            path: path.resolve(__dirname, 'lib'),
            filename: 'codemirror.jahia.js',
            libraryTarget: 'umd'
        },
        resolve: {
            extensions: ['.js', '.jsx', 'json']
        },
        mode: argv.mode,
        devtool: (argv.mode === 'production') ? 'source-map' : 'source-map'
        // devtool: (argv.mode === 'production') ? 'source-map' : 'eval-source-map'
    };
};
