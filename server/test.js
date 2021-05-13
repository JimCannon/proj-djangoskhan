const twoSum = (nums, total) => {
	for (var i = 0; i < nums.length; i++) {
		for (var j = i + 1; j < i; j++) {
			if (nums[i] + nums[j] === total) {
				return [nums[j], nums[i]]
			}
		}
	}
}

const testNums = [20, 2, 9, 1, 10, 2, 6, 8, 5, 7, 4, -7, 12, 14, 15]

const res = twoSum(testNums, 18)
console.log(res)
