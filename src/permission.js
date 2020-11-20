// import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

// NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const whiteList = ['/home','/publish','/achievement','/advanced','/emerging','/innovate','/service','/exhibition'] // no redirect whitelist

// router.beforeEach(async (to, from, next) => {
//   // start progress bar
//   NProgress.start()

//   // set page title
//   document.title = getPageTitle(to.meta.title)

//   // determine whether the user has logged in
//   if (JSON.parse(localStorage.getItem('Token'))) {
//     var hasToken = JSON.parse(localStorage.getItem('Token')  )  
//     if (hasToken&&localStorage.getItem('useProMoney')&&localStorage.getItem('useProMoney')>=1000) {
//       if (to.path === '/home') {
//         // if is logged in, redirect to the home page
//         // next({ path: '/' })
//         NProgress.done()
//       }
//       // next()
//     } 
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       // in the free login whitelist, go directly
//       // next()
//     } else {
//       // other pages that do not have permission to access are redirected to the login page.
//       // next()
//       NProgress.done()
//     }
//   }


// })

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })
