import { Mtaylor.IoPage } from './app.po';

describe('mtaylor.io App', () => {
  let page: Mtaylor.IoPage;

  beforeEach(() => {
    page = new Mtaylor.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
