require('./bootstrap');

import Vue from 'vue'
import { createApp, h } from 'vue'
import ZiggyVue from './ziggy';
import { Ziggy } from './ziggy';
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { Link } from '@inertiajs/inertia-vue3'
import { Head } from '@inertiajs/inertia-vue3'
import Layout from '@/Shared/Layout'


InertiaProgress.init()

createInertiaApp({
  // resolve: async name => await import(`./Pages/${name}`),
  resolve: async name => {
    const { default: page } = await import(`./Pages/${name}`);

    if (page.layout === undefined) {
        page.layout = Layout;
    }

    if (page.props?.layout === null) {
        page.layout = undefined;
    }

    return page;
},
  setup({ el, App, props, plugin }) {
    createApp({ 
      render: () => h(App, props) 
    })
      .mixin({
        mounted() {
          window.addEventListener('popstate', () => {
            this.$page.props.popstate = true;
          });
        },
        methods: {
            route: window.route
        }
      })
      .use(plugin)
      .component("Link", Link)
      .component("Head", Head)
      .mount(el)
  },
})