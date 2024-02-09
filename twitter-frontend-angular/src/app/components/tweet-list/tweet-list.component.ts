import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../models/tweet.model';
import { TweetService } from '../../services/tweet.service';
import { Observable, connectable, map, mergeMap, multicast, share, shareReplay, tap } from 'rxjs';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrl: './tweet-list.component.css'
})
export class TweetListComponent {

  tweets$: Observable<Tweet[]>;

  constructor(private tweetService: TweetService) {
    this.tweets$ = tweetService.findAll().pipe(shareReplay());
  }

  onNewTweet(tweet: Partial<Tweet>) {
    this.tweetService.save(tweet).subscribe(newTweet => this.tweets$ = this.tweets$.pipe(map(tweets => [ newTweet, ...tweets ])));
  }

  onDelete(t: Tweet) {
    this.tweetService.deleteById(t.id).subscribe(() => this.tweets$ = this.tweets$.pipe(
      map(tweets => { tweets.splice(tweets.findIndex(o => o.id === t.id), 1); return tweets; })
    ));
  }

}
