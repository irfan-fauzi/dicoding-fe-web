// m
// const getFood = () => {
//   let food = "";
//   console.log("sedang menyiapkan makanan");

//   // kalau kita tulis gini, setTimeout ga pernah dijalankan
//   setTimeout(() => {
//     food = "makanan sudah jadi ..!"
//   }, 0)
//   return food;
// }

//console.log(getFood())

// const getFood = () => {
//   let food = "";

// }

const getFood = (callback) => {
  let food = null;
  console.log("sedang membuat makanan, please wait..")
  setTimeout(() => {
    food = "makanan sudah jadi..";
    callback(food)
  }, 3000)
}

const yourFood = (param) => console.log(param);

getFood(yourFood)