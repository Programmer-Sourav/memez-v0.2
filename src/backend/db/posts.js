import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "This is the second dummy post by Adarshbalika... Authenticated User.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 2,
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: "06/12/2023",
  },
  {
    _id: uuid(),
    content:
      "One bad day doesn't determine your next day",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Aniruddha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "This is a test post. Loren ipsum ... Loren ipsum... Loren ipsum.....",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Sukanta",
    createdAt: formatDate(),
    updatedAt: "06/10/2023",
  },
  {
    _id: uuid(),
    content:
      "How are you all... Have you watched Pathan? ",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Sahurukh",
    createdAt: formatDate(),
    updatedAt: "06/16/2023",
  },
  {
    _id: uuid(),
    content:
      "Wanted to watch Adipurush. But, the reviews demoralized me.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Sujoy",
    createdAt: formatDate(),
    updatedAt: "06/11/2023",
  },
  {
    _id: uuid(),
    content:
      "Hopefully, it is going to be a good movie to watch specially with everyone's partner!!!...Who all are in?",
    postContent: "https://www.newsbugz.com/wp-content/uploads/2022/08/Satyaprem-Ki-Katha-Movie-1.jpg",  
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Sujoy",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Dream Car!!!!",
    postContent: "https://res.cloudinary.com/ds0k2xmd6/video/upload/v1687849791/jqa6ftk1grec6guoqzov.mp4",  
    likes: {
      likeCount: 21,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Sujoy",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];