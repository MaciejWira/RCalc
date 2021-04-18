const colorDark = '#1b1a1a';
const colorLight = '#fff8ef';

export const mainTheme = {
    colorPrimary: '#d93f87',
    colorSubprimary: '#44318d',
    colorSubprimaryLight: '#8165a6',
    colorSubprimaryDark: '#2a1b3c',
    colorGrey: '#a3b3b6',

    pageTop: '45px',

    ziHeader: 101,
    ziModal: 102,

    fontPrimary: 'Montserrat',

    rem: pixels => (pixels / 16) + 'rem'
}

export const darkTheme = {
    colorFront: colorLight,
    colorBack: colorDark
}