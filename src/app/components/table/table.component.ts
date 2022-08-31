import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IWevoUser } from 'src/app/interfaces/wevo-user.interface';
import { WevoUsersService } from 'src/app/services/wevo-users.service';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
    @Input() list: IWevoUser[] = [];
    @Output() onEditUser = new EventEmitter();
    @Output() onDeleteUser = new EventEmitter();
    @Output() onCreateUser = new EventEmitter();

    constructor(private _wevoUsersService: WevoUsersService) { }

    createUser() {
        this._wevoUsersService.selectedUser = <IWevoUser>{}
        this.onCreateUser.emit()
    }

    editUser(user: IWevoUser) {
        this._wevoUsersService.selectedUser = user;
        this.onEditUser.emit()
    }

    deleteUser(user: IWevoUser) {
        this._wevoUsersService.selectedUser = user;
        this.onDeleteUser.emit()
        this._wevoUsersService.deleteUserList().subscribe(() => { },
        (error) => {
            if(error.status === 200) {
                this.list.splice(this.list.findIndex((item) => item.email === user.email), 1);
            }
        });
    }    
}