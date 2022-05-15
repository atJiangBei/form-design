<template>
  <div class="container-warper">
    <design-side />
    <design-content />
    <design-setting />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.container-warper {
  display: flex;
  height: 100vh;
  min-width: 1200px;
}
</style>
