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
            <el-tabs type="border-card">
              <el-tab-pane v-for="(item, index) in searchItems" :key="index" :label="item.title">
                <div style="display: flex" class="searchBox">
                  <search-form
                    :search-form="searchForm"
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
      keyword: '',
      select: '',
      topImg: require('@/assets/layout/l2.png'),
      activeIndex: 0,
      searchItems: [
        {
          title: '企业数据',
          value: 1
        },
        {
          title: '人员数据',
          value: 2
        },
        {
          title: '项目数据',
          value: 3
        }
      ],
      searchForm: {
        show: true,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'input',
            label: '',
            placeholder: '请输入关键词，例如企业名称、统一社会信用代码',
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
    searchFormEmit(v) {
      console.log('v', v)
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
  margin: 0!important;
}
::v-deep .searchBox .el-form-item {
  margin: 0!important;
}
::v-deep .el-input--suffix .el-input__inner{
  width: 360px;
}
.searchBox{
  margin: 10px;
}
</style>
