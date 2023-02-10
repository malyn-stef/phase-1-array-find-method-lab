

function superbowlWin(array) {
  let obj = array;
  let winningYear;
  for (let eachObj in obj) {
    let singleObj = obj[eachObj]
    if (find(singleObj) === true) {
      winningYear = singleObj["year"]
      break
    }
  } return winningYear;
}

function find(array) {
  if (array["result"] === "W") {
    return true
  } else {
    return false
  }
}

