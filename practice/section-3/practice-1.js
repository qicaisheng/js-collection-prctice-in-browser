'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(elementInCollectionA => {
    if (objectB.value.includes(elementInCollectionA.key)) {
      elementInCollectionA.count--
    }
  })
  return collectionA;
}
