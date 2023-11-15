import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.prod";
import { ErrorService } from "./error.service";
import {
  CdkDragDrop,
  CdkDropList,
  CdkDragPreview,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(
    private _http: HttpClient,
    private _error: ErrorService
  ) { }
  get(callback: (res: any) => void) {
    return this._http.get(`${environment.apiUrl}`).subscribe({
      next: (res) => {
        callback(res);
      },
      error: (err: HttpErrorResponse) => {
        this._error.errorHandler(err);
      }
    })
  }
}
