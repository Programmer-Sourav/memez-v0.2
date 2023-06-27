import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {_id: uuid(), 
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    password: "testUser123",
    bio: "I am here to conquer the space.",
    avatar:
      "data:image/jpeg;base64,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",
    website: "https://www.elonmusk.xyz.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sourav",
    lastName: "Nath",
    username: "souravnath",
    password: "souravnath",
    bio: "Interested in creation.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiM2IX1IVjjGeSLXbzqs12yMxB0b0NMJPBZYYsuvKJtNbUWtYD2fClrQ9YTWKNvhxAMw&usqp=CAU",
    website: "https://github.com/Programmer-Sourav/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ayushman",
    lastName: "khurana",
    username: "aysuhman",
    password: "aysh123",
    bio: "Born to Act.",
    avatar:
      "data:image/png;base64,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",
    website: "https://www.ayushmank.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sahurukh",
    lastName: "khan",
    username: "sahurukh",
    password: "kingkhan123",
    bio: "King of Acting.",
    avatar:
      "https://www.shutterstock.com/image-illustration/bandung-indonesia-may-18-2023-260nw-2304867377.jpg",
    website: "https://www.kingsrk.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Aniruddha",
    lastName: "Pal",
    username: "Aniruddha",
    password: "ani123",
    bio: "Motivator",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpclgdZQ3ZHBh6xTt4wlROP30NE_GY7MdVw&usqp=CAU",
    website: "https://www.anispeaker.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sukanta",
    lastName: "Pal",
    username: "Sukanta",
    password: "sukanta",
    bio: "Tester",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
    website: "https://www.sukantagreat.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sujoy",
    lastName: "Das",
    username: "Sujoy",
    password: "sujoyd123",
    bio: "Movie buff and dreamer.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9UI1y4Shr253ibETjPCOWNBWWpKgQsVKaw&usqp=CAU",
    website: "https://www.sujoyd.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
