<script setup></script>

<template>
  <div>
    <header>
      <slot name="header"> </slot>
    </header>

    <main>
      <!-- slot name="default" 와 같은 의미. 아무것도 안쓰면 dafault.-->
      <slot> </slot>
    </main>

    <footer>
      <slot name="footer"> </slot>
    </footer>
    <h1>나는 자식</h1>
  </div>
</template>

<style scoped></style>
