import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/Frame/Frame'
import HelloWorld from '@/components/HelloWorld'
import TestTable from '@/components/TestTable'
import IFrame from '@/components/IFrame/Iframe'
import { getIFramePath, getIFrameUrl } from '@/utils/iframe'
import store from '@/store'

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: '首页',
    component: Frame,
    children: [
      {
        path: 'TestTable',
        name: 'TestTable',
        component: TestTable,
        meta: {
          icon: 'fa fa-home fa-lg',
          index: 0
        }
      },
      {
        path: 'HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
          icon: 'fa fa-home fa-lg',
          index: 0
        }
      },
      {
        path: 'baidu.com',
        name: 'baidu',
        component: IFrame,
        meta: {
          icon: 'fa fa-home fa-lg',
          index: 0
        }
      },
    ]
  }
];

const MenuData = [
  {
    "name":"系统管理",
    "url":null,
    "perms":null,
    "type":0,
    "icon":"el-icon-setting",
    "level":0,
    "children":[
      {
        "name":"table",
        "url":'TestTable',
        "perms":"",
        "type":2,
        "icon":null,
        "level":1,
        "children":[]
      },
      {
        "name":"新增",
        "url":'HelloWorld',
        "perms":"",
        "type":2,
        "icon":null,
        "level":1,
        "children":[]
      },
      {
        "name":"frameTest",
        "url":'http://baidu.com',
        "perms":"",
        "type":2,
        "icon":null,
        "level":1,
        "children":[]
      },
    ]
  }
];

store.commit('setNavTree',MenuData);

addIFrameUrl(MenuData);

const router = new Router({routes: routes});

router.beforeEach((to, from, next) => {
  handleIFrameUrl(to.path);
  next();
});

/**
 * 处理IFrame嵌套页面
 */
function handleIFrameUrl(path) {
  // 嵌套页面，保存iframeUrl到store，供IFrame组件读取展示
  let url = path;
  let length = store.state.iframe.iframeUrls.length;
  for(let i=0; i<length; i++) {
    let iframe = store.state.iframe.iframeUrls[i];
    if(path != null && path.endsWith(iframe.path)) {
      url = iframe.url;
      store.commit('setIFrameUrl', url);
      break
    }
  }
}

function addIFrameUrl(menuList){
  let temp = [];
  for (let i = 0; i < menuList.length; i++) {
    if (menuList[i].children && menuList[i].children.length >= 1) {
      temp = temp.concat(menuList[i].children)
    } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
      //将menuList中的 path 和 路由中的 url 绑定，这样打开路由的时候就可以找到对应的url
      let path = getIFramePath(menuList[i].url);
      if (path) {
        // 存储嵌套页面路由路径和访问URL
        let url = getIFrameUrl(menuList[i].url);
        let iFrameUrl = {'path': path, 'url': url};
        store.commit('addIFrameUrl', iFrameUrl)
      }
    }
    if (temp.length >= 1) {
      addIFrameUrl(temp)
    }
  }
}

export default router

