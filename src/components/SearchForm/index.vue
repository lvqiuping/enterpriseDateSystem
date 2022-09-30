<template>
  <div>
    <el-form v-show="searchForm.show" ref="searchForm" :model="temp" label-position="" label-width="" class="flex mt-6 ml-4">
      <template>
        <div v-for="(field, index) in searchForm.fields" :key="index">
          <el-form-item v-if="field.type === 'input'" :label="field.label" class="flex mr-4">
            <el-input
              v-model.trim="temp[field.name]"
              clearable
              :placeholder="field.label"
              @keyup.enter.native="searching()"
            />
          </el-form-item>
          <el-form-item v-if="field.type === 'text'" class="flex mr-4">
            <el-radio-group v-model="temp[field.name]" @change="getTextForm">
              <el-radio-button :label="field.label" plain />
            </el-radio-group>
          </el-form-item>
        </div>
      </template>
      <div v-show="isShow" class="flex ml-6">
        <el-button type="primary" size="mini" icon="" class="w-24 h-10" @click.native.prevent="searching()">查询</el-button>
        <el-button type="" size="mini" icon="" class="w-24 h-10" @click.native.prevent="resetTemp()">重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    searchForm: { type: Object, default: null },
    isShow: { type: Boolean, default: true }
  },
  data() {
    return {
      temp: {
        companyNumber: '',
        companyName: '',
        legalPerson: '',
        address: '',
        projectType: '',
        perType: 3,
        perType2: '安全三类人员'
      },
      pickerOptions: {
        shortcuts: [
          {
            text: '全部',
            onClick(picker) {
              const end = ''
              const start = ''
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '3天内',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 3)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '一周内',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '半年内',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 180)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '一年内',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  watch: {
    // 监听对象temp，
    temp: {
      handler(newVal) {
        this.$emit('searchFormEmit', newVal)
      },
      deep: true
    }
  },
  methods: {
    getTextForm(v) {
      if (v === '安全三类人员') {
        this.temp.perType = 3
      } else if (v === '专业岗位人员') {
        this.temp.perType = 4
      } else if (v === '技术工人') {
        this.temp.perType = 5
      } else if (v === '特种作业人员') {
        this.temp.perType = 6
      }
      this.searching(this.temp)
    },
    searching(v) {
      this.$emit('searchFormEmit', v || this.temp)
    },
    resetTemp() {
      this.temp = {
        companyNumber: '',
        companyName: '',
        legalPerson: '',
        address: '',
        projectType: ''
      }
      this.searching(this.temp)
    }
  }
}
</script>
<style scoped>
::v-deep .el-radio-button__orig-radio:checked+.el-radio-button__inner{
  background-color: #fff;
  color: #409EFF
}
</style>
