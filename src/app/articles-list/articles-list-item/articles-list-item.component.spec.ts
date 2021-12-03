import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesListService } from '../articles-list.service';

import { ArticlesListItemComponent } from './articles-list-item.component';

describe('ArticlesListItemComponent', () => {
  let component: ArticlesListItemComponent;
  let fixture: ComponentFixture<ArticlesListItemComponent>;
  const articlesListServiceStub = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesListItemComponent],
      providers: [
        { provide: ArticlesListService, useValue: articlesListServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListItemComponent);
    component = fixture.componentInstance;
    component.article = {
      author: {
        bio: '',
        image: '',
        username: '',
      },
      body: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      description: '',
      favorited: false,
      favoritesCount: 0,
      slug: '',
      tagList: [],
      title: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
