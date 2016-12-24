import { Ng2EComPage } from './app.po';

describe('ng2-e-com App', function() {
  let page: Ng2EComPage;

  beforeEach(() => {
    page = new Ng2EComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
