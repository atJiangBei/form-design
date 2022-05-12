<template>
  <div class="container-warper">
    <design-side />
    <design-content />
  </div>
</template>

<script>
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
}
</style>
