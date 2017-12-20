<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <Topbar class="topbar" v-on:preview="preview" />
    <main>
      <Editor v-bind:resume="resume"  class="editor" />
      <Preview v-bind:resume="resume" class="preview" />
    </main>
    <el-button id="exit" v-on:click="exit">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Preview from './components/Preview'
import Editor from './components/Editor'

export default {
  data(){
    return {
      previewMode: false,
      resume:{
        profile:{ name:'', city:'', age:'' },
        work: [ { company:'',content:'' } ],
        study:[ { school:'', duration:'', degree:'' } ],
        contact:{ phone:'', email:'', VX:'', QQ:'' },
        winning:[ { getWin:'', describe:'' } ],
        project:[ { name:'', degree:'', summary:'' } ]
      }
    }
  },
  methods:{
    exit(){
      this.previewMode = false
    },
    preview(){
      this.previewMode = true
    }
  },
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
  display: flex !important;
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
    overflow: auto;

  }

}
.previewMode > #topbar{
  display: none;
}
.previewMode #editor{
  display: none;
}
.previewMode #preview{
  max-width: 800px;
  margin: 32px auto;
}
#exit{
  display: none;
}
.previewMode #exit{
  display: inline-block;
  position: fixed;
  right: 32px;
  bottom: 32px;
}
</style>
