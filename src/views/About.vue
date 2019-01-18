<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from '@/service/services'

export default {
  data () {
    return {
      name: 'test'
    }
  },
  created () {
    this.getUserInfoFunc()
  },
  methods: {
    /**
       * 接口请求
       */
    getUserInfoFunc () {
      axios.getUserInfo().then((res) => {
        console.log('get result：', res)
      }).catch((err) => {
        console.log(err)
      })
    },
    /**
       * 接口请求
       */
    getListDataFunc () {
      let param = {
        id: 111
      }
      axios.getListData(param).then((res) => {
        console.log('post result：', res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
