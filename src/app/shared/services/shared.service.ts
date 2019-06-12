import { Injectable } from "@angular/core";
import { environment as env } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  baseUrl = env.baseUrl;
  constructor() {}

  public errorObjToMap(obj: object): Map<string, string> {
    let map = new Map<string, string>();
    Object.keys(obj).forEach(key => map.set(key, obj[key]));
    return map;
  }

  public publicURL() {
    return this.baseUrl;
  }
}
