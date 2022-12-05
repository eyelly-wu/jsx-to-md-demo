The current document is generated based on [jsx-to-md](https://github.com/eyelly-wu/jsx-to-md) and [i18n-pro](https://github.com/eyelly-wu/i18n-pro). You can update the current document in real time by editing  `docs/index.tsx` 
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

## General reference

>text
## Nested Reference

>text1
>>text2
>>>text3
>>>>text4
# Code block

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
![caption](https://commonmark.org/help/images/favicon.png 'Picture Title')
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

|Left Heading|Centered Title|Right Heading|
|:-|:-:|-:|
|Random number:539954907301808|Random number:3608084788643968|Random number:316614810105065|
|Random number:8956901915875026|Random number:3413038119209446|Random number:6440420256912285|
|Random number:7009582821959164|Random number:6771582043580091|Random number:5790581154089256|
|Random number:1439559598171256|Random number:9372740234648795|Random number:6343381895147073|
|Random number:3952532004290876|Random number:3365624627990236|Random number:80523085461055|
|Random number:011825037679655592|Random number:18834602696457825|Random number:629150935509802|
|Random number:41609608923765196|Random number:5160237921209869|Random number:10113024315202712|
|Random number:6997242192026634|Random number:07396849625598301|Random number:22432000592358015|
|Random number:03086282889880332|Random number:049326681610369016|Random number:3537981891214288|
|Random number:28162707303037804|Random number:9228806490061472|Random number:10349103722433495|

# Task List

## Basics

- [x] done1
- [ ] undo
- [x] done2


## nesting

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


<h1>Native HTML</h1>
<div style="background: yellow;height: 80px;display: flex;justify-content: center;align-items: center;">
  <p>You can edit HTML here</p>
</div>