var student = {
    id: 'CE16009',
    name: 'Rahabul',
    blood_grp: 'A+',
    mark: 23,
    phone: 347698
};

var mobile = {
    color: 'green',
    price: 42000,
    name: 'samsung',
    ram: '8GB',
    rom: '256GB'
};

// console.log(student);
// console.log(student.name);

// get property from an object
console.log(mobile);
console.log(mobile.name);
var mblProperty = student.name;
console.log(mblProperty);

//set a object property value
var priceProperty = "price";

mobile.price = 25000;
console.log(mobile.price);

mobile["price"] = 18500;
console.log(mobile.price);

mobile[priceProperty] = 95000;
console.log(mobile.price);

console.log(mobile);


var namePeople = "name";
mobile[namePeople] = "IPhone";
mobile["color"] = "Black";
mobile.ram = "16GB";
console.log(mobile);