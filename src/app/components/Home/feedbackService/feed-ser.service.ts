import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedbackModel } from './feedback-model';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private mailApi = 'https://mailthis.to/InfoInno'

  constructor(private http: HttpClient) { }

  PostMessage(input: FeedbackModel) {
    return this.http.post(this.mailApi, input, { responseType: 'text' })
      .pipe(
        tap(
          (response) => response))  
  }

}