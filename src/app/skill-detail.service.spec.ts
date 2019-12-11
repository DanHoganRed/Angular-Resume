import { TestBed } from '@angular/core/testing';

import { SkillDetailService } from './skill-detail.service';

describe('SkillDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillDetailService = TestBed.get(SkillDetailService);
    expect(service).toBeTruthy();
  });
});
