'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(elementInCollectionA => {
    if (objectB.value.includes(elementInCollectionA.key)) {
      elementInCollectionA.count = elementInCollectionA.count - Math.floor(elementInCollectionA.count / 3)
    }
  })
  return collectionA;
}
