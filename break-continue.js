// for (var i = 1; i <= 20; i++) {
//     console.log(i);
//     if (i == 11) {
//         break;
//     }
// }

// var i = 1;
// while (i <= 20) {
//     console.log(i);
//     i++;
// }


var array = [12, 65, 234, 56, 23, 578, 54, 56, 96];
// console.log(array);
for (var i = 0; i < array.length; i++) {
    if (array[i] > 60) {
        continue;
    }
    console.log(array[i]);
}