import { Break, Link, render, TableOfContents } from 'jsx-to-md'
import { initI18n } from 'i18n-pro'
import Heading from './Heading'
import Font from './Font'
import BlockQuote from './BlockQuote'
import Code from './Code'
import LinkDemo from './Link'
import ImageDemo from './Image'
import ListDemo from './List'
import TableDemo from './Table'
import TaskListDemo from './TaskList'
import AsyncDemo from './Async'
import en from '../i18n/en.json'

export default function MarkDown(props: any) {
  const { locale } = props
  const { t } = initI18n({
    namespace: 'doc',
    locale,
    langs: {
      en,
    },
  })

  globalThis.t = t

  const specialHTMLProps = {
    align: 'center',
  }

  return (
    <>
      <div {...specialHTMLProps}>
        <Break />
        {t(
          '当前文档基于 {0} 和 {1} 生成，如果你当前是通过{2}或者{3}访问本项目，你可以通过编辑{4}来实时更新当前文档',
          render(
            <Link href="https://github.com/eyelly-wu/jsx-to-md">
              jsx-to-md
            </Link>,
          ),
          render(
            <Link href="https://github.com/eyelly-wu/i18n-pro">i18n-pro</Link>,
          ),
          ' `CodeSandbox` ',
          ' `StackBlitz` ',
          ' `docs/index.tsx` ',
        )}
        {t(
          '有一点需要注意：目前{0}不支持原生HTML，因此预览可能原生HTML会存在问题',
          ' `StackBlitz` ',
        )}
        <Break />
      </div>

      <TableOfContents text={t('目录')} open={false} />
      <Heading />

      <Font />

      <BlockQuote />

      <Code />

      <LinkDemo />

      <ImageDemo />

      <ListDemo />

      <TableDemo />

      <TaskListDemo />

      <AsyncDemo />

      <Break />
      <Break />
      <h1>{t('原生HTML')}</h1>
      <Break />
      <div
        style={{
          background: 'yellow',
          height: 80,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>{t('这里可以任意编辑HTML')}</p>
      </div>
    </>
  )
}
