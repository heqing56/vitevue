
/**防抖  传入防抖函数和时间 */
function debounce(fn, delay){
	let timer = null;
	return function(){
		clearTimeout(timer);
		timer = setTimeout(()=> {
			fn();
		}, delay)
	}
}
export default debounce
