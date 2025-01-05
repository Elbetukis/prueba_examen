import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsferaUiComponent } from './esfera-ui.component';

describe('EsferaUiComponent', () => {
  let component: EsferaUiComponent;
  let fixture: ComponentFixture<EsferaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsferaUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsferaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
