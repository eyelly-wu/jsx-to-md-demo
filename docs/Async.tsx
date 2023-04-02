import { H1, H2, AsyncWrapper } from 'jsx-to-md'

export default function AsyncDemo() {
  type Data = {
    name: string
  }
  const asyncData1 = new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'jsx-to-md',
      })
    }, 50)
  })

  const asyncData2 = new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'jsx-to-md-demo',
      })
    }, 100)
  })

  return (
    <>
      <H1>{i18n('异步渲染')}</H1>
      <H2>{i18n('基础的')}</H2>
      <AsyncWrapper data={asyncData1}>
        {({ name }) => {
          return <>Hi {name}</>
        }}
      </AsyncWrapper>
      <H2>{i18n('嵌套的')}</H2>
      <AsyncWrapper data={asyncData1}>
        {({ name }) => {
          return (
            <>
              H1 {name}
              <AsyncWrapper data={asyncData2}>
                {({ name }) => {
                  return <>, this is {name}</>
                }}
              </AsyncWrapper>
            </>
          )
        }}
      </AsyncWrapper>
    </>
  )
}
