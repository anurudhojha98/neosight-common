import { NgModule } from '@angular/core';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';

import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [LoginComponent]
})
export class NeoCommonModule { }
