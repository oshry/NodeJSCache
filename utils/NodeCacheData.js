import NodeCache from 'node-cache';

class NodeCacheData {
    constructor() {
        // stdTTL is the default time-to-live for each cache entry
        this.myCache = new NodeCache({ stdTTL: 600 });
    }

    //key is string. returns either whatever value was set for this key, or undefined if none was set.
    get(key){
        return this.myCache.get(key);
    }
    // set value for key
    set(key, data, ttl){
        return this.myCache.set(key, data, ttl);
    }
    //for testing purposes, returns all the cache elements as an object
    toObject(){
        return this.myCache.keys();
    }
}

export { NodeCacheData }
