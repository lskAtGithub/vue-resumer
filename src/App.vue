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
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.topbar{
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3px hsla(0,0,0,0.5);
}
main{
  display: flex;
  flex: 1;
  background: #ddd;

  > .editor{
    width: 40em;
    margin: 16px 8px 16px 16px;
    background: #fff;
    box-shadow: 0 0 3px hsla(0,0,0,0.5);
    border-radius: 4px;
    overflow: hidden;
  }

  > .preview{
    flex: 1;
    margin: 16px 8px 16px 16px;
    background: #fff;
    box-shadow: 0 0 3px hsla(0,0,0,0.5);
    border-radius: 4px;
    overflow: hidden;
  }

}

</style>
