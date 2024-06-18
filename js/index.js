(function () {
  const arr = [1, 2, 3, 4, 5, 6];
  const itr = (itrObject) => {
    const arr = Array.from(itrObject);
    let currentValue = 0;
    let done = false;

    return {
      next() {
        if (currentValue >= arr.length) {
          done = true;
        }

        const result = {
          value: arr[currentValue],
          done,
        };
        currentValue += 1;
        return result;
      },
    };
  };
  const itr2 = itr(arr);
})();
