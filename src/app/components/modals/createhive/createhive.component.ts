import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-createhive',
  templateUrl: './createhive.component.html',
  styleUrls: ['./createhive.component.scss']
})
export class CreatehiveComponent implements OnInit {
  public title: string;
  public list: any[] = [];
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }


}
