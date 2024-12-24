import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-project',
  imports: [ReactiveFormsModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss',
})
export class CreateProjectComponent {
  tagsValues = ['angular,react,expressjs'];
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    tags:new FormArray([new FormControl('')]),
    description: new FormControl('', Validators.required),
    hero_image: new FormControl('', Validators.required),
    images_urls: new FormControl(['']),
    key: new FormControl('', Validators.required),
  });
}
