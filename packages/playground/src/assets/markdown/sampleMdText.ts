const sampleMdText = [
  {
    id: 'nested',
    name: 'nested callout',
    md: `> [!question] first callout 
> This is nested callout sample
>> [!tip] second callout
>> Overlapped callouts can also be parsed without problems`,
  },
  {
    id: 'html',
    name: 'Inside the callout, html',
    md: `> [!tip] 
> <h1>This is a callout sample with html</h1>
> <span>This is a callout sample with html</span>`,
  },
];

export default sampleMdText;
