'use strict';

function countSameElements(collection) {
  let result = []
  collection.forEach(element => {
    let existedElementInResult = result.find(elementInResult => elementInResult.key === element)

    if (!!existedElementInResult) {
      existedElementInResult.count ++
    } else {
      result.push({key: element, count: 1})
    }
  })
  return result
}
