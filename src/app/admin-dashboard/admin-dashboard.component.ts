import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-admin-deshboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDeshboardComponent implements OnInit {

  studenti: any[] = [];
  asociatii: any[] = [];
  constructor(private shared: SharedService) {
    this.shared.getAllStudents().subscribe((value) => {
      console.log(value);
      this.studenti = value;
    });
    this.shared.getAllAsociations().subscribe((value) => {
      console.log(value);
      this.asociatii = value;
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

  openAddModal() {
    const myModal = document.getElementById('addModal');
    myModal.style.visibility = 'true';
    return false;

  }
}
