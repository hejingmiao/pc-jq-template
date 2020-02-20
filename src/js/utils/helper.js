import { loadScript } from 'utils/utils.js'

// 移动端console
if (process.env.NODE_ENV === 'development' || /debug/ig.test(location.hash)) {
  loadScript('//cdn.jsdelivr.net/npm/eruda', () => {
    window.eruda.init()
  })
}

if (process.env.NODE_ENV === 'production') {
  // 统计
  loadScript('//static.ws.126.net/163/frontend/libs/antanalysis.min.js')
  loadScript('//static.ws.126.net/163/frontend/antnest/' + process.env.ANT_PROJECT_ID + '.js')

  loadScript('//analytics.163.com/ntes.js', () => {
    setTimeout(() => {
      _ntes_nacc = process.env.PROJECT_CHANNEL;
      neteaseTracker()
    }, 20)
  })
  // 错误监控
  // loadScript('//static.ws.126.net/163/frontend/libs/raven-vue-3.26.4.min.js', () => {
  //   window.Raven.config('https://76981b9dcb584c2990e70dc596eeac3c@sentry.music.163.com/13', {
  //     tags: {
  //       project: process.env.PROJECT_NAME
  //     }
  //   }).install()
  // })
}
