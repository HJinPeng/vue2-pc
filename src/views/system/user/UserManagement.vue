<template>
  <AppPage>
    <BaseCard>
      <BaseSearch
        :disabled="loading_mx_table"
        @search="onSearch_mx_table"
        @reset="onReset_mx_table"
      >
        <a-input v-model="params_mx_table.account" placeholder="账号"></a-input>
        <a-input v-model="params_mx_table.realname" placeholder="用户名"></a-input>
      </BaseSearch>
    </BaseCard>
    <BaseCard title="用户列表">
      <template #extra>
        <a-button type="primary" @click="onAdd">新增</a-button>
      </template>
      <BaseTable
        row-key="id"
        :loading="loading_mx_table"
        :columns="columns_mx_table"
        :data-source="dataSource_mx_table"
        :pagination="pagination_mx_table"
        sticky
        @change="onChangeTable_mx_table"
      ></BaseTable>
    </BaseCard>
    <UserModal ref="userModal" @ok="fetchPage_mx_table" />
  </AppPage>
</template>

<script>
import mixinTable from '@/common/mixins/table'
import UserModal from './UserModal.vue'
import { getUserPageApi } from '@/api/user'

export default {
  mixins: [mixinTable],
  components: { UserModal },
  data() {
    return {
      columns_mx_table: Object.freeze([
        { title: '账号', dataIndex: 'account' },
        { title: '用户名', dataIndex: 'realname' },
        { title: '角色', dataIndex: 'role' },
        { title: '状态', dataIndex: 'status' },
        {
          title: '操作',
          dataIndex: 'id',
          width: 120,
          customRender: (text, record, index) => {
            return (
              <BaseSpace>
                <a onClick={() => this.onEdit(record)}>编辑</a>
                <a onClick={() => this.onDelete(record)}>删除</a>
              </BaseSpace>
            )
          }
        }
      ])
    }
  },
  methods: {
    // 新增用户
    onAdd() {
      console.log('新增用户')
      this.$refs.userModal.add()
    },
    // 编辑用户
    onEdit(record) {
      console.log('编辑用户')
      this.$refs.userModal.edit(record)
    },
    // 删除用户
    onDelete(record) {
      this.$confirm({
        title: '删除',
        content: `确认删除用户 “${record.realname}” 吗？`,
        onOk: () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve()
              this.$message.success('删除成功')
              this.fetchPage_mx_table()
            }, 1000)
          })
        }
      })
    },
    // Overwrite 获取分页数据
    fetchPage_mx_table() {
      console.log('获取列表数据')
      this.loading_mx_table = true
      getUserPageApi({
        ...this.params_mx_table,
        pageNo: this.pagination_mx_table.current,
        pageSize: this.pagination_mx_table.pageSize,
        orderBy: 'create_date_time',
        isAsc: false
      })
        .then((res) => {
          console.log('res', res)
          this.dataSource_mx_table = res.records
          this.pagination_mx_table.total = res.total
        })
        .finally(() => {
          this.loading_mx_table = false
        })
    },
    // Overwrite 初始化查询参数
    initParams_mx_table() {
      return {
        account: undefined,
        realname: undefined
      }
    }
  }
}
</script>
