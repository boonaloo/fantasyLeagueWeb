import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {}

  async getNBARecords() {
    return this.http.get(`http://node-express-env.eba-pmjebpcq.us-east-2.elasticbeanstalk.com/v1/api/nba/teamRecords`);
  }


  async getNBATeams() {
    return this.http.get(`http://node-express-env.eba-pmjebpcq.us-east-2.elasticbeanstalk.com/v1/api/nba/teams`);
  }
}
