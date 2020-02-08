import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{RouterModule} from '@angular/router';
import { ProdutsModule } from './products/produts.module';
import { UsersModule } from './users/users.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotfoundComponent 

    
  ],
  imports: [
     BrowserModule,
     FormsModule,
     HttpClientModule,
     CollapseModule.forRoot(),
     BrowserAnimationsModule,
     RouterModule.forRoot([{path:'welcome',component:WelcomeComponent},
     {path:'',redirectTo:'welcome',pathMatch:'full'},
     {path:'**',component:NotfoundComponent}

    ]),
     ProdutsModule,
     UsersModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* */