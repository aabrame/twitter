import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tweet } from '../../../models/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.css'
})
export class TweetComponent {

  @Input() tweet?: Tweet;
  @Input() showReplies = false;
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
