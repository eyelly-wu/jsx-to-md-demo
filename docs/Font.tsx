import React, {
  Bold,
  BoldItalic,
  Break,
  H1,
  Italic,
  StrikeThrough,
} from 'jsx-to-md'

export default function Font() {
  return (
    <>
      <H1>{i18n('字体')}</H1>
      <Italic>{i18n('斜体')}</Italic>
      <Break />
      <Break />
      <Bold>{i18n('粗体')}</Bold>
      <Break />
      <Break />
      <BoldItalic>{i18n('倾斜加粗')}</BoldItalic>
      <Break />
      <Break />
      <StrikeThrough>{i18n('删除线')}</StrikeThrough>
      <br />
    </>
  )
}
