import { FoodbackPage } from './app.po';

describe('foodback App', function() {
  let page: FoodbackPage;

  beforeEach(() => {
    page = new FoodbackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
