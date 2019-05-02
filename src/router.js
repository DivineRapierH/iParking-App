import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store.js";
// import findLast from "lodash/findLast";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      meta: { auth: true },
      //name: "home",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
        // HomePage
        {
          path: "/",
          redirect: "/home"
        },
        {
          path: "/home",
          name: "initialpage",
          // meta: { title: "iParking" },
          component: () =>
            import(/* webpackChunkName: "homepage" */ "./views/InitialPage")
        },
        {
          path: "/main/reservedpage",
          name: "reservedpage",
          component: () =>
            import(/* webpackChunkName: "homepage" */ "./views/main/ReservedPage")
        },
        {
          path: "/main/parkedpage",
          name: "parkedpage",
          component: () =>
            import(/* webpackChunkName: "homepage" */ "./views/main/ParkedPage")
        },
        {
          path: "/main/chargedpage",
          name: "chargedpage",
          component: () =>
            import(/* webpackChunkName: "homepage" */ "./views/main/ChargedPage")
        }
      ]
    },
    {
      path: "/profile",
      meta: { auth: true },
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
        {
          path: "/profile/info",
          name: "info",
          component: () =>
            import(/* webpackChunkName: "profile" */ "./views/profile/InfoPage")
        },
        {
          path: "/profile/modifyinfo",
          name: "modifyinfo",
          component: () =>
            import(/* webpackChunkName: "profile" */ "./views/profile/ModifyInfo")
        },
        {
          path: "/profile/changepassword",
          name: "changepassword",
          component: () =>
            import(/* webpackChunkName: "profile" */ "./views/profile/ChangePassword")
        },
        {
          path: "/profile/reservations",
          name: "reservations",
          component: () =>
            import(/* webpackChunkName: "profile" */ "./views/profile/Reservations")
        },
        {
          path: "/profile/notifications",
          name: "notifications",
          component: () =>
            import(/* webpackChunkName: "profile" */ "./views/profile/Notifications")
        }
      ]
    },
    {
      path: "/user",
      hideInMenu: true,
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/user/Login")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/user/Register")
        }
      ]
    },
    {
      path: "*",
      name: "404",
      component: () => import("./views/404")
    }
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.matched.some(m => m.meta.auth)) {
    // 对路由进行验证
    if (store.getters.isLogin == true) {
      // 已经登陆
      console.log("正常登录");
      next(); // 正常跳转到你设置好的页面
    } else {
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      console.log("登录失败");
      next();
      // next({ path: "/user/login", query: { Rurl: to.fullPath } });
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
