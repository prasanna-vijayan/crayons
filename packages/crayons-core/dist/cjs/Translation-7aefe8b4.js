'use strict';

const index = require('./index-63c6a574.js');

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof index.getRenderingRef !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = index.getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(index.forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(index.forceUpdate));
            cleanupElements(elmsToUpdate);
        },
    };
};

const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    let states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        const unReset = on('reset', () => cb(defaultState[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const supportedDateLanguages = [
    'af',
    'ar',
    'ar-DZ',
    'ar-EG',
    'ar-MA',
    'ar-SA',
    'ar-TN',
    'az',
    'be',
    'bg',
    'bn',
    'bs',
    'ca',
    'cs',
    'cy',
    'da',
    'de',
    'de-AT',
    'el',
    'en-AU',
    'en-CA',
    'en-GB',
    'en-IE',
    'en-IN',
    'en-NZ',
    'en-US',
    'en-ZA',
    'eo',
    'es',
    'et',
    'eu',
    'fa-IR',
    'fi',
    'fr',
    'fr-CA',
    'fr-CH',
    'fy',
    'gd',
    'gl',
    'gu',
    'he',
    'hi',
    'hr',
    'ht',
    'hu',
    'hy',
    'id',
    'is',
    'it',
    'ja',
    'ja-Hira',
    'ka',
    'kk',
    'km',
    'kn',
    'ko',
    'lb',
    'lt',
    'lv',
    'mk',
    'mn',
    'ms',
    'mt',
    'nb',
    'nl',
    'nl-BE',
    'nn',
    'pl',
    'pt',
    'pt-BR',
    'ro',
    'ru',
    'sk',
    'sl',
    'sq',
    'sr',
    'sr-Latn',
    'sv',
    'ta',
    'te',
    'th',
    'tr',
    'ug',
    'uk',
    'uz',
    'uz-Cyrl',
    'vi',
    'zh-CN',
    'zh-HK',
    'zh-TW',
];
const langCodeMapping = {
    ar: 'ar-SA',
    bg: 'bg-BG',
    bs: 'bs-BA',
    ca: 'ca-ES',
    cs: 'cs-CZ',
    da: 'da-DK',
    de: 'de-DE',
    el: 'el-GR',
    en: 'en-US',
    es: 'es-ES',
    et: 'et-EE',
    fi: 'fi-FI',
    fil: 'fil-PH',
    fr: 'fr-FR',
    he: 'he-IL',
    hr: 'hr-HR',
    hu: 'hu-HU',
    id: 'id-ID',
    is: 'is-IS',
    it: 'it-IT',
    ja: 'ja-JP',
    ko: 'ko-KR',
    lt: 'lt-LT',
    lv: 'lv-LV',
    nl: 'nl-NL',
    no: 'no-NO',
    pl: 'pl-PL',
    pt: 'pt-PT',
    ro: 'ro-RO',
    ru: 'ru-RU',
    sk: 'sk-SK',
    sl: 'sl-SI',
    sr: 'sr-SP',
    sc: 'sv-SE',
    th: 'th-TH',
    tr: 'tr-TR',
    uk: 'uk-UA',
    vi: 'vi-VN',
    zh: 'zh-CN',
};

function __variableDynamicImportRuntime1__(path) {
  switch (path) {
    case '../../../node_modules/date-fns/esm/locale/af/index.js': return Promise.resolve().then(function () { return require('./index-c1f35b55-e1a2ce58.js'); });
    case '../../../node_modules/date-fns/esm/locale/ar/index.js': return Promise.resolve().then(function () { return require('./index-55b4dccc-cd43b3c2.js'); });
    case '../../../node_modules/date-fns/esm/locale/ar-DZ/index.js': return Promise.resolve().then(function () { return require('./index-2b546b5c-43141b0f.js'); });
    case '../../../node_modules/date-fns/esm/locale/ar-EG/index.js': return Promise.resolve().then(function () { return require('./index-b8f63777-d45c377d.js'); });
    case '../../../node_modules/date-fns/esm/locale/ar-MA/index.js': return Promise.resolve().then(function () { return require('./index-d1eda047-59000fb8.js'); });
    case '../../../node_modules/date-fns/esm/locale/ar-SA/index.js': return Promise.resolve().then(function () { return require('./index-730163d8-f88d164c.js'); });
    case '../../../node_modules/date-fns/esm/locale/ar-TN/index.js': return Promise.resolve().then(function () { return require('./index-2810c9f4-02dd53d7.js'); });
    case '../../../node_modules/date-fns/esm/locale/az/index.js': return Promise.resolve().then(function () { return require('./index-8e5c84a4-d77de346.js'); });
    case '../../../node_modules/date-fns/esm/locale/be/index.js': return Promise.resolve().then(function () { return require('./index-837330e9-235c1726.js'); });
    case '../../../node_modules/date-fns/esm/locale/bg/index.js': return Promise.resolve().then(function () { return require('./index-983c1802-754eaa54.js'); });
    case '../../../node_modules/date-fns/esm/locale/bn/index.js': return Promise.resolve().then(function () { return require('./index-33de7831-95f54267.js'); });
    case '../../../node_modules/date-fns/esm/locale/bs/index.js': return Promise.resolve().then(function () { return require('./index-8ac3e95f-5a022d02.js'); });
    case '../../../node_modules/date-fns/esm/locale/ca/index.js': return Promise.resolve().then(function () { return require('./index-684e1555-3b318886.js'); });
    case '../../../node_modules/date-fns/esm/locale/cs/index.js': return Promise.resolve().then(function () { return require('./index-41702bdf-c032d4c8.js'); });
    case '../../../node_modules/date-fns/esm/locale/cy/index.js': return Promise.resolve().then(function () { return require('./index-82298bef-37292d7c.js'); });
    case '../../../node_modules/date-fns/esm/locale/da/index.js': return Promise.resolve().then(function () { return require('./index-ec58303b-d3e750ec.js'); });
    case '../../../node_modules/date-fns/esm/locale/de/index.js': return Promise.resolve().then(function () { return require('./index-331d1c4c-a8c162e6.js'); });
    case '../../../node_modules/date-fns/esm/locale/de-AT/index.js': return Promise.resolve().then(function () { return require('./index-768e86c6-5153d290.js'); });
    case '../../../node_modules/date-fns/esm/locale/el/index.js': return Promise.resolve().then(function () { return require('./index-26117e04-fa393262.js'); });
    case '../../../node_modules/date-fns/esm/locale/en-AU/index.js': return Promise.resolve().then(function () { return require('./index-95cffb6f-6eb506aa.js'); });
    case '../../../node_modules/date-fns/esm/locale/en-CA/index.js': return Promise.resolve().then(function () { return require('./index-48b60b02-60365499.js'); });
    case '../../../node_modules/date-fns/esm/locale/en-GB/index.js': return Promise.resolve().then(function () { return require('./index-4416cefa-de02f6a2.js'); });
    case '../../../node_modules/date-fns/esm/locale/en-IE/index.js': return Promise.resolve().then(function () { return require('./index-e78efbb7-4987471f.js'); });
    case '../../../node_modules/date-fns/esm/locale/en-IN/index.js': return Promise.resolve().then(function () { return require('./index-05337dad-09e1d9c1.js'); });
    case '../../../node_modules/date-fns/esm/locale/en-NZ/index.js': return Promise.resolve().then(function () { return require('./index-b05280c7-328a1922.js'); });
    case '../../../node_modules/date-fns/esm/locale/en-US/index.js': return Promise.resolve().then(function () { return require('./index-0a3e36e3-d70683a6.js'); });
    case '../../../node_modules/date-fns/esm/locale/en-ZA/index.js': return Promise.resolve().then(function () { return require('./index-be4c1942-3b7f18e7.js'); });
    case '../../../node_modules/date-fns/esm/locale/eo/index.js': return Promise.resolve().then(function () { return require('./index-c7c62dd3-b45bd7db.js'); });
    case '../../../node_modules/date-fns/esm/locale/es/index.js': return Promise.resolve().then(function () { return require('./index-aa9aadba-5ea0ca41.js'); });
    case '../../../node_modules/date-fns/esm/locale/et/index.js': return Promise.resolve().then(function () { return require('./index-e6eb9903-70144994.js'); });
    case '../../../node_modules/date-fns/esm/locale/eu/index.js': return Promise.resolve().then(function () { return require('./index-ea6d2b12-970d8473.js'); });
    case '../../../node_modules/date-fns/esm/locale/fa-IR/index.js': return Promise.resolve().then(function () { return require('./index-ec985de9-1c2a6b3a.js'); });
    case '../../../node_modules/date-fns/esm/locale/fi/index.js': return Promise.resolve().then(function () { return require('./index-34d75a8c-290ab34d.js'); });
    case '../../../node_modules/date-fns/esm/locale/fr/index.js': return Promise.resolve().then(function () { return require('./index-b7e908df-906ff2fe.js'); });
    case '../../../node_modules/date-fns/esm/locale/fr-CA/index.js': return Promise.resolve().then(function () { return require('./index-52c4641b-1b900b31.js'); });
    case '../../../node_modules/date-fns/esm/locale/fr-CH/index.js': return Promise.resolve().then(function () { return require('./index-d70b8f49-a2590e2b.js'); });
    case '../../../node_modules/date-fns/esm/locale/fy/index.js': return Promise.resolve().then(function () { return require('./index-b9061eb7-559fa57b.js'); });
    case '../../../node_modules/date-fns/esm/locale/gd/index.js': return Promise.resolve().then(function () { return require('./index-e472e5cb-fd4866a9.js'); });
    case '../../../node_modules/date-fns/esm/locale/gl/index.js': return Promise.resolve().then(function () { return require('./index-554ccad4-03417092.js'); });
    case '../../../node_modules/date-fns/esm/locale/gu/index.js': return Promise.resolve().then(function () { return require('./index-717b67e6-9f7c4951.js'); });
    case '../../../node_modules/date-fns/esm/locale/he/index.js': return Promise.resolve().then(function () { return require('./index-852fb809-52a25849.js'); });
    case '../../../node_modules/date-fns/esm/locale/hi/index.js': return Promise.resolve().then(function () { return require('./index-bf058ee4-049c6189.js'); });
    case '../../../node_modules/date-fns/esm/locale/hr/index.js': return Promise.resolve().then(function () { return require('./index-51b559f3-018f7c39.js'); });
    case '../../../node_modules/date-fns/esm/locale/ht/index.js': return Promise.resolve().then(function () { return require('./index-e9979144-17c3797b.js'); });
    case '../../../node_modules/date-fns/esm/locale/hu/index.js': return Promise.resolve().then(function () { return require('./index-d487bab9-ca93c3c8.js'); });
    case '../../../node_modules/date-fns/esm/locale/hy/index.js': return Promise.resolve().then(function () { return require('./index-8a4815d7-82acaf5a.js'); });
    case '../../../node_modules/date-fns/esm/locale/id/index.js': return Promise.resolve().then(function () { return require('./index-6b66290c-d727b7a4.js'); });
    case '../../../node_modules/date-fns/esm/locale/is/index.js': return Promise.resolve().then(function () { return require('./index-28e752fb-e31c7ba4.js'); });
    case '../../../node_modules/date-fns/esm/locale/it/index.js': return Promise.resolve().then(function () { return require('./index-ada3684d-987faf6f.js'); });
    case '../../../node_modules/date-fns/esm/locale/ja/index.js': return Promise.resolve().then(function () { return require('./index-33a3a969-d2e26837.js'); });
    case '../../../node_modules/date-fns/esm/locale/ja-Hira/index.js': return Promise.resolve().then(function () { return require('./index-7b81f999-83497c93.js'); });
    case '../../../node_modules/date-fns/esm/locale/ka/index.js': return Promise.resolve().then(function () { return require('./index-b46441aa-f3f05f46.js'); });
    case '../../../node_modules/date-fns/esm/locale/kk/index.js': return Promise.resolve().then(function () { return require('./index-6b6ba7ab-43a0548d.js'); });
    case '../../../node_modules/date-fns/esm/locale/km/index.js': return Promise.resolve().then(function () { return require('./index-d6302b4f-2df53c05.js'); });
    case '../../../node_modules/date-fns/esm/locale/kn/index.js': return Promise.resolve().then(function () { return require('./index-b962a12d-77b6c7d7.js'); });
    case '../../../node_modules/date-fns/esm/locale/ko/index.js': return Promise.resolve().then(function () { return require('./index-58dc4b63-56499098.js'); });
    case '../../../node_modules/date-fns/esm/locale/lb/index.js': return Promise.resolve().then(function () { return require('./index-a2248962-24ed9e1a.js'); });
    case '../../../node_modules/date-fns/esm/locale/lt/index.js': return Promise.resolve().then(function () { return require('./index-42b1d084-a56897cd.js'); });
    case '../../../node_modules/date-fns/esm/locale/lv/index.js': return Promise.resolve().then(function () { return require('./index-95cc22c6-0285960f.js'); });
    case '../../../node_modules/date-fns/esm/locale/mk/index.js': return Promise.resolve().then(function () { return require('./index-a2b2dfee-667aac14.js'); });
    case '../../../node_modules/date-fns/esm/locale/mn/index.js': return Promise.resolve().then(function () { return require('./index-c0d846a9-4532fd96.js'); });
    case '../../../node_modules/date-fns/esm/locale/ms/index.js': return Promise.resolve().then(function () { return require('./index-a1168380-a574aebe.js'); });
    case '../../../node_modules/date-fns/esm/locale/mt/index.js': return Promise.resolve().then(function () { return require('./index-84921e63-bd19b0ad.js'); });
    case '../../../node_modules/date-fns/esm/locale/nb/index.js': return Promise.resolve().then(function () { return require('./index-d0b6c3fb-24b7020e.js'); });
    case '../../../node_modules/date-fns/esm/locale/nl/index.js': return Promise.resolve().then(function () { return require('./index-5bb6c3b1-e8741b9f.js'); });
    case '../../../node_modules/date-fns/esm/locale/nl-BE/index.js': return Promise.resolve().then(function () { return require('./index-f57a6136-b0bf5d2a.js'); });
    case '../../../node_modules/date-fns/esm/locale/nn/index.js': return Promise.resolve().then(function () { return require('./index-9f4cc23d-427bb4c5.js'); });
    case '../../../node_modules/date-fns/esm/locale/pl/index.js': return Promise.resolve().then(function () { return require('./index-abdc2455-257acde5.js'); });
    case '../../../node_modules/date-fns/esm/locale/pt/index.js': return Promise.resolve().then(function () { return require('./index-29f5075b-3a89db19.js'); });
    case '../../../node_modules/date-fns/esm/locale/pt-BR/index.js': return Promise.resolve().then(function () { return require('./index-903bcef3-dbbf6e6e.js'); });
    case '../../../node_modules/date-fns/esm/locale/ro/index.js': return Promise.resolve().then(function () { return require('./index-d1f23fd1-8bedea6a.js'); });
    case '../../../node_modules/date-fns/esm/locale/ru/index.js': return Promise.resolve().then(function () { return require('./index-98d2f6f7-45d516ed.js'); });
    case '../../../node_modules/date-fns/esm/locale/sk/index.js': return Promise.resolve().then(function () { return require('./index-128fc42c-f2f12b29.js'); });
    case '../../../node_modules/date-fns/esm/locale/sl/index.js': return Promise.resolve().then(function () { return require('./index-006f5f4f-18f44df8.js'); });
    case '../../../node_modules/date-fns/esm/locale/sq/index.js': return Promise.resolve().then(function () { return require('./index-193e6e0b-49ada481.js'); });
    case '../../../node_modules/date-fns/esm/locale/sr/index.js': return Promise.resolve().then(function () { return require('./index-e6931836-6e8fa656.js'); });
    case '../../../node_modules/date-fns/esm/locale/sr-Latn/index.js': return Promise.resolve().then(function () { return require('./index-2bd8df02-556a6e80.js'); });
    case '../../../node_modules/date-fns/esm/locale/sv/index.js': return Promise.resolve().then(function () { return require('./index-de819536-af6b4ba9.js'); });
    case '../../../node_modules/date-fns/esm/locale/ta/index.js': return Promise.resolve().then(function () { return require('./index-c678bacb-3532d34e.js'); });
    case '../../../node_modules/date-fns/esm/locale/te/index.js': return Promise.resolve().then(function () { return require('./index-4d7fe58b-e55aedcc.js'); });
    case '../../../node_modules/date-fns/esm/locale/th/index.js': return Promise.resolve().then(function () { return require('./index-50b0b946-0efa9ef2.js'); });
    case '../../../node_modules/date-fns/esm/locale/tr/index.js': return Promise.resolve().then(function () { return require('./index-ee196718-9b8826c3.js'); });
    case '../../../node_modules/date-fns/esm/locale/ug/index.js': return Promise.resolve().then(function () { return require('./index-83cf4990-9c76a629.js'); });
    case '../../../node_modules/date-fns/esm/locale/uk/index.js': return Promise.resolve().then(function () { return require('./index-025d82f0-12cdaf71.js'); });
    case '../../../node_modules/date-fns/esm/locale/uz/index.js': return Promise.resolve().then(function () { return require('./index-6d382fb4-cf9b6f1d.js'); });
    case '../../../node_modules/date-fns/esm/locale/uz-Cyrl/index.js': return Promise.resolve().then(function () { return require('./index-6cc1dcbc-9b61b3d5.js'); });
    case '../../../node_modules/date-fns/esm/locale/vi/index.js': return Promise.resolve().then(function () { return require('./index-87d9e489-a6105ff1.js'); });
    case '../../../node_modules/date-fns/esm/locale/zh-CN/index.js': return Promise.resolve().then(function () { return require('./index-e98c8c7d-6b32fb38.js'); });
    case '../../../node_modules/date-fns/esm/locale/zh-HK/index.js': return Promise.resolve().then(function () { return require('./index-6b112f79-5accb03a.js'); });
    case '../../../node_modules/date-fns/esm/locale/zh-TW/index.js': return Promise.resolve().then(function () { return require('./index-63b92600-6c2d3324.js'); });
    default: return new Promise(function(resolve, reject) {
      (typeof queueMicrotask === 'function' ? queueMicrotask : setTimeout)(
        reject.bind(null, new Error("Unknown variable dynamic import: " + path))
      );
    })
   }
 }

function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    case '../i18n/en-US.json': return Promise.resolve().then(function () { return require('./en-US-2f166524-74ab271c.js'); });
    default: return new Promise(function(resolve, reject) {
      (typeof queueMicrotask === 'function' ? queueMicrotask : setTimeout)(
        reject.bind(null, new Error("Unknown variable dynamic import: " + path))
      );
    })
   }
 }
/**
 * Attempts to find the closest tag with a lang attribute.
 * @param element The element to find a lang attribute for.
 */
function getLangAttr(element = document.body) {
    const closestElement = element.closest('[lang]');
    if (!closestElement)
        return undefined;
    let lang = closestElement.lang;
    if (!lang)
        return undefined;
    if (lang.indexOf('-') !== -1) {
        lang = lang.split('-')[0];
    }
    if (lang.indexOf('_') !== -1) {
        lang = lang.split('_')[0];
    }
    return lang;
}
function getNavigatorLang() {
    if (typeof window === 'undefined' ||
        typeof window.navigator === 'undefined') {
        return undefined;
    }
    let browserLang = window.navigator.languages && window.navigator.languages.length > 0
        ? window.navigator.languages[0]
        : null;
    browserLang = browserLang || window.navigator.language;
    if (typeof browserLang === 'undefined') {
        return 'en';
    }
    if (browserLang.indexOf('-') !== -1) {
        browserLang = browserLang.split('-')[0];
    }
    if (browserLang.indexOf('_') !== -1) {
        browserLang = browserLang.split('_')[0];
    }
    return browserLang;
}
function getBrowserLang() {
    const locale = getLangAttr() || getNavigatorLang();
    return locale || 'en';
}
function getVal(path, obj = {}) {
    if (!path)
        return '';
    return path === null || path === void 0 ? void 0 : path.split('.').reduce((r, val) => {
        return r ? r[val] : undefined;
    }, obj);
}
function interpolate(text, values) {
    return Object.entries(values).reduce((text, [key, value]) => text.replace(new RegExp(`{{[  ]*${key}[  ]*}}`, `gm`), String(extract(value))), text);
}
function extract(obj) {
    return typeof obj === 'function' ? obj() : obj;
}
function get({ key, values, obj, lang, context, }) {
    var _a;
    const translatedText = (_a = getVal(key, obj)) !== null && _a !== void 0 ? _a : key; // return the key if the value for key is not found
    // Interpolate the values and return the translation
    return values ? interpolate(translatedText, values) : translatedText;
}
class TranslationController$1 {
    constructor() {
        this.requests = new Map();
        const { state, onChange } = createStore({
            lang: '',
            globalStrings: null,
            customTranslations: {},
        });
        this.state = state;
        this.onChange = onChange;
        //this.pluralize = pluralize;
        this.langCodeMapping = langCodeMapping;
        this.onChange('lang', async (lang) => {
            this.fetchTranslations(lang);
            await this.fetchDateLangModule(lang);
        });
        this.onChange('customTranslations', async (customTranslations) => {
            const lang = this.state.lang || getBrowserLang();
            if (!this.state.globalStrings) {
                await this.fetchTranslations(lang);
            }
            const customLangStrings = (customTranslations === null || customTranslations === void 0 ? void 0 : customTranslations[lang]) || {};
            const finalLangStrings = Object.assign(Object.assign({}, this.state.globalStrings), customLangStrings);
            this.state.globalStrings = finalLangStrings;
        });
        if ('MutationObserver' in window) {
            const mo = new MutationObserver(async (data) => {
                if (data[0].attributeName === 'lang') {
                    const lang = document.documentElement.getAttribute('lang');
                    if (lang !== data[0].oldValue) {
                        this.state.lang = lang;
                    }
                }
            });
            mo.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['lang'],
                attributeOldValue: true,
            });
        }
        this.initialize();
    }
    async initialize() {
        await Promise.all([
            this.fetchTranslations(),
            this.fetchDateLangModule(),
        ]).catch((err) => console.error(`Error occurred in intialising i18n lib ${err.message}`));
    }
    /**
     * set lang manually
     * @param lang
     */
    setLang(lang) {
        this.state.lang = lang;
    }
    /**
     *
     * @returns the selected lang
     */
    getLang() {
        return this.state.lang;
    }
    /**
     * @returns the selected date lang module
     */
    async getDateLangModule(lang) {
        return await this.fetchDateLangModule(lang || this.state.lang);
    }
    async fetchTranslations(lang) {
        const locale = lang || getBrowserLang();
        const userLocale = locale.includes('-')
            ? locale
            : langCodeMapping[`${locale}`] || 'en-US';
        this.state.lang = locale;
        return this.fetchDefaultTranslations(userLocale).then((defaultLangStrings) => {
            var _a;
            const customLangStrings = ((_a = this.state.customTranslations) === null || _a === void 0 ? void 0 : _a[locale]) || {};
            const finalLangStrings = Object.assign(Object.assign({}, defaultLangStrings), customLangStrings);
            this.state.globalStrings = finalLangStrings;
            return finalLangStrings;
        });
    }
    fetchDefaultTranslations(lang) {
        let req = this.requests.get(lang);
        if (!req) {
            req = __variableDynamicImportRuntime0__(`../i18n/${lang}.json`)
                .then((result) => result.default)
                .then((data) => {
                return data;
            })
                .catch(async () => {
                console.warn(`Error loading config for lang: ${lang} from pre-defined set. defaulting to en-US translation`);
                // fallback to en default strings in case of exception
                return await this.fetchDefaultTranslations('en-US');
            });
            this.requests.set(lang, req);
        }
        return req;
    }
    async fetchDateLangModule(lang) {
        const locale = lang || getBrowserLang();
        let req = this.requests.get('date_' + locale);
        if (!req) {
            let lng = locale;
            const langIndex = supportedDateLanguages.indexOf(lng);
            if (langIndex >= 0) {
                lng = supportedDateLanguages[langIndex];
            }
            else {
                lng = lng.includes('-') ? lng.split('-')[0] : lng;
            }
            if (lng === 'en')
                lng = 'en-US';
            req = __variableDynamicImportRuntime1__(`../../../node_modules/date-fns/esm/locale/${lng}/index.js`)
                .then((result) => result.default)
                .then((data) => {
                return data;
            })
                .catch(async (err) => {
                console.warn(`Error loading date lang module for : ${lng} from date-fns set`, err);
                // fallback to en default strings in case of exception
                const langModule = await this.fetchDateLangModule('en-US').catch((err) => {
                    console.error(' Error in fetching default date lang module ', err.message);
                    return {};
                });
                return langModule;
            });
            this.requests.set('date_' + locale, req);
        }
        return req;
    }
    /**
     * set custom translations. ex: {
      en: {
        datepicker: {
          cancel: 'Cancel',
          update: 'Update',
        },
        dropdown: {
          add: 'Add',
          cancel: 'Cancel',
        },
        modal: {
          cancel: 'Cancel',
          ok: 'OK',
        },
        search: {
          search: 'Search',
          no_items_found: 'No items found',
          no_data_available: 'No data available',
        },
      },
      de: {
        datepicker: {
          cancel: 'Stornieren',
          update: 'Aktualisierung',
        },
        modal: {
          ok: 'OK',
          cancel: 'Stornieren',
        },
        dropdown: {
          add: 'Addieren',
          cancel: 'Stornieren',
        },
        search: {
          search: 'Suche',
          no_items_found: 'Keine Elemente gefunden',
          no_data_available: 'Keine Daten vorhanden',
        },
      },
    };
     * it will override existing translations if the key is already present.
     * @param json
     */
    setTranslations(json) {
        this.state.customTranslations = json;
    }
    t(key = '', values, context) {
        var _a;
        return ((_a = get({
            key,
            values,
            obj: this.state.globalStrings,
            lang: this.state.lang,
            context,
        })) !== null && _a !== void 0 ? _a : key);
    }
}

const TranslationController = new TranslationController$1();

exports.TranslationController = TranslationController;
