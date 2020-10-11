import { NgModule } from '@angular/core';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    TruncatePipe
  ],
  exports: [
    TruncatePipe
  ],
  imports: [
  ],
  providers: []
})
export class SharedModule {}
