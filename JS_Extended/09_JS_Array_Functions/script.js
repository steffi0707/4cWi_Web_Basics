const items = [
    {name: 'Bike',      price: 100  },
    {name: 'TV',        price: 200  },
    {name: 'Album',     price: 10   },
    {name: 'Book',      price: 5    },
    {name: 'Phone',     price: 500  },
    {name: 'Computer',  price: 1000 },
    {name: 'Keyboard',  price: 25   }
]

//Herausfiltern
const hasinexpensiveItems = items.reduce((item, currentTotal) => {
    return item.price + currentTotal
})

console.log(total)

const hasinexpensiveItems2 = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)


const items2 = [1, 2, 3, 4, 5]


const includesTwo = items2.includes(2)
   
console.log(includesTwo)







