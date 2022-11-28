import React,{
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
  Link,
  Image,
  UnorderList,
  ListItem,
  OderList,
  Table,
} from 'jsx-to-md'
import { setI18N, i18n } from 'i18n-pro'
import en from '../i18n/en.json'

export default function MarkDown(props:any){

  const {
    locale,
  } = props

  setI18N({
    locale,
    langs:{
      en,
    }
  })

  return (
    <>
    <H1>{i18n('标题')}</H1>
    <H1>{i18n('一级标题')}</H1>
    <H2>{i18n('二级标题')}</H2>
    <H3>{i18n('三级标题')}</H3>
    <H4>{i18n('四级标题')}</H4>
    <H5>{i18n('五级标题')}</H5>
    <H6>{i18n('六级标题')}</H6>


    <H1>{i18n('字体')}</H1>
    <Italic>{i18n('斜体')}</Italic>
    <Break/>
    <Break/>
    <Bold>{i18n('粗体')}</Bold>
    <Break/>
    <Break/>
    <BoldItalic>{i18n('倾斜加粗')}</BoldItalic>


    <H1>{i18n('引用块')}</H1>
    <H2>{i18n('普通引用')}</H2>
    <BlockQuote>
      text
    </BlockQuote>
    <H2>{i18n('嵌套引用')}</H2>
    <BlockQuote>
      text1
      <BlockQuote level={2}>
        text2
        <BlockQuote level={3}>
        text3 
        <BlockQuote level={4}>
        text4 
      </BlockQuote>
      </BlockQuote>
      </BlockQuote>
    </BlockQuote>


    <H1>{i18n('代码块')}</H1>
    <H2>{i18n('单行代码')}</H2>
    <InlineCode>const text = 'Hello World'</InlineCode>
    <H2>{i18n('多行代码')}</H2>
    <CodeBlock langType='js'>
      {`const text = 'Hello World'
console.log(text)`}
    </CodeBlock>


    <H1>{i18n('超链接')}</H1>
    <Link href="https://github.com/eyelly-wu/jsx-to-md-demo">jsx-to-md-demo</Link>
    <Break/>
    <Break/>
    <Link href="https://github.com/eyelly-wu/jsx-to-md">jsx-to-md</Link>

    
    <H1>{i18n('图片')}</H1>
    <Image title={i18n('图片标题')} alt={i18n('图片说明')} src="abd"/>


    <H1>{i18n('列表')}</H1>
    <H2>{i18n('无序列表')}</H2>
    <UnorderList>
      <ListItem>{i18n('列表项1')}</ListItem>
      <ListItem>{i18n('列表项2')}</ListItem>
      <ListItem>{i18n('列表项3')}</ListItem>
    </UnorderList>
    <H2>{i18n('有序列表')}</H2>
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


    <H1>表格</H1>
    <Table
      columns={[
        {fieldName:'field1', title:i18n('靠左标题')},
        {fieldName:'field2', title:i18n('居中标题'),align:'center'},
        {fieldName:'field3', title:i18n('靠右标题'),align:'right'},
      ]}
      data={
        Array(10).fill(0).map(item=>{
          return ['field1','field2','field3'].reduce((res,item)=>{
            res[item] =i18n('随机数：')+ Math.random().toString(10).slice(2)
            return res
          },{})
        })}
    />

    <Break/>
    <h1>{i18n('原生HTML')}</h1>
    <Break/>
    <div 
    style={{
      background:'yellow',
      height:80,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    }}>
      <p>{i18n('这里可以任务编辑HTML')}</p>
    </div>
    </>
  )
}
