import { breakpoints } from './breakpoints';

export const rem = pixels => (pixels / 16) + 'rem';

export const bp = (val, content) => {

    return `
        @media (min-width: ${breakpoints[val]}px){
            ${content}
        }
    `;

}