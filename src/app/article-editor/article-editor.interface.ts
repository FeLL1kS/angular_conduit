export interface ArticleForm {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string;
}

export interface ArticleCreate {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface ArticleCreateRequest {
  article: ArticleCreate;
}
