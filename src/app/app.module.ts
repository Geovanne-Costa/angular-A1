import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import routerLinkEmptyExpression from '@angular/core/schematics/migrations/router-link-empty-expression';
import { RouterModule } from '@angular/router';
import { GeovanneComponent } from './geovanne/geovanne.component';
import { GeovanneListaComponent } from './geovanne-lista/geovanne-lista.component';
import { GeovanneDetalhesComponent } from './geovanne-detalhes/geovanne-detalhes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: GeovanneComponent },
      { path: 'lista', component: GeovanneListaComponent },
      { path: 'detalhes', component: GeovanneDetalhesComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    GeovanneComponent,
    GeovanneListaComponent,
    GeovanneDetalhesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
