import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IWevoUser } from "../interfaces/wevo-user.interface";

@Injectable()
export class WevoUsersService {
    selectedUser: IWevoUser = <IWevoUser>{}
    private _baseUrl: string = 'http://localhost:3000/users'

    constructor(private _http: HttpClient) {

    }

    getUserList(): Observable<IWevoUser[]> {
        return this._http.get<IWevoUser[]>(`${this._baseUrl}/client`)
    }

    createUserList(): Observable<IWevoUser> {
        return this._http.post<IWevoUser>(`${this._baseUrl}/create`, this.selectedUser)
    }

    editUserList(): Observable<IWevoUser> {
        return this._http.put<IWevoUser>(`${this._baseUrl}/updateUser`, this.selectedUser)
    }

    deleteUserList() {
        return this._http.delete(`${this._baseUrl}/deleteUser`, {
            headers: { },
            body: { email: this.selectedUser.email }
         })
    }
    
}



