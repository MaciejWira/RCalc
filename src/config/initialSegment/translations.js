import { mergeSimilar } from '@helpers/mergeSimilar';
import { translator } from '@helpers/translator';
import { initialSegment } from './';

const initialTranslation = {
    en: {},
    pl: {}
  };
  
  // preparation of translations for react-localization object
  const factorsTranslations = initialSegment.factors.map( factor => {
  
    // pretty names
    for ( let key in factor.pretty ){
      if ( !initialTranslation[key] ) initialTranslation[key] = {};
      initialTranslation[key][factor.name] = factor.pretty[key]
    };
  
    const siblings = translator(factor)('siblings');
    const standards = translator(factor)('standards');
  
    return {
      ...initialTranslation,
      ...siblings,
      ...standards
    }
  
  });
  
  export const translations = factorsTranslations.reduce((prev, curr) => {
    return mergeSimilar(prev, curr);
  }, {});