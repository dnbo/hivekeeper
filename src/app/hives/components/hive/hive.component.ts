import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Hive } from "../../_model/hive";


@Component({
  selector: 'app-hives',
  templateUrl: './hives.component.html',
  styleUrls: ['./hives.component.scss']
})
export class HivesComponent implements OnInit {
  private hives: FirebaseListObservable<any[]>;
  private newHive: Hive = new Hive();
  private db: AngularFireDatabase;
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService, db: AngularFireDatabase) {
    this.db = db;
    this.hives = db.list('/hives/cYWUyERRUEhYtL1RR610a3a3XO42');
    console.log(this.hives);
  }

  // public openModalWithComponent() {
  //   const list = ['Open a modal with component', 'Pass your data', 'Do something else', '...'];
  //   this.bsModalRef = this.modalService.show(CreatehiveComponent);
  //   this.bsModalRef.content.title = 'Modal with component';
  //   this.bsModalRef.content.list = list;
  //   setTimeout(() => {
  //     list.push('PROFIT!!!');
  //   }, 2000);
  // }

  public addHive() {
    this.hives.push(this.newHive);
  }

  ngOnInit() {
  }

}
