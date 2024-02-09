import { Tweet } from "./tweet.model";

export interface Comment extends Tweet {
  subject: Tweet;
}
