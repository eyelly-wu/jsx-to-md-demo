import { H1, Table } from 'jsx-to-md'

export default function TableDemo() {
  return (
    <>
      <H1>{t('表格')}</H1>
      <Table
        columns={[
          { fieldName: 'field1', title: t('靠左标题') },
          { fieldName: 'field2', title: t('居中标题'), align: 'center' },
          { fieldName: 'field3', title: t('靠右标题'), align: 'right' },
        ]}
        data={Array(10)
          .fill(0)
          .map((item) => {
            return ['field1', 'field2', 'field3'].reduce((res, item) => {
              res[item] = t('随机数：') + Math.random().toString(10).slice(2)
              return res
            }, {})
          })}
      />
    </>
  )
}
