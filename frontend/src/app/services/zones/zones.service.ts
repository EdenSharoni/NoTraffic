import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Zone } from 'src/app/models/zone.interface';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZonesService {
  constructor(private http: HttpClient) {}

  public getZones$(): Observable<Zone[]> {
    console.log('GET ZONES...');
    return this.http
      .get<Zone[]>(`${environment.apiService}/zones`)
      .pipe(delay(1000));
  }

  public addZone$(zone: Zone): Observable<Zone> {
    console.log('ADDING ZONE...');
    const params = { name: zone.name, points: zone.points };
    return this.http.post<Zone>(`${environment.apiService}/zone`, params);
  }

  public deleteZone$(zone_id: number) {
    console.log('DELETING ZONE...');
    return this.http.delete(`${environment.apiService}/zone/${zone_id}`);
  }
}
