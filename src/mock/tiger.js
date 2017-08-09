import axios from 'axios';




// const List = this.getData.map(serieData => {
//   const px = serieData[0] / 1000;
//   const py = serieData[1] / 1000;
//   const res = [
//     [px, py]
//   ];

//   for (let i = 2; i < serieData.length; i += 2) {
//     const dx = serieData[i] / 1000;
//     const dy = serieData[i + 1] / 1000;
//     const x = px + dx;
//     const y = py + dy;
//     res.push([x.toFixed(2), y.toFixed(2), 1]);
//     this.px = x;
//     this.py = y;
//   }
//   return res;
// });
export function getData() {
  let dataJson = [];
  axios.get('/static/weibo.json')
    .then(response =>
      response.data)
    .catch(error => {
      console.log(error);
    });
  console.log(dataJson);
}

getData();

export default {
  getWeiboData: () => null
}
