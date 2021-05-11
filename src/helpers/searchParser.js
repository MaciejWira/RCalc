// for parsing window.location.search

export const searchParser = () => {

    const params = {};

    const search = decodeURIComponent(window.location.search);

    search.slice(1).split('&').forEach( pair => {
        const _pair = pair.split('=');
        params[_pair[0]] = _pair[1];
    });

    return params;

}