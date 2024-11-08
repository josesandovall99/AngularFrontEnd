import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoGeneroFormComponent } from './tipo-genero-form.component';

describe('TipoGeneroFormComponent', () => {
  let component: TipoGeneroFormComponent;
  let fixture: ComponentFixture<TipoGeneroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoGeneroFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoGeneroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
