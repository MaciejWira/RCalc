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
            '@src': path.resolve(__dirname, 'src/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@atoms': path.resolve(__dirname, 'src/components/atoms'),
            '@molecules': path.resolve(__dirname, 'src/components/molecules'),
            '@organisms': path.resolve(__dirname, 'src/components/organisms'),
            '@layouts': path.resolve(__dirname, 'src/components/layouts'),
            '@helpers': path.resolve(__dirname, 'src/helpers/'),
            '@config': path.resolve(__dirname, 'src/config/'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@img': path.resolve(__dirname, 'src/assets/img/'),
            '@store': path.resolve(__dirname, 'src/store/'),
            '@translations': path.resolve(__dirname, 'src/translations/'),
        }
    }
}