# obsidian-callouts-markdown
[![en](https://img.shields.io/badge/lang-en-7952F6.svg)](https://github.com/milk717/mdx-obsidian-callout#readme)
[![ko](https://img.shields.io/badge/lang-ko-55BCBB.svg)](https://github.com/milk717/mdx-obsidian-callout/blob/main/docs/README-KR.md)

Try the library at [playground site](https://obsidian-callouts-markdown.milk717.com ) 🚀
![2024-03-039 39 59-ezgif com-video-to-gif-converter](https://github.com/milk717/obsidian-callouts-markdown/assets/57657868/5f1e8c9d-8bbb-43fc-89cd-252634e1f634)

This library is for parsing Obsidian callout syntax in MDX.
Transform your markdown syntax into callouts just like in Obsidian!

## What is this library?
I write blog posts using Obsidian, and analyze markdown syntax using [@mdx-js/react](https://www.npmjs.com/package/@mdx-js/react) to operate my [personal blog](https://www.milk717.com/) with Gatsby.
Writing markdown posts with Obsidian allows you to post conveniently as if you were using services like velog or tistory.
However, since Obsidian's callout syntax is not standard markdown syntax, callouts written in Obsidian just get parsed as blockquotes in the Gatsby blog.
To alleviate this inconvenience, I created a library to help use the same callout syntax as Obsidian in Markdown.

## Quick Start
1. Install the `obsidian-callouts-markdown` package.
```shell
npm install obsidian-callouts-markdown
yarn add obsidian-callouts-markdown
```
2. In the MDXProvider's components setting, map blockquote to ObsidianCallout.
> It can be used in the same way in react-markdown.
> However, an additional rehype-raw plug-in is required to recognize the html tag inside the markdown.
```typescript jsx
import Post from '@/tests/posts.mdx';
import {MDXProvider} from '@mdx-js/react';
import {ObsidianCallout} from '@/package';

function App() {
  return (
    <MDXProvider
      components={{
        blockquote: ObsidianCallout,
      }}>
      <Post />
    </MDXProvider>
  );
}
```
3. You can now use callouts in markdown with the same syntax as in Obsidian.
   ![result](https://github.com/milk717/obsidian-callouts-markdown/assets/57657868/138600fc-26db-42c9-bbc5-a3c3fa40a601)

## Configuration
### Types of Callouts
![callout list](https://github.com/milk717/obsidian-callouts-markdown/assets/57657868/14c28d32-5399-423b-b3fd-19d3dda12afc)
> **Types of Callout**  
> normal ,note, abstract, summary, tldr, info, todo, tip, hint, important, success, check, done, question, help, faq, warning, caution, attention, danger, error, bug, example, quote, cite, normal

Supports all types of callouts that can be used in Obsidian.
If you have not created a callout type, it is recognized as a normal type.

### Customizing Callout Options
```typescript jsx
  const components = {
    blockquote: (props: HTMLAttributes<HTMLElement>) => (
      <ObsidianCallout
        {...props}
        options={{
          note: {
            icon: ErrorIcon,
            backgroundColor: '#fff',
            color: '#000',
          },
        }}
      />
    ),
  };
```
You can customize the icon, background color, and title text color of the callout using ObsidianCallout's `options`.
The icon type is `React.SVGProps<SVGSVGElement>`.
### Customizing Callout Components
```typescript jsx
  const components = {
    blockquote: (props: HTMLAttributes<HTMLElement>) => (
      <ObsidianCallout
        {...props}
        components={{
          note: CustomCallout,
        }}
      />
    ),
  };
```
You can define custom callout components using ObsidianCallout's `components`.
Callout components can receive the following props.

| props    | type      | require | description                                                |
|----------|-----------|---------|------------------------------------------------------------|
| type     | string    | false   | The string in the [!type] part when writing a callout.     |
| title    | string    | false   | The title string written next to the type ([!type] title). |
| children | ReactNode | true    | The main body of the callout.                              |
|

#### Additional explanation image for props
![callout props](https://github.com/milk717/obsidian-callouts-markdown/assets/57657868/359631e2-a086-46fd-971a-f658c9854439)

#### Custom Callout Example
- code 
```typescript jsx
const CustomCallout: React.FC<CustomCalloutComponentProps> = ({
                                                               type,
                                                               title,
                                                               children,
                                                            }) => {
   return (
           <div className="bg-teal-100 p-4 rounded-md">
              <div className="flex gap-2 text-teal-700 font-semibold mb-4">
                 <p>
                    [{type}] {title}
                 </p>
              </div>
              {children}
           </div>
   );
};
```
- result
  ![custom callout result](https://github.com/milk717/obsidian-callouts-markdown/assets/57657868/b8699629-35b6-4359-9963-4b73df6ffb6c)
### Adding Custom Callout Types
```typescript jsx
  const components = {
    blockquote: (props: HTMLAttributes<HTMLElement>) => (
      <ObsidianCallout
        {...props}
        components={{
          black: CustomCallout,
        }}
        options={{
           bigError: {
            icon: ErrorIcon,
            backgroundColor: 'red',
            color: 'yellow',
          },
        }}
      />
    ),
  };
```
When defining `components` or `options`, specifying a type key that does not exist adds that type of callout.
In the code example above, new callout formats of type `black` and `bigError` are added.
For callout types, **any string except newline characters (\n)** can be specified.
If you customize the same callout type in both `components` and `options`, the settings applied in `components` will take effect.
## Support
If you encounter any issues with the library, feel free to [open an issue](https://github.com/milk717/obsidian-callouts-markdown/issues).
