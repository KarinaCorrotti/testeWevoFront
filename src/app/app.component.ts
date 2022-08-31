import { Component } from '@angular/core';
import { ModalTypes } from './components/modal/modal.types';
import { IWevoUser } from './interfaces/wevo-user.interface';
import { WevoUsersService } from './services/wevo-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList: IWevoUser[] = [];
  modalType: ModalTypes = 'closed';
  selectedUserInfo: IWevoUser = <IWevoUser>{}

  constructor(private _wevoUsers: WevoUsersService){
    this.getUserList()
  }

  getUserList(){
    this._wevoUsers.getUserList().subscribe((userList: IWevoUser[]) => {
      this.userList = userList;
    })
  }

  changeModal(type: ModalTypes, userInfo?: IWevoUser) {
    this.modalType = type;
    if (userInfo) {
      this.selectedUserInfo = userInfo;
    }
  }

  onSaveInfo(type: any) {
    if(type === 'create') {
      this._wevoUsers.createUserList().subscribe((user: IWevoUser) => {
        this.getUserList();
      })
    } else {
      this._wevoUsers.editUserList().subscribe((user: IWevoUser) => {
        this.getUserList();
      })
    }
  }

}
