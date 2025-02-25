import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-name-list',
  imports: [NgFor],
  templateUrl: './name-list.component.html',
  styleUrl: './name-list.component.css'
})
export class NameListComponent {
  names : string[] = ["Pedro", "Susan", "Maria", "Juan"]
}
