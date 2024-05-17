import { Component, OnInit } from '@angular/core';
import { Penguin } from './penguin';
import { PenguinService } from './penguin.service';

@Component({
  selector: 'app-penguins',
  templateUrl: './penguins.component.html',
  styleUrls: ['./penguins.component.css']
})
export class PenguinsComponent implements OnInit {
  penguins: Array<Penguin> = [];

  constructor(private penguinService: PenguinService) { }

  getPenguins() {
    this.penguinService.getPenguins().subscribe(penguins => {
      this.penguins = penguins;
    });
  }

  ngOnInit() {
    this.getPenguins();
  }
}

