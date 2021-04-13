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
            '@helpers': path.resolve(__dirname, 'src/helpers/'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@img': path.resolve(__dirname, 'src/assets/img/'),
            '@translations': path.resolve(__dirname, 'src/translations/'),
        }
    }
}