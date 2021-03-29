
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



const showMilk = async () => {
  // jika promise fulfilled
  try {
    const myMilk = await getMilk();
    console.log(`alhamdulillah ${myMilk}`)

  } // jika promise reject
  catch (rejectReason) {
    console.log(`innalillahi ${rejectReason}`)
  }

}
showMilk()