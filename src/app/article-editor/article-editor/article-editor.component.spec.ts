import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Subscription } from 'rxjs';
import { ArticleEditorService } from '../article-editor.service';

import { ArticleEditorComponent } from './article-editor.component';

describe('ArticleEditorComponent', () => {
  let component: ArticleEditorComponent;
  let fixture: ComponentFixture<ArticleEditorComponent>;
  let articleEditorServiceSpy: jasmine.SpyObj<ArticleEditorService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj(
      'ArticleEditorService',
      ['createArticle', 'updateArticle', 'ngOnDestroy'],
      {
        data$: of({
          slug: '',
          title: '',
          description: '',
          body: '',
          tagList: '',
        }),
      }
    );

    await TestBed.configureTestingModule({
      declarations: [ArticleEditorComponent],
      providers: [{ provide: ArticleEditorService, useValue: spy }],
    }).compileComponents();

    articleEditorServiceSpy = TestBed.inject(
      ArticleEditorService
    ) as jasmine.SpyObj<ArticleEditorService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form control getters', () => {
    it('should return title control', () => {
      expect(component.form.controls['title']).toBeTruthy();
    });

    it('should return description control', () => {
      expect(component.form.controls['description']).toBeTruthy();
    });

    it('should return body control', () => {
      expect(component.form.controls['body']).toBeTruthy();
    });

    it('should return tagList control', () => {
      expect(component.form.controls['tagList']).toBeTruthy();
    });
  });

  it('createArticle should only call createArticle from the service once', () => {
    component.createArticle();

    expect(articleEditorServiceSpy.createArticle.calls.count()).toBe(1);
  });

  it('updateArticle should only call updateArticle from the service once', () => {
    component.updateArticle('');

    expect(articleEditorServiceSpy.updateArticle.calls.count()).toBe(1);
  });

  it('ngOnDestroy should call unsubsribe', () => {
    spyOn(Subscription.prototype, 'unsubscribe');

    component.ngOnDestroy();

    expect(Subscription.prototype.unsubscribe).toHaveBeenCalledTimes(1);
  });
});
