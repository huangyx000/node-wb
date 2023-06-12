/**
 * error 404 路由
 */

const router = require('koa-router')()

// error 路由
router.get('/error', async (ctx, next) => {
    await ctx.render('error')
})

// 404 路由
router.get('*', async (ctx, next) => {
    await ctx.render('404')
})

module.exports = router