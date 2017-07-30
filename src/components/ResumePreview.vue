<template>
  <div id="resumePreview">
   <div class="lianxi">
         <p>
         <span>email:</span>
         <span>{{resume.profile.email}}</span>
         </p>
         <p>
          <span>github:</span>
          <span><a :href="resume.profile.github" v-text="resume.profile.github"></a></a></span>
          </p>
         <p>
          <span>blog:</span>
          <span><a :href="resume.profile.blog" v-text="resume.profile.blog"></a></span>

         </p>
         <p>
                   <span>phone:</span>
                   <span><a>{{resume.profile.phone}}</a></span>

                  </p>
       </div>
    <section data-name="profile" v-show="resume.profile">
      <p class="name">
        {{ resume.profile.name }}
      </p>
      <h2>{{ resume.profile.title }}</h2>

    </section>







    <section data-name="workHistory" v-show="resume.workHistory">
        <h2>工作经历</h2>
        <ol>
          <li v-for="item in resume.workHistory">
            <h3>{{ item.company }}</h3>
            <p v-show="item.content">{{ item.content }}</p>
          </li>
        </ol>
    </section>



     <section data-name="education" v-show="resume.education">
          <h2>毕业院校</h2>
          <ol>
            <li v-for="item in resume.education">
              <h3>{{ item.school }}
                <span v-show="item.content">-{{ item.content}}</span>
              </h3>
            </li>
          </ol>
        </section>



    <section data-name="projects" v-show="resume.projects">
          <h2>项目经历</h2>
          <ol>
            <li v-for="item in resume.projects">
              <h3>{{ item.name }}</h3>
              <p v-show="item.content">{{ item.content }}</p>
            </li>
          </ol>
     </section>


    <section data-name="awards" v-show="resume.awards">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}</h3>
          <p v-show="item.content"> {{item.content}}</p>
        </li>
      </ol>
    </section>


  </div>
</template>



<script >
export default{
  name: "ResumePreview",
  computed: {
    resume(){
      return this.$store.state.resume
    }
  },
  created() {
    console.log(this.resume)
  }
}


</script>

<style lang="scss">
.lianxi{
 float:right;

}
h2{
margin-top:10px;
}
.name{
font-size:40px;
}
.lianxi p{
margin-top:10px;
}
.lianxi span{
margin-right:10px;
}
  #resumePreview {
    background: #f6f6f6;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    padding: 3em;
    color: #333;
    line-height: 1.2;
    overflow: auto;
    * {
      box-sizing: border-box;
      font-variant: normal;
      font-weight: normal;
    }
    ol {
      list-style: none;
    }
    section + section {
      margin-top: 2em;
    }
    p {

    }
    section {
      >h2:first-child{
        background: gray;
        display: inline-block;
        padding: .2em;
        margin-bottom: .5em;
        color: white;
      }
    }
    section[data-name="profile"] {

        margin:0;

    }
    section[data-name="workHistory"],
     section[data-name="projects"],
     section[data-name="awards"]{
     margin-top:50px;
      li + li {
        margin-top: 1em;
      }
      li {
        h3{
          border-bottom: 1px solid #999;
          padding-bottom: .3em;
          margin-bottom: .3em;
        }
      }
      section[data-name="education"] {
        li {
          line-height: 1.5;
        }
      }
    }
    section[data-name="contacts"] {
      td:first-child {
        padding-right: 1em;
      }
    }
  }

</style>
