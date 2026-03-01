import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPessoaFisica } from './cadastro-pessoa-fisica';

describe('CadastroPessoaFisica', () => {
  let component: CadastroPessoaFisica;
  let fixture: ComponentFixture<CadastroPessoaFisica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPessoaFisica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPessoaFisica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
