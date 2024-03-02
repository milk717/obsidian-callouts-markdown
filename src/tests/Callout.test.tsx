import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {ObsidianCallout} from '@/package';
import ReactMarkdown from 'react-markdown';
import {HTMLAttributes} from 'react';
import rehypeRaw from 'rehype-raw';

const components = {
  blockquote: (props: HTMLAttributes<HTMLElement>) => (
    <ObsidianCallout {...props} />
  ),
};

describe('Callout Tests', () => {
  describe('Callout Parsing Tests', () => {
    it('Even if there is an html tag inside the callout, it should be rendered normally.', () => {
      const mdxText = `
  > [!note] <span><span>title in two span tag </span>title in one span tag</span>
  > note callout<span>content in span</span>
  > second line`;

      render(
        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
          {mdxText}
        </ReactMarkdown>,
      );

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
  });
});
