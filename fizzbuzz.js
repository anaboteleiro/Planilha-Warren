// // se for divísivel por 3 = FIZZ
// // se for dívisivel por 5 = BUZZ
// // se for dívisivel por 3 e 5 = FIZZ BUZZ

// // }


// // for (let i = 1; i <= 20; i++) {
// //     if (i % 3 == 0 && i % 5 == 0) {
// //         console.log("FIZZ BUZZ")
// //     }
// //     else if (i % 3 === 0) {
// //         console.log("fizz");
// //     } else if (i % 5 === 0) {
// //         console.log('buzz')
// //     }
// //     else {
// //         console.log(i)
// //     }
// // }

// const fs = require('fs').promises
// const path = require('path')
// // const fizzbuzz = require('./fizzbuzz')
// main()
// async function main() {
//     const filepath = path.join(__dirname, 'input.txt')
//     const dados = await fs.readFile(filepath, 'utf8')
//     await fs.appendFile('output.txt', dados + '\n')
//     const max = Number(dados)
//     // fizzbuzz(max)

//     for (let i = 1; i <= max; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("FIZZ BUZZ")
//         }
//         else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log('buzz')
//         }
//         else {
//             console.log(i)
//         }
//     };

// }
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }