import { TestBed } from '@angular/core/testing';

import { WeatherResolverResolver } from './weather-resolver.resolver';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('WeatherResolverResolver', () => {
  let resolver: WeatherResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    resolver = TestBed.inject(WeatherResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
