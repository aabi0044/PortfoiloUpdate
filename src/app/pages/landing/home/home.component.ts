import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
  

  }

  send(){
    if(this.name !== '' && this.email !== '' && this.message !== ''){
      this.afs.collection('kodealpha').add({name: this.name, email: this.email, message: this.message})
        .then(res =>{
          this.email = '';
          this.message = '';
          this.name = '';
        })
    }
  }




}
