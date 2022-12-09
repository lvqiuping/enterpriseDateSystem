<template>
  <div>
    <el-form v-show="searchForm.show" ref="searchForm" :model="temp" label-position="" label-width="" class="flex mt-6 mx-6">
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
          <el-form-item v-if="field.type === 'radio'" class="flex mr-4">
            <el-radio-group v-model="temp[field.name]" @change="getRadioForm">
              <el-radio-button :label="field.value" plain>{{ field.label }}</el-radio-button>
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
    getRadioForm(v) {
      this.temp.radioJoin = v
      this.searching(this.temp)
    },
    searching(v) {
      this.$emit('searchFormEmit', v || this.temp)
    },
    resetTemp() {
      // 这里最好不要写具体的字段，看看怎么优化
      this.temp = {
        companyNumber: '',
        companyName: '',
        legalPerson: '',
        address: '',
        projectType: '',
        name: '',
        mobile: ''
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
