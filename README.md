<div align="center">
  
当前文档基于 [jsx-to-md](https://github.com/eyelly-wu/jsx-to-md) 和 [i18n-pro](https://github.com/eyelly-wu/i18n-pro) 生成，如果你当前是通过 `CodeSandbox` 或者 `StackBlitz` 访问本项目，你可以通过编辑 `docs/index.tsx` 来实时更新当前文档

</div>
<details >
  <summary>Table of Contents</summary>

  [Heading](#heading)<br/>
  [Font](#font)<br/>
  [Reference Block](#reference-block)<br/>
  &emsp;&emsp;[General Reference](#general-reference)<br/>
  &emsp;&emsp;[Nested Reference](#nested-reference)<br/>
  [Code Block](#code-block)<br/>
  &emsp;&emsp;[Single line code](#single-line-code)<br/>
  &emsp;&emsp;[Multiline code](#multiline-code)<br/>
  [Hyperlink](#hyperlink)<br/>
  [Image](#image)<br/>
  [list](#list)<br/>
  &emsp;&emsp;[Semantic type](#semantic-type)<br/>
  &emsp;&emsp;&emsp;&emsp;[Unordered list](#unordered-list)<br/>
  &emsp;&emsp;&emsp;&emsp;[Ordered list](#ordered-list)<br/>
  &emsp;&emsp;&emsp;&emsp;[Nested list ](#nested-list)<br/>
  &emsp;&emsp;[Simple type](#simple-type)<br/>
  &emsp;&emsp;&emsp;&emsp;[Unordered list](#unordered-list)<br/>
  &emsp;&emsp;&emsp;&emsp;[Ordered list](#ordered-list)<br/>
  &emsp;&emsp;&emsp;&emsp;[Nested list ](#nested-list)<br/>
  [Table](#table)<br/>
  [Task List](#task-list)<br/>
  &emsp;&emsp;[Basic](#basic)<br/>
  &emsp;&emsp;[Nesting](#nesting)<br/>
  [异步渲染](#异步渲染)<br/>
  &emsp;&emsp;[基础的](#基础的)<br/>
  &emsp;&emsp;[嵌套的](#嵌套的)<br/>
  [Native HTML](#native-html)<br/>

</details>

# Heading

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

# Font
*Italic*

**Bold**

***Oblique Bold***

~~Strikethrough~~<br />
# Reference Block

## General Reference

>text
## Nested Reference

>text1
>>text2
>>>text3
>>>>text4
# Code Block

## Single line code
`const text = 'Hello World'`
## Multiline code

```js
const text = 'Hello World'
console.log(text)
```

# Hyperlink
[jsx-to-md-demo](https://github.com/eyelly-wu/jsx-to-md-demo)

[jsx-to-md](https://github.com/eyelly-wu/jsx-to-md)
# Image
![caption](https://commonmark.org/help/images/favicon.png "Picture Title")
# list

## Semantic type

### Unordered list

* List Item 1
* List Item 2
* List Item 3


### Ordered list

1. List Item 1
2. List Item 2
3. List Item 3


### Nested list 

* development
   1. front-end
      * JavaScript
      * HTML
      * CSS
      * ...
   2. back-end
      * Java
      * SQL
      * ...
* test
   * unit testing
      1. JUnit
      2. Jest
      3. Vitest
      4. ...
   * E2E test
      1. Cypress
      2. ...
* ...


## Simple type

### Unordered list

* List Item 1
* List Item 2
* List Item 3


### Ordered list

1. List Item 1
2. List Item 2
3. List Item 3


### Nested list 

1. development
   1. front-end
      * JavaScript
      * HTML
      * CSS
      * ...
   2. back-end
      * Java
      * SQL
      * ...
2. test
   * unit testing
      1. JUnit
      2. Jest
      3. Vitest
   * E2E test
      1. Cypress
      2. ...
3. ...


# Table

|Left Title|Centered Title|Right Title|
|:-|:-:|-:|
|Random number:6789834144923366|Random number:47946566792099543|Random number:9238013304162511|
|Random number:1367827308204661|Random number:9735688223766399|Random number:21385978744378042|
|Random number:0843231501386994|Random number:42492011931279716|Random number:9171163531022779|
|Random number:6727347570552582|Random number:9187593077141931|Random number:12523834734050232|
|Random number:8369709390673152|Random number:4238694435024031|Random number:2318266041578414|
|Random number:08936765847226491|Random number:2662415996024914|Random number:6275583442459602|
|Random number:4475438101754352|Random number:040392141968996986|Random number:6550474015312719|
|Random number:24942166462326965|Random number:09538418054651476|Random number:2482327335696779|
|Random number:08877637300822028|Random number:7092104687924912|Random number:963956992115401|
|Random number:8780692385084257|Random number:9693339980049773|Random number:31313601544890624|

# Task List

## Basic

- [x] done1
- [ ] undo
- [x] done2


## Nesting

- [ ] twoLevel
  - [ ] child1
  - [x] child2
- [ ] threeLevel
  - [ ] child1
    - [x] grandchild1
    - [ ] grandchild2
  - [ ] child2
    - [ ] grandchild1
    - [ ] grandchild2
  - [x] child3
    - [x] grandchild1
    - [x] grandchild2
- [x] twoLevelEmpty


# 异步渲染

## 基础的
Hi jsx-to-md
## 嵌套的
H1 jsx-to-md, this is jsx-to-md-demo

<h1>Native HTML</h1>
<div style="background: yellow;height: 80px;display: flex;justify-content: center;align-items: center;">
  <p>You can edit HTML here</p>
</div>