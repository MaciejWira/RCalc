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
            '@atoms': path.resolve(__dirname, 'src/components/atoms'),
            '@molecules': path.resolve(__dirname, 'src/components/molecules'),
            '@organisms': path.resolve(__dirname, 'src/components/organisms'),
            '@templates': path.resolve(__dirname, 'src/components/templates'),
            '@pages': path.resolve(__dirname, 'src/components/pages'),
            '@helpers': path.resolve(__dirname, 'src/helpers/'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@img': path.resolve(__dirname, 'src/assets/img/'),
            '@translations': path.resolve(__dirname, 'src/translations/'),
        }
    }
}