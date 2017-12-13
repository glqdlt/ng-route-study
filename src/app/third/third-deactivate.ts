import {Component, Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {ThirdComponent} from './third.component';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class thirdDeactivateService implements CanDeactivate<ThirdComponent> {

  canDeactivate(component: ThirdComponent): Observable<boolean> | Promise<boolean> | boolean {
    return component.checkLeave ? true : window.confirm('How do you leave?');
  }

  constructor() {
  }

}
