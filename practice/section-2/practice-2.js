'use strict';

function countSameElements(collection) {
  let result = []
  convertToObjectCollection(collection).forEach(element => {
    let existedElementInResult = result.find(elementInResult => elementInResult.key === element.key)

    if (!!existedElementInResult) {
      existedElementInResult.count ++
    } else {
      result.push({key: element.key, count: 1})
    }
  })
  return result
}

function convertToObjectCollection(collection) {
  return collection.map(element => {
    let key = element
    let count = "1"

    if (element.includes("-")) {
      [key, count] = element.split("-")
    }

    return {key, count: parseInt(count)}
  })
}
