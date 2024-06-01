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

        event.create('acid')
        .thickTexture(0x912D2D)
        .bucketColor(0x912D2D)
        .displayName('Acid')
		
		event.create('refined_resin')
        .thickTexture(0xFFB266)
        .bucketColor(0xFFB266)
        .displayName('Refined Resin')
		
		event.create('liquid_silicon')
		.thickTexture(0xa1afa6)
		.bucketColor(0xa1afa6)
		.displayName('Liquid Silicon')

        event.create('dustite')
		.thickTexture(0xA9A9A8)
		.bucketColor(0xA9A9A8)
		.displayName('Dustite (fluid)')

        event.create('clumperio') 
		.thickTexture(0xF065F0)
		.bucketColor(0xF065F0)
		.displayName('Clumperio (fluid)')

        event.create('micio')
        .thickTexture(0x69F5BD)
		.bucketColor(0x69F5BD)
		.displayName('Micio (fluid)')

        event.create('superio')
        .thickTexture(0xDABF55)
		.bucketColor(0xDABF55)
		.displayName('Superio (fluid)')
//----------------------------------------//
        event.create('boron')
        .thickTexture(0x868782)
		.bucketColor(0x868782)
		.displayName('§7Synthetic Boron')

        event.create('osmium')
        .thickTexture(0x9FD9EB)
		.bucketColor(0x9FD9EB)
		.displayName('§bSynthetic Osmium')

        event.create('thorium')
        .thickTexture(0x1D2421)
		.bucketColor(0x1D2421)
		.displayName('§cSynthetic Thorium')

        event.create('tin')
        .thickTexture(0x989F85)
		.bucketColor(0x989F85)
		.displayName('§3Synthetic Tin')

        event.create('magnesium')
        .thickTexture(0xEFABF6)
		.bucketColor(0xEFABF6)
		.displayName('§dSynthetic Magnesium')

        event.create('uranium')
        .thickTexture(0x3BB23B)
		.bucketColor(0x3BB23B)
		.displayName('§4Synthetic Uranium')

        event.create('graphite')
        .thickTexture(0x272B29)
		.bucketColor(0x272B29)
		.displayName('§5Molten Graphite')

        event.create('coal')
        .thickTexture(0x585252)
		.bucketColor(0x585252)
		.displayName('Refined Oil')

        event.create('osmium_enriched')
        .thickTexture(0x64ECCC)
		.bucketColor(0x64ECCC)
		.displayName('Enriched Osmium')

        event.create('quartz')
        .thickTexture(0xE6E1E1)
		.bucketColor(0xE6E1E1)
		.displayName('Molten Quartz')

        event.create('certus')
        .thickTexture(0xADF5F7)
		.bucketColor(0xADF5F7)
		.displayName('Molten Certus')
//-------------------------------------------------------------------//

event.create('carobbiite')
.thickTexture(0xE6F659)
.bucketColor(0xE6F659)
.displayName('Carobbiite')

event.create('boron_nitride')
.thickTexture(0xB2F659)
.bucketColor(0xB2F659)
.displayName('Boron Nitride')

event.create('fluorite')
.thickTexture(0x8BFABB)
.bucketColor(0x8BFABB)
.displayName('Fluorite')

event.create('villiaumite')
.thickTexture(0xEB8F27)
.bucketColor(0xEB8F27)
.displayName('Villiaumite')

event.create('caro_nitride')
.thickTexture(0xBCFD5A)
.bucketColor(0xBCFD5A)
.displayName('Caro Nitride')

event.create('fluorumite')
.thickTexture(0xC33ADE)
.bucketColor(0xC33ADE)
.displayName('Fluorumite')

event.create('fluoronitride')
.thickTexture(0xADFA17)
.bucketColor(0xADF5F7)
.displayName('Fluoronitride')

event.create('sodium_hydroxide')
.thickTexture(0xDECEE1)
.bucketColor(0xDECEE1)
.displayName('Sodium Hydroxide')





//-------------------------------------//
event.create('quartz_cristaltine')
.thickTexture(0x71E9B9)
.bucketColor(0x71E9B9)
.displayName('Quartz Crystalline')

event.create('quartz_arsenic')
.thickTexture(0x66DF5D)
.bucketColor(0x66DF5D)
.displayName('Boron-Quartz Arsenic')

event.create('quartz_oxide')
.thickTexture(0x5DA3DF)
.bucketColor(0x5DA3DF)
.displayName('Boron-Quartz Arsenic Oxide')

event.create('quartz_regia')
.thickTexture(0xEFE47E)
.bucketColor(0xEFE47E)
.displayName('Aqua Regia Mixture')

event.create('quartz_nitric')
.thickTexture(0x15FFFF)
.bucketColor(0x15FFFF)
.displayName('Quartz Nitric')

event.create('quartz_heated')
.thickTexture(0x1583FF)
.bucketColor(0x1583FF)
.displayName('Heated Quartz Nitric')

event.create('red_power')
.thickTexture(0xFC5C5C)
.bucketColor(0xFC5C5C)
.displayName('Ionized Redstone')

event.create('zicio')
.thickTexture(0xA5DEC3)
.bucketColor(0xA5DEC3)
.displayName('Zicio (fluid)')

event.create('radio_uranium')
.thickTexture(0x127A2A)
.bucketColor(0x127A2A)
.displayName('Radioactive Uranium (fluid)')

event.create('radio_thorium')
.thickTexture(0x145235)
.bucketColor(0x145235)
.displayName('Radioactive Thorium (fluid)')

event.create('fuel_mixture')
.thickTexture(0x045C3C)
.bucketColor(0x045C3C)
.displayName('Fuel Mixture (fluid)')

event.create('exosteam')
.thickTexture(0xB2B2B2)
.bucketColor(0xB2B2B2)
.displayName('Exo-Steam (fluid)')

event.create('glass')
.thickTexture(0xF2F2F2)
.bucketColor(0xF2F2F2)
.displayName('Liquid Glass')

event.create('diamond')
.thickTexture(0x7DF7FF)
.bucketColor(0x7DF7FF)
.displayName('Liquid Diamond')

event.create('azure_glass')
.thickTexture(0xD5F9FF)
.bucketColor(0xD5F9FF)
.displayName('Liquid Azure glass')

event.create('crude_plastic')
.thickTexture(0xF0F0F0)
.bucketColor(0xF0F0F0)
.displayName('Crude Plastic')

})
