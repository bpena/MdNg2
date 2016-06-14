import {Injectable} from '@angular/core';
import {USERS} from '../mocks/mockUser.service';
import {User} from "../users/user";

@Injectable()
export class LoginService {
    getUsers() {
        return USERS;
    }

    login(username, password) {
        var currentUser: User = null;
        for (var user of USERS) {
            if (user.username == username && user.password == password)
                currentUser = user;
        }
        return currentUser;
    }
}