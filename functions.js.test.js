let fun = require('./functions.js');

describe('math tests', () => {
  test('2 + 30 should be 32', () => {
  // act/arrange///
   let result = fun.add(2,"30")
   expect(result).toBe(32)
  })
  test('5 * 5 should be 25', () => {
    let result = fun.mult("5",5)
    expect(result).toBe(25)
  })
})