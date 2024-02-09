import { Tweet } from "./tweet.model";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  type: 'CLIENT' | 'ADMIN';
  tweets: Tweet[];
  liked: Tweet[];
}
