'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let updatedCollection = countSameElements(collectionA)
  updatedCollection.forEach(elementInCollectionA => {
    if (objectB.value.includes(elementInCollectionA.key)) {
      elementInCollectionA.count = elementInCollectionA.count - Math.floor(elementInCollectionA.count / 3)
    }
  })
  return updatedCollection;
}


function countSameElements(collection) {
  let result = []
  convertToObjectCollection(collection).forEach(element => {
    let existedElementInResult = result.find(elementInResult => elementInResult.key === element.key)

    if (!!existedElementInResult) {
      existedElementInResult.count = existedElementInResult.count + element.count
    } else {
      result.push(element)
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
    } else if (element.includes(":")) {
      [key, count] = element.split(":")
    } else if (element.includes("[")) {
      [key, count] = element.split("[")
    }



    return {key, count: parseInt(count)}
  })
}
