import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookformComponent } from './bookform.component';

describe('BookformComponent', () => {
  let component: BookformComponent;
  let fixture: ComponentFixture<BookformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookformComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
