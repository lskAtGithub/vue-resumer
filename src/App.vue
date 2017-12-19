<template>
  <div id="app">
    <Topbar class="topbar" />
    <main>
      <Editor  class="editor" />
      <Preview class="preview" />
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Preview from './components/Preview'
import Editor from './components/Editor'

export default {
  components: {
    Editor,Topbar,Preview
  }
}
</script>

<style lang="scss">
html, body, #app{
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100%;
  display: flex;
  flex-direction: column;
}

.topbar{
  
}
main{
  display: flex;
  flex: 1;
}
.editor{
  width: 20em;
}
.preview{
  flex: 1;
}
</style>
