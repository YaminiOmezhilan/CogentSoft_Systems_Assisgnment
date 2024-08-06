Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

Promise.mySeries = function (promises) {
  let result = [];

  let chain = Promise.resolve();

  promises.forEach((promise) => {
    chain = chain.then(() =>
      Promise.resolve(promise).then((value) => {
        result.push(value);
      })
    );
  });

  return chain.then(() => result);
};

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("foo"), 100)
);

Promise.myAll([promise1, promise2, promise3]).then((values) => {
  console.log("Promise.myAll result:", values);
});

const promise4 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise5 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise6 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.mySeries([promise4(), promise5(), promise6()]).then((values) => {
  console.log("Promise.mySeries result:", values);
});
