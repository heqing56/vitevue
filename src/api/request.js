import axios from "axios";

// export const request = (config, contentType) => {
// 	// config.url = 'http://localhost:8080' + config.url;
// 	// config.methods = config.methods;
// 	if (!config.data) {
// 		config.data = {};
// 	}
// 	let promise = new Promise(function(resolve, reject) {
//         axios(config).then((res) => {
//             return resolve(res.data)
//         }).catch((err) => {
//             return reject(err)
//         });
// 	})
// 	return promise;
// };

export function request(data){
	return new Promise((resolve,reject)=>{
		tryFn(qingQiu,data,5).then(resolve).catch(reject)
	})
}

 function tryFn(fn, data,num) {
  return new Promise((resolve, reject) => {
    const run=()=> {
      fn(data)
        .then(resolve)
        .catch((err) => {
          if (num--) {
            setTimeout(() => {
              console.log('最后请求'+num+"次数");
              run();
            }, 1000);
          }else{
            reject(err)
          }
        });
    }
	  run()
  });
}

 function qingQiu(data) {
  return new Promise((resolve, reject) => {
    axios(data)
      .then((res) => {
        if (res.data.code !== 1) {
         reject('访问失败')
		     return
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}