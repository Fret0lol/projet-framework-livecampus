<template>
	<div id="splash">
    <div class="logo">
      <img src="../assets/logo.png" alt="Vue logo">
      <h2 class="title">Cloud Storage</h2>
    </div>
		<p>version {{ version }}</p>
	</div>
</template>

<script setup>
import {ref} from "vue";

const version = ref("100.0.1");
</script>
<style>
#splash {
  height: 100vh;
}
#splash .logo{
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
}
#splash .logo img {
  width: 150px
}
#splash p {
  height: 5vh;
}
</style>
