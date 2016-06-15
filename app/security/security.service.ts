import {Injectable} from '@angular/core';
import {User} from "./users/user";
import {USERS} from "./mocks/mockUser.service"
import {Subject} from "rxjs/Subject";

@Injectable()
export class SecurityService {
    public currentUser: User;
    private isGuest: boolean;
    private _isGuest$ : Subject<boolean>;

    constructor() {
        this.isGuest = true;
        this._isGuest$ = <Subject<boolean>>new Subject();
    }

    get isGuest$() {
        return this._isGuest$.asObservable();
    }

    login(username, password) : User {
        this.currentUser = null;
        for (var user of USERS) {
            if (user.username == username && user.password == password)
                this.currentUser = user;
        }
        this.isGuest = this.currentUser == null;
        this._isGuest$.next(this.isGuest);
        return this.currentUser;
    }
}