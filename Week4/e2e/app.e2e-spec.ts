import { Week4Page } from './app.po';

describe('week4 App', function() {
  let page: Week4Page;

  beforeEach(() => {
    page = new Week4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
