import { UiElementsModule } from './ui-elements.module';

describe('UiElementsModule', () => {
  let uiElementsModule: UiElementsModule;

  beforeEach(() => {
    uiElementsModule = new UiElementsModule();
  });

  it('should create an instance', () => {
    expect(uiElementsModule).toBeTruthy();
  });
});
