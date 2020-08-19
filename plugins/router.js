export default ({ app, store, redirect }) => {

  app.router.afterEach((to, from, next) => {

    // if (token) {
    // 	// 判断是否有路由的查看权限
    // 	const userInfo = resolveToken(token)
    // 	let _per = userInfo.permissions
    // 	let _meta = to.meta
    // 	// 1、角色判断；2、权限判断
    // 	if (
    // 		(_meta.roles && !_meta.roles.includes(userInfo.roleName)) &&
    // 		(_per && !_per.includes(_meta.permission))
    // 	) {
    // 		message({
    // 			message: '您无权访问此页面',
    // 			type: 'error'
    // 		})
    // 		redirect('/')
    // 	}
    // }
  });
  app.router.beforeEach((to, from, next) => {
    // 设置条件
    // console.log(to, from)
    next();
  });
};