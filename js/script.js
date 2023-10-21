/*
Реалізувати рекурсивну функцію, яка зводить число в ступінь.

Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
Ступінь передається як другий аргумент у функціюpow (num, degree).
*/


const power = (num, degree) => {
	if (degree === 0) {
		return 1;
	} else {
		return num * power(num, degree - 1);
	}
};

const num = 2;
const degree = 4;
const result = power(num, degree);
console.log(`${num}^${degree} = ${result}`);