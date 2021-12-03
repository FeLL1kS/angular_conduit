import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { Article, Comment } from 'src/app/aricles-mock';
import { User } from 'src/app/reducers/auth/auth.reducer';

import { articleRoutes } from '../article.module';
import { ArticleService } from '../article.service';
import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let articleServiceSpy: jasmine.SpyObj<ArticleService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj(
      'ArticleService',
      ['addComment', 'loadArticle', 'getComments', 'favorite', 'unfavorite'],
      {
        article$: new Observable<Article | undefined>(),
        comments$: new Observable<Comment>(),
        user$: new Observable<User>(),
      }
    );

    await TestBed.configureTestingModule({
      declarations: [ArticleComponent],
      imports: [RouterTestingModule.withRoutes(articleRoutes)],
      providers: [{ provide: ArticleService, useValue: spy }],
    }).compileComponents();

    articleServiceSpy = TestBed.inject(
      ArticleService
    ) as jasmine.SpyObj<ArticleService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return body control', () => {
    const controll = component.form.controls['body'];
    expect(controll).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should be valid when body is not empty', () => {
    component.form.controls['body'].setValue('body');
    expect(component.form.valid).toBeTruthy();
  });

  it('should reset form after submit', () => {
    component.form.controls['body'].setValue('body');
    expect(component.form.valid).toBeTruthy();

    component.slug = 'slug';
    const bodyValue = component.form.controls['body'].value;
    component.submit();

    expect(articleServiceSpy.addComment).toHaveBeenCalledOnceWith(
      component.slug,
      bodyValue
    );
    expect(component.form.controls['body'].value).toBeNull();
    expect(component.form.valid).toBeFalsy();
  });

  it('getComments should load comments', () => {
    component.slug = 'slug';

    component.getComments();

    expect(articleServiceSpy.getComments).toHaveBeenCalledOnceWith(
      component.slug
    );
  });

  it('favorite should call favorite function from service', () => {
    component.favorite('slug');

    expect(articleServiceSpy.favorite.calls.count()).toBe(1);
  });

  it('unfavorite should call unfavorite function from service', () => {
    component.unfavorite('slug');

    expect(articleServiceSpy.unfavorite.calls.count()).toBe(1);
  });
});
