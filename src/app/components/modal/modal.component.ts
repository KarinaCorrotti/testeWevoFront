import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { WevoUsersService } from 'src/app/services/wevo-users.service';
import { ModalTypes } from './modal.types';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    @Input() type: ModalTypes = 'closed';
    @Output() onCloseModal = new EventEmitter()
    @Output() onSaveInfo = new EventEmitter()

    constructor(public wevoService: WevoUsersService) { }

    windowCloseCadastro() { 
       this.type = 'closed';
       this.onCloseModal.emit();
    } 

    onSave() {      
      this.onSaveInfo.emit(this.type)
      this.windowCloseCadastro()
    }
}