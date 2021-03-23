import { fromJS } from 'immutable';

const data = {
  val: 1,
  desc: {
    text: 'a',
  },
};

// 这里使用 fromJS 将 data 转变为 immutable 内部对象
const a = fromJS(data);
console.log(a);
// 之后我们就可以调用内部对象上的方法如 get getIn set setIn 等，来操作原对象上的值
const b = a.set('val', 2)
console.log(a.get('val')) // 1
console.log(b.get('val')) // 2

const pathToText = ['desc', 'text']
const c = a.setIn([...pathToText], 'c')
console.log(a.getIn([...pathToText])) // 'a'
console.log(c.getIn([...pathToText])) // 'c'

a.map((value: any, key: string, collection: any) => {
  console.log({ value, key, collection });
});

console.log(a.toJS());


const aa = 11;
const bb = fromJS(a);
console.log(aa, bb)
