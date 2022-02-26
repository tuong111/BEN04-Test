const readline = require('readline-sync')

// Bai tap 1
let books = [{
    bcode : '1',
    bname : 'One',
    bcost : 1000
},
{
    bcode : '2',
    bname : 'Two',
    bcost : 2000
},
{
    bcode : '3',
    bname : 'Three',
    bcost : 3000
},
{
    bcode : '4',
    bname : 'Four',
    bcost : 4000
},
{
    bcode : '5',
    bname : 'Five',
    bcost : 5000
}
]
// const MinShop = () => {
//     let choose = readline.question("Choose question : (a,b,c,d)")
//     switch (choose) {
//         case 'a':
//             let a = readline.question("Nhap tham so a")
//             let b = readline.question("Nhap tham so b")
//             MinShop1_a(a,b)
//             break;
//         case 'b' : 
//             let a = readline.question("Nhap tu khoa")
//             MinShop1_b(a)
//             break
//         case 'c':
//             MinShop1_c()
//             break
//         case 'd':
//             console.log(MinShop1_d())
//             break;
//         default:
//             break;
//     }
// }


const MinShop1_a = (a,b) => {
    let result = []
    for (let i = 0; i < books.length; i++) {
        if (books[i].bcost >= a && books[i].bcost <= b){
            result.push(books[i])
        }
    }
    return result
}

const MinShop1_b = (name) => {
    let search = name.toLowerCase().trim()
    let result = []
    for (let i = 0; i < books.length; i++) {
       if (books[i].bname.toLowerCase().includes(search) == true) {
           result.push(books[i])
       } 
    }
    return result
}

const MinShop1_c = () => {
    books.sort(
        (name1,name2) => {
            let a = name1.bname.toLowerCase()
            let b = name2.bname.toLowerCase()
            return name1 === name2 ? 0 : a> b ? 1:-1
        }
    )
    console.log(result)
}

const MinShop1_d = () => {
    let a = books[0].bcost
    let result = ''
    for (let i = 0; i < books.length; i++) {
        if (books[i].bcost >= a) {
            result = books[i].bcost 
        } 
    }
    return result
}


let orders = [
    { 
        oCode : '1', 
        customername : 'Tom',
        address : {
            province : 'HCM',
            district : 'Q3',
            homeAddress : '123'
        },
        orderLists : ['1','2']
    },
    { 
        oCode : '2', 
        customername : 'Joe',
        address : {
            province : 'Binh Duong',
            district : 'Di An',
            homeAddress : '456'
        },
        orderLists : ['3','5','1']
    },
    { 
        oCode : '3', 
        customername : 'Lisa',
        address : {
            province : 'Ha Noi',
            district : 'Cau Giay',
            homeAddress : '789'
        },
        orderLists : ['3','2','4','1']
    },
]

const MinShop2_a = (x) => {
    let result = []
    for (let i = 0; i < orders.length; i++){
        if (orders[i].orderLists.length >= x) {
            result.push(orders[i])
        }
    }
    return result
}

const MinShop2_b = () => {
    let result = 0
    for (let i = 0; i < orders.length; i++){
        result += orders[i].orderLists.length
    }
    console.log(result)
    return result
}

const MinShop2_c = () => {
    let totalCost = 0
    for (let i = 0; i <orders.length; i++) {
        totalCost =+ Tinhtungdonhang(orders[i])
    }
    console.log(totalCost)
    return totalCost    
}


const Tinhtungdonhang = (donhang) => {
    let booksID = donhang.orderLists
    let doanhthu1don = 0
    for (let i = 0; i < booksID.length; i++){
        doanhthu1don =doanhthu1don + LaytienbangID(booksID[i])
    }
    return doanhthu1don
}

const LaytienbangID = (id) => {
    let cost = 0
    for (let i = 0; i <books.length; i++) {
        if (books[i].bcode === id) {
            cost = books[i].bcost
        }
    }
    return cost
}

MinShop2_c()