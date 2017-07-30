import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      count: 0,
      selected: 'profile',
      user: {
        id: '',
        username: ''
      },
      resume: {
        config: [
          {field: 'profile', icon: 'id'},
          {field: 'workHistory', icon: 'work'},
          {field: 'education', icon: 'book'},
          {field: 'projects', icon: 'heart'},
          {field: 'awards', icon: 'cup'},
          {field: 'contacts', icon: 'phone'}
        ],
        profile: {
          name: '李永州',
          city: '北京',
          title: '前端开发',
          email: '474544358@qq.com',
          github:'https://github.com/forsuccess',
          blog:'http://www.jianshu.com/u/bcc377273ff2',
          phone:13269316295
        },
        workHistory: [
          {company: '公司', content: '工作内容'},
        ],
        education: [
          {school: '重庆大学', content: '描述'},
        ],
        projects: [
          {name: 'vue-简历编辑器', content: '描述'},
        ],
        awards: [
          {name: '奖项名称', content: ''},
        ],
        contacts: [
          {contact: '13269316295', content: ''},
        ]
      }
  },
  mutations: {
    initState(state,payload){
      this.$set(state,payload)
      console.log(state)
    },
    switchTab(state,payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state,{path,value}){
      objectPath.set(state.resume,path,value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
      console.log(state.user)
    },
    removeUser(state){
      console.log("登出")
      state.user.id = ''
    },
    append(state,payload){
      console.log(payload.key)
      var newInput = {}
      for (var i in payload.key){
        newInput[i] = payload.key[i]
        newInput[i] = ""
      }


      payload.field.push(newInput)
    }
  }
})
