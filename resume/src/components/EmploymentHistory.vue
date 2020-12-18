<template>
    <div class="employ-row" ref="employ_row">
        <div class="employ-preview" @click="employ_collapse">
            <span class="trash-wrap" @click="trash_employ"><b-icon icon="trash" scale="1.4"></b-icon></span>
            <div class="employ-title" ref="employ_title">(No Specified)</div>
            <div class="employ-date" ref="employ_date">Dec 2020 - Dec 2020</div>
            <svg class="employ-svg" width="12px" height="12px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path class="path1" d="M14.35 24.22l-13.13-13.13c-0.424-0.424-0.686-1.009-0.686-1.655 0-1.293 1.048-2.341 2.341-2.341 0.646 0 1.231 0.262 1.655 0.686l11.47 11.48 11.47-11.48c0.424-0.424 1.009-0.686 1.655-0.686 1.293 0 2.341 1.048 2.341 2.341 0 0.646-0.262 1.231-0.686 1.655l-13.13 13.13c-0.423 0.421-1.006 0.681-1.65 0.681s-1.227-0.26-1.65-0.681z"></path></svg>
        </div>
        <div class="employ-content">
            <b-row>
            <b-col cols='6'>
                <label>Job title</label>
                <input class="form-control" id='input-1' trim ref="job_title" @input="edit_employ_title" @change="edit_employ_title">
            </b-col>
            <b-col cols='6'>
                <label>Employer</label>
                <input class="form-control" id='input-1' trim ref="employer" @input="edit_employ_title" @change="edit_employ_title">
            </b-col>
            </b-row>
            <b-row>
            <b-col cols='6'>
                <label>Start & End date</label>
                <b-row>
                    <b-col sm="6">
                        <input type="month" style="font-size: 12px;" class="mb-2 form-control"  ref="start_day" @input="edit_employ_date" @change="edit_employ_date">
                    </b-col>
                    <b-col sm="6">
                        <input type="month" style="font-size: 12px;" class="mb-2 form-control"  ref="end_day" @input="edit_employ_date" @change="edit_employ_date">
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols='6'>
                <label>City</label>
                <b-form-input id='input-1' trim></b-form-input>
            </b-col>
            </b-row>
            <b-row>
                <b-col cols="12">
                    <label>Description</label>
                    <vue-editor></vue-editor>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
  name: 'EmploymentHistory',
  data () {
    return {
      employ_start_date: '',
      employ_end_date: ''
    }
  },
  components: {
    VueEditor
  },
  methods: {
    employ_collapse () {
      if (this.$refs.employ_row.classList.contains('show')) {
        this.$refs.employ_row.classList.remove('show')
      } else {
        this.$refs.employ_row.classList.add('show')
      }
    },
    edit_employ_title (e) {
      var title = ''
      if ((this.$refs.job_title.value === '') && (this.$refs.employer.value === '')) {
        title = '(No Specified)'
      } else if ((this.$refs.job_title.value !== '') && (this.$refs.employer.value !== '')) {
        title = this.$refs.job_title.value + ' at ' + this.$refs.employer.value
      } else {
        title = this.$refs.job_title.value + this.$refs.employer.value
      }
      this.$refs.employ_title.innerHTML = title
    },
    edit_employ_date () {
      var title = ''
      if ((this.$refs.start_day.value === '') && (this.$refs.end_day.value === '')) {
        title = '(No Specified)'
      } else if ((this.$refs.start_day.value !== '') && (this.$refs.end_day.value !== '')) {
        title = this.$refs.start_day.value + ' - ' + this.$refs.end_day.value
      } else {
        title = this.$refs.start_day.value + this.$refs.end_day.value
      }
      this.$refs.employ_date.innerHTML = title
    },
    trash_employ () {
      this.$refs.employ_row.remove()
    }
  }
}
</script>
<style scoped>
.trash-wrap{
    position: absolute;
    right: -40px;
    top: 20px;
    color: #FFF;
    transition: color .3s;
}
.employ-preview:hover .trash-wrap{
    color: #aaa;
}
.employ-preview:hover .trash-wrap:hover{
    color: rgb(33, 150, 243);
}
.employ-row{
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
.employ-content{
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  max-height: 1200px;
  transition: max-height 0.5s, opacity 0.25s, padding 0.25s, transform 0.5s;
}
.show .employ-content{
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  max-height: 0;
  transform: translateY(0);
  transition: max-height 0.5s, opacity 0.25s, padding 0.25s, transform 0.5s;
}
.employ-preview{
    position: relative;
    cursor: pointer;
}
.employ-preview:hover{
    color: rgb(33, 150, 243);
}
.employ-svg{
    position: absolute;
    top: 20px;
    right: 20px;
    transform: rotate(180deg);
    transition: transform .5s;
}
.show .employ-svg{
    transform: rotate(0deg);
}
.employ-preview:hover .employ-svg{
    fill: rgb(33, 150, 243);
}
.employ-title{
    font-weight: 600;
    margin: 4px 0;
}
.employ-date{
    font-weight: 300;
    color: #aaa;
}
</style>
