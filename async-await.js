
// Promise dalam variable
const getCoffee = new Promise((resolve, reject) => {
  // keadaaan 
  const coffeeBeen = 100;
  if (coffeeBeen > 10) {
    resolve(`stok kopi aman..`);
  } else {
    reject(`stok kopi hampir habis`);
  }
})

// bisa langsng eksekusi promisenya
getCoffee.then(res => console.log(res))

// Promise dalam bentuk function
const getMilk = () => {
  return new Promise((resolve, reject) => {
    const stokMilk = 20;
    if (stokMilk > 1) {
      resolve('stok susu aman')
    } else {
      reject('stok susu habis')
    }
  })
}

// harus bungkus dalam function
// const showMilk = () => {
//   getMilk().then(res => console.log(res))
// }
// showMilk()

// tetapi bisa juga pakai cara async-await

const showMilk = async () => {
  const myMilk = await getMilk();
  console.log(myMilk)
}

showMilk()

/*
Keyword async digunakan untuk memberitahu JavaScript untuk menjalankan fungsi makeCoffee() secara asynchronous. Lalu keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve.


“Walaupun await menghentikan proses pembacaan kode selanjutnya pada fungsi makeCoffee. Tapi ini tidak akan mengganggu proses runtime sesungguhnya pada JavaScript (global). Karena fungsi makeCoffee berjalan secara asynchronous. Kita tidak dapat menggunakan await tanpa membuat function dalam scope-nya berjalan secara asynchronous.”
*/