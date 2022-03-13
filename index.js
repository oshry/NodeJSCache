

import { CacheData } from './utils/CacheData.js'

let cacheFactory = new CacheData();


cacheFactory.set('blat0', 'yeahh');
cacheFactory.set('blat1', 'yeahh');
cacheFactory.get('blat0');
cacheFactory.set('blat2', 'yeahh');
cacheFactory.set('blat3', 'yeahh');
console.log(cacheFactory.toObject());
