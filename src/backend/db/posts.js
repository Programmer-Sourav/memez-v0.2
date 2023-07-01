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
    category: "ForYou"
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
    category: "ForYou"
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
      "Hey Folks, Here is a demo of the image upload in my application...",
    postContent: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/be/ec/eb.jpg",  
    resourceType: "image",
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
    resourceType: "video", 
    likes: {
      likeCount: 21,
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
      "Open AI under fire... A massive 150 page lawsuit has been filed against chat-gpt maker.",
    postContent: "https://images.indianexpress.com/2023/06/OpenAI-Lawsuit.jpg?w=640",  
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Technical XYZ",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    category: "technology"
  },
  {
    _id: uuid(),
    content:
      "Flying cars arriving soon: US government approves worlds 1st road-to-sky car",
    postContent: "https://images.indianexpress.com/2023/06/Alef-Flying-Car.jpg?w=640",  
    likes: {
      likeCount: 21,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Technical XYZ",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    category: "technology"
  },
  {
    _id: uuid(),
    content:
      "Former all-rounder Ajit Agarkar set to become chief selector as BCCI likely to hike annual salary",
    postContent: "https://images.indianexpress.com/2023/06/Agarkar.jpg?w=640",  
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ABCNews",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    category: "sports"
  },
  {
    _id: uuid(),
    content:
      "Mumbai continues to witness moderate to heavy rainfalls on Friday affecting the traffic movement in the city. ",
    postContent: "https://www.livemint.com/lm-img/img/2023/06/30/600x338/ANI-20230626114-0_1687839839237_1688090397257.jpg",  
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Foxnews",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    category: "news"
  },
  {
    _id: uuid(),
    content:
      "The aviation regulator Directorate General of Civil Aviation (DGCA) will conduct an special audit of crisis-hit Go First's facilities in Delhi and Mumbai from July 4 to 6, reported PTI.",
    postContent: "https://www.livemint.com/lm-img/img/2023/06/30/600x338/ANI-20230511097-0_1684720636278_1688135004613.jpg",  
    likes: {
      likeCount: 26,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ABC news",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    category: "news"
  },
  {
    _id: uuid(),
    content:
      "The aviation regulator Directorate General of Civil Aviation (DGCA) will conduct an special audit of crisis-hit Go First's facilities in Delhi and Mumbai from July 4 to 6, reported PTI.",
    postContent: "https://www.livemint.com/lm-img/img/2023/06/30/600x338/ANI-20230511097-0_1684720636278_1688135004613.jpg",  
    likes: {
      likeCount: 26,
      likedBy: [],
      dislikedBy: [],
    },
    username: "FOX news",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    category: "news"
  },
  {
    _id: uuid(),
    content:
      "Rain is likely to continue in northern parts of India for next 3 days",
    postContent: "https://www.livemint.com/lm-img/img/2023/06/30/600x338/ANI-20230511097-0_1684720636278_1688135004613.jpg",  
    likes: {
      likeCount: 26,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ABC news",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    category: "news"
  },
  {
    _id: uuid(),
    content:
      "A magnitude 6.5 earthquake struck Java in Indonesia on Friday.",
    postContent: "https://www.livemint.com/lm-img/img/2023/06/30/600x338/earthquake-tsunami_1653633400672_1688132290326.jpg",  
    likes: {
      likeCount: 21,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ABC news",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    category: "news"
  },
];