class CacheData {
    maxItems;
    constructor() {
        this.CacheMap = {}
        CacheData.maxItems = 3;
    }

    //key is string. returns either whatever value was set for this key, or undefined if none was set.
    get(key){
        let response;
        if(this.CacheMap[key]){
            let temp = this.CacheMap[key];
            delete this.CacheMap[key]
            this.CacheMap[key] = temp;
            response = this.CacheMap[key];
        }else{
            response =  'undefined';
        }
        return response
    }
    // set value for key
    set(key, value){
        if(Object.keys(this.CacheMap).length < CacheData.maxItems){
            this.CacheMap[key] = value;
        }else{
            let keys = Reflect.ownKeys(this.CacheMap);
            if (keys.length) delete this.CacheMap[keys[0]];
            this.CacheMap[key] = value;
        }
    }
    //for testing purposes, returns all the cache elements as an object
    toObject(){
        return this.CacheMap
    }
}

export { CacheData }
