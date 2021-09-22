<template>
  <div>
     {{(name.split('/')[name.split('/').length-1]) | kebabCase}}Component works
  </div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({})
  export default class {{(name.split('/')[name.split('/').length-1]) | pascalCase}}Component extends Vue {

  }

</script>

<style scoped lang="scss">

</style>
