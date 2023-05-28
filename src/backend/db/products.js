import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Alex Study Chair",
    img : "https://img.freepik.com/free-photo/furniture-modern-studio-lifestyle-green_1122-1837.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=sph",
    description : "A study chair is a comfortable and ergonomic seating option designed specifically for focused work and learning activities. It typically features a supportive backrest, adjustable height, and sometimes armrests, providing optimal posture and reducing strain on the body during extended study or work sessions.",
    price: "2999",
    isAddedToWish : false, 
    isAddedToCart : false, 
    categoryName: "Chair",
  },
  {
    _id: uuid(),
    title: "Pillow Chair",
    img : "https://img.freepik.com/free-psd/chair-pillow_176382-883.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=sph",
    description : "A pillow chair is a versatile and cushioned seating option that combines the comfort of a pillow with the functionality of a chair. It is designed to provide relaxation and support for activities like reading, watching TV, or lounging. The chair is usually soft and plush, offering a cozy and cozy seating experience.",
    price: "2600",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Chair",
  },
  {
    _id: uuid(),
    title: "Arm Chair",
    img : "https://img.freepik.com/free-vector/chair-realistic-illustration_1284-9507.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=sph",
    description : "An armchair is a luxurious and upholstered chair designed for comfort and relaxation. It typically features padded armrests and a deep seat, providing support and a cozy seating experience. Armchairs are often used in living rooms or study areas as a stylish and comfortable seating option for reading, lounging, or simply unwinding.",
    price: "7000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Chair",
  },

  {
    _id: uuid(),
    title: "Sofa",
    img : "https://img.freepik.com/free-photo/interior-design-with-photoframes-plants_23-2149385437.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=sph",
    description : "A sofa is a large, upholstered seating furniture designed for comfort and socializing. It typically consists of a backrest, armrests, and a cushioned seat. Sofas come in various styles, sizes, and materials, offering a versatile seating option for relaxation, entertaining guests, or lounging with family and friends.",
    price: "30000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Sofa",
  },
  {
    _id: uuid(),
    title: "Sofa",
    img : "https://img.freepik.com/free-photo/interior-lifestyle-decoration-room-white_1203-4467.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=sph",
    description : "A sofa is a large, upholstered seating furniture designed for comfort and socializing. It typically consists of a backrest, armrests, and a cushioned seat. Sofas come in various styles, sizes, and materials, offering a versatile seating option for relaxation, entertaining guests, or lounging with family and friends.",
    price: "45000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Chair",
  },
  {
    _id: uuid(),
    title: "Red Leather Sofa",
    img : "https://img.freepik.com/free-vector/red-leather-sofa-realistic-illustration_1284-12133.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=sph",
    description: "A red leather sofa is a striking and luxurious seating option that combines the vibrant color of red with the elegance of leather. It features a sleek and smooth leather upholstery, providing a sophisticated and bold statement piece for any living space. The red hue adds a pop of color and character to the overall decor.",
    price: "55000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Chair",
  },
  
  {
    _id: uuid(),
    title: "Sofa",
    img : "https://img.freepik.com/free-psd/elegant-gray-sofa-one-seater_176382-99.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=sph",
    description : "A sofa is a large, upholstered seating furniture designed for comfort and socializing. It typically consists of a backrest, armrests, and a cushioned seat. Sofas come in various styles, sizes, and materials, offering a versatile seating option for relaxation, entertaining guests, or lounging with family and friends.",
    price: "20000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Chair",
  },
  {
    _id: uuid(),
    title: "Sofa",
    img : "https://img.freepik.com/free-psd/double-bed-with-wooden-frame-white-sheets-isolated_176382-170.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=sph",
    description : "A sofa is a large, upholstered seating furniture designed for comfort and socializing. It typically consists of a backrest, armrests, and a cushioned seat. Sofas come in various styles, sizes, and materials, offering a versatile seating option for relaxation, entertaining guests, or lounging with family and friends.",
    price: "25000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Chair",
  },
  {
    _id: uuid(),
    title: "BED",
    img : "https://img.freepik.com/free-vector/mattress-bed-home-interior_1284-16869.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=ais",
    description : "Its a piece of furniture designed for sleeping and resting. It typically consists of a frame, a mattress, and sometimes a headboard. Beds come in various sizes, such as twin, queen, and king, and offer a comfortable and supportive surface for a good night's sleep and relaxation.",
    price: "15000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Bed",
  },
  {
    _id: uuid(),
    title: "Double Bed Wooden Furniture",
    img : "https://img.freepik.com/free-psd/cozy-bedroom-hotel-room-with-double-bed-wooden-furniture_176382-1530.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=ais",
    description : "A double bed wooden furniture is a sturdy and elegant sleeping option that provides ample space for two individuals. Crafted from high-quality wood, it features a durable frame, a supportive wooden headboard, and often comes with matching side tables. It adds warmth, style, and functionality to the bedroom decor.",
    price: "27000",
    isAddedToWish : false, 
    isAddedToCart : false ,
    categoryName: "Bed",
  },
  {
    _id: uuid(),
    title: "Chair",
    img : "https://img.freepik.com/free-psd/chair-pillow_176382-880.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=sph",
    description : "A simple chair is a minimalistic and functional seating option designed for basic sitting purposes. It typically consists of a seat, a backrest, and sometimes armrests. The design is straightforward and without elaborate embellishments, focusing on practicality and versatility. Simple chairs can be used in various settings, such as dining rooms, offices, or outdoor spaces.",
    price: "7000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Chair",
  },
  {
    _id: uuid(),
    title: "Coffee Table",
    img : "https://img.freepik.com/free-vector/round-wooden-table-circle-chairs-isolated-white_107791-3495.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=ais",
    description : "A coffee table is a low-lying table typically placed in the living room or lounge area. It serves as a convenient surface for placing beverages, magazines, books, or decorative items. Coffee tables come in various shapes, sizes, and materials, adding both functionality and style to the seating area of a room.",
    price: "17000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Bed",
  },
  {
    _id: uuid(),
    title: "Coffee Table",
    img : "https://img.freepik.com/free-photo/japandi-dining-room-interior-design-with-wooden-table_53876-126766.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=ais",
    description : "A coffee table is a low-lying table typically placed in the living room or lounge area. It serves as a convenient surface for placing beverages, magazines, books, or decorative items. Coffee tables come in various shapes, sizes, and materials, adding both functionality and style to the seating area of a room.",
    price: "3000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Bed",
  },
  {
    _id: uuid(),
    title: "Office Table",
    img : "https://img.freepik.com/free-photo/business-desk-concept-with-laptop_23-2149073032.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=ais",
    description : "An office table is a functional and essential piece of furniture designed for workspaces. It typically features a flat surface with ample space for a computer, documents, and other office supplies. Office tables often come with drawers or shelves for storage and organization, providing a practical and productive workspace for professionals.",
    price: "5000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Bed",
  },
  {
    _id: uuid(),
    title: "Mini Wardrobe",
    img : "https://img.freepik.com/free-photo/wooden-piece-furniture-interior_23-2148848665.jpg?size=626&ext=jpg&ga=GA1.1.701769884.1684604185&semt=sph",
    description : "An office table is a functional and essential piece of furniture designed for workspaces. It typically features a flat surface with ample space for a computer, documents, and other office supplies. Office tables often come with drawers or shelves for storage and organization, providing a practical and productive workspace for professionals.",
    price: "7000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Bed",
  },
  {
    _id: uuid(),
    title: "Wooden Wardrobe",
    img : "https://img.freepik.com/premium-photo/opened-classical-wooden-wardrobe-against-textured-wall_101296-577.jpg?size=626&ext=jpg&ga=GA1.2.701769884.1684604185&semt=sph",
    description : "An office table is a functional and essential piece of furniture designed for workspaces. It typically features a flat surface with ample space for a computer, documents, and other office supplies. Office tables often come with drawers or shelves for storage and organization, providing a practical and productive workspace for professionals.",
    price: "3000",
    isAddedToWish : false, 
    isAddedToCart : false,
    categoryName: "Bed",
  },
];




