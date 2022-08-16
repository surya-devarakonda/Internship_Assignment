import { Injectable } from '@angular/core';
import {Form} from '../app/responses/responses'
@Injectable({
  providedIn: 'root'
})


export class ResponsesService {
 res:Form[] = []
  constructor() { }
}
