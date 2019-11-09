<template>
  <div>
    <tab></tab>
    <Container :todos="newTodos" @change_flag="changeFlag" @check="check" @add_item="addItem"></Container>
    <myMask v-if="mask_flag" :close_mask="closeMask" :remove="remove" :active_index="active_index"></myMask>
    <Footer @get_type="changeType" :type="type"></Footer>
  </div>
</template>

<script>
import Tab from "../views/Tab";
import Container from "../views/container";
import Footer from "../views/footer";
import myMask from "../views/myMask";

export default {
  components: {
    Tab,
    Container,
    Footer,
    myMask
  },
  data() {
    return {
      mask_flag: false,
      active_index: 0,
      type: "A",
      todos: [
        {
          id: 1,
          task: `任务1`,
          info: "项目一",
          done: true
        },
        {
          id: 2,
          task: "任务2",
          done: true,
          info: "项目二"
        },
        {
          id: 3,
          task: "任务3",
          info: "项目三",
          done: true
        }
      ]
    };
  },
  methods: {
    changeFlag(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    check(index) {
      const flag = this.todos[index].done;
      if (flag) {
        this.remove();
      } else {
        this.active_index = index;
        this.changMaskFlag();
      }
    },
    remove(index) {
      this.todos.splice(index, 1);
    },
    changMaskFlag() {
      this.mask_flag = true;
    },
    closeMask() {
      this.mask_flag = false;
    },
    addItem(val) {
      this.todos.push({
        id: sort(this.todos)[0].id + 1,
        task: `任务`,
        info: val,
        done: true
      });
    },
    changeType(val) {
      this.type = val;
    }
  },
  computed: {
    newTodos() {
      switch (this.type) {
        case "全部":
          return this.todos;
          break;
        case "已完成":
          return this.todos.filter(item => item.done);
          break;
        case "未完成":
          return this.todos.filter(item => !item.done);
          break;
      }
    }
  }
};

function sort(arr) {
  return arr.sort(function(a, b) {
    return b.id - a.id;
  });
}
</script>

<style lang="stylus" scoped></style>
