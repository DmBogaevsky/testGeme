//-------------------2D
easeLinear = (t, b, c, d) => c * t / d + b;

easeInOutCirc = (t, b, c, d) => {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}

easeOutBack = (t, b, c, d, s) => {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}

getTimeMoments = (T, fps) => {
    const t = [];
    for (let i = 0; i <= (T * fps); i++) {
        t.push(i * T / fps);
    }
    return t;
}

calculatePosition = (T, fps, from, distance, getPositionFunc) => {
    const t = getTimeMoments(T, fps);
    const position = [];
    for (let i = 0; i < t.length; i++) {
        position.push({
            t: t[i],
            position: {
                x: getPositionFunc(t[i], from.x, distance.x, T),
                y: getPositionFunc(t[i], from.y, distance.y, T),
            }
        });
    }
    return position;
}

let T = 1,
    fps = 7,
    from = { x: 0, y: 0 },
    to = { x: 7, y: 7 };
const distance = { x: to.x - from.x, y: to.y - from.y };

// console.log(calculatePosition(T, fps, from, distance, easeLinear));
// console.log(calculatePosition(T, fps, from, distance, easeInOutCirc));
// console.log(calculatePosition(T, fps, from, distance, easeOutBack));

//-------------------3D
easeLinear3D = (t, b, c, d) => c * t / d + b;

easeInOutCirc3D = (t, b, c, d) => {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}

getTimeMoments3D = (T, fps) => {
    const t = [];
    for (let i = 0; i <= (T * fps); i++) {
        t.push(i * T / fps);
    }
    return t;
}

easeOutBack3D = (t, b, c, d, s) => {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}

calculatePosition3D = (T, fps, from, distance, getPositionFunc) => {
    const t = getTimeMoments3D(T, fps);
    const position = [];
    for (let i = 0; i < t.length; i++) {
        position.push({
            t: t[i],
            position: {
                x: getPositionFunc(t[i], from.x, distance.x, T),
                y: getPositionFunc(t[i], from.y, distance.y, T),
                z: getPositionFunc(t[i], from.z, distance.z, T),
            }
        });
    }
    return position;
}

let allTime = 1,
    fps3d = 7,
    from3d = { x: 0, y: 0, z: 0 },
    to3d = { x: 7, y: 7, z: 7 };
const dist = { x: to3d.x - from3d.x, y: to3d.y - from3d.y, z: to3d.z - from3d.z };

// console.log(calculatePosition3D(allTime, fps3d, from3d, dist, easeLinear3D));
// console.log(calculatePosition3D(allTime, fps3d, from3d, dist, easeInOutCirc3D));
// console.log(calculatePosition3D(allTime, fps3d, from3d, dist, easeOutBack3D));



class IndexedMap {
    constructor() {}
    keyValuePairs = [];
    set(key, value) {
        for (let i = 0; i < this.keyValuePairs.length; i++) {
            if (this.keyValuePairs[i].key == key) {
                this.keyValuePairs[i].value = value;
                return this;
            }
        }
        const keyValuePair = { key: key, value: value };
        this.keyValuePairs.push(keyValuePair);
        return this;
    }
    has(key) {
        for (let i = 0; i < this.keyValuePairs.length; i++) {
            if (this.keyValuePairs[i].key == key)
                return true;
        }
        return false;
    }
    hasIndex(index) {
        return index < this.keyValuePairs.length;
    }

    get(key) {
        for (let i = 0; i < this.keyValuePairs.length; i++) {
            if (this.keyValuePairs[i].key == key)
                return this.keyValuePairs[i].value;
        }
        return undefined;
    }
    getByIndex(index) {
        return index < this.keyValuePairs.length ? this.keyValuePairs[index].value : undefined;
    }
    remove(key) {
        for (let i = 0; i < this.keyValuePairs.length; i++) {
            if (this.keyValuePairs[i].key == key) {
                this.keyValuePairs.splice(i, 1)
            }
        }
        return this;
    }
    size() {
        return this.keyValuePairs.length;
    }
}

// let myArray = new IndexedMap();
// myArray.set('name', 'John');
// myArray.set('name', 'Ron');
// console.log(myArray)
// console.log(myArray.get('name'));