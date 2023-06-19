const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    msg: '你好呀',
    isMe: true,
    blogList: [
      {
        id: 1,
        title: '博客 -- 1'
      },
      {
        id: 2,
        title: '博客 -- 2'
      },
      {
        id: 3,
        title: '博客 -- 3'
      }
    ]
  })
})

router.get('/json', async (ctx, next) => {
  const session = ctx.session;
  if (session.viewNum == null) session.viewNum = 0;
  session.viewNum++;
  ctx.body = {
    title: 'koa2 json',
    viewNum: session.viewNum
  }
})

router.get('/profile/:username', async (ctx, next) => {
  const { username } = ctx.params;
  ctx.body = {
    title: 'this is profile page',
    username
  }
})

module.exports = router
