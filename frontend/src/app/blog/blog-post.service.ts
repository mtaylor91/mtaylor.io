import { BlogPost } from './blog-post';

const POSTS: BlogPost[] = [
  { name: "Test Post", link: "/blog/test", content: "<p>foo</p>" },
  { name: "Second Post", link: "/blog/second", content: "<p>bar</p>" },
  { name: "Programming", link: "/blog/programming", content: "<p>baz</p>" }
]

export class BlogPostService {

  getPosts(): BlogPost[] {
    return POSTS;
  }
}
