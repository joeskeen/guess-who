import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashmereModule } from './cashmere.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person.component';
import { MonsterIdPipe } from './monsterid.pipe';

@NgModule({
  declarations: [AppComponent, PersonComponent, MonsterIdPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CashmereModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
