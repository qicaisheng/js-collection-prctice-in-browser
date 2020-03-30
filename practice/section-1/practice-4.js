'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.map(elementInCollectionA => elementInCollectionA.key)
    .filter(element => objectB.value.includes(element))
}
