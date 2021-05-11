import { rem } from '@styles/functions';
import { rgba } from 'polished';
import { colorPrimary } from '@styles/vars';

export const absolute = ( overlay = false ) => {

    const _overlay = !overlay ? '' : `
        content: '';
        display: block;
        z-index: 0;
    `;

    return(`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        ${_overlay}
    `);

};

export const relative = `
    position: relative;
    z-index: 1;
`;

export const focus = `
    :focus, :focus-visible {
        outline: none;
        box-shadow: 0 0 ${rem(15)} 0 ${rgba( colorPrimary, .9)};
        border: none;
    }
`;