'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(elementInCollectionA => collectionB.includes(elementInCollectionA))
}
