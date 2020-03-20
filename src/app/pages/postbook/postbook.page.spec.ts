import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostbookPage } from './postbook.page';

describe('PostbookPage', () => {
  let component: PostbookPage;
  let fixture: ComponentFixture<PostbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
