import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbookPage } from './addbook.page';

describe('AddbookPage', () => {
  let component: AddbookPage;
  let fixture: ComponentFixture<AddbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
