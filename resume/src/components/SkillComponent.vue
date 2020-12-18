<template>
    <div class="skill-row" ref="skill_row">
        <div class="skill-preview" @click="skill_collapse">
            <span class="trash-wrap" @click="trash_skill"><b-icon icon="trash" scale="1.4"></b-icon></span>
            <div class="skill-title" ref="skill_title">(No Specified)</div>
            <div class="skill-level" ref="skill_level">Expert</div>
            <svg class="skill-svg" width="12px" height="12px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path class="path1" d="M14.35 24.22l-13.13-13.13c-0.424-0.424-0.686-1.009-0.686-1.655 0-1.293 1.048-2.341 2.341-2.341 0.646 0 1.231 0.262 1.655 0.686l11.47 11.48 11.47-11.48c0.424-0.424 1.009-0.686 1.655-0.686 1.293 0 2.341 1.048 2.341 2.341 0 0.646-0.262 1.231-0.686 1.655l-13.13 13.13c-0.423 0.421-1.006 0.681-1.65 0.681s-1.227-0.26-1.65-0.681z"></path></svg>
        </div>
        <div class="skill-content">
          <b-row>
            <b-col cols='6'>
                <label>Skill</label>
                <input class="form-control" trim ref="skill_input_title" @input="edit_skill_title" @change="edit_skill_title">
            </b-col>
            <b-col cols='6'>
                <label>Level-<span ref="skill_sub_level" class="color-g">Expert</span></label>
                <select class="form-control" trim ref="skiller" @change="edit_skill_level">
                  <option value="Expert">Expert</option>
                  <option value="Experienced">Experienced</option>
                  <option value="Skillful">Skillful</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Novice">Novice</option>
                </select>
            </b-col>
          </b-row>
        </div>
    </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
  name: 'skillmentHistory',
  data () {
    return {
      skill_start_date: '',
      skill_end_date: ''
    }
  },
  components: {
    VueEditor
  },
  methods: {
    skill_collapse () {
      if (this.$refs.skill_row.classList.contains('show')) {
        this.$refs.skill_row.classList.remove('show')
      } else {
        this.$refs.skill_row.classList.add('show')
      }
    },
    edit_skill_title () {
      var title = ''
      if (this.$refs.skill_input_title.value === '') {
        title = '(No Specified)'
      } else {
        title = this.$refs.skill_input_title.value
      }
      this.$refs.skill_title.innerHTML = title
    },
    edit_skill_level () {
      var title = ''
      title = this.$refs.skiller.value
      this.$refs.skill_level.innerHTML = title
      this.$refs.skill_sub_level.innerHTML = title
    },
    trash_skill () {
      this.$refs.skill_row.remove()
    }
  }
}
</script>
<style scoped>
.color-g{
  color:rgb(37, 184, 105);
}
.trash-wrap{
    position: absolute;
    right: -40px;
    top: 20px;
    color: #FFF;
    transition: color .3s;
}
.skill-preview:hover .trash-wrap{
    color: #aaa;
}
.skill-preview:hover .trash-wrap:hover{
    color: rgb(33, 150, 243);
}
.skill-row{
    border: solid 1px #ccc;
    border-radius: 5px;
    padding: 16px;
    margin-bottom: 20px;
}
label{
  font-size: 14px;
  line-height: 18px;
  color: rgb(152, 161, 179);
  margin-bottom: 7px;
  margin-top: 17px;
}
.skill-content{
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  max-height: 1200px;
  transition: max-height 0.5s, opacity 0.25s, padding 0.25s, transform 0.5s;
}
.show .skill-content{
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  max-height: 0;
  transform: translateY(0);
  transition: max-height 0.5s, opacity 0.25s, padding 0.25s, transform 0.5s;
}
.skill-preview{
    position: relative;
    cursor: pointer;
}
.skill-preview:hover{
    color: rgb(33, 150, 243);
}
.skill-svg{
    position: absolute;
    top: 20px;
    right: 20px;
    color: #aaa;
    transform: rotate(180deg);
    transition: transform .5s;
}
.show .skill-svg{
    transform: rotate(0deg);
}
.skill-preview:hover .skill-svg{
    fill: rgb(33, 150, 243);
}
.skill-title{
    font-weight: 600;
    margin: 4px 0;
}
.skill-level{
    font-weight: 300;
    color: #aaa;
}
</style>
