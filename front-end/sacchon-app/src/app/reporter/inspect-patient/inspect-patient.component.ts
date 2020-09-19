import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'sacchon-app-inspect-patient',
	templateUrl: './inspect-patient.component.html',
	styleUrls: ['./inspect-patient.component.scss']
})
export class InspectPatientComponent implements OnInit {

	constructor() { }
	dtOptions: DataTables.Settings = {};

	ngOnInit(): void {
		this.dtOptions = {
			pagingType: 'full_numbers'
		};
	}

}
