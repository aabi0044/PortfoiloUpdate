import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    $('.preloader').delay(200).fadeOut('slow');
    setTimeout(function() {
        //After 2s, the notscrolling class of the body will be removed
        $('div').removeClass('notscrolling');
    }, 500);
  }
}
