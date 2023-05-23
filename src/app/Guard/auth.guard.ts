import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/Login-service';

export const authGuard: CanActivateFn = (route, state) => {

 
  return true;
};
