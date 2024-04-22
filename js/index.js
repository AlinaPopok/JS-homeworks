const user = {
  name: "Alina",
};
const sayHi = function (value1) {
  return `Hi ${value1} ${this.name}!`;
};
const myApply = function (fn, context, args) {
  if (!Array.isArray(args)) {
    return "here should be an array";
  }
  context.func = fn;
  return context.func(...args);
};

console.log(myApply(sayHi, user, ["Ms."]));
console.log(myApply(sayHi, { name: "Anton" }, ["Mr."]));
