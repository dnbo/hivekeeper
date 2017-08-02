import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { CreatehiveComponent } from '../modals/createhive/createhive.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-hives',
  templateUrl: './hives.component.html',
  styleUrls: ['./hives.component.scss']
})
export class HivesComponent implements OnInit {
  private hives: FirebaseListObservable<any[]>;


  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService, db: AngularFireDatabase) {
    this.hives = db.list('/hives/cYWUyERRUEhYtL1RR610a3a3XO42');
    console.log(this.hives);
  }

  public openModalWithComponent() {
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
