import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { CreatehiveComponent } from '../modals/createhive/createhive.component';

@Component({
  selector: 'app-hives',
  templateUrl: './hives.component.html',
  styleUrls: ['./hives.component.scss']
})
export class HivesComponent implements OnInit {
  private hives: string = 'Hives!';


  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  public openModalWithComponent() {
    console.log("trying to open modal");
    const list = ['Open a modal with component', 'Pass your data', 'Do something else', '...'];
    this.bsModalRef = this.modalService.show(CreatehiveComponent);
    this.bsModalRef.content.title = 'Modal with component';
    this.bsModalRef.content.list = list;
    setTimeout(() => {
      list.push('PROFIT!!!');
    }, 2000);
  }



  ngOnInit() {
  }

}
