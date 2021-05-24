import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
Vue.use(Router)
const router = new Router({
    mode: "hash",
    // mode: 'history',
    routes: [{
        path: '*',
        redirect: '/index'
    },
    // 登录页
    {
        path: '/land',
        name: 'land',
        meta: {
            title: '登录账号',
            IsPath: false
        },
        component: () => import('@/views/land/land'),
        children: [{
            path: '/register',
            name: 'register',
            meta: {
                title: '注册账号',
                IsPath: false
            },
            component: () => import('@/views/land/register')
        }, {
            path: '/forget',
            name: 'forget',
            meta: {
                title: '找回密码',
                IsPath: false
            },
            component: () => import('@/views/land/forget')
        }]
    },
    //首页
    {
        path: '/index',
        name: 'index',
        meta: {
            title: '主页',
            IsPath: false
        },
        component: () => import('@/views/index/index'),
        children: [{
            //首页
            path: '/index/indexPage',
            name: 'indexPage',
            meta: {
                title: '首页',
                IsPath: false
            },
            component: () => import('@/views/index/indexPage'),
        },
        {
            //校圈
            path: '/index/schoolCircleIndex',
            name: 'schoolCircleIndex',
            meta: {
                title: '校圈',
                IsPath: false
            },
            component: () => import('@/views/schoolCrcle/schoolCircleIndex'),
        }, {
            //查找页面
            path: '/index/newInfoList',
            name: 'newInfoList',
            meta: {
                title: '消息',
                IsPath: false
            },
            component: () => import('@/views/newInfoPage/newInfoList'),
        },
        {
            //我的
            path: '/index/myHomePageIndex',
            name: 'myHomePageIndex',
            meta: {
                title: '我的',
                IsPath: false
            },
            component: () => import('@/views/myHomePage/myHomePageIndex'),
        }]
    },
    //拍照上传
    {
        path: '/cameraIndex',
        name: 'cameraIndex',
        meta: {
            title: '拍照上传图片',
            IsPath: false
        },
        component: () => import('@/views/cameraPage/cameraIndex')
    },
    {
        path: '/uptate',
        name: 'uptate',
        meta: {
            title: '上传',
            IsPath: false
        },
        component: () => import('@/views/cameraPage/uptate'),
    },
    {
        path: '/setPage',
        name: 'setPage',
        meta: {
            title: '设置',
            IsPath: false
        },
        component: () => import('@/views/myHomePage/setPage'),
    }, 
    {
        path: '/queryIndex',
        name: 'queryIndex',
        meta: {
            title: '查找学校',
            IsPath: false
        },
        component: () => import('@/views/query/queryIndex'),
        children: [{
            //首页
            path: '/queryIndex/querySchoolLsit',
            name: 'querySchoolLsit',
            meta: {
                title: '找到的学校',
                IsPath: false
            },
            component: () => import('@/views/query/querySchoolLsit')
        }]
    },
    {
        path: '/infoDetail',
        name: 'infoDetail',
        meta: {
            title: '消息详情',
            IsPath: false
        },
        component: () => import('@/views/newInfoPage/infoDetail'),
    },
    {
        path: '/memberPage',
        name: 'memberPage',
        meta: {
            title: '我的会员',
            IsPath: false
        },
        component: () => import('@/views/myHomePage/myMember'),
    },
    {
        path: '/collectionPage',
        name: 'collectionPage',
        meta: {
            title: '我的收藏',
            IsPath: false
        },
        component: () => import('@/views/myHomePage/myCollection'),
    },
    {
        path: '/historyPage',
        name: 'historyPage',
        meta: {
            title: '浏览历史',
            IsPath: false
        },
        component: () => import('@/views/myHomePage/myHistory'),
    },
    {
        path: '/detailPage',
        name: 'detailPage',
        meta: {
            title: '学校详情',
            IsPath: false
        },
        component: () => import('@/views/index/detailPage'),
    },
    {
        path: '/myInfo',
        name: 'myInfo',
        meta: {
            title: '我的资料',
            IsPath: false
        },
        component: () => import('@/views/myHomePage/myInformation'),
        children: [{
            path: '/myInfo/editInfo',
            name: 'editInfo',
            meta: {
                title: '编辑资料',
                IsPath: false
            },
            component: () => import('@/views/myHomePage/editInfo'),
        }]
    },
    {
        path: '/mapPage',
        name: 'mapPage',
        meta: {
            title: '附近学校',
            IsPath: false
        },
        component: () => import('@/views/myHomePage/mapPage'),
    },
    {
        path: '/mapPage/addMarker',
        name: 'addMarker',
        meta: {
            title: '添加学校标记点',
            IsPath: false
        },
        component: () => import('@/views/myHomePage/addMarker'),
    }]
})
router.beforeEach((to, from, next) => {
    // if(to.name !== 'index'){
    //     if(store.state.user.token){
    // next();
    //     }else{
    //         console.log(1)
    //         next({ name: 'index' })
    //     }
    // }else{
    next()
    // }
})
export default router;