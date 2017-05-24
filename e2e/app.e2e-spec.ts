import { FaqUdinusPage } from './app.po';

describe('faq-udinus App', () => {
  let page: FaqUdinusPage;

  beforeEach(() => {
    page = new FaqUdinusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
