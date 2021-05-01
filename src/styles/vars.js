import { rgba, darken, lighten, saturate } from 'polished';
import { rem } from './functions';

export const colorDark = '#303030';
// export const colorLight = '#fff8ef';
export const colorLight = '#dcdcdc';
export const colorPrimary = '#d93f87';
export const colorPrimaryDark = saturate( .15, darken( .1, colorPrimary ) );
export const colorPrimaryLight = saturate( .15, lighten( .1, colorPrimary ));

export const buttonSize = 30;
export const transitionSpeed = '.3s';
export const shadowPrimaryDark = rgba('black', .7);
export const shadowPrimaryLight = rgba('black', .3);

export const buttonSizePrimary = rem(buttonSize);
export const buttonSizePrimaryFactor = buttonSize;

export const boxShadowColored = `${rem(-2)} ${rem(-2)} ${rem(5)} 0 ${colorPrimary}`;

export const transitionPrimary = `
    background-color ${transitionSpeed}, 
    color ${transitionSpeed}`;

export const ziHeader = 101;
export const ziModal = 102;