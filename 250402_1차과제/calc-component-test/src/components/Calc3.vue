<template>
  <div>
    X : <input type="text" v-model.number="state.x" /> <br />
    Y : <input type="text" v-model.number="state.y" /> <br />
    <button @click="">계산</button> <br />
    <div>결과 : {{ state.result }}</div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';

const state = reactive({ x: 10, y: 20, result: 30 });

const calcAdd = () => {
  state.result = state.x + state.y;
};
</script>
<!-- reactive는 .value를 사용하지 않음

export default {
  name: 'Calc3',
  setup() {
    const state = reactive({ x: 10, y: 20, result: 30 });
    const calcAdd = () => {
      state.result = state.x + state.y;
    };
    return { state, calcAdd };
  },
}; -->
