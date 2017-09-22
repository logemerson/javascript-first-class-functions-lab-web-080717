var countdown = (callback) => {
  window.setTimeout(callback, 2000)
}

//= = = = = =
var createMultiplier = (multiplierValue) => {
  //return a function that multiplies its param by
  //multiplierValue
  return function(num) {
    return num * multiplierValue
  }
}
var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


// = = = = = =
var multiplier = (a, b) => {
  return a * b
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
