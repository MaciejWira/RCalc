export const createSearch = segments => {
    const params = {
      id: '',
      distance: '',
      time: '',
      speed: '',
    };
    segments.forEach( segment => {
      params.id += segment.id + ',';
      segment.factors.forEach( factor => {
        params[factor.name] += factor.sum + ',';
      });
    });

    let query = '';
    for ( let key in params ){
      query += '&' + key + '=' + encodeURIComponent(params[key].slice(0,-1))
    };

    return '?' + query.slice(1);
  };