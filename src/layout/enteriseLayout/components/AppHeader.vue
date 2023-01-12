<template>
  <div class="flex flex-col relative">
    <div
      class="bg-cover bg-no-repeat bg-center relative"
      :style="{ minHeight: '150px', backgroundImage: `url(${topImg})` }"
    >
      <div class="container mx-auto h-full">
        <div class="h-full flex justify-between items-center">
          <div class="justify-self-center">
            <el-image style="width: 300px; height: 150px" :src="require('@/assets/layout/logo.png')" fit="contain" />
          </div>
          <div>
            <el-tabs v-model="activeTabs" type="border-card" @tab-click="changeTabs">
              <el-tab-pane v-for="(item, index) in searchItems" :key="index" :label="item.name">
                <div style="display: flex" class="searchBox">
                  <search-form
                    :search-form="dataType === 0 ? searchForm0 : dataType === 1 ? searchForm1 : searchForm2"
                    :is-show="true"
                    @searchFormEmit="searchFormEmit"
                  />
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color: #0082ff" class="sticky top-0">
      <div class="container mx-auto">
        <div class="flex justify-between">
          <div class="">
            <el-menu
              :default-active="activeMenu"
              :collapse="isCollapse"
              :background-color="variables.menuBg"
              :text-color="variables.menuText"
              :unique-opened="false"
              :active-text-color="variables.menuActiveText"
              :collapse-transition="false"
              mode="horizontal"
            >
              <div class="flex">
                <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
              </div>
            </el-menu>
          </div>
          <div class="flex items-center">
            <div class="right-menu flex items-center ml-4">
              <div class="text-gray-200 mr-2">{{ userName }}</div>
              <el-dropdown class="" trigger="click">
                <div class="text-gray-200">
                  <i class="el-icon-caret-bottom" />
                </div>
                <el-dropdown-menu slot="dropdown" class="">
                  <router-link to="/">
                    <el-dropdown-item>
                      首页
                    </el-dropdown-item>
                  </router-link>
                  <el-dropdown-item divided @click.native="logout">
                    <span style="display:block;">注销</span>
                  </el-dropdown-item>
                  <el-dropdown-item divided @click.native="changePassword">
                    <span style="display:block;">修改密码</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :title="'修改密码'" :visible.sync="dialogPasswordVisible" top="3%">
      <div class="el-dialog-div">
        <password-form
          :passwordtemp="passwordtemp"
          @createPassword="createPassword"
          @dialogPasswordVisibleEmit="dialogPasswordVisibleEmit"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './Sidebar/SidebarItem'
import variables from '@/styles/variables.scss'
import PasswordForm from '@/views/enterisePages/userManagement/components/passwordForm.vue'
import { UpdatePassword } from '@/api/user.js'
import { TipsBox } from '@/utils/feedback.js'
import SearchForm from '@/components/SearchForm/index.vue'

export default {
  name: 'AppHeader',
  components: { SidebarItem, PasswordForm, SearchForm },
  data() {
    return {
      dialogPasswordVisible: false,
      passwordtemp: {
        newPassword: '',
        userId: ''
      },
      topImg: require('@/assets/layout/l2.png'),
      activeTabs: '',
      searchItems: [
        {
          name: '企业数据'
        },
        {
          name: '人员数据'
        },
        {
          name: '项目数据'
        }
      ],
      dataType: 0,
      searchForm0: {
        show: true,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'input',
            label: '',
            placeholder: '请输入企业名称、统一社会信用代码',
            name: 'keywords'
          }
        ]
      },
      searchForm1: {
        show: true,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'input',
            label: '',
            placeholder: '请输入姓名、身份证号、手机号',
            name: 'keywords'
          }
        ]
      },
      searchForm2: {
        show: true,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'input',
            label: '',
            placeholder: '请输入项目名称、项目编码、承建公司',
            name: 'keywords'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'userName',
      'userId'
    ]),
    routes() {
      // todo
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    changeTabs(tab) {
      console.log(tab.label)
      if (tab.label === '企业数据') {
        this.dataType = 0
      } else if (tab.label === '人员数据') {
        this.dataType = 1
      } else if (tab.label === '项目数据') {
        this.dataType = 2
      }
    },
    searchFormEmit(v) {
      if (v.keywords === undefined) {
        TipsBox('warning', '请输入关键词')
        return
      }
      var query = { keywords: v.keywords, dataType: this.dataType }
      console.log(this.$route.path)
      console.log('query2', query)
      // return
      if (this.$route.path !== '/search') {
        this.$router.replace({ name: 'search', query: query })
      } else {
        this.$router.replace({ name: 'searchCopy', query: query })
      }
    },
    changePassword() {
      this.resetTemp()
      this.passwordtemp.userId = this.userId
      this.dialogPasswordVisible = true
    },
    resetTemp() {
      this.passwordtemp = {
        newPassword: '',
        userId: ''
      }
    },
    createPassword(v) {
      UpdatePassword(v).then((res) => {
        this.loading = true
        if (res.statusCode === 200) {
          this.loading = false
          TipsBox('success', res.data)
          this.dialogPasswordVisible = false
        }
      })
    },
    dialogPasswordVisibleEmit(v) {
      this.dialogPasswordVisible = v
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
<style scoped>
::v-deep .el-menu.el-menu--horizontal{
  border-bottom: 0
}
::v-deep .el-tabs__content{
  padding: 0
}
::v-deep .searchBox .el-form{
  margin: 10px!important;
}
::v-deep .el-input--suffix .el-input__inner{
  width: 360px;
}
::v-deep .el-tabs--border-card{
  background: none;
  border: none;
}
::v-deep .el-tabs--border-card>.el-tabs__header{
  background-color: transparent;
  border-bottom: none;
}
::v-deep .el-tabs__content{
  background: #fff;
  border-radius: 0 5px 5px 5px;
}
::v-deep .el-tabs--border-card>.el-tabs__header .el-tabs__item{
  color: #fff;
  background: #0082ff;
  margin-right: 10px;
}
::v-deep .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  color: #409EFF;
  background: #fff;
}
::v-deep .el-tabs__nav-wrap{
  margin-bottom: 0;
}
::v-deep .el-form-item{
  margin: 0;
}
::v-deep .el-input__inner{
  border: none;
}
.searchBox{
  margin: 0px;
}
</style>
