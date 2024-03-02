import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import CalloutMock from '@/tests/__mocks__/CalloutMock.tsx';
import CustomCallout from '@/tests/CustomCallout.tsx';
import SvgMock from '@/tests/__mocks__/SvgMock.tsx';

describe('Callout Tests', () => {
  describe('Parsing Callout Tests', () => {
    it('Even if there is an html tag inside the callout, it should be rendered normally.', () => {
      const mdText = `
  > [!note] <span><span>title in two span tag </span>title in one span tag</span>
  > note callout<span>content in span</span>
  > second line`;

      render(<CalloutMock mdText={mdText} />);

      const titleContainer = document.querySelector('.callout-title > p');
      const bodyContainer = document.querySelector('.callout-body > p');

      if (!titleContainer) fail('Title parsing error');
      if (!bodyContainer) fail('Body parsing error');

      expect(titleContainer.textContent).toBe(
        'title in two span tag title in one span tag',
      );
      expect(bodyContainer.textContent).toBe(
        'note calloutcontent in span\nsecond line',
      );
    });
    it('Overlapping callouts should also be parsed', () => {
      const mdText = `
> [!question] title
> note callout
> second line
>> [!tip] multi
>> inner callout
>> second line
`;

      render(<CalloutMock mdText={mdText} />);

      const titleContainer = document.querySelector('.callout-title > p');
      const innerTitleContainer = document.querySelector(
        '.callout-body > .callout-box > .callout-title > p',
      );
      const bodyContainer = document.querySelector('.callout-body > p');
      const innderBodyContainer = document.querySelector(
        '.callout-body > .callout-box > .callout-body',
      );

      if (!titleContainer || !innerTitleContainer) fail('Title parsing error');
      if (!bodyContainer || !innderBodyContainer) fail('Body parsing error');

      expect(titleContainer.textContent).toBe('title');
      expect(innerTitleContainer.textContent).toBe('multi');
      expect(bodyContainer.textContent).toBe('note callout\nsecond line');
      expect(innderBodyContainer.textContent).toBe(
        '\ninner callout\nsecond line\n',
      );
    });
    it('If there is no title, type should be the title', () => {
      const mdText = `
> [!abstract]
> abstract, summary, tldr
`;

      render(<CalloutMock mdText={mdText} />);

      const titleContainer = document.querySelector('.callout-title > p');
      const bodyContainer = document.querySelector('.callout-body > p');

      if (!titleContainer) fail('Title parsing error');
      if (!bodyContainer) fail('Body parsing error');

      expect(titleContainer.textContent).toBe('Abstract');
      expect(bodyContainer.textContent).toBe('abstract, summary, tldr');
    });
  });
  describe('Custom Callout Tests', () => {
    it('The components option should allow you to add a new type of callout.', () => {
      const mdText = `
> [!Black]
> custom
`;

      render(
        <CalloutMock mdText={mdText} components={{block: CustomCallout}} />,
      );

      const titleContainer = document.querySelector('.callout-title > p');
      const bodyContainer = document.querySelector('.callout-body > p');

      if (!titleContainer) fail('Title parsing error');
      if (!bodyContainer) fail('Body parsing error');

      expect(titleContainer.textContent).toBe('Black');
      expect(bodyContainer.textContent).toBe('custom');
    });
    it('Options should allow for the addition of a new type of callout', () => {
      const mdText = `
> [!Black]
> custom
`;

      render(
        <CalloutMock
          mdText={mdText}
          options={{
            block: {
              icon: SvgMock,
              color: 'black',
              backgroundColor: 'gray',
            },
          }}
        />,
      );

      const titleContainer = document.querySelector('.callout-title > p');
      const bodyContainer = document.querySelector('.callout-body > p');

      if (!titleContainer) fail('Title parsing error');
      if (!bodyContainer) fail('Body parsing error');

      expect(titleContainer.textContent).toBe('Black');
      expect(bodyContainer.textContent).toBe('custom');
    });
  });
});
