import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-deshboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDeshboardComponent implements OnInit {

  studenti: any[] = [];
  asociatii: any[] = [];
  constructor() {
    this.studenti.push({id: 1, email: 'karla', nume: 'Pantelimon', prenume: 'Karla', asociatie: 'ASMI', federatie: 'USR', id_facultate: '1407', consiliu: '0', senat: '0', consiliu_administratie: '0' });
    this.studenti.push({id: 2, email: 'rares', nume: 'Cristea', prenume: 'Rares', asociatie: 'ASMI', federatie: 'USR', id_facultate: '1407', consiliu: '0', senat: '1', consiliu_administratie: '0' });

    this.asociatii.push({id: 25460950, denumire: 'Asociația Studenților la Matematică și Informatică', oras: 'București', jurisdictie: 'Facultatea de Matematică și Informatică'});
    this.asociatii.push({id: 1, denumire: 'Asociația Studenților în Administrație și Afaceri', oras: 'București', jurisdictie: 'Facultatea de Administrație și Afaceri'});

  }

  ngOnInit() {

  }


  openModal(s){
    console.log('Merge');
    const myModal = document.getElementById('editModal');

    // now get the values from the table
    // var nume = myModal.getEleme.find('td.nume').html();
    // var prenume = $(this).closest('tr').find('td.prenume').html();//....

    (<HTMLInputElement>myModal.getElementsByClassName('nume').item(0)).value = s.nume;
    (<HTMLInputElement>myModal.getElementsByClassName('prenume').item(0)).value = s.prenume;
    (<HTMLInputElement>myModal.getElementsByClassName('asociatie').item(0)).value = s.asociatie;
    (<HTMLInputElement>myModal.getElementsByClassName('federatie').item(0)).value = s.federatie;
    (<HTMLInputElement>myModal.getElementsByClassName('facultate').item(0)).value = s.id_facultate;

    // and set them in the modal
    // ....

    // and finally show the modal
    // myModal.modal({ show: true });
    // myModal.style.display = 'block';
    myModal.style.visibility = 'true';
    return false;
  }
}
