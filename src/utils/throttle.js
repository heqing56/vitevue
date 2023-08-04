/**节流  传入节流函数和时间 */
function throttle(fn, delay = 1000) {
  let canrun = true;
  return () => {
    if (!canrun) return;
    canrun = false;
    setTimeout((...arg) => {
      fn.apply(this, arg);
      canrun = true;
    }, delay);
  };
}


export default throttle