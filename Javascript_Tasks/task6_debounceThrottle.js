function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
function throttle(func, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;

      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const simulateEvent = (func) => {
  console.log("Starting simulation...");
  for (let i = 0; i < 10; i++) {
    func();
  }
  console.log("Simulation complete.");
};

const debouncedFunction = debounce(() => {
  console.log("Debounced function called");
}, 300);

simulateEvent(debouncedFunction);

const throttledFunction = throttle(() => {
  console.log("Throttled function called");
}, 500);

simulateEvent(throttledFunction);
