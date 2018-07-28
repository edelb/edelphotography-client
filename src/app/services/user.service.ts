import { Injectable } from '@angular/core';
import { UserEntity } from '../entities/UserEntity';

@Injectable()
export class UserService {

    user: UserEntity = null;

    constructor () {
        this.user = new UserEntity();
        this.user.firstName = 'Edel';
        this.user.lastName = 'Benavides';
        this.user.email = 'eb@gmail.com';
        this.user.username = 'eb';
        this.user.images = new Array<string>();
    }

    /**
     * Returns current user entity.
     */
    getUser(): UserEntity {
        return this.user;
    }

    /**
     * Sets current user entity.
     * @param user User Entity
     */
    setUser(user: UserEntity) {
        this.user = user;
    }

}
