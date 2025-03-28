<script>
export default {
  name: 'CheckBox1',
  props: ['id', 'checked', 'label'],
};
</script>

<template>
  <div>
    <!-- 부모-> 자식 props로 데이터 전달하는것 -->
    <input
      type="checkbox"
      :value="id"
      :checked="checked"
      @change="$emit('check-changed', { id, checked: $event.target.checked })"
    />
    <span
      v-if="checked === true"
      style="color: blue; text-decoration: underline"
    >
      <i>{{ label }}</i>
    </span>
    <span v-else style="color: gray">{{ label }}</span>
  </div>
</template>
