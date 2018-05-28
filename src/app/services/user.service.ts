import { Injectable } from '@angular/core';
import { UserEntity } from '../entities/UserEntity';

@Injectable()
export class UserService {

    private user: UserEntity = null;

    constructor () {
        const images = new Array<string>();
        images.push('portfolio/nacira-1');
        images.push('portfolio/nacira-3');
        images.push('portfolio/nacira-4');

        this.user = new UserEntity();
        this.user.firstName = 'Edel';
        this.user.lastName = 'Benavides';
        this.user.email = 'eb@gmail.com';
        this.user.username = 'eb';
        this.user.images = images;
    }

    /**
     * Returns current user entity.
     */
    public getUser(): UserEntity {
        return this.user;
    }

    /**
     * Sets current user entity.
     * @param user User Entity
     */
    public setUser(user: UserEntity) {
        this.user = user;
    }

}
