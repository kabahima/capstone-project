import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VideoListComponent } from './video-list/video-list.component';
import { FeedItemComponent } from './video-share/video-share.component';
import { FeedUploadComponent } from './video-upload/video-upload.component';
import { FeedUploadButtonComponent } from './video-upload/video-upload-button/feed-upload-button.component';

import { FeedProviderService } from './services/video.provider.service';

const entryComponents = [FeedUploadComponent];
const components = [VideoListComponent, FeedItemComponent, FeedUploadComponent, FeedUploadButtonComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: components,
  exports: components,
  entryComponents: entryComponents,
  providers: [FeedProviderService]
})
export class FeedModule {}
