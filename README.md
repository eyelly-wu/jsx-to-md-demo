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
|Random number:8625515448771444|Random number:09474791514760228|Random number:5700204770509265|
|Random number:8772297395623716|Random number:027306850772788938|Random number:10411035864898777|
|Random number:8657587477814468|Random number:2012481635906065|Random number:2859164062374775|
|Random number:41508758857933814|Random number:8493195744812227|Random number:4814659098323082|
|Random number:39716682187407226|Random number:7105404934992814|Random number:4386981278797717|
|Random number:8336982805164792|Random number:3150404642909319|Random number:8001370770484162|
|Random number:06633395540251574|Random number:7985556201324593|Random number:8375074914436973|
|Random number:23710228816060863|Random number:046694383549073626|Random number:7147439130348741|
|Random number:4419599530106946|Random number:734695253794851|Random number:8036242725984397|
|Random number:1851422036050725|Random number:0032757381158325938|Random number:9376700966256883|

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