<template>
  <div class="app-container">
    <basic-table
      :table-title="tableTitle"
      :table-data="tableData"
      :loading="loading"
      :search-form="searchForm"
      :button-group="buttonGroup"
      :is-operation-btn="true"
      @refresh="getPageList()"
      @searchFormEmit2="searchFormEmit2"
      @operateEmit2="operateEmit2"
    >
      <template v-slot:userStatus="scope">
        <el-tag :type="scope.row.userStatus === 0 ? 'success' : 'danger'" style="cursor:pointer;" @click="changeStatus(scope.row)">
          {{ scope.row.userStatus === 0 ? '已启用' : '已禁用' }}
        </el-tag>
      </template>
    </basic-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageIndex" :limit.sync="listQuery.pageSize" @pagination="getPageList()" />
    <el-dialog :title="'新增'" :visible.sync="dialogFormVisible" top="3%">
      <div class="el-dialog-div">
        <data-form
          :loading="loading"
          :temp="temp"
          @createDataEmit="createDataEmit"
          @dialogFormVisibleEmit="dialogFormVisibleEmit"
        />
      </div>
    </el-dialog>
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
import Pagination from '@/components/BasicTable/Pagination.vue'
import BasicTable from '@/components/BasicTable/index.vue'
import { getUserList, UpdateStatus, UpdatePassword, AddUser } from '@/api/user.js'
import { getList } from '@/utils'
import { TipsBox, QueryBox } from '@/utils/feedback.js'
import PasswordForm from '@/views/enterisePages/userManagement/components/passwordForm.vue'
import DataForm from '@/views/enterisePages/userManagement/components/dataForm.vue'
export default {
  name: 'EnteriseData',
  components: { BasicTable, Pagination, PasswordForm, DataForm },
  data() {
    return {
      dialogPasswordVisible: false,
      loading: false,
      dialogFormVisible: false,
      tableData: null,
      total: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 15
      },
      buttonGroup: {
        expend: true,
        title: '',
        size: 'default',
        fields: [
          {
            showButtonGroup: true,
            text: '新增',
            icon: 'el-icon-check',
            operateType: 'add'
          },
          {
            showButtonGroup: false,
            text: '批量删除',
            icon: 'el-icon-delete',
            type: 'danger',
            operateType: 'del'
          }
        ]
      },
      searchForm: {
        show: true,
        expend: true,
        title: '表格筛选',
        size: 'default',
        fields: [
          {
            type: 'input',
            label: '用户',
            name: 'userName'
          },
          {
            type: 'input',
            label: '真实姓名',
            name: 'realName'
          }
        ]
      },
      tableTitle: [
        {
          label: '序号',
          value: 'xh',
          show: true,
          type: 'text'
        },
        {
          label: '用户',
          value: 'userName',
          show: true,
          type: 'text'
        },
        {
          label: '真实姓名',
          value: 'realName',
          show: true,
          type: 'text'
        },
        {
          label: '状态',
          value: 'userStatus',
          show: true,
          type: 'slot',
          slot: 'userStatus'
        },
        {
          label: '创建时间',
          value: 'createOn',
          show: true,
          type: 'text'
        },
        {
          label: '操作',
          show: true,
          type: 'options',
          options: [
            {
              text: '修改密码',
              icon: 'el-icon-edit',
              type: 'success',
              clickEvent: (row) => {
                this.resetPasswordtemp()
                this.dialogPasswordVisible = true
                this.passwordtemp.userId = row.id
              }
            }
          ]
        }
      ],
      passwordtemp: {
        newPassword: '',
        userId: ''
      },
      temp: {
        UserName: '',
        RealName: '',
        Pwd: ''
      }
    }
  },
  created() {
    this.getPageList()
  },
  methods: {
    dialogFormVisibleEmit(v) {
      this.dialogFormVisible = v
    },
    createDataEmit(v) {
      AddUser(v).then((res) => {
        this.loading = true
        if (res.statusCode === 200) {
          this.loading = false
          TipsBox('success', res.data)
          this.dialogFormVisible = false
          this.getPageList()
        } else if (res.statusCode === 500) {
          this.loading = false
          TipsBox('success', res.errors)
        }
      })
    },
    dialogPasswordVisibleEmit(v) {
      this.dialogPasswordVisible = v
    },
    createPassword(v) {
      UpdatePassword(v).then((res) => {
        this.loading = true
        if (res.statusCode === 200) {
          this.loading = false
          TipsBox('success', res.data)
          this.dialogPasswordVisible = false
          this.getPageList()
        }
      })
    },
    resetPasswordtemp() {
      this.passwordtemp = {
        newPassword: '',
        userId: ''
      }
    },
    resetTemp() {
      this.temp = {
        UserName: '',
        RealName: '',
        Pwd: ''
      }
    },
    changeStatus(v) {
      if (v.id === 1) {
        TipsBox('error', '不允许更改超级管理员信息')
        return
      }
      QueryBox('是否修改用户状态').then(() => {
        if (v.userStatus === 1) {
          v.userStatus = 0
        } else if (v.userStatus === 0) {
          v.userStatus = 1
        }
        const params = `userId=${v.id}&status=${v.userStatus}`
        UpdateStatus(params).then((res) => {
          this.loading = true
          if (res.statusCode === 200) {
            this.loading = false
            TipsBox('success', res.data)
            this.getPageList()
          }
        })
      })
    },
    operateEmit2(v) {
      if (v === 'add') {
        this.resetTemp()
        this.dialogFormVisible = true
      }
    },
    // 获取表格数据
    getPageList() {
      this.loading = true
      getList(this, getUserList, this.listQuery)
    },
    searchFormEmit2(v) {
      this.listQuery.pageIndex = 1
      this.listQuery = Object.assign({}, this.listQuery, v)
      this.getPageList()
    }
  }
}
</script>
