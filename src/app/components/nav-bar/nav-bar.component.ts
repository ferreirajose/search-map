import { Adress } from './../../modules/models/adress';
import { MapsService } from './../../modules/services/maps.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public formMaps: FormGroup;
  constructor(
    private fb: FormBuilder,
    private mapsService: MapsService
  ) {

  }

  ngOnInit(): void {
    this.formMaps = this.fb.group({
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{3})?$')]],
    });
  }

  public search(): void {
    const { zipCode } = this.formMaps.value;
    this.mapsService.getAdress(zipCode).subscribe((adress: Adress) => {
      console.log(adress);
    }, (erro) => {
      console.log(erro);
    });

  }
}
