<template>
  <div id="identify">
    <SplashScreen v-if="screen === 0"></SplashScreen>
    <LoginScreen v-else-if="screen === 1" @goto="screen = 2"></LoginScreen>
    <RegisterScreen v-else-if="screen === 2" @goto="screen = 1"></RegisterScreen>
  </div>
</template>

<script setup>
import SplashScreen from '@/components/SplashScreen.vue'
import { onMounted, ref } from 'vue';
import LoginScreen from '@/components/LoginScreen.vue';
import RegisterScreen from '@/components/RegisterScreen.vue';

let screen = ref(0);

onMounted(() => {
  setTimeout(() => {
    screen.value = 1;
  }, 5000);
});


</script>
