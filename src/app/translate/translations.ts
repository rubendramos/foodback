// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './dictionaries/lang-en';
import { LANG_ES_NAME, LANG_ES_TRANS } from './dictionaries/lang-es';
import { LANG_ZH_NAME, LANG_ZH_TRANS } from './dictionaries/lang-zh';
import { LANG_GL_NAME, LANG_GL_TRANS } from './dictionaries/lang-gl';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_ES_NAME]: LANG_ES_TRANS,
    [LANG_ZH_NAME]: LANG_ZH_TRANS,
    [LANG_GL_NAME]: LANG_GL_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
