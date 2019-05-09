import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
    isModal: boolean;

    constructor(private modalService: NgbModal) {
    }

    ngOnInit() {
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            console.log(`Dismissed ${this.getDismissReason(reason)}`);
        });
    }

    close() {
        this.modalService.dismissAll();
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    showModal() {
        this.isModal = !this.isModal;
    }
}

