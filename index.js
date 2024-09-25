// function dummy(){
//     let count=0;
//     document.getElementById("clickme").addEventListener("click", function(){
//     console.log('hi', ++count)
// })
// }

// dummy()

// function a()
// {
//     let count = 0
//     return function incre(){
//         console.log(count)
//         return count++
//     }
// }
// let counter = a()
// console.log(counter())
// console.log(counter())
// window.console.log(counter())

// function multiplier(num){
//     return function product(x){
//         return x*num
//     }
// }

// const tripple = multiplier(3)
// console.log(tripple(10))


// function memoize(passedFn){
//     const cache = {}
//     return function(x){
//         if(cache[x]){
//             console.log(cache[x],"returned from cache")
//             return cache[x]
//         }
//         cache[x] = passedFn(x)
//         console.log(cache[x],"returned after calculation")
//         return cache[x]
//     }
// }

// const factorial = memoize(function (n){
//     if(n==0) return 1;
//     return n * factorial(n-1)
// })

// console.log(factorial(5))
// console.log(factorial(6))

// const factorial = function(x){
//         if(x==0) return 1
//         console.log("called")
//         return x * factorial(x-1)
//     }

// console.log(factorial(5))
// console.log(factorial(5))


// console.log('Start');

// const promise = new Promise((resolve, reject) => {
//   console.log('Promise Executor');
//   resolve('Resolved Value');
// });

// promise.then((value) => {
//   console.log(value);
// });

// setTimeout(() => {
//   console.log('Timeout Callback');
// }, 0);

// console.log('End');

// const users = [
//     { firstname:'Jerina', lastname: 'First', age:26},
//     { firstname:'Jerina', lastname: 'Second', age:31},
//     { firstname:'Jerina', lastname: 'Third', age:24},
// ]

// console.log(users.reduce((acc, curr)=>{
//     if(curr.age<30) acc.push(curr.lastname)
//     return acc
// },[]))


// function b(){
//     const s = "jerina"
//     obj = {
//     a: 4,
//     x: () => {
//         console.log(this)
//         }
//     }
//     obj.x()
//     return obj
// }

// b()

// function sum(a){
//     return function add(b){
//         if(b){
//             return sum(a+b)
//         }
//         else{
//             return a
//         }
//     }
// }

// let sum = a => b => b ? sum(a+b) : a


// console.log(sum(1)(2)())

// let name2 = {
//     firstname: 'Jerina',
//     lastname: 'Thomas'
// }

// let name1 = {
//     firstname: 'Sebin',
//     lastname: 'Francis'
// }

// let printName = function (hometown){
//     console.log(this.firstname + " " + this.lastname + " " + hometown)
// }

// printName.call(name2, "Calicut")
// printName.call(name1)

// printName.apply(name1, ["Calicut"])

function add(x,y){
    console.log(x+y)
}

Function.prototype.myBind = function(...args1){
    let fn = this
    let params = args1.slice(1)
    return function(...args2){
        fn.apply(args1[0], [...params, ...args2])
    }
}

let hi = add.bind(this, 2)
hi(3)

let hi2 = add.myBind(this, 2)
hi2(3)


// let user  = {
//     name: 'Jerina',
//     address: {
//         personal: {
//             city: 'Calicut',
//             area: 'Parambil Bazar'
//         },
//         office: {
//             city: 'Trivandrum',
//             area: 'Techno park'
//         }
//     },
//     phone: '9446347370'
// }

// let temp = {}
// function magic(obj, key){
//     let keys = Object.keys(obj)
//     for(let i=0; i<keys.length; i++){
//         if(typeof(obj[keys[i]]) === 'object'){
//             magic(obj[keys[i]], key+'_'+keys[i]) 
//         }
//         else{
//             temp[key+'_'+keys[i]] = obj[keys[i]]
//         }
//     }
//     return temp
// }

// console.log(magic(user, 'user'))

let count = 0
let timer
function getData(){
    console.log("api called", ++count)
}


const debounce = function(fn, d){
    return function(){
        let context = this
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(context)
        }, d)
    }
}

// const betterFunction = debounce(getData, 1000)


const throttle = function(fn, limit){
    console.log("hi")
    let flag = true;
    return function(){
        let context = this
        if(flag){
            fn.apply(context)
            flag = false
            setTimeout(()=>{
                flag = true
            }, limit) 
        }
       
    }
}

const betterFunction = throttle(getData, 1000)

window.addEventListener('resize', betterFunction)

function dummy(){
    console.log("dummy called")
    console.log(React)
}

Promise.all([get1(), get2()])
.finally(()=>{
    console.log("finally of promise.all")
})
// .then(()=>{
//     console.log("then of promise.all")
// })
// .catch(e=>{
//     console.log("catch of promise.all -----", e)
// })

function get1(){
    return new Promise((resolve, reject)=>{
        const p1 = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject("api1 call failed")
            }, 3000)
        })
        p1.then(()=>{
            console.log("api1 then")
            resolve("get1 resolved")
        }).catch(error=>{
            console.log("api1 catch ------", error)
            reject("get1 rejected")
        })
    })
}

function get2(){
    return new Promise((resolve, reject)=>{
        const p2 = new Promise((reject)=>{
            setTimeout(()=>{
                resolve("api2 call success")
            }, 5000)
        })
        p2.then(()=>{
            console.log("api2 then")
            resolve("get2 resolved")
        }).catch(error=>{
            console.log("api2 catch", error)
            reject("get2 rejected")
        })
    })
}