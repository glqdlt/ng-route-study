import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  canActivate(destination: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 책 147 에는  name 으로 되어있지만 name prop이 없다고 한다.
    // console.log(`${destination.component.name}`);
    console.log(`${destination.component.valueOf()}`);

    return this.checkIfLoggedIn();
  }

  constructor() {
  }

  private checkIfLoggedIn(): boolean {

    let loggedIn: boolean = Math.random() < 0.5;

    return loggedIn;
  }
}
