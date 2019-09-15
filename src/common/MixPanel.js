import Vue from 'vue';
import * as mixpanel from 'mixpanel-browser';


const install = () => {
    Vue.prototype.$mixpanel = mixpanel;
};


export default install;
