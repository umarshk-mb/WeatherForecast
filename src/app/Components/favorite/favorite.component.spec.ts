import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteComponent } from './favorite.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;
  let route: ActivatedRoute;
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,NgxPaginationModule,FormsModule],
      providers:[{provide: ActivatedRoute, useValue: fakeActivatedRoute}],
      declarations: [ FavoriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteComponent);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
