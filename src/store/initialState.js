import { LSTheme, LSLang } from '@src/app/localStorage';

export const initialState = {
    lang: localStorage.getItem(LSLang) || 'en',
    theme: localStorage.getItem(LSTheme) || 'dark',
    modal: {
        type: null,
        opened: false,
        content: {}
    }
};