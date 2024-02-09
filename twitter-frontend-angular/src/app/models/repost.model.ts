import { Tweet } from "./tweet.model";

export interface Repost extends Tweet {
  original: Tweet;
}
