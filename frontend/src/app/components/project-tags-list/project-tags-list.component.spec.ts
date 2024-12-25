import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTagsListComponent } from './project-tags-list.component';

describe('ProjectTagsListComponent', () => {
  let component: ProjectTagsListComponent;
  let fixture: ComponentFixture<ProjectTagsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTagsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTagsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
