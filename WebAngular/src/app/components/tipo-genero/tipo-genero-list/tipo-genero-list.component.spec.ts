import { ComponentFixture, TestBed } from '@angular/core/testing';
import TipoGeneroListComponent from './tipo-genero-list.component';


describe('TipoGeneroListComponent', () => {
  let component: TipoGeneroListComponent;
  let fixture: ComponentFixture<TipoGeneroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoGeneroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoGeneroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
