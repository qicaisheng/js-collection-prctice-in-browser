'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter(elementInCollectionA => objectB.value.includes(elementInCollectionA));
}
