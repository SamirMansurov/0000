export function reload(array, place, component) {

    for (let item of array) {
        const product = component(item, array)
        place.append(product)
    }
}
