import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40)]],
    gender: ['', [Validators.required, Validators.pattern(/male|female/)]],
  });

  // : FormControlと書けば怒られないが、エラーの解消法として合っているか
  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  submit(): void {
    console.log(this.form.value);
  }

  // ミーティングで行った課題0120
  private getWord(): string {
    return 'こんにちは';
  }

  sayHello(): void {
    alert(this.getWord());
  }
  private getColor(colorName: string): string {
    return colorName;
  }
}
