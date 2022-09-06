import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData} from '../models/login-data';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly mockUser: LoginData = new LoginData('user', 'user');
  public isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(loginData: LoginData): boolean {
    if (this.checkCredentials(loginData)) {
      this.isAuthenticated = true;
      console.log('home');
      this.router.navigate(['layout']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(loginData: LoginData): boolean {
    return this.checkLogin(loginData.getLogin()) && this.checkPassword(loginData.getPassword());
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

}
