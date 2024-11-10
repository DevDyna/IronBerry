// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         // You do not need to check if i is larger than splitStr length, as your for does that for you
//         // Assign it back to the array
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//     // Directly return the joined string
//     return splitStr.join(' ');
// }

StartupEvents.registry("fluid", (event) => {

  // .displayName('Acid')

  event.create("refined_resin").thickTexture(0xffb266).bucketColor(0xffb266);
  //.displayName('Refined Resin')

  event.create("liquid_silicon").thickTexture(0xa1afa6).bucketColor(0xa1afa6);
  //.displayName('Liquid Silicon')

  event
    .create("dustite")
    .thickTexture(0xa9a9a8)
    .bucketColor(0xa9a9a8)
    .displayName("Dustite (fluid)");

  event
    .create("clumperio")
    .thickTexture(0xf065f0)
    .bucketColor(0xf065f0)
    .displayName("Clumperio (fluid)");

  event
    .create("micio")
    .thickTexture(0x69f5bd)
    .bucketColor(0x69f5bd)
    .displayName("Micio (fluid)");

  event
    .create("superio")
    .thickTexture(0xdabf55)
    .bucketColor(0xdabf55)
    .displayName("Superio (fluid)");
  //----------------------------------------//
  event
    .create("boron")
    .thickTexture(0x868782)
    .bucketColor(0x868782)
    .displayName("§7Synthetic Boron");

  event
    .create("osmium")
    .thickTexture(0x9fd9eb)
    .bucketColor(0x9fd9eb)
    .displayName("§bSynthetic Osmium");

  event
    .create("thorium")
    .thickTexture(0x1d2421)
    .bucketColor(0x1d2421)
    .displayName("§cSynthetic Thorium");

  event
    .create("tin")
    .thickTexture(0x989f85)
    .bucketColor(0x989f85)
    .displayName("§3Synthetic Tin");

  event
    .create("magnesium")
    .thickTexture(0xefabf6)
    .bucketColor(0xefabf6)
    .displayName("§dSynthetic Magnesium");

  event
    .create("uranium")
    .thickTexture(0x3bb23b)
    .bucketColor(0x3bb23b)
    .displayName("§4Synthetic Uranium");

  event
    .create("graphite")
    .thickTexture(0x272b29)
    .bucketColor(0x272b29)
    .displayName("§5Molten Graphite");

  event
    .create("coal")
    .thickTexture(0x585252)
    .bucketColor(0x585252)
    .displayName("Refined Oil");

  event
    .create("osmium_enriched")
    .thickTexture(0x64eccc)
    .bucketColor(0x64eccc)
    .displayName("Enriched Osmium");

  event
    .create("quartz")
    .thickTexture(0xe6e1e1)
    .bucketColor(0xe6e1e1)
    .displayName("Molten Quartz");

  event
    .create("certus")
    .thickTexture(0xadf5f7)
    .bucketColor(0xadf5f7)
    .displayName("Molten Certus");
  //-------------------------------------------------------------------//

  event.create("carobbiite").thickTexture(0xe6f659).bucketColor(0xe6f659);
  //.displayName('Carobbiite')

  event.create("boron_nitride").thickTexture(0xb2f659).bucketColor(0xb2f659);
  //.displayName('Boron Nitride')

  event.create("fluorite").thickTexture(0x8bfabb).bucketColor(0x8bfabb);
  //.displayName('Fluorite')

  event.create("villiaumite").thickTexture(0xeb8f27).bucketColor(0xeb8f27);
  //.displayName('Villiaumite')

  event.create("caro_nitride").thickTexture(0xbcfd5a).bucketColor(0xbcfd5a);
  //.displayName('Caro Nitride')

  event.create("fluorumite").thickTexture(0xc33ade).bucketColor(0xc33ade);
  //.displayName('Fluorumite')

  event.create("fluoronitride").thickTexture(0xadfa17).bucketColor(0xadf5f7);
  //.displayName('Fluoronitride')

  event.create("sodium_hydroxide").thickTexture(0xdecee1).bucketColor(0xdecee1);
  //.displayName('Sodium Hydroxide')

  //-------------------------------------//
  event
    .create("quartz_cristaltine")
    .thickTexture(0x71e9b9)
    .bucketColor(0x71e9b9)
    .displayName("Quartz Crystaltine");

  event
    .create("quartz_arsenic")
    .thickTexture(0x66df5d)
    .bucketColor(0x66df5d)
    .displayName("Boron-Quartz Arsenic");

  event
    .create("quartz_oxide")
    .thickTexture(0x5da3df)
    .bucketColor(0x5da3df)
    .displayName("Boron-Quartz Arsenic Oxide");

  event
    .create("quartz_regia")
    .thickTexture(0xefe47e)
    .bucketColor(0xefe47e)
    .displayName("Aqua Regia Mixture");

  event.create("quartz_nitric").thickTexture(0x15ffff).bucketColor(0x15ffff);
  //.displayName('Quartz Nitric')

  event
    .create("quartz_heated")
    .thickTexture(0x1583ff)
    .bucketColor(0x1583ff)
    .displayName("Heated Quartz Nitric");

  event
    .create("red_power")
    .thickTexture(0xfc5c5c)
    .bucketColor(0xfc5c5c)
    .displayName("Ionized Redstone");

  event
    .create("zicio")
    .thickTexture(0xa5dec3)
    .bucketColor(0xa5dec3)
    .displayName("Zicio (fluid)");

  event
    .create("radio_uranium")
    .thickTexture(0x127a2a)
    .bucketColor(0x127a2a)
    .displayName("Radioactive Uranium (fluid)");

  event
    .create("radio_thorium")
    .thickTexture(0x145235)
    .bucketColor(0x145235)
    .displayName("Radioactive Thorium (fluid)");

  event
    .create("fuel_mixture")
    .thickTexture(0x045c3c)
    .bucketColor(0x045c3c)
    .displayName("Fuel Mixture (fluid)");

  event
    .create("exosteam")
    .thickTexture(0xb2b2b2)
    .bucketColor(0xb2b2b2)
    .displayName("Exo-Steam (fluid)");

  event
    .create("glass")
    .thickTexture(0xf2f2f2)
    .bucketColor(0xf2f2f2)
    .displayName("Liquid Glass");

  event
    .create("diamond")
    .thickTexture(0x7df7ff)
    .bucketColor(0x7df7ff)
    .displayName("Liquid Diamond");

  event
    .create("azure_glass")
    .thickTexture(0xd5f9ff)
    .bucketColor(0xd5f9ff)
    .displayName("Liquid Azure glass");

  event.create("crude_plastic").thickTexture(0xf0f0f0).bucketColor(0xf0f0f0);

  event.create("soul").thickTexture(0x94fdfa).bucketColor(0x94fdfa);
  event.create("acid").thickTexture(0x912d2d).bucketColor(0x912d2d);
  event.create("light").thickTexture(0xFFE9F5).bucketColor(0xFFE9F5);
  event.create("magic").thickTexture(0xBC86E5).bucketColor(0xBC86E5);
  event.create("verdant").thickTexture(0x00D21C).bucketColor(0x00D21C);
  event.create("stock").thickTexture(0x8B6737).bucketColor(0x8B6737);



  
  event.create("meltio").thickTexture(0xD5A535).bucketColor(0xD5A535);
  event.create("prosperitio").thickTexture(0xD1D1D1).bucketColor(0xD1D1D1);
  event.create("densio").thickTexture(0x2328BD).bucketColor(0x2328BD);
  event.create("pertio").thickTexture(0x44B681).bucketColor(0x44B681);
  event.create("alchemio").thickTexture(0xC1B839).bucketColor(0xC1B839);
  event.create("ainiotzio").thickTexture(0x4B514E).bucketColor(0x4B514E);
  event.create("methane").thickTexture(0x7d7d07).bucketColor(0x7d7d07).displayName("Methane (fluid)");






});
