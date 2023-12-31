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
    bio: "Going to School!",
    avatar: "https://www.dolldivine.com/rinmaru/rinmaru-anime-avatar-creator-logo.jpg",
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
  {
    _id: uuid(),
    firstName: "Subham",
    lastName: "Soni",
    username: "subhamsoni",
    password: "adarshBalika123",
    bio: "Techie!",
    avatar: "https://www.dolldivine.com/rinmaru/rinmaru-anime-avatar-creator-logo.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Technical",
    lastName: "XYZ",
    username: "Technical XYZ",
    password: "technical123",
    bio: "Tech news!",
    avatar: "data:image/png;base64,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",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Fox",
    lastName: "news",
    username: "Foxnews",
    password: "Fox123",
    bio: "Tech news!",
    avatar: "https://play-lh.googleusercontent.com/TA1fIRwGKyTlAc3tpu_nPKZnwr5u1PN3W1glmtJzm1dCR-pzjXiqCEhC2QkLgGx9LW8=w600-h300-pc0xffffff-pd",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "ABC",
    lastName: "news",
    username: "ABCNews",
    password: "Abc123",
    bio: "Tech news!",
    avatar: "data:image/png;base64,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",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
