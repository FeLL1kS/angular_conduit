import { Article, Comment } from '../aricles-mock';

export interface ArticleResponse {
  article: Article;
}

export interface CommentsResponse {
  comments: Comment[];
}

export interface AddCommentRequest {
  comment: {
    body: string;
  };
}

export interface AddCommentResponse {
  comment: Comment;
}
