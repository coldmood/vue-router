import Vue from 'vue';
import Router from 'vue-router';
import Admin from '../admin';
// import Index from '../views/index.vue';
import Index from '../views/mine/index';
import Mine from '../views/mine/mine';

import adminIncome from '../views/income/adminIncome';
import manngerIncome from '../views/income/manngerIncome';
import Page1 from '../views/income/page1';
import Page2 from '../views/income/page2';

Vue.use(Router)
//component 组件的意思

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',//默认路由，进入页面就显示的内容
      name: 'admin',
      component: Admin,
      children:[
        {
          path:'/adminIncome',
          name:'adminIncome',
          alias:'管理员收入',
          component:adminIncome
        },
        {
          path:'/manngerIncome',
          name:'manngerIncome',
          alias:'经理收入',
          component:manngerIncome,
          children:[
            {
              path:'/adminIncome/page1',
              name:'page1',
              alias:'page1页面',
              component:Page1
            },
            {
              path:'/adminIncome/page2',
              name:'page2',
              alias:'page2页面',
              component:Page2
            }
          ]
        }
      ]
      // 嵌套路由
      // children:[
      //   {path:'/index',alias:'首页',name:'index',component:Index},
      //   {path:'/mine',alias:'个人中心',name:'mine',component:Mine}
      // ]
    }
  ]
})
//设置默认显示的内容
router.replace('/adminIncome')
//就是将此路由对象暴露出去
export default router;

