'use strict';

function countSameElements(collection) {
  let result = []
  convertToObjectCollection(collection).forEach(element => {
    let existedElementInResult = result.find(elementInResult => elementInResult.name === element.name)

    if (!!existedElementInResult) {
      existedElementInResult.summary = existedElementInResult.summary + element.summary
    } else {
      result.push(element)
    }
  })
  return result
}

function convertToObjectCollection(collection) {
  return collection.map(element => {
    let name = element
    let summary = "1"

    if (element.includes("-")) {
      [name, summary] = element.split("-")
    } else if (element.includes(":")) {
      [name, summary] = element.split(":")
    } else if (element.includes("[")) {
      [name, summary] = element.split("[")
    }



    return {name, summary: parseInt(summary)}
  })
}
