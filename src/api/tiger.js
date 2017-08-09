import fetch from 'utils/fetch';

export function getWeiboData() {
  return fetch({
    // url: 'http://echarts.baidu.com/gallery/data/asset/data/weibo.json',
    url: 'tiger/getWeiboData',
    method: 'get'
  })
}