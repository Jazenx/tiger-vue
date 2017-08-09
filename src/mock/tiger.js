
const List = [[], [], []];
const count = 1000;

for (let i = 0; i < count; i++) {
  List[0].push(parseInt(Math.random() * 10000));
  List[1].push(parseInt(Math.random() * 10000));
  List[2].push(parseInt(Math.random() * 10000));
}

export default {
  getWeiboData: () => List
}