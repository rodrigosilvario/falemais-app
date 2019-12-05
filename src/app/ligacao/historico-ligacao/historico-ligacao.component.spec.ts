import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoLigacaoComponent } from './historico-ligacao.component';

describe('HistoricoLigacaoComponent', () => {
  let component: HistoricoLigacaoComponent;
  let fixture: ComponentFixture<HistoricoLigacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoLigacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoLigacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
