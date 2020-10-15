import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { LibraryapiService } from 'src/app/api/libraryapi.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.scss'],
})
export class BookformComponent implements OnInit {
  bookForm: FormGroup;
  imagePreview: string | ArrayBuffer;
  cover: any;
  constructor(
    private fb: FormBuilder,
    private api: LibraryapiService
    ) { }

  ngOnInit() {
    this.theForm();
  }

  theForm() {
    this.bookForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(255)]],
      cover: ['', [Validators.required]],
      college: ['', [Validators.required]],
    });
  }
  previewImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    // for angular file upload
    this.bookForm.patchValue({ cover: file });
    this.bookForm.get('cover').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
  postBook() {
    console.log('posting book');
    console.log(this.bookForm.value);
    const bookName = this.bookForm.value.name,
    bookDescription = this.bookForm.value.description,
    bookCover = this.bookForm.value.cover,
    college = this.bookForm.value.college;
    this.api.postBook(bookName, bookDescription, bookCover, college, this.imagePreview).subscribe(
      data => {
        console.log('ok', data);
      },
      (error) => {
        console.log(error.error);
        console.log(error.error.error.name[0]);
        console.log(error.error.error.description[0]);
        console.log(error.error.error.college_id[0]);
      }
    );
  }
}
