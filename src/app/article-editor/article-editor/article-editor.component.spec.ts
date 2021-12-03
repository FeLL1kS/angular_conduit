import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ArticleForm } from '../article-editor.interface';
import { ArticleEditorService } from '../article-editor.service';

import { ArticleEditorComponent } from './article-editor.component';

describe('ArticleEditorComponent', () => {
  let component: ArticleEditorComponent;
  let fixture: ComponentFixture<ArticleEditorComponent>;
  class articleEditorServiceStub {
    form: FormGroup = new FormGroup({});
    data$ = of({});
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleEditorComponent],
      providers: [
        { provide: ArticleEditorService, useClass: articleEditorServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
