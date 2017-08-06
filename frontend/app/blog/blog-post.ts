

export class BlogPost {
  public name: string
  public link: string
  public content: string

  constructor(params) {
    this.name = params.name;
    this.link = params.link;
    this.content = params.content;
  }
}
