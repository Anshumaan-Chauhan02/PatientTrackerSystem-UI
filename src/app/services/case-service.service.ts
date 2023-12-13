import { Injectable } from '@angular/core';
import { BASE_RESPONSE, CASES, UPDATE_CASE } from "../app.component";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseServiceService {

  constructor(private http: HttpClient) { }

  // public get_case_by_user(user_type: String, user_id: Number){
  //   let params = new HttpParams();
  //   params.append('param1', user_type.toString());
  //   params.append('param2', user_id.toString());
  //   return this.http.get<any>('localhost:8080/cases/user-cases', {params: params})
  // }

  public open_patient_doctor_cases(patient_id: Number, doctor_id: Number): Observable<any>{
    return this.http.get<any>('localhost:8080/cases/open-cases?patientId='+patient_id+'&doctorId='+doctor_id)
  }

  public get_monthly_cases(doctor_id: String, year: Number): Observable<any>{
    const bearerToken = localStorage.getItem("bearer_token") ?? '';
    let headers = new HttpHeaders().set('Authorization', bearerToken);
    return this.http.get<any>('/cases/monthly?doctorId='+doctor_id+'&year=2023', {headers})
  }

  public update_case(details: UPDATE_CASE): Observable<any>{
    return this.http.post<any>('localhost:8080/cases/update', details)
  }

  public get_cases_for_user(id: String, userType: String): Observable<BASE_RESPONSE> {
    let body = {'id': id, 'userType': userType}
    const bearerToken = localStorage.getItem("bearer_token") ?? '';
    let headers = new HttpHeaders().set('Authorization', bearerToken);
    return this.http.post<BASE_RESPONSE>('/cases/user-cases', body, { headers })
  }
}
