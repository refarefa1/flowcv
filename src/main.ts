import './assets/css/main.css'
import './assets/scss/global.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { LaSuitcaseSolid, MdFiledownload, MdAddOutlined, FaRegularUser, RiProfileLine, CoEducation, FaWindowClose, MdEmail, RiLockLine, MdContactpageOutlined, BiDownload, BiFileText, FaRegularEdit, BiCameraFill, IoMail, BiTelephoneFill, IoLocationSharp, BiCheckLg, RiLoginBoxLine, MdKeyboardarrowdown, IoAddCircle, IoAdd } from 'oh-vue-icons/icons'
addIcons(LaSuitcaseSolid, MdFiledownload, MdAddOutlined, FaRegularUser, RiProfileLine, CoEducation, FaWindowClose, MdEmail, RiLockLine, MdContactpageOutlined, BiDownload, BiFileText, FaRegularEdit, BiCameraFill, IoMail, BiTelephoneFill, IoLocationSharp, BiCheckLg, RiLoginBoxLine, MdKeyboardarrowdown, IoAddCircle, IoAdd)



const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
