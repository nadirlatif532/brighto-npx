import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public errorObjToMap(obj: object): Map<string, string> {
    let map = new Map<string, string>();
    Object.keys(obj).forEach(key => map.set(key, obj[key]));
    return map;
  }
}
