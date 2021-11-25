interface ArticleCreate {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface ArticleCreateRequest {
  article: ArticleCreate;
}
