import type { NextApiRequest, NextApiResponse } from "next";

export interface Beers {
  id: number;
  name: string;
  image: string;
  drinkType: number;
  percentage: number;
  beerCategory: string;
  flavorText: string;
  allergies: string;
  available: boolean;
  price: number;
  brewery: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Beers[]>
) {
  res.status(200).json(beersData);
}

const beersData: Beers[] = [
  {
    id: 1,
    name: "De Poes",
    image: "https://cdn.webshopapp.com/shops/65337/files/59921512/de-poes.jpg",
    drinkType: 1,
    percentage: 8,
    beerCategory: "Tripel",
    flavorText:
      "Een goede combinatie van de bittere hopsmaak met een licht fruitige en kruidige afdronk.Dit bier heeft al verschillende internationale en nationale bierprijzen op zijn naam staan.",
    allergies: "",
    available: true,
    price: 3.5,
    brewery: "De Poes",
  },
  {
    id: 2,
    name: "Hamburger",
    image: "https://cms.burgerking.be/uploads/medium_HAMBURGER_c6b7d58038.png",
    drinkType: 7,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: false,
    price: 3,
    brewery: "",
  },
  {
    id: 3,
    name: "Chips (Zout)",
    image:
      "https://static.standaard.be/Assets/Images_Upload/2013/05/31/bc8e83dc-c9ce-11e2-b1cf-f791bc938473_web_scale_0.0407609_0.0407609__.jpg?maxheight=280&maxwidth=400",
    drinkType: 7,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: true,
    price: 1.5,
    brewery: "",
  },
  {
    id: 4,
    name: "Rode wijn",
    image:
      "https://images.rosendahl.dk/products/480/311/3/4803113/v/4803113/XXLarge/bouquet-red-wine-glass-62-cl-clear-1-pcs-bouquet-1500x1500.png",
    drinkType: 6,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: true,
    price: 2.5,
    brewery: "",
  },
  {
    id: 5,
    name: "Witte wijn",
    image:
      "https://images.rosendahl.dk/products/480/311/1/4803111/v/4803111/XXLarge/bouquet-dessert-wine-glass-32-cl-clear-1-pcs-bouquet-1500x1500.png",
    drinkType: 6,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: true,
    price: 2.5,
    brewery: "",
  },
  {
    id: 6,
    name: "Platwater",
    image:
      "https://toppng.com/uploads/preview/water-glass-png-water-of-glass-11563245506jczunpdu00.png",
    drinkType: 5,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: true,
    price: 0,
    brewery: "",
  },
  {
    id: 7,
    name: "Bruiswater",
    image:
      "https://pngset.com/images/emoji-u2013-the-official-brand-sparkling-water-emoji-water-glass-beverage-drink-bottle-jacuzzi-transparent-png-2931358.png",
    drinkType: 5,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: true,
    price: 2,
    brewery: "",
  },
  {
    id: 8,
    name: "Fanta",
    image:
      "https://www.prikentik.be/media/catalog/product/f/a/fanta-sinaas-pet-1-5l.png",
    drinkType: 5,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: true,
    price: 2,
    brewery: "",
  },
  {
    id: 9,
    name: "Ice Tea Green",
    image:
      "https://static-images.jumbo.com/product_images/300420200629_351959FLS-1_360x360_2.png",
    drinkType: 5,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: true,
    price: 2,
    brewery: "",
  },
  {
    id: 10,
    name: "Ice Tea",
    image:
      "https://www.aldi.nl/content/dam/aldi/netherlands/offers/weekend-highlights/2020/wk32/2002597-02.png/_jcr_content/renditions/opt.1250w.png.res/1595430618679/opt.1250w.png",
    drinkType: 5,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: true,
    price: 2,
    brewery: "",
  },
  {
    id: 11,
    name: "Cola Zero",
    image:
      "https://www.action.com/globalassets/cmsarticleimages/53/57/3007082_50112821-111_01.png",
    drinkType: 5,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: true,
    price: 2,
    brewery: "",
  },
  {
    id: 12,
    name: "Warme hapjes #8",
    image:
      "https://i.pinimg.com/originals/15/e0/64/15e0641957a5fec4a16c010c2f8b6ef7.png",
    drinkType: 7,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: false,
    price: 3,
    brewery: "",
  },
  {
    id: 13,
    name: "Cola",
    image:
      "https://www.action.com/globalassets/cmsarticleimages/95/09/2543760_5449000015150_111_01.png/",
    drinkType: 5,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: true,
    price: 2,
    brewery: "",
  },
  {
    id: 14,
    name: "Martha Guilty Pleasure",
    image:
      "https://biermenneke.nl/wp-content/uploads/2021/05/Martha-Guilty-Pleasure-Belgian-Brew-Factory-210506144125.png",
    drinkType: 4,
    percentage: 8,
    beerCategory: "Kriekbier",
    flavorText:
      "Dit bier, gebrouwen met verse krieken, heeft een geur en aroma van verse marsepein en een explosie van kersen en krieken. Verfrissend spel van zoet, zuur met een zeer lichte bitterheid die het geheel mooi in.",
    allergies: "",
    available: true,
    price: 3.5,
    brewery: "The Brew Society",
  },
  {
    id: 15,
    name: "Martha Brown Eyes",
    image:
      "https://www.hop-up.nl/wp-content/uploads/2021/07/Martha-Brown-Eyes.png",
    drinkType: 2,
    percentage: 12,
    beerCategory: "Quadrupel",
    flavorText:
      "Martha probeert je eerst te verleiden met haar kandijzoete en karamel moutige smaak, daarna gooit ze haar hogere alcoholgehalte in de strijd waardoor het een volle, licht alcoholische smaak krijgt. Deze straffe dame zal ongetwijfeld menig hart kunnen veroveren.",
    allergies: "",
    available: true,
    price: 4,
    brewery: "The Brew Society",
  },
  {
    id: 16,
    name: "Verboden vrucht",
    image: "https://img.saveur-biere.com/img/p/121-61805.jpg",
    drinkType: 2,
    percentage: 8.8,
    beerCategory: "",
    flavorText:
      "Heerlijk fruitig, roodbruin speciaalbier met een fruitige, volle smaak, strelend in de mond, zoet & droog met veel kruidenaroma's.",
    allergies: "",
    available: true,
    price: 4,
    brewery: "Brouwerij De Kluis",
  },
  {
    id: 17,
    name: "Stella",
    image:
      "https://www.prikentik.be/media/catalog/product/s/t/stella_bottle_25cl.png",
    drinkType: 0,
    percentage: 5.2,
    beerCategory: "Pils",
    flavorText:
      "Uitgesproken volle pils met een fris karakter, gebrouwen met de fijnstehopsoorten. Pilsbier met een licht bittere afdronk.",
    allergies: "",
    available: true,
    price: 2,
    brewery: "Brouwerij Stella Artois",
  },
  {
    id: 18,
    name: "Hoppa hontas",
    image:
      "https://www.bockjebathmen.nl/l/nl/library/download/urn:uuid:957c5b0a-ee75-4ffa-9cc0-8224d3ae3952/wa-fles-hoppa-hontas-33cl.png",
    drinkType: 1,
    percentage: 6.5,
    beerCategory: "IPA",
    flavorText:
      "Zoals de naam al laat vermoeden is de smaak bitter en de nasmaak droog bitter. Er worden verschillende varianten gemaakt van de Hoppa Hontas; telkens met een andere hopsoort(Amarillo en Sorachi Ace).",
    allergies: "",
    available: true,
    price: 4,
    brewery: "Brouwerij Maenhout",
  },
  {
    id: 19,
    name: "Klootzakske",
    image: "https://www.prikentik.be/media/catalog/product/k/l/klootzakske.png",
    drinkType: 1,
    percentage: 7.5,
    beerCategory: "Artisanaal gezelschapsbier",
    flavorText:
      "Blond bier met ballen en hoppige afdronk, ambachtelijk gebrouwen en uitgebalanceerde smaak.Het Klootzakske dankt zijn naam aan een verrassingsweekend onder vrienden.",
    allergies: "",
    available: true,
    price: 3.5,
    brewery: "Klootzakske",
  },
  {
    id: 20,
    name: "Martha Sexy Blond",
    image:
      "https://cdn.hop-up.nl/wp-content/uploads/2021/05/Martha-Sexy-Blond.png",
    drinkType: 1,
    percentage: 8,
    beerCategory: "",
    flavorText:
      "Een Strogeel bier met toetsen van wit, gedroogd fruit en kruidnagel. Zoete aanzet die omhelsd wordt door de aanwezige alcohol.Een bier met een volle smaak, een verfijnd aroma die overgaat in een licht bittere afdronk.",
    allergies: "",
    available: true,
    price: 3,
    brewery: "The Brew Society",
  },
  {
    id: 21,
    name: "Slutte (75cl)",
    image:
      "https://www.prikentik.be/media/catalog/product/cache/23d9da881b836928ceaa9fe24f71827f/s/l/slutte_75cl.png",
    drinkType: 1,
    percentage: 6.2,
    beerCategory: "IPA",
    flavorText:
      "Slutte is een bier met een koperachtige glans en een machtige, beige kraag. Eerder troebel dan helder.De smaak is uitgesproken hoppig en behoorlijk bitter.Een vol en zacht mondgevoel met een middellange afdronk.",
    allergies: "",
    available: true,
    price: 9,
    brewery: "Brasserie Grain d'Orge",
  },
  {
    id: 22,
    name: "De hete klinke",
    image:
      "https://res.cloudinary.com/bierista/image/upload/c_fit,h_400/v1633960526/klootzakske-hete-klinke",
    drinkType: 1,
    percentage: 6.5,
    beerCategory: "Zacht",
    flavorText:
      "Een gewillig blondje zacht van smaak en met een mild alcoholpercentage. Voortaan klinken de Hete Klinken samen met de Klootzakskes!",
    allergies: "",
    available: true,
    price: 3.5,
    brewery: "Klootzakske",
  },
  {
    id: 23,
    name: "Dulle teve",
    image:
      "https://res.cloudinary.com/bierista/image/upload/c_fit,h_400/v1515503283/de-dolle-dulle-teve",
    drinkType: 1,
    percentage: 10,
    beerCategory: "Tripel",
    flavorText:
      "Dulle Teve is een bijzondere krachtige stevige tripel. Veel fruitige aroma’s van onder meer abrikoos en gedroogd fruit.Naast die fruitige aroma's heeft deze tripel ook de nodige kruidigheid.",
    allergies: "",
    available: false,
    price: 4,
    brewery: "Dolle Brouwers",
  },
  {
    id: 24,
    name: "Pecheresse",
    image: "https://img.saveur-biere.com/img/p/100-14012.jpg",
    drinkType: 4,
    percentage: 2.5,
    beerCategory: "Lambiek bier",
    flavorText:
      "Zoals bij alle bieren van Lindemans wordt er gebruik gemaakt van één jaar oude lambiek.Deze lambiek heeft gerijpt op eikenhout.Vervolgens wordt hier gezuiverd perziksap aan toegevoegd, zo krijgt het bier een heerlijke fruitige smaak.",
    allergies: "",
    available: true,
    price: 3.5,
    brewery: "Brouwerij Lindemans",
  },
  {
    id: 25,
    name: "Chips (Paprika)",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/getest-paprikachips-8123-1538039375.jpg?resize=480:*",
    drinkType: 7,
    percentage: 0,
    beerCategory: "",
    flavorText: "",
    allergies: "",
    available: true,
    price: 1.5,
    brewery: "",
  },
];
