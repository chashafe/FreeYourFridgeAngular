import {Injectable} from '@angular/core';
import {User} from '../_models/user';
import {Resolve, Router, ActivatedRouteSnapshot, ActivatedRoute} from '@angular/router';
import {UserService} from '../_services/user.service';
import {AlertifyjsService} from '../_services/alertifyjs.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../_services/auth.service'; 

@Injectable()
export class MemberEditResolver implements Resolve<User>{
    // tslint:disable-next-line: max-line-length
    constructor(private userService: UserService, private authService: AuthService, private router: Router, private alertify: AlertifyjsService) {}
        resolve(router: ActivatedRouteSnapshot): Observable<User>{
            return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
                catchError(error => {
                    this.alertify.error('Problem retrieving your data');
                    this.router.navigate(['/members']);
                    return of(null);
                })
            );
        }
}
