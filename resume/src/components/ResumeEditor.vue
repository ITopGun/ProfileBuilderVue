<template>
  <div class='edit-profile'>
    <b-container>
      <b-row>
        <b-col cols='12'>
          <div class='title-container'>
            <div class='title'>Untitled</div>
            <div class='tac'>
              <div class="flag-wrap">
                <div class="flag"></div>
                <div class="flag-lang">English</div>
              </div>
            </div>
          </div>
          <div class='progress-container'>
            <div class="d-flex just-bet">
              <div class="sub-title"><span class="c-red">10%</span> Profile completness</div>
              <div class="sub-title"><span class="c-green">+10%</span> Add profile summary</div>
            </div>
            <div class="prog-bar-wrap">
              <div id="prog-bar"></div>
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="top-title">Personal Details</div>
      <!------------------------ Personal Details --------------------------->
      <b-row>
        <b-col cols='6'>
            <label>Wanted Job Title</label>
            <b-form-input id='input-1' v-model='name' trim placeholder="e.g. Teacher"></b-form-input>
        </b-col>
        <b-col cols='6' class="upload-photo pdt-20">
          <div class="photo">
            <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M7,35 L33,35 L33,30 L24.9627594,26.8044586 C24.5698041,26.6156354 24.3340309,26.2379889 24.3340309,25.8225778 L24.3340309,24.6518737 C24.3340309,24.3875212 24.412622,24.1231687 24.6090996,23.9343454 C25.9058522,22.5370535 26.770354,20.4599979 27.0061272,19.8557636 C27.0454227,19.7424697 27.1240138,19.6291757 27.2026048,19.5536464 C27.438378,19.3648232 27.8313333,18.8738828 28.1064021,17.7031787 C28.3421753,16.5702393 27.9099244,15.9282403 27.6348557,15.6261232 C27.4776736,15.4750646 27.3990825,15.2862413 27.3990825,15.0974181 L27.3990825,10.2257787 C26.8882406,7.43119483 25.1592371,6.1094322 23.4302337,5.50519785 C21.5833436,4.82543421 18.2825188,4.82543421 16.3963333,5.5429625 C14.7459209,6.18496149 13.056213,7.46895948 12.5846666,10.2257787 L12.5846666,15.0974181 C12.5846666,15.2862413 12.5060755,15.4750646 12.3488934,15.6261232 C12.0738246,15.9282403 11.6415738,16.5702393 11.877347,17.7031787 C12.1131202,18.8738828 12.545371,19.3648232 12.7811442,19.5536464 C12.8597353,19.6291757 12.9383264,19.7424697 12.9776219,19.8557636 C13.2133951,20.4977626 14.0778968,22.4992889 15.3353539,23.8965808 C15.5318315,24.1231687 15.6497181,24.4252858 15.6497181,24.727403 L15.6497181,25.7470485 C15.6497181,26.2379889 15.3746494,26.6534 14.903103,26.8799879 L7,30 L7,35 Z"></path></svg>
          </div>
          <span class="photo-text">Upload Photo</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols='6'>
            <label>First Name</label>
            <b-form-input id='input-1' v-model='name' trim></b-form-input>
        </b-col>
        <b-col cols='6'>
            <label>Last Name</label>
            <b-form-input id='input-1' v-model='name' trim></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols='6'>
            <label>Email</label>
            <b-form-input id='input-1' v-model='name' trim></b-form-input>
        </b-col>
        <b-col cols='6'>
            <label>Phone</label>
            <b-form-input id='input-1' v-model='name' trim></b-form-input>
        </b-col>
      </b-row>
      <!-------------------------- Additional Details -------------------------------------->
      <div id='additional-details'>
        <b-row>
          <b-col cols='6'>
            <label>Country</label>
            <b-form-input id='input-1' v-model='name' trim></b-form-input>
          </b-col>
          <b-col cols='6'>
            <label>City</label>
            <b-form-input id='input-1' v-model='name' trim></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols='6'>
            <label>Address</label>
            <b-form-input id='input-1' v-model='name' trim></b-form-input>
          </b-col>
          <b-col cols='6'>
            <label>Postal Code</label>
            <b-form-input id='input-1' v-model='name' trim></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols='6'>
            <label>Driving License</label>
            <b-form-input id='input-1' v-model='name' trim></b-form-input>
          </b-col>
          <b-col cols='6'>
            <label>Nationality</label>
            <b-form-input id='input-1' v-model='name' trim></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols='6'>
            <label>Place Of Birth</label>
            <b-form-input id='input-1' v-model='name' trim></b-form-input>
          </b-col>
          <b-col cols='6'>
            <label>Date of Birth</label>
            <b-form-datepicker id="example-datepicker" v-model="addition_date" class="mb-2"></b-form-datepicker>
          </b-col>
        </b-row>
      </div>
      <div class="add-btn" @click="toggle_add_detail"><span id="edt-add-detail">Edit additional details&nbsp;</span>
        <svg id="edt-add-svg" width="12px" height="12px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="rgb(33, 150, 243)"><path class="path1" d="M14.35 24.22l-13.13-13.13c-0.424-0.424-0.686-1.009-0.686-1.655 0-1.293 1.048-2.341 2.341-2.341 0.646 0 1.231 0.262 1.655 0.686l11.47 11.48 11.47-11.48c0.424-0.424 1.009-0.686 1.655-0.686 1.293 0 2.341 1.048 2.341 2.341 0 0.646-0.262 1.231-0.686 1.655l-13.13 13.13c-0.423 0.421-1.006 0.681-1.65 0.681s-1.227-0.26-1.65-0.681z"></path></svg>
      </div>
      <!----------------------------------- Professional Summary --------------------->
      <div class="top-title">Professional Summary</div>
      <div class="sub-title">Include 2-3 clear sentences about your overall experience</div>
      <b-row class="pdb-40">
        <b-col cols='12'>
          <vue-editor v-model='summary_content'></vue-editor>
        </b-col>
      </b-row>
      <!------------------------------------- Employment History ---------------------------->
      <b-row class="pdb-40">
        <b-col cols='12'>
          <h2 class="top-title">Employment & Work Experience</h2>
          <p class="sub-title">Include your last 10 years of releveant experience and dates in this section. List your most recent position first.</p>
          <div>
            <component
              v-for="(EmploymentHistory, index) in employ_components"
              :key="index"
              :is="EmploymentHistory"
            />
          </div>
          <div id='employ-add-section'>
            <div class='add-btn' id='add-employ-btn' @click="add_employment">+ Add employment</div>
          </div>
        </b-col>
      </b-row>
      <!------------------------------------- Skill History ---------------------------->
      <b-row class="pdb-40">
        <b-col cols='12'>
          <h2 class="top-title">Skills</h2>
          <div>
            <component
              v-for="(SkillComponent, index) in skill_components"
              :key="index"
              :is="SkillComponent"
            />
          </div>
          <div id='skill-add-section'>
            <div class='add-btn' id='add-skill-btn' @click="add_skill">+ Add skill</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div style="height:100px;"></div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import EmploymentHistory from './EmploymentHistory'
