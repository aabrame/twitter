import { Component } from '@angular/core';
import { Tweet } from '../../models/tweet.model';
import { Observable, map, mergeMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrl: './tweet-details.component.css'
})
export class TweetDetailsComponent {

  tweet$?: Observable<Tweet>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tweetService: TweetService
  ) {
    this.tweet$ = this.activatedRoute.params.pipe(
      map(params => Number(params['id'])),
      mergeMap(id => this.tweetService.findById(id)));
  }

}
