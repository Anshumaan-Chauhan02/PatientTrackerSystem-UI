import {CommonModule, LocationStrategy} from '@angular/common';
import { Component } from '@angular/core';
import { APPOINTMENTS } from "../app.component";
import {AppointmentServiceService} from "../services/appointment-service.service";

@Component({
  standalone: true,
  selector: 'app-doctor-upcoming-app',
  templateUrl: './doctor-upcoming-app.component.html',
  styleUrls: ['./doctor-upcoming-app.component.css'],
  imports: [CommonModule]
})
export class DoctorUpcomingAppComponent {
  Appointments: APPOINTMENTS[] = [];
  constructor(private platformLocation: LocationStrategy, private appointmentService: AppointmentServiceService){
    console.log(location.href);
    history.pushState(null, '', location.href);
    this.platformLocation.onPopState(() => {
      history.pushState(null, '', location.href)
    });
  }

  ngOnInit(){
    const id = localStorage.getItem('user_id') ?? "-1"
    this.appointmentService.view_future(id, 'doctor').subscribe(
      (response) => {
        this.Appointments = response.body
      },
      (err) => {
        console.log('error is: ', err)
      }
    )
  }
}
