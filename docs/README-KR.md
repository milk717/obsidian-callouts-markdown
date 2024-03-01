# mdx-obsidian-callout
[![en](https://img.shields.io/badge/lang-en-7952F6.svg)](https://github.com/milk717/mdx-obsidian-callout#readme)
[![ko](https://img.shields.io/badge/lang-ko-55BCBB.svg)](https://github.com/milk717/mdx-obsidian-callout/blob/main/docs/README-KR.md)

(preview 사이트에서 시연하는거 gif로 넣기)

mdx에서 obsidian 콜아웃 문법을 파싱하기 위한 라이브러리입니다.  
옵시디언과 완전히 동일한 콜아웃 문법으로 마크다운 구문을 변환하세요!

## 이 라이브러리는 무엇인가요?
저는 obsidian을 사용해서 블로그 포스팅을 작성하고, 
[@mdx-js/react](https://www.npmjs.com/package/@mdx-js/react)를 사용해 마크다운 구문을 분석해 
Gatsby로 [개인 블로그](https://www.milk717.com/)를 운영중입니다. 
obsidian을 사용해서 마크다운 게시글을 작성하면 마치 velog나 tistory같은 서비스를 이용하는 것 처럼 편리하게 포스팅을 작성할 수 있습니다.  
하지만, obsidian의 콜아웃 문법은 표준 markdown 문법이 아니라서 obsidian에서 콜아웃을 작성해도 gatsby 블로그에선 그저 blockquote로 구문이 분석될 뿐입니다.
이러한 불편함을 해소하고자 mdx에서 obsidian 콜아웃 문법과 동일한 문법을 사용하도록 도와주는 라이브러를 제작했습니다.

## 빠른 시작
1. `mdx-obsidian-callout` 패키지를 설치합니다.
```shell
npm install mdx-obsidian-callout
yarn add mdx-obsidian-callout
```
2. MDXProvider의 components 설정에서 blockquote를 ObsidianCallout으로 매핑해줍니다.
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
3. 옵시디언과 동일한 문법의 callout을 markdown에서 사용할 수 있게 됩니다.
   ![result](https://github.com/milk717/mdx-obsidian-callout/assets/57657868/138600fc-26db-42c9-bbc5-a3c3fa40a601)

## 구성
### 콜아웃 종류
![callout list](https://github.com/milk717/mdx-obsidian-callout/assets/57657868/14c28d32-5399-423b-b3fd-19d3dda12afc)
> **콜아웃 타입 종류**  
> note, abstract, summary, tldr, info, todo, tip, hint, important, success, check, done, question, help, faq, warning, caution, attention, danger, error, bug, example, quote, cite, normal

옵시디언에서 사용할 수 있는 모든 종류의 콜아웃 타입을 지원합니다.  

### 콜아웃 옵션 커스텀
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
`ObsidianCallout`의 `options`를 사용해서 콜아웃의 아이콘, 배경색, 타이틀 글자 색상을 커스텀할 수 있습니다.
아이콘의 타입은 `React.SVGProps<SVGSVGElement>`입니다.
### 콜아웃 컴포넌트 커스텀
```typescript jsx
  const components = {
    blockquote: (props: HTMLAttributes<HTMLElement>) => (
      <ObsidianCallout
        {...props}
        components={{
          note: TextCallout,
        }}
      />
    ),
  };
```
`ObsidianCallout`의 `components`를 사용해서 커스텀 콜아웃 컴포넌트를 정의할 수 있습니다.  
콜아웃 컴포넌트는 다음과 같은 props를 받을 수 있습니다.

| props    | type      | require | description                                          |
|----------|-----------|---------|------------------------------------------------------|
| type     | string    | false   | 콜아웃 작성시 `[!type]`에 해당하는 부분의 문자열 입니다.                 |
| title    | string    | false   | 콜아웃 작성시 타입 옆에 적은 제목 (`[!type] title`)에 해당하는 문자열 입니다. |
| children | ReactNode | true    | 콜아웃 본문에 해당하는 부분입니다.                                  |

#### props에 대한 부가 설명 이미지
![callout props](https://github.com/milk717/mdx-obsidian-callout/assets/57657868/359631e2-a086-46fd-971a-f658c9854439)

#### 커스텀 콜아웃 예시
- 커스텀 콜아웃 코드
```typescript jsx
const TextCallout: React.FC<CustomCalloutComponentProps> = ({
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
- 커스텀 콜아웃 결과
![custom callout result](https://github.com/milk717/mdx-obsidian-callout/assets/57657868/b8699629-35b6-4359-9963-4b73df6ffb6c)
### 커스텀 콜아웃 타입 추가
```typescript jsx
  const components = {
    blockquote: (props: HTMLAttributes<HTMLElement>) => (
      <ObsidianCallout
        {...props}
        components={{
          black: TextCallout,
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
`components`나 `options`을 정의할 때 기존에 존재하지 않는 타입을 키값으로 지정하게 되면 해당 타입의 콜아웃이 생성됩니다.
위 코드 예시에서는 `black`, `bigError` 타입의 새로운 콜아웃 형식이 추가됩니다.  
콜아웃 타입에는 **개행 문자(`\n`)를 제외한 모든 문자열**을 지정할 수 있습니다.
`components`와 `options` 두곳에 동일한 콜아웃 타입에 대해 커스텀을 한다면 `components`에 적용한 설정이 적용됩니다.
## 지원
라이브러리에 문제가 있다면 언제든지 [이슈](https://github.com/milk717/mdx-obsidian-callout/issues) 남겨주세요.
