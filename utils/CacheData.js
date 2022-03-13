class CacheData {
    static maxItems = 5;
    constructor() {
        this.CacheMap = {}
    }

    //key is string. returns either whatever value was set for this key, or undefined if none was set.
    get(key){
        return this.CacheMap[key];
    }
    // set value for key
    set(key, value){
        if(Object.keys(this.CacheMap).length < CacheData.maxItems){
            this.CacheMap[key] = value;
        }else{
            return 'error';
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
