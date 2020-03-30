'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(elementInCollectionA => collectionB.flat().includes(elementInCollectionA))
}
