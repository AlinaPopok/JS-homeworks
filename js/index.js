(function () {
  const myFunc = function () {
    let res = 0;
    return (num) => {
      res += num;
      return res;
    };
  };

  const result1 = myFunc();
  const result2 = myFunc();

  console.log(result1(3));
  console.log(result1(5));
  console.log(result1(20));
  console.log(result2(1));
})();
