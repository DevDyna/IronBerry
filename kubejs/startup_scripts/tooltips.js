// We need to cache, since we are doing descriptionId -> registryName
// And for what I know we don't have that
StartupEvents.postInit(event => {
  global.CACHE = {}
  global.CACHE.FLUID = Utils.newMap()
  Utils.getRegistry("fluid").entrySet().forEach(entry => !entry.key.location().path.includes("flowing") && global.CACHE.FLUID.putIfAbsent(entry.value.fluidType.descriptionId, entry.key.location().toString()))
  global.CACHE.GAS = Utils.newMap()
  Utils.getRegistry("mekanism:gas").entrySet().forEach(entry => global.CACHE.GAS.putIfAbsent($Util.makeDescriptionId("gas", entry.value.getRegistryName()), entry.value.getRegistryName().toString()))
  global.CACHE.PIGMENT = Utils.newMap()
  Utils.getRegistry("mekanism:pigment").entrySet().forEach(entry => global.CACHE.PIGMENT.putIfAbsent($Util.makeDescriptionId("pigment", entry.value.getRegistryName()), entry.value.getRegistryName().toString()))
  global.CACHE.SLURRY = Utils.newMap()
  Utils.getRegistry("mekanism:slurry").entrySet().forEach(entry => global.CACHE.SLURRY.putIfAbsent($Util.makeDescriptionId("slurry", entry.value.getRegistryName()), entry.value.getRegistryName().toString()))
  global.CACHE.INFUSE_TYPE = Utils.newMap()
  Utils.getRegistry("mekanism:infuse_type").entrySet().forEach(entry => global.CACHE.INFUSE_TYPE.putIfAbsent($Util.makeDescriptionId("infuse_type", entry.value.getRegistryName()), entry.value.getRegistryName().toString()))
})

const $Util = Java.loadClass("net.minecraft.Util")
// CHANGES INSIDE FORGE EVENT CALLBACK REQUIRES FULL RESTART
// do your changes at last function of the script "global.addCustomTooltips"
ForgeEvents.onEvent("net.minecraftforge.client.event.RenderTooltipEvent$GatherComponents", (event) => {
  try {
    // let start = $Util.getNanos() / 1000
    global.addCustomTooltips(event)
    // console.log(`This instruction took: ${($Util.getNanos() / 1000) - start} µs`)
  } catch (error) {
    console.log(error) // just so you don't crash if you messup
  }
})

const $Either = Java.loadClass("com.mojang.datafixers.util.Either")
function CustomTooltip(/** @type {Internal.List<Internal.Either<Internal.FormattedText, Internal.TooltipComponent>>} */ tooltipElements) {
  this.tooltipElements = tooltipElements
  /** @type {Internal.Lazy<Internal.MutableComponent[]>} */
  this.unwrapedElements = Utils.lazy(() => this.tooltipElements.map(either => either.map(l => l, r => null)))
  this.descriptionId = !tooltipElements.isEmpty() && tooltipElements[0].map(comp => comp.contents?.key, r => null)
  /** @type {Special.Fluid} */
  this.fluid = global.CACHE.FLUID.get(this.descriptionId) || undefined
  /** @type {Special.Gas} */
  this.gas = global.CACHE.GAS.get(this.descriptionId) || undefined
  /** @type {Special.Pigment} */
  this.pigment = global.CACHE.PIGMENT.get(this.descriptionId) || undefined
  /** @type {Special.Slurry} */
  this.slurry = global.CACHE.SLURRY.get(this.descriptionId) || undefined
  /** @type {Special.InfuseType} */
  this.infuse_type = global.CACHE.INFUSE_TYPE.get(this.descriptionId) || undefined
  /** @type {boolean} */
  this.valid = this.descriptionId != null && (this.fluid || this.gas || this.pigment || this.infuse_type || this.slurry)
}
CustomTooltip.prototype = {
  addAt: function (/** @type {int} */index, /** @type {Internal.MutableComponent | string} */ comp) {
    this.tooltipElements.add(index, $Either.left(typeof comp == "string" ? Text.of(comp) : comp))
    return this
  },
  addBeforeLast: function (/** @type {Internal.MutableComponent | string} */ comp) {
    return this.addAt(this.tooltipElements.size() - 1, comp)
  },
  removeAt: function (/** @type {int} */index) {
    this.tooltipElements["remove(int)"](index)
    return this
  },
  removeAll: function () {
    this.tooltipElements.clear()
    return this
  },
  removeBeforeLast: function () {
    return this.removeAt(this.tooltipElements.size() - 2)
  },
  add: function (/** @type {Internal.MutableComponent | string} */ comp) {
    return this.addAt(this.tooltipElements.size(), comp)
  },
  getComponents: function () {
    return this.unwrapedElements.get()
  },
  isValid: function () { return this.valid }
}

// Here you are free to modify inside this function
// With this global trick you can just "/kubejs reload startup_scripts" and your changes are applied!
global.addCustomTooltips = (/** @type {Internal.RenderTooltipEvent$GatherComponents} */ event) => {
  if (!event.itemStack.isEmpty()) return
  let tooltip = new CustomTooltip(event.tooltipElements)
  if (!tooltip.isValid()) return
  if (tooltip.fluid == 'thoriumreactors:depleted_molten_salt' || tooltip.fluid == 'thoriumreactors:steam') {
    tooltip.add("Obtained by running §cThermal Evaporator §ffrom §a@Thorium")
  }
  if (tooltip.fluid == 'thoriumreactors:heated_molten_salt') {
    tooltip.add("Obtained by running §eReactor §ffrom §a@Thorium")
  }
  if (tooltip.fluid == 'thoriumreactors:molten_salt') {
    tooltip.add("Coolant of §eReactor §ffrom §a@Thorium")
  }
}
/*
Black: §0
Dark Blue: §1
Dark Green: §2
Dark Aqua (Dark Cyan): §3
Dark Red: §4
Dark Purple: §5
Gold: §6
Gray: §7
Dark Gray: §8
Blue: §9
Green: §a
Aqua (Cyan): §b
Red: §c
Light Purple: §d
Yellow: §e
White: §f
*/