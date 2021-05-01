import { useStore } from '@store/store';
import LocalizedStrings from 'react-localization';
import { mergeSimilar } from '@helpers/mergeSimilar';

export const useTranslations = (...translations) => {

    const _translations = translations.length > 1 ? mergeSimilar(...translations) : translations[0];

    const { globalState: { lang } } = useStore();
    let t = new LocalizedStrings( _translations );
    t.setLanguage(lang);

    return { lang, t };

}