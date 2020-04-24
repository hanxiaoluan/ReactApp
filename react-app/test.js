/* console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end'); */
var name = 'The Window';

var object = {
  name: 'My Object',

  getNameFunc: function () {
    return function () {
      return this.name;
    };
  },
};
/* var name = 'The Window';

var object = {
  name: 'My Object',

  getNameFunc: function () {
    var that = this;
    return function () {
      return that.name;
    };
  },
}; */

console.log(object.getNameFunc()());
{
  /* <SupComponent text="栾晗霄大好人">
  <SubComponent {...this.props}></SubComponent>
</SupComponent>; */
}
