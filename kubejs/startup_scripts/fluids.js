function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

StartupEvents.registry('fluid', event => {

    let molten = (name, color) => {
        event.create('molten_' + name.replace(/\s+/g, '_'))
        .thickTexture(color)
        .bucketColor(color)
        .displayName('Molten ' + titleCase(name))
    }

    let simple = (name, color) => {
        event.create(name.replace(/\s+/g, '_'))
        .thickTexture(color)
        .bucketColor(color)
        .displayName(titleCase(name))
    }
/*
    molten('tin', 0x9fc4c0)
    molten('copper', 0x47b55)
    molten('iron', 0xd5d5d5)
    molten('gold', 0xfaf25e)
    molten('zinc', 0xd0c6a3)
    molten('silver', 0xbccacf)
    molten('nickel', 0xe4d196)
    molten('lead', 0x444866)
    molten('tungsten', 0x282828)
    molten('bronze', 0xeea92b)
    molten('electrum', 0xf1ed8c)
    molten('brass', 0xe4b921)
    molten('invar', 0xa1afa6)
    molten('constant', 0xe7b85d)
    molten('lumium', 0xfcf1b6)
    molten('signalum', 0xf96d20)
    molten('enderium', 0x1d7d8a)
    molten('tungsten carbide', 0x5e5e5e)
    molten('flux infused', 0xf8ebaa)
	*/
	simple('acid',0x912D2D)
	simple('refined_resin',0xFFFF66)

})
