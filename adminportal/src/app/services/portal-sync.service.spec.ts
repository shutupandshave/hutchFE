import { TestBed } from '@angular/core/testing';

import { PortalSyncService } from './portal-sync.service';
import truthy = jasmine.truthy;
import { PortalSync } from '../interfaces/responses/PortalSync';
import empty = jasmine.empty;

describe('PortalSyncService', () => {
  let service: PortalSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Observable should be truthy',
    (done: DoneFn) => {
      service.getPortalSync('appVersion', 'dataVersion', 'adminToken').subscribe(data => {
        expect((Object.keys(data)).length).toBeGreaterThan(0)
        done();
      });
    });
});
