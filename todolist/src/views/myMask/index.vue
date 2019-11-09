<template>
  <div class="mask-box">
    <div class="bg" @click.self="close_mask"></div>
    <div class="mask-content">
      <p>你确定要删除吗？</p>
      <button class="button button-danger button-fill pull-right" @click="confirm">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["close_mask", "remove", "active_index"],
  methods: {
    confirm() {
      this.close_mask();
      this.remove(this.active_index);
    }
  }
};
</script>

<style lang="stylus" scoped>
.mask-box .bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  z-index: 3;
}

.mask-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 80%;
  height: 110px;
  background: white;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  z-index: 4;
}

.mask-content button {
  width: 80px;
  height: 30px;
  font-size: 14px;
}

.mask-content p {
  font-weight: bold;
}
</style>