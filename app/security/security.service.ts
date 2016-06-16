import {Injectable} from '@angular/core';
import {User} from "./users/user";
import {USERS} from "./mocks/mockUser.service"
import {Subject} from "rxjs/Subject";
import {Session} from "./session.interface";

@Injectable()
export class SecurityService {
    public currentUser: User;
    public session:Session;

    constructor() {
        this.session = {
            currentUser : null,
            isGuest : true
        };
    }

    getSession(): Session {
        return this.session;
    }

    login(username, password) : User {
        this.currentUser = null;
        for (var user of USERS) {
            if (user.username == username && user.password == password)
                this.currentUser = user;
        }
        this.updateSession();
        return this.currentUser;
    }

    logout() : void {
        this.currentUser = null;
        this.updateSession();
    }

    private updateSession() : void {
        this.session.currentUser = this.currentUser;
        this.session.isGuest = this.currentUser == null;
    }
}