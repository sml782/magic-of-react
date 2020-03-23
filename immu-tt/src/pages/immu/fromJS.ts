import immutable from 'immutable';

const { fromJS, isIndexed } = immutable;

function f1(): void {
  var j: immutable.OrderedMap<string, number> = fromJS({ a: {b: [10, 20, 30]}, c: 40}, function (key, value, path) {
    console.log(key, value, path)
    return isIndexed(value) ? value.toList() : value.toOrderedMap()
  });
  console.log(`j: %o`, j);
  console.log(j.get('a')?.toString())
}

export default () => {
  f1();
};
