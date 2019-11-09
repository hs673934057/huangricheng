<template>
  <footer>
    <ul>
      <li
        v-for="item in items"
        :key=" item.id "
        :class="[ item.style , type== item.text && 'circle-fill']"
        @click="changeType( item.text ) "
      >{{ item.text }}</li>
    </ul>
  </footer>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      items: [
        {
          id: 1,
          text: "全部",
          style: "circle circle-success"
        },
        {
          id: 2,
          text: "已完成",
          style: "circle circle-primary"
        },
        {
          id: 3,
          text: "未完成",
          style: " circle circle-danger"
        }
      ]
    };
  },
  methods: {
    changeType(val) {
      this.$emit("get_type", val);
    }
  }
};
</script>

<style lang="stylus" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;

  ul {
    height: 60px;
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      width: 60px;
      height: 60px;
      align-self: center;
      text-align: center;
      line-height: 60px;
      border: 1px solid #ccc;
      border-radius: 50%;
      font-size: 14px;
    }
  }

  .circle {
    width: 60px;
    height: 60px;
    color: #ccc;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 60px;
    border-radius: 50%;
  }

  .circle.circle-success {
    border-color: green;
    color: green;
  }

  .circle.circle-success.circle-fill {
    background: green;
    color: white;
  }

  .circle.circle-primary {
    border-color: blue;
    color: blue;
  }

  .circle.circle-primary.circle-fill {
    background: blue;
    color: white;
  }

  .circle.circle-danger {
    border-color: red;
    color: red;
  }

  .circle.circle-danger.circle-fill {
    background: red;
    color: white;
  }
}
</style>