# vue-tailwind-icons

## Introduction

A simple package that wraps up SVG icons into an easy to use wrapper.

Heroicons and Zondicons originally made by Steve Schoger and Adam Wathan.

## Installation

#### Install using npm
```bash
# install it via npm
npm install vue-tailwind-icons --save
```

#### Install using yarn
```bash
# install it via yarn
yarn add vue-tailwind-icons
```

<hr>

## Usage

It is simple. couple of lines all what you need.

```javascript
// register the plugin on vue
import VIcon from 'vue-tailwind-icons';

Vue.use(VIcon)

// you can also pass options, check options reference below
Vue.use(VIcon, Options)
```

```javascript
// you can call it like this in your template
<icon name="plus-circle" class="w-6 h-6" />
```

## Options

You can set the default icon set like:

```javascript
Vue.use(VIcon, { set: 'outline' })
```

### Icons sets
outline
solid
zondicons