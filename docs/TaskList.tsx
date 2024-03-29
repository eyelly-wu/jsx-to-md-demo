import { BlockQuote, H1, H2, TaskList } from 'jsx-to-md'

export default function TaskListDemo() {
  return (
    <>
      <H1>{t('任务列表')}</H1>
      <H2>{t('基础')}</H2>
      <TaskList items={['done1', ['undo', 0], ['done2', 1]]} />
      <H2>{t('嵌套')}</H2>
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
    </>
  )
}
