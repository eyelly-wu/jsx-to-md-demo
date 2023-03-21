<div align="center">
  
The current document is generated based on [jsx-to-md](https://github.com/eyelly-wu/jsx-to-md) and [i18n-pro](https://github.com/eyelly-wu/i18n-pro). If you currently access this project through  `CodeSandbox`  or  `StackBlitz` , you can update the current document in real time by editing  `docs/index.tsx` One thing to note:  `StackBlitz`  currently does not support native HTML, so previewing native HTML may have problems

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
  [Asynchronous rendering](#asynchronous-rendering)<br/>
  &emsp;&emsp;[basic](#basic)<br/>
  &emsp;&emsp;[Nested](#nested)<br/>
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
|Random number:7939743194581366|Random number:6302781321053128|Random number:24698714406025202|
|Random number:7434102446769197|Random number:9835439299411526|Random number:5509228448223653|
|Random number:36828209856918503|Random number:8786314966335742|Random number:6646051502494674|
|Random number:0169692405439974|Random number:5521335765433817|Random number:5669914596485788|
|Random number:9282797509172946|Random number:8544604360216885|Random number:4564293938579138|
|Random number:021551808286586205|Random number:5107091608825314|Random number:2531445957573091|
|Random number:05530664900142912|Random number:10026840460626674|Random number:8747225741071345|
|Random number:7564712799768936|Random number:9198497483712442|Random number:33209747068596784|
|Random number:7494061000876984|Random number:9972342353276642|Random number:5896508499878474|
|Random number:5370100591111162|Random number:8793350451563842|Random number:253368515858841|

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


# Asynchronous rendering

## basic
Hi jsx-to-md
## Nested
H1 jsx-to-md, this is jsx-to-md-demo

<h1>Native HTML</h1>
<div style="background: yellow;height: 80px;display: flex;justify-content: center;align-items: center;">
  <p>You can edit HTML here</p>
</div>