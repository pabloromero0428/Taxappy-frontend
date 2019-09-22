import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#ffcb31',
                trehh: '#000000',
                secondary: '#000000',
                accent: '#82B1FF',
                error: '#DD2C00',
                info: '#E0E0E0',
                success: '#76FF03',
                warning: '#BF360C'
            },
        },
    },
    icons: {
        iconfont: 'md',
    },
});