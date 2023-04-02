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
|Random number:9897091131207607|Random number:64395510199921|Random number:2491280316632496|
|Random number:9723725784310939|Random number:5770119822643596|Random number:2332471985942366|
|Random number:2020428905822853|Random number:08842267034533524|Random number:010576385857318238|
|Random number:06485641214675608|Random number:2450827567717726|Random number:36565023089593507|
|Random number:9072125605777768|Random number:5138353361666748|Random number:9103738678310656|
|Random number:044565246404778325|Random number:8503808061725273|Random number:050419910901995824|
|Random number:6259029458189611|Random number:8767207025738311|Random number:9451712005492612|
|Random number:6706579598654545|Random number:41310241237756506|Random number:18150447868967423|
|Random number:9549941661759578|Random number:12472436105768758|Random number:042909965580753884|
|Random number:215222970599104|Random number:2249411365216889|Random number:0780153411718858|

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