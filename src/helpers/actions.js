export const actions = ( types, dispatch ) => {
    const _actions = {};
    for ( let key in types ){
      _actions[key] = payload => dispatch({ type: types[key], payload })
    }
    return _actions;
  };