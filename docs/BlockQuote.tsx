import { BlockQuote, H1, H2 } from 'jsx-to-md'

export default function BlockQuoteDemo() {
  return (
    <>
      <H1>{i18n('引用块')}</H1>
      <H2>{i18n('普通引用')}</H2>
      <BlockQuote>text</BlockQuote>
      <H2>{i18n('嵌套引用')}</H2>
      <BlockQuote>
        text1
        <BlockQuote level={2}>
          text2
          <BlockQuote level={3}>
            text3
            <BlockQuote level={4}>text4</BlockQuote>
          </BlockQuote>
        </BlockQuote>
      </BlockQuote>
    </>
  )
}
