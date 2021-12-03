import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { Article, Comment } from 'src/app/aricles-mock';
import { User } from 'src/app/reducers/auth/auth.reducer';

import { articleRoutes } from '../article.module';
import { ArticleService } from '../article.service';
import { ArticleComponent } from './article.component';

class ArticleServiceStub {
  article$: Observable<Article | undefined> = new Observable<Article>();
  comments$: Observable<Comment> = new Observable<Comment>();
  user$: Observable<User> = new Observable<User>();
}

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleComponent],
      imports: [RouterTestingModule.withRoutes(articleRoutes)],
      providers: [{ provide: ArticleService, useClass: ArticleServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
