const user = {
  name: "Alina",
};
sayHi = function () {
  return `Hi ${this.name}`;
};

const myBind = function (func, context) {
  context.func = func;
  return function () {
    return context.func();
  };
};

const myHi = myBind(sayHi, user);
const myHi2 = myBind(sayHi, { name: "Anton" });

console.log(myHi());
console.log(myHi2());
