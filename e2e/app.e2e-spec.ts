import { DashboardMd2UiPage } from './app.po';

describe('dashboard-md2-ui App', () => {
  let page: DashboardMd2UiPage;

  beforeEach(() => {
    page = new DashboardMd2UiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
