/*
Реалізувати рекурсивну функцію, яка зводить число в ступінь.

Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
Ступінь передається як другий аргумент у функціюpow (num, degree).
*/


const power = (num, dagree) => {
	if (dagree === 0) {
		return 1;
	} else {
		return num * power(num, dagree - 1);
	}
};

const num = 2;
const dagree = 3;
const result = power(num, dagree);
console.log(`${num}^${dagree} = ${result}`);