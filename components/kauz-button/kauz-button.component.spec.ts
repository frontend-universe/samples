import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KauzButtonComponent } from './kauz-button.component';

describe('KauzButtonComponent', () => {
  let component: KauzButtonComponent;
  let fixture: ComponentFixture<KauzButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KauzButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KauzButtonComponent);
    component = fixture.componentInstance;
    component.label = 'OK';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit click', () => {
    const spy = spyOn(component.onClick, 'emit');
    component.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(true);
  });
});
