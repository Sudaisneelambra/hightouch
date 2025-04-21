import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  whatsappNumber = '919745465530'; // Add country code (e.g., 91 for India)

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobileNumber: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)  // Validates 10-digit mobile numbers
      ]],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    const name = this.contactForm.value.name;
    const mobile = this.contactForm.value.mobileNumber;
    const userMessage = this.contactForm.value.message;

    const message = encodeURIComponent(
      `Name: ${name}\nMobile: ${mobile}\nMessage: ${userMessage}`
    );

    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    this.contactForm.reset();
    this.submitted = false;
  }
}
