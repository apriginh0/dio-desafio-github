const maca = {
    value:2,
}
const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){ 
    return arr.map(function(item){
       return item * this.value;
    }, thisArg)
}
const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca)); // thisArg = maca / ele vai procurar

console.log('this -> laranja', mapComThis(nums, laranja)); // o this.value dentro de maca