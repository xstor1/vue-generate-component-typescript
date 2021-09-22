<template src="./{{ (name.split('/')[name.split('/').length-1]) | kebabCase }}.component.html"></template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
@Options({})
export default class {{ name.split('/')[name.split('/').length-1] }}Component extends Vue {

}
</script>


<style src="./{{ (name.split('/')[name.split('/').length-1]) | kebabCase }}.component.scss" scoped lang="scss"></style>
