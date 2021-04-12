// function for potential transform of sibling factor

export const transform = (transformation, sum) => {
  if (transformation){
    switch (transformation) {
      case 'inverse':
        return sum === 0 ? 0 : 1 / sum;
      default:
        return sum;
    }
  } else return sum;

}
