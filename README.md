# Vue js component generator [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

CLI util for easy generate Vue js component
## Installation
```js
npm install -g vue-generate-component-typescript
```

## Usage

```bash
vg --help
```

### Create new component
```bash
vg footer
```
Will generate five files:

**footer.component.vue**
```vue
<template src="./footer.component.html"></template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
@Options({})
export default class FooterComponent extends Vue {

}
</script>


<style src="./footer.component.scss" scoped lang="scss"></style>

```


**footer.component.html**
```html
<div>
    footerComponent works
</div>


```

**footer.component.scss**
```css

```

### Create new component single file
```bash
vg -s home
```
will generate one vue file:
```javascript
<template>
    <div>
        homeComponent works
    </div>
</template>
<script lang="ts">
    import {Options, Vue} from 'vue-class-component';

    @Options({})
    export default class HomeComponent extends Vue {

}

</script>

<style scoped lang="scss">

</style>

```

### Create new directive
```bash
vg -d test
```
will generate:

**test.directive.ts**
```javascript
import Vue from 'vue';

export const TestDirective
{

    function bind(el, binding, vnode)
    {

    }
    // When the bound element is inserted into the DOM...
    function inserted(el)
    {
        // el.focus();
    }

    function update()
    {

    }

    function unbind()
    {

    }
};

// You can also make it available globally.
Vue.directive('test', TestDirective);
```


### Create new Pipe (filter)
```bash
vg -p test
```
will generate:

**test.pipe.ts**
```javascript
import Vue from 'vue';

export const Test = function (value) {
    return value;
};

Vue.filter('test', Test});

```
