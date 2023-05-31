import { Bold, BoldItalic, Break, H1, Italic, StrikeThrough } from 'jsx-to-md'

export default function Font() {
  return (
    <>
      <H1>{t('字体')}</H1>
      <Italic>{t('斜体')}</Italic>
      <Break />
      <Break />
      <Bold>{t('粗体')}</Bold>
      <Break />
      <Break />
      <BoldItalic>{t('倾斜加粗')}</BoldItalic>
      <Break />
      <Break />
      <StrikeThrough>{t('删除线')}</StrikeThrough>
      <br />
    </>
  )
}
