const path = require('path');

module.exports = {
    style: {
        sass: {
            loaderOptions: {
                sassOptions: {
                    includePaths: ['src/styles']
                }
            }
        }
    },
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@fonts': path.resolve(__dirname, 'src/fonts/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@img': path.resolve(__dirname, 'src/img/'),
        }
    }
}