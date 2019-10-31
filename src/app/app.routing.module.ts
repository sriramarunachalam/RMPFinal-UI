import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RoleGuardService} from './_services/role-guard.service';
import {UnauthComponent} from './unauth/unauth.component';
import {ListOfRequestComponent} from './list-of-request/list-of-request.component';
import {AccountComponent} from './account/account.component';
import {CompetencyComponent} from './competency/competency.component';
import {RMGComponent} from './rmg/rmg.component';

const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'Home', component: HomeComponent},
    {path: 'RequestList', component: ListOfRequestComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'Competency', component: CompetencyComponent},
    {path: 'RMG', component: RMGComponent},
    {
      path: 'Register',
      component: RegisterComponent,
    },
    {path: '404', component: UnauthComponent}

    // Create the Routes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Initialize the Routes
    providers: [RoleGuardService],
    exports: [RouterModule]   // Export the routes.
})

export class AppRoutingModule {}
// Export the ApproutingModule so that, We can use it in the App Module.
