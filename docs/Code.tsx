import { CodeBlock, H1, H2, InlineCode } from 'jsx-to-md'

export default function Code() {
  return (
    <>
      <H1>{t('代码块')}</H1>
      <H2>{t('单行代码')}</H2>
      <InlineCode>const text = 'Hello World'</InlineCode>
      <H2>{t('多行代码')}</H2>
      <CodeBlock
        langType="js"
        code={`const text = 'Hello World'
console.log(text)`}
      />
    </>
  )
}
