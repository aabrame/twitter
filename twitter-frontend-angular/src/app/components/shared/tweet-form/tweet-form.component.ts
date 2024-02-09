import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tweet } from '../../../models/tweet.model';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrl: './tweet-form.component.css'
})
export class TweetFormComponent {

  tweetFormGroup = new FormGroup({
    id: new FormControl(0, { nonNullable: true }),
    content: new FormControl('', { nonNullable: true, validators: Validators.required })
  });

  @Input() tweet?: Tweet;
  @Output() tweetSubmit = new EventEmitter<Partial<Tweet>>();

  ngOnChanges(): void {
    if (this.tweet)
      this.tweetFormGroup.patchValue(this.tweet);
  }

  onSubmit() {
    this.tweetSubmit.emit(this.tweetFormGroup.value);
    this.tweetFormGroup.patchValue({content: ''});
  }

}
