import { useStore } from '@store/store';
import LocalizedStrings from 'react-localization';

export const useTranslations = translations => {

    const { globalState: { lang } } = useStore();
    let t = new LocalizedStrings(translations);
    t.setLanguage(lang);

    return { lang, t };

}