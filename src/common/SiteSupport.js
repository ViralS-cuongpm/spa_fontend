import Vue from 'vue';

import Const from "../common/Const";

const env = process.env;

const SiteSupportConfig = {
    BASE_URL: env.MIX_BASE_ZENDESK_URL,
    ANNOUNCEMENT_ID:360001806072,
    FAQ_ID: 360001806092,  
    NEW_REQUEST_ENDPOINT: 'requests/new',
    CATEGORY_ENDPOINT: 'categories',
    SECTION_ENDPOINT: 'sections',
    ARTICLE_ENDPOINT: 'articles',
    Articles : [
        {
            id: 360029367531,
            name: 'Cannot receive Email',
            alias: 'cannot-receive-email'
        },
        {
            id: 360029055812,
            name: 'How-to-use-Stop-Limit-Function',
            alias: 'how-to-use-stop-limit-function'
        },
    ]
};


const generateUrlAlias = (routeAlias, language) => {
    return '/support?return_to=' + routeAlias + '&language=' + language;
};

const generateUrl = (...params) => {
    return '/support?return_to=' + params.join('/');
};

const lang = {
    'en-us': 'en-us',
    'en': 'en-us',
    'ja': 'ja',
    'ko' :'ko',
    'zh-tw':'zh-tw',
};

const getArticle = (userLanguage, articleAlias) => {
    let url = generateUrlAlias('GetArticle', userLanguage) + '&alias=' + articleAlias;

    return url;
};

const SiteSupportNewRequest = (language = 'en-us') => {
    const userLanguage = lang[language];
    let url = generateUrlAlias('SiteSupportNewRequest', userLanguage);

    return url;
};

const SiteSupportArticle = (language = 'en-us',params) => {
    const userLanguage = lang[language];
    let url = getArticle(userLanguage, params);

    return url;
};

// Not use
const SiteSupportAnnouncements = (language = 'en-us') => {
    const userLanguage = lang[language];
    let url = generateUrlAlias('SiteSupportAnnouncements', userLanguage);
    return url;
};

const SiteSupportFAQ = (language = 'en-us') => {
    const userLanguage = lang[language];
    let url = generateUrlAlias('SiteSupportFAQ', userLanguage);

    return url;
};


const SiteSupport = (language = 'en-us') => {
    const userLanguage = lang[language];
    let url = generateUrlAlias('SiteSupport', userLanguage);

    return url;
};

const install = () => {
    Vue.prototype.$siteSupport = SiteSupport;
    Vue.prototype.$siteSupportNewRequest = SiteSupportNewRequest;
    Vue.prototype.$siteSupportArticle = SiteSupportArticle;
    Vue.prototype.$siteSupportAnnouncements = SiteSupportAnnouncements;
    Vue.prototype.$siteSupportFAQ = SiteSupportFAQ;
};

export default install;
let ANNOUNCEMENT_ID = SiteSupportConfig.ANNOUNCEMENT_ID;
export {ANNOUNCEMENT_ID};

