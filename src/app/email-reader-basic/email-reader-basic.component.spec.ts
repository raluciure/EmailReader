import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReaderBasicComponent } from './email-reader-basic.component';

describe('EmailReaderBasicComponent', () => {
  let component: EmailReaderBasicComponent;
  let fixture: ComponentFixture<EmailReaderBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailReaderBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailReaderBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
