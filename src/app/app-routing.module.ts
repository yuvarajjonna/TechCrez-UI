import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublishComponentComponent } from '../app/images-component/images-component.component';
import { InfoComponentComponent } from '../app/info-component/info-component.component';
import { LandingComponentComponent } from '../app/landing-component/landing-component.component';
import { ProfileComponentComponent } from '../app/profile-component/profile-component.component';
import { ArticleComponentComponent } from '../app/article-component/article-component.component';
import { TopTrendingComponentComponent } from '../app/top-trending-component/top-trending-component.component';
import { TechnicalLearningComponentComponent } from '../app/technical-learning-component/technical-learning-component.component';
import { LogInComponentComponent } from '../app/log-in-component/log-in-component.component';
import { LogOutComponentComponent } from '../app/log-out-component/log-out-component.component'

const routes: Routes = [
  { path: '', redirectTo: '/Landing', pathMatch: 'full' },
  { path: 'Landing', component: LandingComponentComponent },
  { path: 'portfolio', component: ProfileComponentComponent },
  { path: 'articles', component: ArticleComponentComponent },
  { path: 'notes', component: InfoComponentComponent },
  { path: 'technicalLearning', component: TechnicalLearningComponentComponent },
  { path: 'trending', component: TopTrendingComponentComponent },
  { path: 'Publish', component: PublishComponentComponent },
  { path: 'signin', component: LogInComponentComponent },
  { path: 'signup', component: LogOutComponentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}