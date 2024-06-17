import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const storeDataContext = createContext({
  menCards: [],
  addToBag: () => {},
  productsData: [],
  WomenproductsData: [],
});

const MyntraStoreProvider = ({ children }) => {
  // *********** MEN Product Data ************

  const productsData = [
    {
      key: "01",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10331501/2023/8/31/68a5eb99-210a-4196-a52e-da62edd669551693465469757-US-Polo-Assn-Men-White--Grey-Colourblocked-Sneakers-48916934-11.jpg",
      brand: "U.S. Polo Assn",
      body: "Men ColourBlocked Sneakers",
      prize: "2099",
      rating: "4.3",
      peopleRated: "4K",
      discount: "30%",
      size: [5, 6, 7, 8, 9, 10],
      productDetail: [
        {
          color: "White & Gray",
          warranty: "1 year",
          material: "leather",
        },
      ],
    },
    {
      key: "02",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16936072/2024/4/2/4cea7689-53ac-4a3c-825b-d2d151338e991712039610354-U-S-Polo-Assn-Men-Navy-Blue-SPECTER-50-Sliders-1041712039610-13.jpg",
      brand: "U.S. Polo Assn",
      body: "Men Spectator 5.0 Slider",
      prize: "1039",
      rating: "5",
      peopleRated: "4.1K",
      discount: "40%",
      size: [5, 6, 7, 8, 9, 10],
      productDetail: [
        {
          color: "Blue",
          warranty: "1.5 year",
          material: "Syntheic",
        },
      ],
    },
    {
      key: "03",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11391306/2023/8/28/91f5242e-fbf2-433f-a256-aaa4a61ed99e1693219795031-US-Polo-Assn-Men-White--Black-Colourblocked-PANAL-Sneakers-4-6.jpg",
      brand: "U.S. Polo Assn",
      body: "Men ColourBlocked Sneakers",
      prize: "1949",
      rating: "4.7",
      peopleRated: "7.3K",
      discount: "20%",
      size: [5, 6, 7, 8, 9, 10],
      productDetail: [
        {
          color: "White & Black",
          warranty: "2 year",
          material: "leather",
        },
      ],
    },
    {
      key: "04",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15029470/2022/4/25/c4ccf4d9-bf4c-403b-af67-b86acd983bbb1650883882272USPoloAssnMenBlueSolidCLARKIN20Sneakers1.jpg",
      brand: "U.S. Polo Assn",
      body: "Men klarkin 2.0 Sneakers",
      prize: "1949",
      rating: "4.5",
      peopleRated: "5.2K",
      discount: "40%",
      size: [5, 6, 7, 8, 9, 10],
      productDetail: [
        {
          color: "Dark Blue",
          warranty: "3 year",
          material: "leather",
        },
      ],
    },
    {
      key: "05",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15002380/2023/8/28/91ad063e-1c43-47fa-b3a6-d187904a06051693219853874-U-S-Polo-Assn-Men-Black-Canvas-Sneakers-2231693219853726-6.jpg",
      brand: "U.S. Polo Assn",
      body: "Men ColourBlocked Sneakers",
      prize: "2099",
      rating: "4.8",
      peopleRated: "4.5K",
      discount: "50%",
      size: [5, 6, 7, 8, 9, 10],
      productDetail: [
        {
          color: "black & White",
          warranty: "2 year",
          material: "leather",
        },
      ],
    },
    {
      key: "06",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19181956/2022/10/10/9045040c-2edb-4f7e-a3f8-b3fa01c153401665404584685-U-S-Polo-Assn-Men-Black-Denver-Slim-Fit-Trousers-52166540458-1.jpg",
      brand: "U.S. Polo Assn",
      body: "Men Denver SlimFit Trauser",
      prize: "1819",
      rating: "4.9",
      peopleRated: "4.5K",
      discount: "20%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "black",
          warranty: "1 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "07",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23869702/2023/7/19/b8815d5f-d129-4c6c-95cd-28b6204e05fe1689746461674-US-Polo-Assn-Pure-Cotton-Tailored-Fit-Opaque-Casual-Shirt-24-1.jpg",
      brand: "U.S. Polo Assn",
      body: "Pure Cotton Casual Shirt",
      prize: "1319",
      rating: "4.9",
      peopleRated: "4.5K",
      discount: "20%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Mehroon",
          warranty: "1 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "08",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21491386/2023/1/11/7b7f3d5e-6036-426e-976d-36131a9ecb171673405501735USPoloAssnMenWhiteCasualShirt1.jpg",
      brand: "U.S. Polo Assn",
      body: "Cotton Casual Shirt",
      prize: "1264",
      rating: "4.5",
      peopleRated: "6.1K",
      discount: "30%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "White",
          warranty: "1 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "09",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23900946/2023/8/9/c97fc19e-7cbe-433c-8e8d-86343da307e11691562765511-US-Polo-Assn-Denim-Co-Men-Jeans-2811691562764990-1.jpg",
      brand: "U.S. Polo Assn",
      body: "Men Slim Straight Fit Jeans",
      prize: "1619",
      rating: "5",
      peopleRated: "5.1K",
      discount: "30%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Gray",
          warranty: "2 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "10",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19446004/2023/8/23/10a7a0d8-ded0-4cdd-84bf-858be27c9d831692786535325USPoloAssnMenNavyBlueSolidTailoredFitPureCottonCasualShirt1.jpg",
      brand: "U.S. Polo Assn",
      body: "Tailored Fit Casual Shirt",
      prize: "1379",
      rating: "4.6",
      peopleRated: "5.8K",
      discount: "10%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Blue",
          warranty: "2 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "11",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22568934/2023/9/26/86cc82e4-65a4-4552-83f4-2a7cbe7860251695712818099-Tommy-Hilfiger-Striped-Soft-Overnighter-Suitcase-Trolley-393-18.jpg",
      brand: "Tommy Hilfiger",
      body: "Striped Soft Overnighter Suitcase Trolley",
      prize: "2899",
      rating: "4.2",
      peopleRated: "268",
      discount: "10%",
      size: ["S"],
      productDetail: [
        {
          color: "Black",
          warranty: "1 year",
          material: "Polyester",
        },
      ],
    },
    {
      key: "12",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11698760/2023/1/18/289b2e7e-6091-4566-a606-fa22babf157e1674036868473TommyHilfigerUnisexNavyBlueYellowColourblockedDuffelBag1.jpg",
      brand: "Tommy Hilfiger",
      body: "Unisex Navy Blue & Yellow Colourblocked Duffel Bag",
      prize: "1223",
      rating: "4.7",
      peopleRated: "517",
      discount: "49%",
      size: ["One Size"],
      productDetail: [
        {
          color: "Blue & Yellow",
          warranty: "2 year",
          material: "Wipe with dry cloth",
        },
      ],
    },
    {
      key: "13",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23962398/2023/8/24/b89b904c-6b14-4066-82a9-331d8fb41e461692858580813-Tommy-Hilfiger-Men-Tshirts-2201692858580398-1.jpg",
      brand: "Tommy Hilfiger",
      body: "Pure Cotton Polo Collar Slim Fit Casual T-shirt",
      prize: "2759",
      rating: "4.5",
      peopleRated: "13",
      discount: "40%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Black",
          warranty: "2 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "14",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26566956/2024/1/9/897835b0-1b71-4ec8-b899-cb98c9dc348f1704801269242-Tommy-Hilfiger-Men-Tshirts-8861704801268921-1.jpg",
      brand: "Tommy Hilfiger",
      body: "Brand Logo Embroidered Drop-Shoulder Pure Cotton Oversized T-shirt",
      prize: "1679",
      rating: "4",
      peopleRated: "6",
      discount: "30%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Navy Blue",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "15",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23632570/2023/10/4/91ec9720-09e8-49b2-b610-297c8446d1f01696417843255-Tommy-Hilfiger-Men-Shirts-6661696417842867-1.jpg",
      brand: "Tommy Hilfiger",
      body: "Washed Pure Cotton Checked Casual Shirt",
      prize: "2759",
      rating: "4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "16",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23632728/2023/8/25/00fbe06c-0f9d-4607-9de5-cfeb672fa0881692947197068-Tommy-Hilfiger-Men-Shirts-3211692947196620-1.jpg",
      brand: "Tommy Hilfiger",
      body: "Brand Logo Printed Casual Shirt",
      prize: "2999",
      rating: "4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "17",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25779316/2023/11/8/720d6f7b-9d7d-4e7e-8584-4ed128a428a31699451953613TommyHilfigerMenNavyBlueCheckedFormalShirt1.jpg",
      brand: "Tommy Hilfiger",
      body: "Checked Pure Cotton Formal Shirt",
      prize: "2759",
      rating: "4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "18",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27236762/2024/1/30/6a957f48-77ff-4c14-a816-e51432c013851706602044173TommyHilfigerMenOpaqueFormalShirt1.jpg",
      brand: "Tommy Hilfiger",
      body: "Long Sleeves Pure Cotton Formal Shirt",
      prize: "3359",
      rating: "4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "19",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25780688/2023/11/8/96e4bca7-0c64-4f7e-a711-19ee6fcbe87c1699453057684TommyHilfigerMenBurgundyFormalShirt1.jpg",
      brand: "Tommy Hilfiger",
      body: "Spread Collar Pure Cotton Formal Shirt",
      prize: "3359",
      rating: "4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "20",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26613466/2024/2/21/7b60d5fe-af81-4440-9f55-de91496c0b601708501862542-Tommy-Hilfiger-Men-Shirts-2171708501862152-1.jpg",
      brand: "Tommy Hilfiger",
      body: "Pure Cotton Opaque Casual Shirt",
      prize: "2799",
      rating: "2.4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
  ];

  // *********** WOMEN Product Data ************

  const WomenproductsData = [
    {
      key: "001",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg",
      brand: "KALINI",
      body: "Kurta With Tousers and Dupatta",
      prize: "737",
      rating: "4.3",
      peopleRated: "4K",
      discount: "30%",
      size: [5, 6, 7, 8, 9, 10],
      productDetail: [
        {
          color: "Pink",
          warranty: "1 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "002",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23158876/2023/10/4/ba6838bf-93c1-47d0-8948-790b3727f5711696415342531-anayna--Anarkali-Pure-Cotton-Kurta-With-Trousers--Dupatta-45-12.jpg",
      brand: "Ananya",
      body: "Anarkali Pure Cotton Kurta With Trousers & Dupatta",
      prize: "1467",
      rating: "5",
      peopleRated: "4.1K",
      discount: "40%",
      size: [5, 6, 7, 8, 9, 10],
      productDetail: [
        {
          color: "Pink",
          warranty: "1.5 year",
          material: "cotton",
        },
      ],
    },
    {
      key: "003",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26546814/2023/12/20/b9fca135-3e56-492d-ac88-d1ab137f5d691703059441739KALINIWomenPinkRegularKurtawithTrousersWithDupatta1.jpg",
      brand: "KALINI",
      body: "Regular Kurta with Trousers & With Dupatta",
      prize: "760",
      rating: "2.5",
      peopleRated: "2K",
      discount: "20%",
      size: [5, 6, 7, 8, 9, 10],
      productDetail: [
        {
          color: "Pink",
          warranty: "2 year",
          material: "cotton",
        },
      ],
    },
    {
      key: "004",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20695836/2022/11/10/ba1724c2-c606-481c-a0ca-63424b61a8661668078028270WomensRayonPrintedEmbroideredKurtaWithPantAndDupatta1.jpg",
      brand: "SINGNI",
      body: "Women Purple Ethnic Motifs Embroidered Mirror Work Kurta with Trousers & Dupatta",
      prize: "839",
      rating: "4.5",
      peopleRated: "5.2K",
      discount: "40%",
      size: [5, 6, 7, 8, 9, 10],
      productDetail: [
        {
          color: "Dark Blue",
          warranty: "3 year",
          material: "leather",
        },
      ],
    },
    {
      key: "005",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25234310/2023/9/26/d6241239-dca6-4347-b0e9-f8b57181d25d1695713495036KurtaSets1.jpg",
      brand: "KALINI",
      body: "Floral Printed Anarkali Pure Cotton Kurta with Trousers & With Dupatta",
      prize: "1297",
      rating: "4.8",
      peopleRated: "4.5K",
      discount: "50%",
      size: [5, 6, 7, 8, 9, 10],
      productDetail: [
        {
          color: "black & White",
          warranty: "2 year",
          material: "leather",
        },
      ],
    },
    {
      key: "006",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28010226/2024/3/4/e5ca37b0-8307-4ef1-b904-8175620893db1709546334858KALINIWomenBeigePrintedStraightKurtawithTrousers1.jpg",
      brand: "KALINI",
      body: "Floral Printed V-Neck A-Line Kurta with Trouser",
      prize: "766",
      rating: "4.9",
      peopleRated: "4.5K",
      discount: "20%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "black",
          warranty: "1 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "007",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25405732/2023/10/9/286fd863-0275-4bac-ae1d-1f129edbc00a1696825687422KALINIWomenVioletEmbroideredStraightKurtawithTrouserDupatta1.jpg",
      brand: "KALINI",
      body: "Floral Embroidered Regular Kurta With Trousers & Dupatta",
      prize: "737",
      rating: "4.9",
      peopleRated: "4.5K",
      discount: "20%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Mehroon",
          warranty: "1 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "008",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26975612/2024/1/14/2ce65770-686e-4041-b533-44dab683800a1705241974914ANOUKCottonYellowKurtawithPatialaandDupatta6.jpg",
      brand: "Anouk",
      body: "Floral Yoke Design Pure Cotton Straight Kurta With Patiala & Dupatta",
      prize: "1379",
      rating: "4.5",
      peopleRated: "6.1K",
      discount: "30%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "White",
          warranty: "1 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "009",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260136/2023/9/29/584e3bfb-0f4f-408f-89b1-4b5a04b710c51695970415815KALINIWomenBlueEthnicMotifsYokeDesignRegularKurtawithTrouser1.jpg",
      brand: "KALINI",
      body: "Shibori Dyed Regular Kurta with Trousers & Dupatta",
      prize: "737",
      rating: "5",
      peopleRated: "5.1K",
      discount: "30%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Gray",
          warranty: "2 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "0010",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21334304/2023/10/4/10d96212-4d28-447f-8ab7-cd15b91e503f1696406650695-anayna-Red-Floral-Ethnic-A-Line-Cotton-Midi-Ethnic-Dress-764-6.jpg",
      brand: "Ananya",
      body: "Red Floral Ethnic A-Line Cotton Midi Ethnic Dress",
      prize: "809",
      rating: "4.6",
      peopleRated: "5.8K",
      discount: "10%",
      size: ["S", "M", "L", "XL", "XXL"],
      productDetail: [
        {
          color: "Blue",
          warranty: "2 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "0011",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24210976/2023/7/26/8b2f3a33-c01c-4d11-b9ee-20836111dd2b1690376720692RENEESeeMeShineLipGloss-StarOfFrost25ml1.jpg",
      brand: "Renee",
      body: "See Me Shine Transparent Lip Gloss - 2.5ml - Star Of Frost",
      prize: "301",
      rating: "4.2",
      peopleRated: "268",
      discount: "10%",
      size: ["none"],
      productDetail: [
        {
          color: "Black",
          warranty: "1 year",
          material: "Polyester",
        },
      ],
    },
    {
      key: "0012",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14270222/2022/8/10/d32d2880-4f42-400f-8204-95567954c3e81660129096237ReneeSeeMeShineLipGloss-PinkPowWow25ml1.jpg",
      brand: "Renee",
      body: "See Me Shine Lip Gloss - Pink Pow Wow 2.5ml",
      prize: "301",
      rating: "4.7",
      peopleRated: "517",
      discount: "49%",
      size: ["none"],
      productDetail: [
        {
          color: "Blue & Yellow",
          warranty: "2 year",
          material: "Wipe with dry cloth",
        },
      ],
    },
    {
      key: "0013",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23790978/2023/6/28/143f10c9-4269-406a-938f-d030216c5db61687947375793RENEEHotLipsClearLipGloss45ml1.jpg",
      brand: "Renee",
      body: "Hot Lips Clear Lip Gloss with Vitamin E - 4.5ml",
      prize: "197",
      rating: "4.5",
      peopleRated: "13",
      discount: "40%",
      size: ["3.5ml"],
      productDetail: [
        {
          color: "Black",
          warranty: "2 year",
          material: "Cotton",
        },
      ],
    },
    {
      key: "0014",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2230635/2024/5/21/9281d758-42ab-4945-91bf-b92e868f18611716273425280-Maybelline-New-York-Super-Stay-Matte-Ink-Liquid-Lipstick-5-m-1.jpg",
      brand: "Maybelline",
      body: "New York Super Stay Matte Ink Liquid Lipstick 5 ml - Lover 15",
      prize: "469",
      rating: "4",
      peopleRated: "6",
      discount: "30%",
      size: ["4-5 ML"],
      productDetail: [
        {
          color: "Navy Blue",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "0015",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20292946/2023/9/12/3943353a-d3ba-4e44-83e3-23f7ba4858611694508982102-LOreal-Paris-Infallible-24H-Fresh-Wear-Waterproof-Powder-Fou-1.jpg",
      brand: "LOreal",
      body: "Paris Infallible 24H Fresh Wear Waterproof Powder Foundation 9g- Golden Beige 140",
      prize: "1044",
      rating: "4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["One Size"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "0016",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/55118/2024/2/13/d2d11015-f080-4096-85d5-6a4df63bfab61707819921677-Lakme-Absolute-Mattreal-Skin-Natural-Mousse-with-SPF-8---Ivo-1.jpg",
      brand: "Lakme",
      body: "Xtraordin-airy Mattereal Mousse Foundation, Matte Finish - 01 Classic Ivory, 25g",
      prize: "719",
      rating: "4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["20-25 ML"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "0017",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14940628/2023/3/23/6295f533-1e25-407e-a401-9d41070db0a91679562101565-Maybelline-Sensational-Liquid-Matte-Lipstick---21-Nude-Nuanc-1.jpg",
      brand: "Maybelline",
      body: "New York Sensational Liquid Matte Lipstick - 21 Nude Nuance - 7ml",
      prize: "244",
      rating: "4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["6-8 ML"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "0018",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22212908/2023/3/6/6e7727d9-d722-431a-b80e-ab77069660c81678084958451BlueHeavenSetOf4MinisButMightyHyperstayLiquidLipsticks6ml-Ma1.jpg",
      brand: "Blue Heaven",
      body: "Set Of 10 Matte Love Long Lasting Hydrating Mini Lipsticks - 1.3g Each",
      prize: "299",
      rating: "4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["10-15 ML"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "0019",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13105508/2024/2/13/e9fe640a-d75e-41ab-a3c3-f37f11c3a4ca1707820058429-Lakme-Eyeconic-Liquid-Eyeliner-45-ml---Black-808170782005802-1.jpg",
      brand: "Lakme",
      body: "9 to 5 Eyeconic Liquid Eyeliner Smudgeproof, Waterproof - Black, 4.5 ml",
      prize: "234",
      rating: "4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["3-5 ML"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
    {
      key: "0020",
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/6610914/2024/5/2/67d3ccdf-a887-4978-af45-c7cdea19a65f1714651251032GarnierMicellarWater-GentleCleanserForSensitiveSkinGet100Cle1.jpg",
      brand: "Garnier",
      body: "Micellar Water-Gentle Cleanser For Sensitive Skin, Get 100% Clean Skin-125ml",
      prize: "169",
      rating: "2.4",
      peopleRated: "5.4K",
      discount: "40%",
      size: ["120-140 ML"],
      productDetail: [
        {
          color: "Navy blue tartan checks opaque Casual shirt",
          warranty: "2 year",
          material: "100% Cotton",
        },
      ],
    },
  ];

  // ************** NAV Data ***************

  const navData = [
    {
      name: "MEN",
      to: "/Men-Shopping",
    },
    {
      name: "WOMEN",
      to: "/Women-Shopping",
    },
    {
      name: "KIDS",
      to: "/Kids-Shopping",
    },
    {
      name: "HOME & LIVING",
      to: "/Men-Shopping",
    },
    {
      name: "BEAUTY",
      to: "/Men-Shopping",
    },
    {
      name: "STUDIO",
      to: "/Men-Shopping",
    },
  ];

  // ******* costumer policies footer data ***************
  const costumerPolicy = [
    "contact us",
    "FAQ",
    "T&C",
    "term of use",
    "track order",
    "shipping",
    "cancellaion",
    "returns",
    "privacy policy",
  ];

  const navigator = useNavigate();

  // ******* MEN CARDS ITEM ********************

  //  const menItemsData = [
  //   {
  //     key: "01",
  //     img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10331501/2023/8/31/68a5eb99-210a-4196-a52e-da62edd669551693465469757-US-Polo-Assn-Men-White--Grey-Colourblocked-Sneakers-48916934-11.jpg",
  //     brand: "U.S. Polo Assn",
  //     body: "Men ColourBlocked Sneakers",
  //     prize: "Rs. 2099"
  //   },
  //   {
  //     key: "02",
  //     img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16936072/2024/4/2/4cea7689-53ac-4a3c-825b-d2d151338e991712039610354-U-S-Polo-Assn-Men-Navy-Blue-SPECTER-50-Sliders-1041712039610-13.jpg",
  //     brand: "U.S. Polo Assn",
  //     body: "Men Spectator 5.0 Slider",
  //     prize: "Rs. 1039"
  //   },
  //   {
  //     key: "03",
  //     img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11391306/2023/8/28/91f5242e-fbf2-433f-a256-aaa4a61ed99e1693219795031-US-Polo-Assn-Men-White--Black-Colourblocked-PANAL-Sneakers-4-6.jpg",
  //     brand: "U.S. Polo Assn",
  //     body: "Men ColourBlocked Sneakers",
  //     prize: "Rs. 1949"
  //   },
  //   {
  //     key: "04",
  //     img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15029470/2022/4/25/c4ccf4d9-bf4c-403b-af67-b86acd983bbb1650883882272USPoloAssnMenBlueSolidCLARKIN20Sneakers1.jpg",
  //     brand: "U.S. Polo Assn",
  //     body: "Men klarkin 2.0 Sneakers",
  //     prize: "Rs. 1949"
  //   },
  //   {
  //     key: "05",
  //     img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15002380/2023/8/28/91ad063e-1c43-47fa-b3a6-d187904a06051693219853874-U-S-Polo-Assn-Men-Black-Canvas-Sneakers-2231693219853726-6.jpg",
  //     brand: "U.S. Polo Assn",
  //     body: "Men ColourBlocked Sneakers",
  //     prize: "Rs. 2099"
  //   }
  // ]

  // ******************** add to bag Reducer **********************

  const bagItemReducer = (currentBagItems, action) => {
    let newBagItems = currentBagItems;
    if (action.type === "ADD_TO_BAG") {
      newBagItems = [action.payload, ...currentBagItems];
    } else if (action.type === "DELETE_TO_CART") {
      newBagItems = currentBagItems.filter(
        (bagItems) => action.payload !== bagItems.key
      );
    }
    return newBagItems;
  };

  // ************ Single Product Reducer *********

  const singleProductReducer = (currentSingleProduct, action) => {
    let newSingleProduct = currentSingleProduct;

    if (action.type === "ADD_SINGLE_PRODUCT") {
      newSingleProduct = [action.payload];
    }
    return newSingleProduct;
  };

  // ***** Add To Cart ****************

  const addToBag = (menCardsItems) => {
    if (bagItems.includes(menCardsItems)) {
      return toast.warn("Item Already Exist In The Cart");
    } else {
      dispatchBagItems({
        type: "ADD_TO_BAG",
        payload: menCardsItems,
      });
    }
    toast.success("Product Added To Cart!!!");
  };

  // ******** Remove from cart *************

  const removeToCart = (menCardsItems) => {
    dispatchBagItems({
      type: "DELETE_TO_CART",
      payload: menCardsItems.key,
    });
    toast.info("Product Removed From Cart!!");
  };

  // *************** Add Single Products ************

  const getSingleProducts = (menCardsItems) => {
    dispatchSingleProduct({
      type: "ADD_SINGLE_PRODUCT",
      payload: menCardsItems,
    });
    navigator("/single-products");
  };

  // ********* Local storage ***************

  // const getLocalBagData = () => {
  //   let localData = localStorage.getItem("BAG_VALUE");
  //   if (localData == []) {
  //     return [];
  //   } else {
  //     return JSON.parse(localData);
  //   }
  // };

  // ******** Add to Bag Reducer ***********

  const INITIAL_BAG_ITEMS = [];

  const [bagItems, dispatchBagItems] = useReducer(
    bagItemReducer,
    INITIAL_BAG_ITEMS
  );

  // *********** Single Products Page Reducer *************

  const [singleProduct, dispatchSingleProduct] = useReducer(
    singleProductReducer,
    INITIAL_BAG_ITEMS
  );

  // ************ Set items to local storage **************

  // useEffect(() => {
  //   localStorage.setItem("BAG_VALUE", JSON.stringify(bagItems));
  // }, [bagItems]);

  return (
    <storeDataContext.Provider
      value={{
        addToBag,
        bagItems,
        removeToCart,
        getSingleProducts,
        singleProduct,
        productsData,
        navData,
        costumerPolicy,
        WomenproductsData,
      }}
    >
      {children}
    </storeDataContext.Provider>
  );
};

export default MyntraStoreProvider;

// ******************** Cards Loader Through API *****************8

// export const menLoaderCards = () => {
//   return fetch("http://localhost:8080/items")
//     .then((res) => res.json())
//     .then((data) => {
//       return data.items;
//     });
// };
