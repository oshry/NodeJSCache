

import { CacheData } from './utils/CacheData.js'

let cacheFactory = new CacheData();

cacheFactory.set('maxItems', 5);
cacheFactory.set('blat', 'yeahh');
console.log(cacheFactory.toObject());
