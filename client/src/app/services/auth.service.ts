import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  private url: string = "http://localhost:5000/user/";

  private authStatus = new BehaviorSubject(false);
  currentAuthStatus = this.authStatus.asObservable();
  private userData = new BehaviorSubject(null);
  currentUserData = this.userData.asObservable();
  private userOrdersData = new BehaviorSubject(null);
  currentUserOrdersData = this.userOrdersData.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  changeAuthStatus(auth) {
    this.authStatus.next(auth);
  }

  userDetails(user) {
    this.userData.next(user);
  }

  userOrdersDetails(orders) {
    this.userOrdersData.next(orders);
  }

  registerUser(user) {
    return this.http.post<any>(this.url + "register", user);
  }

  loginUser(user) {
    return this.http.post<any>(this.url + "login", user);
  }

  logoutUser() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getCurrentUser() {
    return this.http.get<any>("http://localhost:5000/shop/current");
  }
}
