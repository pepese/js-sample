import { CognitoJsPage } from './app.po';

describe('cognito-js App', () => {
  let page: CognitoJsPage;

  beforeEach(() => {
    page = new CognitoJsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
