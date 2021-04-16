// for merging values of same properties for objects

export const mergeSimilar = ( ...objects ) => {

    return objects.reduce((prev, curr) => {

        const next = { ...prev }

        for ( let key in curr ){
            if ( next[key] ){
                next[key] = { ...next[key], ...curr[key] }
            } else next[key] = curr[key]
        };

        return next;

    }, {})

}