/**
 * Mapeo de imágenes organizadas por categorías según organigrama del club
 */

export const imageMapping = {
  // Equipos por categoría
  equipos: {
    sub40: [
      "/images/equipos/480246248_122101396244767596_5367370154283151331_n.jpg"
    ],
    // Agregar más categorías según necesidad
    juveniles: [],
    senior: [],
    veteranos: []
  },

  // Entrenamientos
  entrenamientos: [
    "/images/entrenamientos/480843407_122114432492767596_6428640973311258758_n.jpg",
    "/images/entrenamientos/480881864_122114432396767596_7461784783759399538_n.jpg",
    "/images/entrenamientos/480959440_122114430614767596_6863371511451647088_n.jpg",
    "/images/entrenamientos/480969213_122114431016767596_8277373704875562041_n.jpg",
    "/images/entrenamientos/480982108_122114432324767596_9199940284723290526_n.jpg",
    "/images/entrenamientos/480999634_122114431334767596_4621636046566176612_n.jpg",
    "/images/entrenamientos/481005709_122114433404767596_4637446243152441424_n.jpg",
    "/images/entrenamientos/481019077_122114433350767596_5038633797419622908_n.jpg",
    "/images/entrenamientos/481024641_122114432186767596_5752743332902720127_n.jpg",
    "/images/entrenamientos/481051211_122114430500767596_8531693673099581099_n.jpg",
    "/images/entrenamientos/481051221_122114432240767596_1230019694198243087_n.jpg",
    "/images/entrenamientos/481058390_122114432132767596_2101946408558561674_n.jpg",
    "/images/entrenamientos/481071604_122114431190767596_2787967758041775638_n.jpg",
    "/images/entrenamientos/481076172_122114430410767596_2659148342459942735_n.jpg",
    "/images/entrenamientos/481080168_122114431676767596_4498597690553828130_n.jpg",
    "/images/entrenamientos/481080326_122114432738767596_6114993591983660009_n.jpg",
    "/images/entrenamientos/481084116_122114432030767596_2703696857208444348_n.jpg",
    "/images/entrenamientos/481322214_122114433512767596_8916440873367015550_n.jpg",
    "/images/entrenamientos/481330815_122114432642767596_2238051439942265402_n.jpg",
    "/images/entrenamientos/481509323_122114432552767596_2591951527365194519_n.jpg",
    "/images/entrenamientos/481821308_122114430788767596_7884757680762736524_n.jpg",
    "/images/entrenamientos/482054700_122114433212767596_7174315172735070939_n.jpg",
    "/images/entrenamientos/482057542_122114431892767596_5434983268597412490_n.jpg",
    "/images/entrenamientos/482243609_122114430236767596_2180570604332465943_n.jpg"
  ],

  // Galería general
  galeria: [
    "/images/galeria/480207937_122101399724767596_8933137430501754244_n.jpg",
    "/images/galeria/480443028_122113151828767596_3768715498626172408_n.jpg",
    "/images/galeria/480705290_122113142204767596_6323083370285534346_n.jpg",
    "/images/galeria/480940772_122113139408767596_1396169506372538496_n.jpg",
    "/images/galeria/480941200_122113138862767596_827033886403878205_n.jpg",
    "/images/galeria/481011642_122113149248767596_757165555197288988_n.jpg",
    "/images/galeria/481280210_122113151708767596_7963703130378725978_n.jpg",
    "/images/galeria/481304297_122113139480767596_8864045323227048418_n.jpg",
    "/images/galeria/481503188_122113152176767596_1096244846107666263_n.jpg",
    "/images/galeria/481671433_122113149308767596_3704865013449520728_n.jpg",
    "/images/galeria/481897705_122113151636767596_1336465878846317676_n.jpg",
    "/images/galeria/486569088_122122324178767596_8620324536285116179_n.jpg",
    "/images/galeria/486576020_122122325978767596_3134740308618775085_n.jpg",
    "/images/galeria/486697955_122122329044767596_3627533362878085695_n.jpg",
    "/images/galeria/486824066_122122325912767596_2826483525120820842_n.jpg",
    "/images/galeria/487071970_122122329116767596_4342980313157038754_n.jpg",
    "/images/galeria/487077213_122122331834767596_8295848510999034687_n.jpg",
    "/images/galeria/487103963_122122325810767596_2095538116034558151_n.jpg",
    "/images/galeria/495275584_122141773874767596_6495167428283936469_n.jpg",
    "/images/galeria/496960578_122144909612767596_8366608968184033967_n.jpg",
    "/images/galeria/499597863_122137420874767596_8447721577378216176_n.jpg",
    "/images/galeria/499714621_122137420508767596_3024239889179273562_n.jpg",
    "/images/galeria/499860661_122137420850767596_237681467830155473_n.jpg",
    "/images/galeria/501431740_122140573082767596_6768427748435412642_n.jpg",
    "/images/galeria/502936692_122143552598767596_8067878624720557493_n.jpg",
    "/images/galeria/505127123_122141645306767596_1801963882683390710_n.jpg",
    "/images/galeria/514394871_122154667904767596_2391640552946418873_n.jpg",
    "/images/galeria/519420602_122150469878767596_6370420263944558812_n.jpg",
    "/images/galeria/523496431_122151334964767596_4825472357044948274_n.jpg"
  ],

  // Sponsors
  sponsors: [
    "/images/sponsors/Captura de pantalla 2025-08-22 144146.png",
    "/images/sponsors/OIP.webp"
  ],

  // Instalaciones (agregar cuando tengas las fotos)
  instalaciones: [],

  // Staff técnico (agregar cuando tengas las fotos)
  staff: [],

  // Torneos (agregar cuando tengas las fotos)
  torneos: []
};

// Función para obtener imágenes aleatorias de una categoría
export function getRandomImages(category: keyof typeof imageMapping, count: number = 4): string[] {
  const images = imageMapping[category];
  if (Array.isArray(images)) {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  return [];
}

// Función para obtener todas las imágenes de galería
export function getGalleryImages(): string[] {
  return imageMapping.galeria;
}

// Función para obtener imágenes de entrenamientos
export function getTrainingImages(): string[] {
  return imageMapping.entrenamientos;
}

// Función para obtener imágenes de equipos
export function getTeamImages(team?: string): string[] {
  if (team && team in imageMapping.equipos) {
    return imageMapping.equipos[team as keyof typeof imageMapping.equipos];
  }
  // Devolver todas las imágenes de equipos
  return Object.values(imageMapping.equipos).flat();
}
