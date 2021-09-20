import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Class } from 'src/app/class.type';
import { Race } from 'src/app/race.type';
import { WarcraftService } from 'src/app/warcraft.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  classes$: Observable<Class[]>;
  races$: Observable<Race[]>;

  constructor(private ws: WarcraftService) {
    this.classes$ = this.ws.getClasses();
    this.races$ = this.ws.getHordeRaces();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  ngOnInit(): void {}
}
