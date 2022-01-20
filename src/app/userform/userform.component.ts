import { Component, OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit, ViewChild,AfterViewChecked } from '@angular/core';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked {
  
  @ViewChild(FieldComponent,{static:false})viewChild:FieldComponent;
  constructor() { }

  ngOnInit() {
    console.log("parent ngOnInit",this.viewChild);
  }
  ngOnDestroy(){
    console.log("parent ngOnDestroy");
  }
  ngOnChanges(){
    console.log("parent ngOnChanges");
  }
  ngDoCheck(){
    console.log("parent ngDoCheck");
  }
  ngAfterViewInit(){
    console.log("parent ngAfterViewInit",this.viewChild);
    this.viewChild.child="New value";
  }
  ngAfterViewChecked(){
    console.log("parent ngAfterViewInit",this.viewChild);
  }

}