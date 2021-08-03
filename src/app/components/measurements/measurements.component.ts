import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Button, ControlName, GardenStyle, Shape } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss'],
})
export class MeasurementsComponent implements OnInit {
  @Output() private getResults = new EventEmitter();
  form: FormGroup;
  @Input() private controlName: ControlName[];
  @Output() private buttonReset = new EventEmitter();

  constructor(private fb: FormBuilder) {
    console.log('contructor')
  }

  getControlName(): ControlName[] {
    return this.controlName;
  }

  eventButton(button: Button) {
    if (button.title.includes("Calcular")) {
      let result: ControlName[] = new Array();
      this.controlName.forEach(item => {
        result.push({
          name: item.name,
          value: this.form.get("" + item.name).value
        })
      })
      this.getResults.emit(result);
    } else {
      this.buttonReset.emit();
    }

    this.form.reset();
  }

  getButton(): Button[] {
    return [
      {
        title: "Borrar",
        class: "o-button-color-w600"
      },
      {
        title: "Calcular",
        class: "o-button-color-w600"
      }
    ]
  }

  ngOnInit() {
    console.log('init')

    this.form = this.fb.group({
      width: [, [Validators.required, Validators.min(1)]],
      length: [, [Validators.required, Validators.min(1)]],
      depth: [, [Validators.required, Validators.min(1)]],
      diameter: [, [Validators.required, Validators.min(1)]]
    })

  }
}
