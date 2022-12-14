import React, { BlockQuote, Break, H1, H2, Link } from 'jsx-to-md'

export default function LinkDemo() {
  return (
    <>
      <H1>{i18n('超链接')}</H1>
      <Link href="https://github.com/eyelly-wu/jsx-to-md-demo">
        jsx-to-md-demo
      </Link>
      <Break />
      <Break />
      <Link href="https://github.com/eyelly-wu/jsx-to-md">jsx-to-md</Link>
    </>
  )
}
