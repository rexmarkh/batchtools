import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { BatchtoolsComponent } from '../components/batchtools/batchtools.component';
import { DatatablesComponent } from '../components/datatables/datatables.component';



export const Approute:Routes = [
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'datatables',
		component: DatatablesComponent
	},
	{
		path: 'batchtools',
		component: BatchtoolsComponent
	}
];