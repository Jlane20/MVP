const {expect, test} = require('@jest/globals')

var twoSum = function(array, target) {
  const hash = {};
  for(let i = 0; i < array.length; i++) {
      let needed = target - array[i]
      if(hash[needed]!= undefined){
          return [hash[needed], i]
      } else {
          hash[array[i]] = i
      }
  }
};

describe("two sum test", () => {
  test('testing two sum', () => {
expect(twoSum([3, 2, 4], 6)).toStrictEqual([1,2])
  })
})

// npm test -- testing.test.js