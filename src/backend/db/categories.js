import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sofas",
    imgUrl:"https://img.freepik.com/free-psd/two-seater-gray-sofa-with-two-cushions-isolated_176382-98.jpg?size=626&ext=jpg&ga=GA1.2.575613539.1683106157&semt=sph"
  
  },
  {
    _id: uuid(),
    categoryName: "Bed",
    imgUrl:"https://img.freepik.com/free-psd/cozy-bedroom-hotel-room-with-double-bed-wooden-furniture_176382-1511.jpg?size=626&ext=jpg&ga=GA1.1.575613539.1683106157&semt=sph",
  },
  {
    _id: uuid(),
    categoryName: "Chairs",
    imgUrl:"https://img.freepik.com/free-photo/blue-dining-room-chair-room-with-gray-walls_181624-30422.jpg?size=626&ext=jpg&ga=GA1.2.575613539.1683106157&semt=sph",
  },
  {
    _id: uuid(),
    categoryName: "Wardrobe",
    imgUrl:"https://img.freepik.com/free-photo/wooden-piece-furniture-interior_23-2148848665.jpg?size=626&ext=jpg&ga=GA1.2.575613539.1683106157&semt=ais",
  },
  {
    _id: uuid(),
    categoryName: "Tables",
    imgUrl:"https://img.freepik.com/free-photo/business-desk-concept-with-laptop_23-2149073032.jpg?size=626&ext=jpg&ga=GA1.1.575613539.1683106157&semt=ais",
  },
  {
    _id: uuid(),
    categoryName: "Dinning Table",
    imgUrl:"https://img.freepik.com/free-psd/table-with-tablecloth-chairs_176382-666.jpg?size=626&ext=jpg&ga=GA1.2.575613539.1683106157&semt=ais",
  },
];
