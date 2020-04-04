# vue-tailwind-icons

## Introduction

A simple package that wraps up some SVG icon sets into an easy to use Vue wrapper.

Heroicons and Zondicons originally made by [Steve Schoger](https://twitter.com/steveschoger) and [Adam Wathan](https://twitter.com/adamwathan).

While these can be used with any UI framework, they work great with [TailwindCSS](https://tailwindcss.com).

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

// you can also set the default icon set, check below for set names
Vue.use(VIcon, { set: 'outline' })
```

```javascript
// you can call it like this in your template
<icon name="plus-circle" class="w-6 h-6" />
```

### Icons sets
+ outline
+ solid
+ zondicons

## License

Vue Tailwind Icons is open-sourced software licensed under [the MIT license](LICENSE.md).

## Credits

+ Inspired and developed from [blade-icons](https://github.com/driesvints/blade-icons) by Dries Vints.
+ [Heroicons](https://github.com/refactoringui/heroicons) made by [Steve Schoger](https://twitter.com/steveschoger) and [Adam Wathan](https://twitter.com/adamwathan)
+ [Zond Icons](https://www.zondicons.com) made by [Steve Schoger](https://twitter.com/steveschoger) and [Adam Wathan](https://twitter.com/adamwathan)