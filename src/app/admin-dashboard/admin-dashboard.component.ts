import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-deshboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDeshboardComponent implements OnInit {
  consiliuAdm: any;
  senat: any;
  consiliu: any;

  studenti: any[] = [];
  asociatii: any[] = [];
  universitati: any[] = [];
  nume: string;
  prenume: string;
  asociatie: string;
  federatie: string;
  fac: string;
  email: string;
  constructor(public shared: SharedService, public route:Router) {
    if(localStorage.getItem('username')){
      if(localStorage.getItem('type') == 'Admin')
        this.shared.username = localStorage.getItem('username');
      else this.route.navigate(['/']);
    }
    else this.route.navigate(['/']);


    this.shared.getAllStudents().subscribe((value) => {
      console.log(value);
      this.studenti = value;
    });
    this.shared.getAllAsociations().subscribe((value) => {
      console.log(value);
      this.asociatii = value;
    });
    this.shared.getAllUniversitati().subscribe((value) => {
      console.log(value);
      this.universitati = value;
    });
  }

  ngOnInit() {

  }


  openModal(s, action) {
    console.log('Merge');
    if (action == 1) {
      const myModal = document.getElementById('editModal');

      (<HTMLInputElement>myModal.getElementsByClassName('nume').item(0)).value = s.nume;
      (<HTMLInputElement>myModal.getElementsByClassName('prenume').item(0)).value = s.prenume;
      (<HTMLInputElement>myModal.getElementsByClassName('asociatie').item(0)).value = s.asociatie;
      (<HTMLInputElement>myModal.getElementsByClassName('federatie').item(0)).value = s.federatie;
      (<HTMLInputElement>myModal.getElementsByClassName('facultate').item(0)).value = s.id_facultate;

      myModal.style.visibility = 'true';
    }else if (action == 2) {
      const myModal = document.getElementById('editModalAsociatii');

      (<HTMLInputElement>myModal.getElementsByClassName('denumire').item(0)).value = s.denumire;
      (<HTMLInputElement>myModal.getElementsByClassName('oras').item(0)).value = s.oras;
      (<HTMLInputElement>myModal.getElementsByClassName('jurisdictie').item(0)).value = s.jurisdictie;

      myModal.style.visibility = 'true';
    }
    return false;
  }

  openAddModal(id) {
    const myModal = document.getElementById(id);
    myModal.style.visibility = 'true';
    return false;

  }

  saveStudent(){
    console.log(this.nume);
    this.shared.addStudent(this.email, this.nume, this.prenume, this.federatie, this.asociatie,this.consiliu, this.senat, this.consiliuAdm).subscribe((value)=>{
      this.studenti=[];
      const myModal = document.getElementById('addModal');
      myModal.style.visibility = 'false';
      this.shared.getAllStudents().subscribe((value) => {
        console.log(value);
        this.studenti = value;
      });
    })
  }

  saveAsociatie(){
    console.log(this.nume);
    this.shared.addAsociatie(this.email, this.nume, this.prenume).subscribe((value)=>{
      this.asociatii=[];
      const myModal = document.getElementById('addAsociatie');
      myModal.style.visibility = 'false';
      this.shared.getAllAsociations().subscribe((value) => {
        console.log(value);
        this.asociatii = value;
      });
    })
  }

  saveUniversitate(){
    console.log(this.nume);
    this.shared.addUniversity(this.email, this.nume, this.prenume, this.federatie, this.asociatie, this.fac, this.senat).subscribe((value)=>{
      this.universitati=[];
      const myModal = document.getElementById('addUniversitate');
      myModal.style.visibility = 'false';
      this.shared.getAllUniversitati().subscribe((value) => {
        console.log(value);
        this.universitati = value;
      });
    })
  }

  signOut() {
    localStorage.setItem('username',null);
    localStorage.setItem('type',null);
    this.route.navigate(['/']);
  }
}
