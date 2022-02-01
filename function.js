function quantityOfSingara(money) {
    console.log('Total Taka: ', money);
    var singaraPrice = 10;
    var singaraQuantity = money / singaraPrice;
    return singaraQuantity;
}

var taka = 240;
var singara = quantityOfSingara(taka);
console.log('total singara: ', singara);