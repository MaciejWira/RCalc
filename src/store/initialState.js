import { LSTheme } from '@src/app/localStorage';

export const initialState = {
    lang: 'en',
    theme: localStorage.getItem(LSTheme) || 'dark',
    modal: {
        type: null,
        opened: false,
        content: {}
    }
};