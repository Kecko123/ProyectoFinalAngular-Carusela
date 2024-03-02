import { Injectable } from "@angular/core";
import { User } from "../dashboard/pages/users/models";
import { Router } from "@angular/router";
import { SweetalertService } from "../../core/services/sweetalert.service";
import { map, of, tap } from "rxjs";

interface LoginData {
    email: null | string;
    password: null | string;
}


const MOCK_USER = {
    id: 10,
    email: 'admin@mail.com',
    name: 'ADMIN',
    surname: 'ADMIN',
    password: '12345678',
    role: 'admin',
    country: null,
    phonenumber: null,
}
@Injectable({ providedIn: 'root' })
export class AuthService {

    authUser: User | null = null

    constructor(private router: Router, private sweetalertService: SweetalertService) { }

    private setAuthUser(mockUser: User): void {
        this.authUser = mockUser;
        localStorage.setItem('token', 'asdh12836asd91bsgs')
    }

    login(data: LoginData): void {

        if (data.email === MOCK_USER.email && data.password === MOCK_USER.password) {
            this.setAuthUser(MOCK_USER)
            this.router.navigate(['index', 'home'])
        } else {
            this.sweetalertService.showError('Email o contraseña invalidos')
        }
    }

    logout(): void {
        this.authUser = null;
        this.router.navigate(['auth', 'login'])
        localStorage.removeItem('token')
    }

    verifyToken() {
        return of(localStorage.getItem('token')).pipe(map((response) => !!response), tap(() => {
            this.setAuthUser(MOCK_USER)
        }))
    }
}