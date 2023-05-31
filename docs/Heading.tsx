import { H1, H2, H3, H4, H5, H6 } from 'jsx-to-md'

export default function Heading() {
  return (
    <>
      <H1>{t('标题')}</H1>
      <H1 skip>{t('一级标题')}</H1>
      <H2 skip>{t('二级标题')}</H2>
      <H3 skip>{t('三级标题')}</H3>
      <H4 skip>{t('四级标题')}</H4>
      <H5 skip>{t('五级标题')}</H5>
      <H6 skip>{t('六级标题')}</H6>
    </>
  )
}
