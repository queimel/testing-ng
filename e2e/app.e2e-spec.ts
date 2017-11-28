import { TestingNgPage } from './app.po';

describe('testing-ng App', () => {
  let page: TestingNgPage;

  beforeEach(() => {
    page = new TestingNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
