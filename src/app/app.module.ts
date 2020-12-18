import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectDropDownModule } from 'ngx-select-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { PublishComponentComponent } from './images-component/images-component.component';
import { InfoComponentComponent } from './info-component/info-component.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { LogInComponentComponent } from './log-in-component/log-in-component.component';
import { LogOutComponentComponent } from './log-out-component/log-out-component.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { TechnicalLearningComponentComponent } from './technical-learning-component/technical-learning-component.component';
import { TopTrendingComponentComponent } from './top-trending-component/top-trending-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponentComponent,
    ProfileComponentComponent,
    ArticleComponentComponent,
    InfoComponentComponent,
    PublishComponentComponent,
    MyNavComponent,
    TechnicalLearningComponentComponent,
    TopTrendingComponentComponent,
    LogInComponentComponent,
    LogOutComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SelectDropDownModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
