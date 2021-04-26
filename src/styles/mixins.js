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
`