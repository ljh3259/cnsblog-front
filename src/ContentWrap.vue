<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap" class="content-wrapper">    
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Version 2.0</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">{{naviTitle}}</li>
      </ol>
    </section>

    <section class="content">   
      <va-resizable-box
        class="fix-right col-md-3 col-sm6 col-xs-12"
        handles="w"
        :minWidth="250"
        :resize="resizeEvent"
        >
        <va-direct-chat
            :talkList="talkList"
            :contacts="contacts"
            title="my chat"
            :badgeCount="0"
            placeholder="웹소켓 개발중..."
          ></va-direct-chat>
      </va-resizable-box>
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
    <!-- /.content -->  
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import VADirectChat from './widgets/VADirectChat.vue'
import VAResizableBox from './widgets/VAResizableBox.vue'
import { mapActions } from 'vuex'

export default {
  name: 'va-content-wrap',
  data () {
    return {
      talkList: [
        {
          name: 'Alexander Pierce',
          date: new Date(),
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          message: `Is this template really for free? That's unbelievable`,
          isMine: false
        },
        {
          name: 'Sarah Bullock',
          date: new Date(),
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          message: `You better believe it!`,
          isMine: true
        }
      ],
      contacts: [
        {
          name: 'Count Dracula',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: 'How have you been? I was...',
          latestDate: new Date()
        },
        {
          name: 'Sarah Doe',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: 'I will be waiting for...',
          latestDate: new Date()
        },
        {
          name: 'Nadia Jolie',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: `I'll call you back at...`,
          latestDate: new Date()
        },
        {
          name: 'Nora S. Vans',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: 'Where is your new...',
          latestDate: new Date()
        },
        {
          name: 'John K.',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: 'Can I take a look at...',
          latestDate: new Date()
        },
        {
          name: 'Kenneth M.',
          profileImage: 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3',
          latestMessage: 'Naver mine I found...',
          latestDate: new Date()
        }
      ]
    }
  },
  props: {
    naviTitle: {
      type: String,
      default: 'default'
    }
  },
  created () {
    this.tokenCheckProduct()
  },
  components: {
    'va-direct-chat': VADirectChat,
    'va-resizable-box': VAResizableBox
  },
  methods: {
    resizeEvent: function (event, ui) {
      $('.resizable-box :first').css('height', 'auto')
    },
    ...mapActions([
      'tokenCheckProduct'
    ])
  }
}
</script>
