export const getProp = arr => prop => propVal => {
    for ( const obj of arr ){
        if ( obj[prop] === propVal ) return obj;
    }
}