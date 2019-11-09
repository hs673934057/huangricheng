<template>
  <div class="content">
    <input type="text" class="create-newtask" v-if="input_flag" @keyup.enter="add" />
    <div class="card" v-for="( todo , index ) in todos" :key="todo.id">
      <div class="card-header">{{ todo.task }}</div>
      <div class="card-content">
        <div class="card-content-inner">{{todo.info}}</div>
      </div>
      <div class="card-footer pull-right">
        <button
          class="button button-success"
          :class="{'button-fill':todo.done}"
          @click="changeContainerFlag( index )"
        >
          <span class="icon icon-check"></span>
        </button>
        <button class="button button-danger" @click="checkDone(index)">
          <span class="icon icon-remove"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input_flag: false
    };
  },
  props: ["todos", "inputflag"],
  methods: {
    changeContainerFlag(index) {
      this.$emit("change_flag", index);
    },
    checkDone(index) {
      this.$emit("check", index);
    },
    add(e) {
      this.$emit("add_item", e.target.value);
      e.target.value = "";
      this.input_flag = false;
    }
  },
  mounted() {
    let that = this;
    this.$bus.on("change_input_flag", function() {
      that.input_flag = !that.input_flag;
    });
  }
};
</script>

<style lang="stylus" scoped>
.content {
  padding-top: 50px;
  padding-bottom: 80px;
}

.create-newtask {
  margin-left: 10px;
}

.card {
  overflow: hidden;
}

.card-footer button {
  margin-right: 10px;
}
</style>