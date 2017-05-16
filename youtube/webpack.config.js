module.exports = {
    entry  : './js/app.js',
    output : {
        path     : __dirname,
        filename : 'bundle.js'
    },
    module : {
        loaders: [ {
            test   : /.js$/,
            loader : 'babel-loader'
        }
        ]
    }
};