import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-lazy',
  template: `Lazy component`
})
class LazyComponent {}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent },
    ])
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
