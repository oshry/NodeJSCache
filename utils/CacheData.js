class CacheData {
    constructor() {
        this.CacheMap = {}
    }

    //key is string. returns either whatever value was set for this key, or undefined if none was set.
    get(key){
        return this.CacheMap[key];
    }
    // set value for key
    set(key, value){
        if(this.CacheMap.length < this.CacheMap["maxItems"]){
            this.CacheMap[key] = value;
        }else{
            return
        }
    }
    //for testing purposes, returns all the cache elements as an object
    toObject(){
        return this.CacheMap
    }
}

export { CacheData }
