/**
 * Packages are sorted in the following stacks:
 * A package is bulky if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³
 *  or when one of its dimensions is greater or equal to 150 cm.
 * A package is heavy when its mass is greater or equal to 20 kg.
 * STANDARD: standard packages (those that are not bulky or heavy) can be handled normally.
 * SPECIAL: packages that are either heavy or bulky can't be handled automatically.
 * REJECTED: packages that are both heavy and bulky are rejected.
 * @param {*} width the width of the package in centimeters
 * @param {*} height the height of the package in centimeters
 * @param {*} length the length of the package in centimeters
 * @param {*} mass the weight of the package in kilogram
 * @returns {string} the name of the stack where the package should go.
 */
const sort = (width, height, length, mass) => {
    //Assuming that each package's size values must be > 0
    if (width <= 0 || height <= 0 || parseInt(length) <= 0 || mass <= 0) {
        return "REJECTED";
    }
    //Assuming that each package's size values must be > 0
    if (
        width == undefined ||
        height == undefined ||
        length == undefined ||
        mass == undefined
    ) {
        return "REJECTED";
    }

    const volume = width * height * length;
    let sortedPackage = [];
    let maxWeight = 20,
        maxSize = 150,
        maxVolume = 1000000,
        stack;

    if (mass >= maxWeight) {
        sortedPackage.push("heavy");
    }
    if (
        width >= maxSize ||
        height >= maxSize ||
        length >= maxSize ||
        volume >= maxVolume
    ) {
        sortedPackage.push("bulky");
    }

    if (sortedPackage.length > 1) {
        stack = "REJECTED";
    } else if (sortedPackage.length == 1) {
        stack = "SPECIAL";
    } else {
        stack = "STANDARD";
    }
    return stack;
};

exports.sort = sort;
