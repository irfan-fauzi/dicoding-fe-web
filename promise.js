
const state = {
  isCoffeeReady: true,
  stockCoffee: {
    arabica: 203,
    robusta: 39,
    liberica: 29
  }
}

// siapkan biji kopi
const getSeeds = (type, miligram) => {
  return new Promise((resolve, reject) => {
    if (state.stockCoffee[type] >= miligram) {

      state.stockCoffee[type] -= miligram;
      resolve('Biji kopi didapatkan')

    } else {

      reject('Maaf stok kopi habis')

    }
  });
}

// buat kopinya
const makeCoffee = (biji) => {
  return new Promise((resolve, reject) => {
    if (state.isCoffeeReady) {
      resolve("kopi berhasil dibuat")
    } else {
      reject('mesin kopi rusak, cari tempat lain.. goblok')
    }
  });
}

// sajikan di meja konsumen
const servToConsumen = (coffee) => {
  return new Promise(resolve => {
    resolve('pesanan sudah selesai, kopi siap dimakan')
  });
}


const sajikanKopi = (type, miligram) => {
  getSeeds(type, miligram)
    .then(makeCoffee)
    .then(servToConsumen)
    .then(res => console.log(res))
    .catch(rejectReason => console.log(rejectReason));
}

sajikanKopi("arabica", 80)