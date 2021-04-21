import { rem } from './functions';
import { lighten, rgba } from 'polished';
import { 
    colorPrimary, 
    colorLight, 
    colorDark, 
    shadowPrimaryDark,
    shadowPrimaryLight
 } from './vars';

export const mainTheme = {
    colorPrimary,
    fontPrimary: 'Montserrat',
}

export const darkTheme = {
    colorFront: colorLight,
    colorBack: colorDark,
    colorBackLight: lighten(.02,colorDark),
    shadowPrimary: shadowPrimaryDark,
    overlayPrimary: `${rgba( 'grey', .3)}, ${rgba( 'grey', .1)}`,

    boxShadowPrimary: `${rem(2)} ${rem(2)} ${rem(8)} 0 ${shadowPrimaryDark}`,
    boxShadowSubPrimary: `${rem(-2)} ${rem(-2)} ${rem(5)} 0 rgba(256,256,256,.1)`,
    boxShadowInsetPrimary: `${rem(3)} ${rem(2)} ${rem(3)} 0 rgba(256,256,256,.1) inset`
}

export const lightTheme = {
    colorFront: colorDark,
    colorBack: colorLight,
    colorBackLight: lighten(.02,colorLight),
    shadowPrimary: shadowPrimaryLight,
    overlayPrimary: `${rgba( 'white', .6)}, ${rgba( 'white', .2)}`,

    boxShadowPrimary: `${rem(2)} ${rem(2)} ${rem(8)} 0 ${shadowPrimaryLight}`,
    boxShadowSubPrimary: `${rem(-3)} ${rem(-3)} ${rem(15)} 0 rgba(256,256,256,.5)`,
    boxShadowInsetPrimary: `${rem(3)} ${rem(2)} ${rem(5)} 0 rgba(256,256,256,.8) inset`
}