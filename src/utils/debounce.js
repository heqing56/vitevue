/**防抖  传入防抖函数和时间 */
function debounce(fn, delay = 300) {
  let timer = null;
  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, delay);
  };
}
export default debounce;
