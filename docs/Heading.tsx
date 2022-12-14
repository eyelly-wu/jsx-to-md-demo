import React, { H1, H2, H3, H4, H5, H6 } from 'jsx-to-md'

export default function Heading() {
  return (
    <>
      <H1>{i18n('标题')}</H1>
      <H1 skip>{i18n('一级标题')}</H1>
      <H2 skip>{i18n('二级标题')}</H2>
      <H3 skip>{i18n('三级标题')}</H3>
      <H4 skip>{i18n('四级标题')}</H4>
      <H5 skip>{i18n('五级标题')}</H5>
      <H6 skip>{i18n('六级标题')}</H6>
    </>
  )
}
