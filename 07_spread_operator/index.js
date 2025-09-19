const numbersFirst = [0, 1, 2];
const numbersSecond = [3, 4, 5];
const numbersCombined = [...numbersFirst, ...numbersSecond];

console.log('numbersFirst:');
for(n of numbersFirst) {
    console.log(n);
}

console.log('numbersSecond:');
for(n of numbersSecond) {
    console.log(n);
}

console.log('numbersFirst and numbersSecond combined using the spread operator:');
console.log(numbersCombined);

const car = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'Red'
}

const carMore = {
    type: 'car',
    year: 1987,
    color: 'yellow'
}

const fullCar = {...car, ...carMore};

console.log('car:');
console.log(car);

console.log('carMore:');
console.log(carMore);

console.log('fullCar:');
console.log(fullCar);

console.log('Note that the properties that did not match were added and the property that match was overwritten.');