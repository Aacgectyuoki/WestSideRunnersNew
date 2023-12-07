import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MembershipComponent } from './membership/membership.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TrainingComponent } from './training/training.component';
import { RecordsComponent } from './records/records.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { BREAKPOINT } from '@angular/flex-layout';

// const CUSTOM_BREAKPOINTS = [
//   {
//     alias: 'sm',
//     mediaQuery: 'screen and (min-width: 600px) and (max-width: 959px)',
//   },
//   {
//     alias: 'gt-xs',
//     overlapping: true,
//     mediaQuery: 'screen and (min-width: 800px)'
//   },
//   // ... other custom breakpoints if needed ...
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    MembershipComponent,
    SponsorsComponent,
    TrainingComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    // {
    //   provide: BREAKPOINT,
    //   useValue: CUSTOM_BREAKPOINTS,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
