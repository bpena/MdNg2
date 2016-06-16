import {User} from "./users/user";
export interface Session {
    currentUser: User,
    isGuest: boolean
}