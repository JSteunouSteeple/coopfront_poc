import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//
// This is a really basic vue app
// created via npm create vue@3
// with router, TypeScript, Pinia
//

function start({el}: {el: HTMLElement}) {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    
    app.mount(el)
}

//
// This block expose the app in
// it's own namespace
//

// @ts-ignore
window.Coop = {
    start
}

//
// This block is for DEV ENV HMR only
// allow to dev the app in standalone
//

// @ts-ignore
if (window.__VUE_HMR_RUNTIME__) {
    const el = document.getElementById('app')
    if (!el) throw new Error('#app is missing')
    start({el})
}
