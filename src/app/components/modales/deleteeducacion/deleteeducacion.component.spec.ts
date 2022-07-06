import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeducacionComponent } from './deleteeducacion.component';

describe('DeleteeducacionComponent', () => {
  let component: DeleteeducacionComponent;
  let fixture: ComponentFixture<DeleteeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteeducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
