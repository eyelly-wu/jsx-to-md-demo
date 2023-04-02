import { H1, Image } from 'jsx-to-md'

export default function ImageDemo() {
  return (
    <>
      <H1>{i18n('图片')}</H1>
      <Image
        title={i18n('图片标题')}
        alt={i18n('图片说明')}
        src="https://commonmark.org/help/images/favicon.png"
      />
    </>
  )
}
