import axios from 'axios';

const List = [];

axios.get('http://echarts.baidu.com/gallery/data/asset/data/weibo.json')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

export default {
  getWeiboData: () => List
}