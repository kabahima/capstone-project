import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoShareComponent } from './video-share.component';
import { videoShareMocks } from '../models/video-share.model';

describe('VideoShareComponent', () => {
  let component: VideoShareComponent;
  let fixture: ComponentFixture<VideoShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoShareComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoShareComponent);
    component = fixture.componentInstance;
    component.feedItem = videoShareMocks[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the videoshare url to the videoshare', () => {
    const app = fixture.nativeElement;
    const img = app.querySelectorAll('ion-img');
    expect(img.length).toEqual(1);
    expect(img[0].src).toEqual(videoshareMocks[0].url);
  });

  it('should display the Description', () => {
    const app = fixture.nativeElement;
    const paragraphs = app.querySelectorAll('p');
    expect(([].slice.call(paragraphs)).map((x) => x.innerText)).toContain(videoShareMocks[0].caption);
  });
});
