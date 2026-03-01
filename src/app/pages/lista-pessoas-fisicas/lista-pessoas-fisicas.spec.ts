import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPessoasFisicas } from './lista-pessoas-fisicas';

describe('ListaPessoasFisicas', () => {
  let component: ListaPessoasFisicas;
  let fixture: ComponentFixture<ListaPessoasFisicas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPessoasFisicas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPessoasFisicas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
