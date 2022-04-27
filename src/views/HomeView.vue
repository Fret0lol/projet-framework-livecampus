<template>
  <div class="home">
    <BurgerMenu></BurgerMenu>
    <img alt="Vue logo" src="../assets/logo.png">
    <div id="bottom-menu">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFOklEQVR4nO2dT4xdUxjAf970SdS0QpHUtJEgpqYRi1K6sGBBUBEJJZQFTTcidogtoYti/tRIY2lsFZWiEvYyYlESbYh0ZmiqQ+gM02am8yzOffryOvPO9+75986b75d8m7k33997zz33nO/dAUVRFEVRFEVRlLQ8D9QCy4vRosmMncAi4QuwCOyKFFM2PAjMEz75dVkAHo0SWQZsA/4hXvLrcha4J0J8Hc3NwJ/ET35dTgO3Bo+yQ7keOEG65NflFHBT4Fg7jquBY6RPfl0mgWuDRtxBXAZ8R/qkN8sxzIXR8WwG3ga+B2YJl5CTwI0e/L2BsEPdbJGLt4ABD/4uy8XACGYKF/pq/BvY4tH3W4C/Ivi9AAwBVY++Ayb5X0YIoAbMAXf5DgC4E/g3UgyH8VyEkUiOLwAP+3S8ie3Ee+Eb9OX0ZuIMO7GWCJ4izpLHPJ6mt4MRnK0BL/lwVshzAeNolDd9OPtDBEf3+nC0TV518FcqR3w4OhPYyfeBi3w4WoLQd/dpmwOSwGsedHQzTvmpeHREKYEWIDFagMSsSu2AkB5gK+YNeQuwCVgP9BbHZ4HfgKPAOPA18A1mvp89tid9SDYCe4ApgR/NMgm8AWwI7GPw/KQowFXAfsy2oetU8CwwCqwL5GvXFeAJ4A+B3XZlGngsgL9dU4Aq8J7Anqu8i99nX1cUYDVwSGDLl3xa2PRB9gWoEjf5jUXwcSdkX4AYw85yMurB/6wL8KRAf6McB4aBe4F+4NJC+ou/jQATberc4RhDtgVYh+nJkSRpCtiNeSGzUcG0Hf4i1D0NXOkQR7YF2C/QXQMOcP6Ntx3WAB8LbexziCPLAmxE9pI1iNt6VQXTpWCzcwboK2kjywLsEeg9gJ/FwgqyO+H1kvqzK0AP9rWdScoNO8uxBvjVYnOCcgXPrgDbBDqfcfb6QnYJ7G4toTe7Arxi0Xcc2WynXXowd1Yr2y+X0OuUnxQbMrZ+/I+AcwHsnsM8C1rhsx1SRIoC2BpuPwto+5DleH9A20uSogDrLcd/Cmj7Z8txm29J8P0MsM3/fc5+mum12D5TQmd2z4CUdFy8KRyatRy/JqBtm+6ZgLaXJEUBTliOXxfQtk23zTfvpCjAUcvxBwLa3m45/mNA20uSogDjluMPEeZFbBXmF/mt+DaAXWd8z4LuEOh81tnrC9ktsHtbCb3ZLUVUsC8JTGEW0HyxFtM5Z1sCib4Yl2IIWgTGLOf0Fef4Wo4ew/6SNUaHtjKGuMU2INuQGcJ9Q2ZYYGeO8tPf7IagOqMC3TXMAlqZ4WgtcFBoY9ghjmwLcAXwu0B/rTjvBWR9PBXgaexjfl2mcesbzbYAAI8L9DfKJGYD/T5Mi3pvIZuA+4F3sD/gm+URxxiyLgCYXs12EuZTXIaeOtkXoAf4UGDHtxxEWxP/ZzWmVzNW8j8BLvHke1cUAMzVKJ0ZuQ472p7egh3IWxbbkZO4P3CXousKAGaKug+zQ+Wa+DnMVX95IF+7sgB1+jAda+12PNcwazuvEXaDB4EfLcnlUwUVTDvL3ZjWkX5McRp/pjqF+e7bOPAVZmk5xtqOU35yKUAn45SfjtukXmloARKjBUiM5IVkhtbLwaFnQjlj/WCT5A6Y8ODISsWaO0kBDntwZKXyuQ8lA8T5bGW3yTxmn6Ilkv6bU5gdo9sF5yrnGQI+8KWsihmKUl9VucgXBPh+dBXzs9GY/+slN5nHfEXde/IbGcB8EfYI4b8pmoPMFLnYywr8TxyKoiiKoiiKoiiKoiiKoiiKotj5D12MPYKL8wt4AAAAAElFTkSuQmCC"/>
      <p>Prendre une photo</p>
    </div>
  </div>
</template>

<script>
import BurgerMenu from "@/components/BurgerMenu.vue";
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    BurgerMenu
}
}
</script>
<style>
#bottom-menu {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 65px;
  background-color: #3FB27F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #32475B;
}
#bottom-menu img {
  height: 30px;
}
#bottom-menu p {
  font-size: 0.8em;
  color: #32475B;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>