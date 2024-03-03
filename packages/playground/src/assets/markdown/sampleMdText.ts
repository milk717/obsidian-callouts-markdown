const sampleMdText = [
  {
    id: 'nested',
    name: 'nested callout',
    md: `> [!question] first callout 
> This is nested callout sample
>> [!tip] second callout
>> Nested callouts can also be parsed without problems`,
  },
  {
    id: 'html',
    name: 'Inside the callout, html',
    md: `> [!tip] 
> <h1>This is a callout sample with html</h1>
> <div>Even if there's an html tag inside the callout, it's parsed!</div>
> Feel free to set up a call-out`,
  },
  {
    id: 'markdown',
    name: 'Inside the callout, markdown',
    md: `> [!tip] 
> ### Markdown h3 title
> Even if there's a markdown inside the callout, it's parsed!  
> Feel free to set up a callout`,
  },
];

export default sampleMdText;
