const {expect, test} = require('@jest/globals')

var twoSum = function(nums, target) {
  const hash = {};
  for(let i = 0; i < nums.length; i++) {
      let needed = target - nums[i]
      if(hash[needed]!= undefined){
          return [hash[needed], i]
      } else {
          hash[nums[i]] = i
      }
  }
};

describe("two sum test", () => {
  test('testing two sum', () => {
expect(twoSum([3, 2, 4], 6)).toStrictEqual([1,2])
  })
})

// npm test -- testing.test.js