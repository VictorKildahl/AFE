import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Class } from 'src/app/class.type';
import { Race } from 'src/app/race.type';
import { WarcraftService } from 'src/app/warcraft.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent {
  profileForm = this.formBuilder.group({
    name: [''],
    password: this.formBuilder.group(
      {
        passwords: [''],
        confirm_password: [''],
      },
      { validators: this.passwordRequired, updateOn: 'change' }
    ),
    race: [''],
    class: [''],
    level: [''],
    description: [''],
  });

  classes$: Observable<Class[]>;
  races$: Observable<Race[]>;

  constructor(private formBuilder: FormBuilder, private ws: WarcraftService) {
    this.classes$ = this.ws.getClasses();
    this.races$ = this.ws.getHordeRaces();
  }

  passwordRequired(group: AbstractControl): ValidationErrors | null {
    return group.get('passwords')?.value.length === 0 ||
      group.get('confirm_password')?.value.length === 0
      ? { must_be_set: 'password and confirm_password must be set' }
      : null;
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  onAutofill() {
    this.profileForm.patchValue({
      name: 'Victor',
      password: ' 123',
      confirm_password: '123',
      race: {
        name: 'Human',
      },
      class: {
        name: 'Priest',
        roles: [
          {
            name: 'Healer',
          },
          {
            name: 'Damage',
          },
        ],
      },
      level: '1',
      description: 'test',
    });
  }

  compareClasses(c1: Class, c2: Class) {
    return c1 && c2 ? c1.name === c2.name : c1 === c2;
  }

  compareRaces(r1: Race, r2: Race) {
    return r1 && r2 ? r1.name === r2.name : r1 === r2;
  }

  get password(): FormControl {
    return this.profileForm.get('password') as FormControl;
  }
}
