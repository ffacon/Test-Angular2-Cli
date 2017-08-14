import { AppPage } from './app.po';

describe('ng2-e-com App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ALL THE BOOKS YOU NEED, AT THE HIGHEST PRICE!');
  });
});
