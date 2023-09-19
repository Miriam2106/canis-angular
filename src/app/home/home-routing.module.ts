import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', loadChildren: () => import('../main/main.module').then((m) => m.MainModule) },
  { path: 'onboarding', loadChildren: () => import('../onboarding/onboarding.module').then((m) => m.OnboardingModule) },
  { path: 'acerca-de-nosotros', loadChildren: () => import('../about-us/about-us.module').then((m) => m.AboutUsModule) },
  { path: 'noticias', loadChildren: () => import('../news/news.module').then((m) => m.NewsModule) },
  { path: 'blog', loadChildren: () => import('../blog/blog.module').then((m) => m.BlogModule) },
  { path: 'home', loadChildren: () => import('../home/home.module').then((m) => m.HomeModule) },
  { path: 'comentarios', loadChildren: () => import('../comments/comments.module').then((m) => m.CommentsModule) },
  { path: 'contáctanos', loadChildren: () => import('../contact-us/contact-us.module').then((m) => m.ContactUsModule) },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
