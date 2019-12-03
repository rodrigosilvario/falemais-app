import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLigacaoComponent } from './criar-ligacao.component';

describe('CriarLigacaoComponent', () => {
  let component: CriarLigacaoComponent;
  let fixture: ComponentFixture<CriarLigacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarLigacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarLigacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
