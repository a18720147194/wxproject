
const promisic = function(func){
    return function(params={}){
        return new Promise((resolve, reject)=>{
            const args = Object.assign(params, {
                success:(res)=>{
                    // console.log(res)
                    // console.log(2222)
                    resolve(res)
                },
                fail:(error)=>{
                    reject(error)
                }
            })
            func(args)
        })
    }
}

export {promisic}