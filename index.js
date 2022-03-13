

import { CacheData } from './utils/CacheData.js'

let cacheFactory = new CacheData();


cacheFactory.set('blat0', 'yeahh');
cacheFactory.set('blat1', 'yeahh');
cacheFactory.set('blat2', 'yeahh');
cacheFactory.set('blat3', 'yeahh');
cacheFactory.set('blat4', 'yeahh');
cacheFactory.get('blat');
console.log(cacheFactory.toObject());
