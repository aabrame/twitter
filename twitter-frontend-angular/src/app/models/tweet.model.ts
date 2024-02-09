import { Comment } from "./comment.model";
import { Repost } from "./repost.model";
import { User } from "./user.model";

export interface Tweet {
  id: number;
  content: string;
  date: Date;
  views: number;
  type: 'TWEET' | 'COMMENT' | 'REPOST';
  author: User;
  comments: Comment[];
  reposts: Repost[];
  likes: User[];
}
