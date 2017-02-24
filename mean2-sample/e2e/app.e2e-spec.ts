import { Mean2SamplePage } from './app.po';

describe('mean2-sample App', () => {
  let page: Mean2SamplePage;

  beforeEach(() => {
    page = new Mean2SamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
