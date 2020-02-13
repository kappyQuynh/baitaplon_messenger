import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DanhbaPage } from './danhba.page';

describe('DanhbaPage', () => {
  let component: DanhbaPage;
  let fixture: ComponentFixture<DanhbaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhbaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DanhbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
