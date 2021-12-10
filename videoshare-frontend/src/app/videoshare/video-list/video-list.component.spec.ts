import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListComponent } from './video-list.component';
import { FeedProviderService } from '../services/video.provider.service';
import { feedItemMocks } from '../models/video-share.model';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;
  let feedProvider: FeedProviderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);

    // SET UP SPIES AND MOCKS
    feedProvider = fixture.debugElement.injector.get(FeedProviderService);
    // spyOn(feedProvider, 'fetch').and.returnValue(Promise.resolve(feedItemMocks));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch on load', () => {
    expect(feedProvider.getFeed).toHaveBeenCalled();
  });

  it('should display all of the fetched items', () => {
    component.feedItems = feedItemMocks;
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const items = app.querySelectorAll('app-feed-item');
    expect(items.length).toEqual(feedItemMocks.length);
  });
});
