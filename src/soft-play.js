// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdults, numChildren) {
  const childEntering = numChildren >= 1
  const childMustEnterWithAdult = numAdults >= 1
  const multipleAdultsEntering = numAdults >= numChildren

  if ((childEntering, childMustEnterWithAdult, multipleAdultsEntering)) {
    adults += numAdults
    children += numChildren
    totalAdults += numAdults
    totalChildren += numChildren
    return true
  }
  return false
}

function leave(numAdults, numChildren) {
  const childMustLeaveWithAdult = numAdults >= 1
  const moreAdultsThanChildren = adults > children
  const multipleLeaving = numAdults === numChildren

  if ((childMustLeaveWithAdult, moreAdultsThanChildren || multipleLeaving)) {
    adults -= numAdults
    children -= numChildren
    return true
  }
  return false
}

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

let totalAdults = adults
let totalChildren = children
function total() {
  return {
    totalAdults: totalAdults,
    totalChildren: totalChildren
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
