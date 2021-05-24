import HeaderModu  from './header/headerModu.vue'
import PopupModu from './popup/popupModu.vue'
import ImgListModu from './imgList/imgListPage.vue'
import UptatecModu from './uptate/uptatec.vue'
import BpopupModu from './bottomPopup/bottomPopup.vue'
import TransModu from './transfrom/transfromPage.vue'
const HeaderPage = {
    install: function (Vue) {
      Vue.component('HeaderModu', HeaderModu)
    }
}
const PopupPage = {
    install: function (Vue) {
      Vue.component('PopupModu', PopupModu)
    }
}
const ImgListPage = {
  install: function (Vue) {
    Vue.component('ImgListModu', ImgListModu)
  }
}
const UptatecPage = {
  install: function (Vue) {
    Vue.component('UptatecModu', UptatecModu)
  }
}
const BpopupPage = {
  install: function (Vue) {
    Vue.component('BpopupModu', BpopupModu)
  }
}
const TransPage = {
  install: function (Vue) {
    Vue.component('TransModu', TransModu)
  }
}
export const components = {
    HeaderPage,
    PopupPage,
    ImgListPage,
    UptatecPage,
    BpopupPage,
    TransPage
}