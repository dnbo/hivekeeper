import { HivekeeperPage } from './app.po';

describe('hivekeeper App', () => {
  let page: HivekeeperPage;

  beforeEach(() => {
    page = new HivekeeperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
