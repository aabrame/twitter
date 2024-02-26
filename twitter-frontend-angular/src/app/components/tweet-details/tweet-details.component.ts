import { Component } from '@angular/core';
import { Tweet } from '../../models/tweet.model';
import { Observable, map, mergeMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from '../../services/tweet.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrl: './tweet-details.component.css'
})
export class TweetDetailsComponent {

  tweet$: Observable<Tweet>;
  comments$?: Observable<Comment[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tweetService: TweetService
  ) {
    // 1 avec un tap
    this.tweet$ = this.activatedRoute.params.pipe(
      map(params => Number(params['id'])),
      mergeMap(id => this.tweetService.findById(id)),
      map(tweet => { tweet.views++; return tweet; }),
      tap(tweet => tweetService.incrementViews(tweet).subscribe()),
      tap(tweet => this.comments$ = tweetService.getComments(tweet)));
    // // 2 avec un mergemap
    // this.tweet$ = this.activatedRoute.params.pipe(
    //   map(params => Number(params['id'])),
    //   mergeMap(id => this.tweetService.findById(id)),
    //   map(tweet => { tweet.views++; return tweet; }),
    //   tap(tweet => tweetService.incrementViews(tweet).subscribe()),
    //   mergeMap(tweet => tweetService.getComments(tweet)
    //     .pipe(map(comments => {
    //       tweet.comments = comments;
    //       return tweet;
    //     })))
    // );
  }

}
