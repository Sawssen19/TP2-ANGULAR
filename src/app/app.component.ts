import { Component } from '@angular/core';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignupFormComponent],
  template: '<app-signup-form></app-signup-form>'
})
export class AppComponent {}