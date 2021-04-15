export const setArrObjEl = arr => prop => propVal => newObj => {
    return arr.map( obj => {
        if ( obj[prop] === propVal ) return newObj;
        else return obj;
    });
}