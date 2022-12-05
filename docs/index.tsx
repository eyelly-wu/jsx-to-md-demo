import React, {
  BlockQuote,
  Bold,
  BoldItalic,
  Break,
  CodeBlock,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  InlineCode,
  Italic,
  StrikeThrough,
  Link,
  Image,
  UnorderList,
  ListItem,
  OderList,
  Table,
  TaskList,
  List,
  render,
} from 'jsx-to-md'
import { setI18N, i18n } from 'i18n-pro'
import en from '../i18n/en.json'

export default function MarkDown(props: any) {
  const { locale } = props

  setI18N({
    locale,
    langs: {
      en,
    },
  })

  return (
    <>
      {i18n(
        '当前文档基于 {0} 和 {1} 生成，你可以通过编辑{2}来实时更新当前文档',
        render(
          <Link href="https://github.com/eyelly-wu/jsx-to-md">jsx-to-md</Link>,
        ),
        render(
          <Link href="https://github.com/eyelly-wu/i18n-pro">i18n-pro</Link>,
        ),
        ' `docs/index.tsx` ',
      )}
      <H1>{i18n('标题')}</H1>
      <H1>{i18n('一级标题')}</H1>
      <H2>{i18n('二级标题')}</H2>
      <H3>{i18n('三级标题')}</H3>
      <H4>{i18n('四级标题')}</H4>
      <H5>{i18n('五级标题')}</H5>
      <H6>{i18n('六级标题')}</H6>

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

      <H1>{i18n('代码块')}</H1>
      <H2>{i18n('单行代码')}</H2>
      <InlineCode>const text = 'Hello World'</InlineCode>
      <H2>{i18n('多行代码')}</H2>
      <CodeBlock
        langType="js"
        code={`const text = 'Hello World'
console.log(text)`}
      />

      <H1>{i18n('超链接')}</H1>
      <Link href="https://github.com/eyelly-wu/jsx-to-md-demo">
        jsx-to-md-demo
      </Link>
      <Break />
      <Break />
      <Link href="https://github.com/eyelly-wu/jsx-to-md">jsx-to-md</Link>

      <H1>{i18n('图片')}</H1>
      <Image
        title={i18n('图片标题')}
        alt={i18n('图片说明')}
        src="https://commonmark.org/help/images/favicon.png"
      />

      <H1>{i18n('列表')}</H1>
      <H2>{i18n('语义类型')}</H2>
      <H3>{i18n('无序列表')}</H3>
      <UnorderList>
        <ListItem>{i18n('列表项1')}</ListItem>
        <ListItem>{i18n('列表项2')}</ListItem>
        <ListItem>{i18n('列表项3')}</ListItem>
      </UnorderList>
      <H3>{i18n('有序列表')}</H3>
      <OderList>
        <ListItem>{i18n('列表项1')}</ListItem>
        <ListItem>{i18n('列表项2')}</ListItem>
        <ListItem>{i18n('列表项3')}</ListItem>
      </OderList>
      <H3>{i18n('嵌套列表')}</H3>
      <UnorderList>
        <ListItem>
          {i18n('开发')}
          <OderList level={2}>
            <ListItem>
              {i18n('前端')}
              <UnorderList level={3}>
                <ListItem>JavaScript</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>...</ListItem>
              </UnorderList>
            </ListItem>
            <ListItem>
              {i18n('后端')}
              <UnorderList level={3}>
                <ListItem>Java</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>...</ListItem>
              </UnorderList>
            </ListItem>
          </OderList>
        </ListItem>
        <ListItem>
          {i18n('测试')}
          <UnorderList level={2}>
            <ListItem>
              {i18n('单元测试')}
              <OderList level={3}>
                <ListItem>JUnit</ListItem>
                <ListItem>Jest</ListItem>
                <ListItem>Vitest</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
            <ListItem>
              {i18n('E2E测试')}
              <OderList level={3}>
                <ListItem>Cypress</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
          </UnorderList>
        </ListItem>
        <ListItem>...</ListItem>
      </UnorderList>
      <H2>{i18n('简易类型')}</H2>
      <H3>{i18n('无序列表')}</H3>
      <List items={['U', i18n('列表项1'), i18n('列表项2'), i18n('列表项3')]} />
      <H3>{i18n('有序列表')}</H3>
      <List items={['O', i18n('列表项1'), i18n('列表项2'), i18n('列表项3')]} />
      <H3>{i18n('嵌套列表')}</H3>
      <List
        items={[
          'O',
          [
            i18n('开发'),
            [
              'O',
              [i18n('前端'), ['U', 'JavaScript', 'HTML', 'CSS', '...']],
              [i18n('后端'), ['U', 'Java', 'SQL', '...']],
            ],
          ],
          [
            i18n('测试'),
            [
              'U',
              [i18n('单元测试'), ['O', 'JUnit', 'Jest', 'Vitest']],
              [i18n('E2E测试'), ['O', 'Cypress', '...']],
            ],
          ],
          '...',
        ]}
      />

      <H1>{i18n('表格')}</H1>
      <Table
        columns={[
          { fieldName: 'field1', title: i18n('靠左标题') },
          { fieldName: 'field2', title: i18n('居中标题'), align: 'center' },
          { fieldName: 'field3', title: i18n('靠右标题'), align: 'right' },
        ]}
        data={Array(10)
          .fill(0)
          .map((item) => {
            return ['field1', 'field2', 'field3'].reduce((res, item) => {
              res[item] = i18n('随机数：') + Math.random().toString(10).slice(2)
              return res
            }, {})
          })}
      />

      <H1>{i18n('任务列表')}</H1>
      <H2>{i18n('基础')}</H2>
      <TaskList items={['done1', ['undo', 0], ['done2', 1]]} />
      <H2>{i18n('嵌套')}</H2>
      <TaskList
        items={[
          ['twoLevel', [['child1', 0], 'child2']],
          [
            'threeLevel',
            [
              ['child1', ['grandchild1', ['grandchild2', 0]]],
              [
                'child2',
                [
                  ['grandchild1', 0],
                  ['grandchild2', 0],
                ],
              ],
              ['child3', ['grandchild1', 'grandchild2']],
            ],
          ],
          ['twoLevelEmpty', []],
        ]}
      />

      <Break />
      <h1>{i18n('原生HTML')}</h1>
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
        <p>{i18n('这里可以任意编辑HTML')}</p>
      </div>
    </>
  )
}
