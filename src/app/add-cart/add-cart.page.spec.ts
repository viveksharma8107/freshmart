import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCartPage } from './add-cart.page';

describe('AddCartPage', () => {
  let component: AddCartPage;
  let fixture: ComponentFixture<AddCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
