import { H1, Image } from 'jsx-to-md'

export default function ImageDemo() {
  return (
    <>
      <H1>{t('图片')}</H1>
      <Image
        title={t('图片标题')}
        alt={t('图片说明')}
        src="https://commonmark.org/help/images/favicon.png"
      />
    </>
  )
}
