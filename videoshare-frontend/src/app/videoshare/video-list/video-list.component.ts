import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FeedItem } from '../models/video-share.model';
import { FeedProviderService } from '../services/video.provider.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
})
export class FeedListComponent implements OnInit, OnDestroy {
  @Input() feedItems: FeedItem[];
  subscriptions: Subscription[] = [];
  constructor( private feed: FeedProviderService ) { }

  async ngOnInit() {
    this.subscriptions.push(
      this.feed.currentFeed$.subscribe((items) => {
      this.feedItems = items;
    }));

    await this.feed.getFeed();
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
