import { TableauErrorPage } from './app.po';

describe('tableau-error App', () => {
  let page: TableauErrorPage;

  beforeEach(() => {
    page = new TableauErrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
