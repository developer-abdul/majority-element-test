// Example: [1,3,1,1,2,2,2,3,3,3]
// Result Output: 3

// Write a javascript function that gets the majority element in an array

const nums = [1, 3, 1, 1, 2, 2, 2, 3, 3, 3];

const majorityElement = (numArr) => {
	let count = 0;
	let candidate;
	for (let num of numArr) {
		if (count === 0) {
			candidate = num;
		}
		count += num === candidate ? 1 : -1;
	}
	return candidate;
};

const majorityElementMethod2 = (numArr) => {
	let count = 0;
	let candidate;

	let majorityElementCount = new Map();

	numArr.forEach((num) => {
		majorityElementCount.set(num, (majorityElementCount.get(num) || 0) + 1);
	});

	majorityElementCount.forEach((value, key) => {
		if (value > count) {
			count = value;
			candidate = key;
		}
	});

	return candidate;
};

let result = majorityElement(nums);
console.log(result);

let result2 = majorityElementMethod2(nums);
console.log(result2);