

export class BlogPost {
  public id: number
  public name: string
  public link: string
  public content: string

  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.link = params.link;
    this.content = params.content;
  }
}
