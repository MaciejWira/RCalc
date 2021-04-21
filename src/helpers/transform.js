// function for potential transform of sibling factor

export const transform = transformation => value => {
  if (transformation){
    switch (transformation) {
      case 'inverse':
        return value === 0 ? 0 : 1 / value;
      default:
        return value;
    }
  } else return value;

}
