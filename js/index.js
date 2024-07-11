(function () {
  const cache = new Map();
  const user1 = {
    name: "Foo",
    salary: 100,
  };
  const user2 = {
    name: "Foo2",
    salary: 200,
  };
  const user3 = {
    name: "Foo3",
    salary: 300,
  };

  const calcBonusSalary = (user) => user.salary + 100;

  const addCache = (func) => (user) => {
    if (cache.has(user)) {
      return cache.get(user);
    }
    if (cache.size === 10) {
      const itr = cache.keys();
      cache.delete(itr.next().value);
    }
    const res = func(user);
    cache.set(user, res);
    return res;
  };

  const getCache = addCache(calcBonusSalary);
})();
