class CacheData {
    static maxItems = 3;
    constructor() {
        this.CacheMap = {}
    }

    //key is string. returns either whatever value was set for this key, or undefined if none was set.
    get(key){
        if(this.CacheMap[key]){
            let temp = this.CacheMap[key];
            delete this.CacheMap[key]
            this.CacheMap[key] = temp;
        }else{
            return 'error';
        }
        return this.CacheMap[key];
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
        console.log("this.CacheMap.length");
        console.log(Object.keys(this.CacheMap).length);
        return this.CacheMap
    }
}

export { CacheData }
