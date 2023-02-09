import { createI18n } from 'vue-i18n';
import { boot } from 'quasar/wrappers';
import messages from 'src/i18n';

// eslint-disable-next-line @typescript-eslint/require-await
export default boot(async ({ app }) => {
    // Create I18n instance
    const i18n = createI18n({
        locale: 'ru',
        globalInjection: true,
        messages,
    });

    // Tell app to use the I18n instance
    app.use(i18n);
});

// import messages from '../../i18n'
// import Vue from 'vue'
// import VueI18n from 'vue-i18n'
// import { StoreId } from '../store/base/types'
// import { Quasar } from 'quasar'

// declare module 'vue/types/vue' {
//     interface Vue {
//         i18n: VueI18n;
//     }
// }

// Vue.use(VueI18n)

// export let i18n: VueI18n

// export default boot(async ({ app, urlPath, ssrContext }) => {
//     let locale = ''

//     const storeId = urlPath.includes('ua/') ? StoreId.Ua : StoreId.Ru

//     if (storeId === StoreId.Ua) {
//         locale = 'uk'

//         i18n = new VueI18n({
//             locale,
//             fallbackLocale: locale,
//             messages
//         })
//     } else {
//         locale = 'ru'

//         i18n = new VueI18n({
//             locale,
//             fallbackLocale: locale,
//             messages
//         })
//     }

//     // Set i18n instance on app
//     app.i18n = i18n

//     try {
//         await import(
//             /* webpackInclude: /(ru|uk)\.js$/ */
//             'quasar/lang/' + locale
//         ).then(lang => {
//             /* eslint-disable-next-line*/
//             (Quasar.lang as any).set(lang.default, ssrContext)
//         })
//     }
//     catch (err) {
//         throw new Error('Default language pack does not exisits')
//     }
// })
