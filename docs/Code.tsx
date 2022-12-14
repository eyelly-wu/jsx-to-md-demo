import React, { CodeBlock, H1, H2, InlineCode } from 'jsx-to-md'

export default function Code() {
  return (
    <>
      <H1>{i18n('代码块')}</H1>
      <H2>{i18n('单行代码')}</H2>
      <InlineCode>const text = 'Hello World'</InlineCode>
      <H2>{i18n('多行代码')}</H2>
      <CodeBlock
        langType="js"
        code={`const text = 'Hello World'
console.log(text)`}
      />
    </>
  )
}
