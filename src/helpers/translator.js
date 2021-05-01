// function for creating object for react-localization destination object
export const translator = obj => prop => {

    const newObj = {};
  
    if ( obj[prop] ){
      obj[prop].forEach( el => {
  
        for ( let key in el.pretty ){
          if ( !newObj[key] ) newObj[key] = {};
          newObj[key][el.name] = el.pretty[key]
        }
      
      });
    }
  
    return newObj;
    
  };