import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WevoUsersService } from './services/wevo-users.service';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', 
    component: AppComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,      
    ),
    HttpClientModule
  ],
  providers: [WevoUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
