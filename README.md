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
|Random number:9392426961262375|Random number:8702265734708405|Random number:03235711482835413|
|Random number:49188586109805077|Random number:6235971348369276|Random number:28458889321078695|
|Random number:711382911255938|Random number:21162602720597534|Random number:36279068744573073|
|Random number:25508393894390524|Random number:3980633581332125|Random number:9245422817849336|
|Random number:09197027923561585|Random number:2266949122663442|Random number:894821260388027|
|Random number:25994379705013126|Random number:665838128851884|Random number:9982012619540892|
|Random number:4158809480891714|Random number:35632608028634505|Random number:7943208190108679|
|Random number:7373105495364469|Random number:9694673492190398|Random number:7023162800573806|
|Random number:11538604945992503|Random number:6722780477015418|Random number:5807155544062255|
|Random number:20125115439897545|Random number:6337236189703062|Random number:02271003482496603|

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