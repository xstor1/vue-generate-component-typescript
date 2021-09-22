<template src="./{{name.split('/')[name.split('/').length-1]}}.component.html"></template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
@Options({})
export default class {{(name.split('/')[name.split('/').length-1]) | pascalCase}}Component extends Vue {

}
</script>


<style src="./{{name.split('/')[name.split('/').length-1]}}.component.scss" scoped lang="scss"></style>
