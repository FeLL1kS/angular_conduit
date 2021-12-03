import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesListService } from '../articles-list.service';

import { ArticlesListComponent } from './articles-list.component';

describe('ArticlesListComponent', () => {
  let component: ArticlesListComponent;
  let fixture: ComponentFixture<ArticlesListComponent>;
  const articleListServiceStub = {
    updateArticlesFeedType: () => {},
    loadTags: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesListComponent],
      providers: [
        { provide: ArticlesListService, useValue: articleListServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
