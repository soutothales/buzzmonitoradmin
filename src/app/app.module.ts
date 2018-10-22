import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule,
        MatSlideToggleModule, MatListModule, MatCheckboxModule, MatProgressBarModule,
        MatGridListModule, MatSelectModule, MatProgressSpinnerModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
