// reduce
// very usefull

const Myarray = [1, 2, 3,4,5,6];

const initialValue = 0;

// //call back with  function return
// const sumWithInitial = Myarray.reduce((accumulator, currentValue) => {
//     console.log(`acc: ${accumulator} and Current Value ${currentValue}`)
//   return accumulator + currentValue;
// },0);

// smart call back 
const sumWithInitial = Myarray.reduce((acc,cuValue)=>acc+cuValue,0)

// function

const sumWithInitial2 = Myarray.reduce(function(acc,currVal){
    return acc+currVal;
},0)

console.log(`Second with Call back means without function ${sumWithInitial}`);
console.log(`Second without Call back means function ${sumWithInitial2}`);

// accumulator + currVal
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// 15 + 6 = 21

const shoppingCart = [
    {itemName:"js course",
        price: 2999
    },
    {itemName:"py course",
        price: 999
    },
    {itemName:"mobile dev course",
        price: 5999
    },
    {itemName:"data scientist course",
        price: 12999
    },
]

const totalAmount = shoppingCart.reduce((acc,item)=> acc+ item.price,0 )

console.log(totalAmount);
