import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Main imports
import { LoginComponent } from './auth/login/login.component';
import { MediDataRepoLoginComponent } from './auth/login/medi-data-repo-login/medi-data-repo-login.component';
import { DoctorAdviceLoginComponent } from './auth/login/doctor-advice-login/doctor-advice-login.component';
import { ReporterLoginComponent } from './auth/login/reporter-login/reporter-login.component';
import { ContentComponent } from './content/content.component';
import { PatientSignUpComponent } from './auth/signup/patient-sign-up/patient-sign-up.component';

const routes: Routes = [
	// Main routes
	{ path: '', component: ContentComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'login/medidatarepo', component: MediDataRepoLoginComponent },
	{ path: 'login/doctoradvice', component: DoctorAdviceLoginComponent },
	{ path: 'login/reporter', component: ReporterLoginComponent },
	{ path: 'signup', component: PatientSignUpComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
