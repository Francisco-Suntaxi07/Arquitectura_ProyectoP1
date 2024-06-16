import { Injectable } from '@angular/core';
import { UserModel } from '../model/userModel';
import { CreatorModel } from '../model/creatorModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserKey = 'currentUser';

  constructor() { }

  // Método para iniciar sesión
  login(user: UserModel | CreatorModel | any): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  // Método para obtener el usuario actual
  getCurrentUser(): UserModel | CreatorModel | any |null {
    const userString = localStorage.getItem(this.currentUserKey);
    if (userString) {
      return JSON.parse(userString);
    } else {
      return null;
    }
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem(this.currentUserKey);
  }

  // Método para comprobar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

}
