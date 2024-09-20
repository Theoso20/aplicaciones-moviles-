import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
