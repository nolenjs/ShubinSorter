import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatMenuModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatIconModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatMenuModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatMenuModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: []
})
export class MaterialModule { }
