import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  modelWok = {};

  fields: FormlyFieldConfig[] = [
    { 
      key: 'gouvernorat', 
      type: 'select', 
      templateOptions: { 
        options: [ 
          { value: 'Localitaire', label: 'Localitaire' }, 
          { value: 'Proprietaire', label: 'Proprietaire' } 
        ], 
        required: true 
      }, 
      validation: { 
        messages: { 
          required: 'Ce champ est obligatoire.' 
        } 
      } 
    },
    { key: 'region', type: 'select', templateOptions: { options: [ { value: 'Localitaire', label: 'qsd' }, { value: 'Proprietaire', label: 'Proprietaire' } ], required: true }, validation: { messages: { required: 'Ce champ est obligatoire.' } } },
    { key: 'cite', type: 'select', templateOptions: { options: [ { value: 'Localitaire', label: 'Localitaire' }, { value: 'Proprietaire', label: 'Proprietaire' } ], required: true }, validation: { messages: { required: 'Ce champ est obligatoire.' } } },
    { key: 'code_postal', type: 'select', templateOptions: { options: [ { value: 'option1', label: 'Option dd1' }, { value: 'option2', label: 'Option 2' } ], required: true }, validation: { messages: { required: 'Ce champ est obligatoire.' } } },
    { key: 'adresse', type: 'select', templateOptions: { options: [ { value: 'Localitaire', label: 'Localitaire' }, { value: 'Proprietaire', label: 'Proprietaire' } ], required: true }, validation: { messages: { required: 'Ce champ est obligatoire.' } } },


    { key: 'localitaire', type: 'select', templateOptions: { options: [ { value: 'work', label: 'work' }, { value: 'Proprietaire', label: 'Proprietaire' } ], required: true }, validation: { messages: { required: 'Ce champ est obligatoire.' } } },
    { key: 'batiment', type: 'select', templateOptions: { options: [ { value: 'Localitaire', label: 'fedi' }, { value: 'Qsdqs', label: 'qsdqs' } ], required: true }, validation: { messages: { required: 'Ce champ est obligatoire.' } } },
    { key: 'mobilier', type: 'input', templateOptions: { required: true } },
    { key: 'habitation', type: 'select', templateOptions: { options: [ { value: 'Habitation1', label: 'Habitation 1' }, { value: 'Habitation2', label: 'Habitation 2' } ], required: true }, validation: { messages: { required: 'Ce champ est obligatoire.' } } },
    { key: 'piece', type: 'input', templateOptions: { required: true } },
    { key: 'superficie', type: 'input', templateOptions: { required: true } },
    { key: 'construite', type: 'input', templateOptions: { required: true } },
    { key: 'dependance', type: 'select', templateOptions: { options: [ { value: 'Furniture1', label: 'Furniture 1' }, { value: 'Furniture2', label: 'Furniture 2' } ], required: true }, validation: { messages: { required: 'Ce champ est obligatoire.' } } },
    { key: 'nombre_dependance', type: 'input', templateOptions: { required: true } },
    { key: 'occupant', type: 'switch', templateOptions: { options: [ { value: 'Furniture1', label: 'Furniture 1' }, { value: 'Furniture2', label: 'Furniture 2' } ], required: true } },
    { key: 'occupant2', type: 'switch', templateOptions: { required: true } },
    { key: 'logement', type: 'input', templateOptions: { required: true } },
    { key: 'sinistre', type: 'switch', templateOptions: { required: true } },
    { key: 'nature', type: 'select', templateOptions: { options: [ { value: 'Localitaire', label: 'Localitaire' }, { value: 'Proprietaire', label: 'Proprietaire' } ], required: true }, validation: { messages: { required: 'Ce champ est obligatoire.' } } },
    { key: 'valeur', type: 'input', templateOptions: { label: 'Valeur', required: true } },
    { key: 'typeObjet', type: 'select', templateOptions: { label: 'Type Objet', required: true } },
    { key: 'typeObjet3', type: 'select', templateOptions: { label: 'Type Objet 3', required: true } },
    { key: 'systemeSecond', type: 'switch', templateOptions: { label: 'Système Secondaire', required: true } },
    { key: 'switchSystemeAlarme', type: 'switch', templateOptions: { label: 'Alarme du système', required: true } }, 
    { key: 'camerami', type: 'input', templateOptions: { label: 'Caméra de Surveillance', required: true } },
    { key: 'ami', type: 'select', templateOptions: { label: 'Caméra de Surveillance 2', required: true } },
    { key: 'switchCamereSurveillance1', type: 'switch', templateOptions: { label: 'Caméra Surveillance 1', required: true } },
    { key: 'switchCamereSurveillance2', type: 'switch', templateOptions: { label: 'Caméra Surveillance 2', required: true } },
    { key: 'alarme', type: 'switch', templateOptions: { label: 'Alarme', required: true } },
    { key: 'alarme2', type: 'switch', templateOptions: { label: 'Alarme 2', required: true } },
    { key: 'alarmeSociete', type: 'select', templateOptions: { options: [ { value: 'Localitaire', label: 'Localitaire' }, { value: 'Proprietaire', label: 'Proprietaire' } ], required: true }, validation: { messages: { required: 'Ce champ est obligatoire.' } } },
    { key: 'alarmeSociete2', type: 'input', templateOptions: { label: 'Description d\'autres systèmes de sécurité ?', required: true } },
    { key: 'valeur2', type: 'input', templateOptions: { required: true } },
    { key: 'switchSystemeAlarme3', type: 'switch', templateOptions: { label: 'Alarme Système 3', required: true } },
    { key: 'switchSystemeAlarme1', type: 'switch', templateOptions: { label: 'Alarme Système 1', required: true } },
    { key: 'alarmeSociete1', type: 'select', templateOptions: { options: [ { value: 'Localitaire', label: 'Localitaire' }, { value: 'Proprietaire', label: 'Proprietaire' } ], required: true }, validation: { messages: { required: 'Ce champ est obligatoire.' } } },
    { key: 'switchSystemeAlarme4', type: 'switch', templateOptions: { label: 'Alarme Système 4', required: true } },
    { key: 'switchSystemeAlarme5', type: 'switch', templateOptions: { label: 'Alarme Système 5', required: true } },
    { key: 'switchSystemeAlarme6', type: 'switch', templateOptions: { label: 'Alarme Système 6', required: true } },
    { key: 'switchSystemeAlarme7', type: 'switch', templateOptions: { label: 'Alarme Système 7', required: true } },
    { key: 'switchSystemeAlarme55', type: 'switch', templateOptions: { label: 'Alarme Système 55', required: true } },
    { key: 'switchSystemeAlarme77', type: 'switch', templateOptions: { label: 'Alarme Système 77', required: true } },
    { key: 'switchSystemeAlarme78', type: 'switch', templateOptions: { label: 'Alarme Système 78', required: true } },
    { key: 'inputLabel1', type: 'input', templateOptions: { label: 'Input Label 1', required: true } },
    { key: 'inputLabel2', type: 'input', templateOptions: { label: 'Input Label 2', required: true } },
    { key: 'inputLabel3', type: 'input', templateOptions: { label: 'Input Label 3', required: true } },
    { key: 'inputLabel4', type: 'input', templateOptions: { label: 'Input Label 4', required: true } },
    { key: 'inputLabel5', type: 'input', templateOptions: { label: 'Input Label 5', required: true } },
    { key: 'inputLabel11', type: 'input', templateOptions: { label: 'Input Label 11', required: true } },
    { key: 'inputLabel12', type: 'input', templateOptions: { label: 'Input Label 12', required: true } },
    { key: 'nomPersonne', type: 'input', templateOptions: { label: 'Nom Personne', required: true } },
    { key: 'prenomPersonnage', type: 'input', templateOptions: { label: 'Prénom Personnage', required: true } },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      gouvernorat: [''],
      region: [''],
      cite: [''],
      code_postal: [''],
      adresse: [''],
      localitaire: [''],
      batiment: [''],
      mobilier: [''],
      habitation: [''],
      piece: [''],
      superficie: [''],
      construite: [''],
      dependance: [''],
      nombre_dependance: [''],
      occupant: [false],
      logement: [''],
      sinistre: [false],
      nature: [''],
      alarme: [false],
      valeur: [''],
      typeObjet: [''],
      typeObjet3: [''],
      systemeSecond: [false],
      switchSystemeAlarme: [false],
      camereSurveillance: [false],
      camereSurveillance2: [false],
      switchCamereSurveillance1: [false],
      switchCamereSurveillance2: [false],
      alarme2: [false],
      alarmeSociete: [false],
      alarmeSociete2: [''],
      valeur2: [''],
      switchSystemeAlarme3: [false],
      switchSystemeAlarme1: [false],
      alarmeSociete1: [false],
      switchSystemeAlarme4: [false],
      switchSystemeAlarme5: [false],
      switchSystemeAlarme6: [false],
      switchSystemeAlarme7: [false],
      switchSystemeAlarme55: [false],
      switchSystemeAlarme77: [false],
      switchSystemeAlarme78: [''],
      inputLabel1: [''],
      inputLabel2: [''],
      inputLabel3: [''],
      inputLabel4: [''],
      inputLabel5: [''],
      inputLabel11: [''],
      inputLabel12: [''],
      nomPersonne: [''],
      prenomPersonnage: [''],
      occupant2: [false],
    });
  }

  ngOnInit() {
    // Initialization logic if needed
  }

  getFieldConfig(key: string): FormlyFieldConfig | undefined {
    return this.fields.find(field => field.key === key);
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('Le formulaire n\'est pas valide');
    } else {
      console.log(this.form.value);
    }
  }
}
