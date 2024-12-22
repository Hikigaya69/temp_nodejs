// const fs = require('fs')

// fs.readFile('./Content/Second.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     const first = result
//     fs.readFile("./Content/SubFolder/First.txt", 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const Second = result;

//         fs.writeFile('./Content/res-asyn.txt', `${first}${Second}`,
//             (err, result) => {
//                 if (err) {
//                     console.log(err)
//                     return
//                 }

//                 console.log(result)
            
//             }


//         )


//     })

// })
// fs.writeFile
//method retuns the system uptime in seconds


const _ = require('lodash')

const items=[1,2,[3,[4,[5]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)
