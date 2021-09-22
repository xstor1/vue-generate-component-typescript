# Vue js component generator [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

CLI util for easy generate Vue js component
## Installation
```js
npm i vue-component-class-based-generator --save-dev
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
