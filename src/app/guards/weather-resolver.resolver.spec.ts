import { TestBed } from '@angular/core/testing';

import { WeatherResolverResolver } from './weather-resolver.resolver';

describe('WeatherResolverResolver', () => {
  let resolver: WeatherResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WeatherResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