import SkillComponent from './SkillComponent'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      addition_date: '',
      summary_content: '<p>Some initial content</p>',
      employ_components: [],
      skill_components: []
    }
  },
  components: {
    VueEditor,
    EmploymentHistory,
    SkillComponent
  },
  methods: {
    toggle_add_detail () {
      console.log(this)
      var collapse = document.getElementById('additional-details')
      if (collapse.classList.contains('show')) {
        collapse.classList.remove('show')
        document.getElementById('edt-add-detail').innerHTML = 'Edit additional details&nbsp;'
        document.getElementById('edt-add-svg').classList.remove('show')
      } else {
        collapse.classList.add('show')
        document.getElementById('edt-add-detail').innerHTML = 'Hide additional details&nbsp;'
        document.getElementById('edt-add-svg').classList.add('show')
      }
    },
    add_employment () {
      this.employ_components.push(EmploymentHistory)
    },
    add_skill () {
      this.skill_components.push(SkillComponent)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.edit-profile{
  width:60%;
  padding: 0 20px;
}
/***************************** common *****************************/
.pdt-20{
  padding-top:20px;
}
.pdb-40{
  padding-bottom: 40px;
}
.tac{
  text-align: center;
}
.c-red{
  color: rgb(255, 76, 76);
}
.c-green{
  color: rgb(37, 184, 105);
}
.d-flex{
  display: flex;
}
.just-bet{
  justify-content: space-between;
}
/********************************** common *******************/
/**************************** flag and progress ******************/
.flag-wraper{
  display: inline-block;
}
.flag{
  display: inline-block;
  width: 19px;
  height: 12px;
  background-size: auto 12px;
  background-image: url('../../assets/imgs/flags.png');
  background-position: 0px 0px;
  margin-right: 8px;
  opacity: 1;
}
.flag-lang{
  display: inline-block;
}
.prog-bar-wrap{
  margin:10px 0;
  height: 3px;
  background-color: #CCC;
  position: relative;
}
#prog-bar{
  display: inline-block;
  height: 3px;
  width: 10%;
  background-color: rgb(255, 76, 76);
  position: absolute;
  top:0;
  left: 0;
}
/**************************** flag and progress ******************/
.title{
  text-align: center;
  font-size: 34px;
  font-weight: 300;
}
.upload-photo{
  cursor: pointer;
}
.photo{
  width:60px;
  height: 60px;
  padding: 10px;
  margin-right: 16px;
  color: rgb(207, 214, 230);
  background-color: rgb(242, 245, 250);
  display: inline-block;
  transition: background-color 0.1s ease 0s, color 0.1s ease 0s;
}
.upload-photo:hover .photo{
  background-color: rgb(230, 244, 255);
  color: rgb(33, 150, 243);
}
.photo>svg{
  fill:currentColor;
}
.photo-text{
  color: rgb(25, 118, 210);
}
.top-title{
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  margin: 10px 0;
}
.sub-title{
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: rgb(152, 161, 179);
  margin-bottom: 6px;
}
.add-btn{
  font-size: 14px;
  line-height: 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  position: relative;
  padding: 6px 14px;
  width: 100%;
  border-radius: 4px;
  background-color: rgba(230, 244, 255, 0);
  color: rgb(33, 150, 243);
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: background-color 0.15s ease 0s;
  margin-top: 20px;
}
.add-btn:hover{
      background-color: rgba(230, 244, 255, 0.5);
}
label{
  font-size: 14px;
  line-height: 18px;
  color: rgb(152, 161, 179);
  margin-bottom: 7px;
  margin-top: 17px;
}
/************************** additional details ********************/
#additional-details{
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  max-height: 0;
  transform: translateY(0);
  transition: max-height 0.5s, opacity 0.25s, padding 0.25s, transform 0.5s;
}
#additional-details.show{
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  max-height: 1200px;
}
#edt-add-detail, #edt-add-svg{
  transition: all .5s;
  transform: rotate(0deg);
}
#edt-add-svg.show{
  transform: rotate(180deg);
}
/**************************** additional details *********************/
</style>
