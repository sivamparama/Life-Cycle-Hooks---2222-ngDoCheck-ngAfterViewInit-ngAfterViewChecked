import { Component, OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked {
  child="Angular";

  constructor() { }
  value:any;
  ngOnInit() {
    console.log("child ngOnInit")
  }
  ngOnDestroy(){
    console.log("child ngOnDestroy");
  }
  ngOnChanges(){
    console.log("child ngOnChanges")
  }
  ngDoCheck(){
    console.log("child ngDoCheck");
  }
  ngAfterViewInit(){
    console.log("child ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("child ngAfterViewChecked");
  }



}