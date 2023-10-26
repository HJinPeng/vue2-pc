<template>
  <div class="dict-category">
    <BaseCard>
      <BaseSearch
        :disabled="loading_mx_table"
        @search="onSearch_mx_table"
        @reset="onReset_mx_table"
      >
        <a-input
          v-model="params_mx_table.dictCode"
          placeholder="字典编码"
          style="width: 140px"
          @pressEnter="onSearch_mx_table"
        ></a-input>
        <a-input
          v-model="params_mx_table.dictName"
          placeholder="字典名称"
          style="width: 150px"
          @pressEnter="onSearch_mx_table"
        ></a-input>
      </BaseSearch>
    </BaseCard>
    <BaseCard title="字典列表">
      <template #extra>
        <a-button type="primary" @click="onAdd">新增</a-button>
      </template>
      <BaseTable
        row-key="id"
        :loading="loading_mx_table"
        :columns="columns_mx_table"
        :data-source="dataSource_mx_table"
        :pagination="pagination_mx_table"
        :row-class-name="setRowClassName"
        :custom-row="customRow"
        sticky
        @change="onChangeTable_mx_table"
      ></BaseTable>
    </BaseCard>
    <DictCategoryModal ref="modal" @ok="fetchPage_mx_table" />
  </div>
</template>

<script>
import mixinTable from '@/common/mixins/table'
import DictCategoryModal from './DictCategoryModal.vue'
import { getDictPageApi, deleteDictByIdApi } from '@/api/dict'

export default {
  mixins: [mixinTable],
  components: { DictCategoryModal },
  data() {
    return {
      columns_mx_table: Object.freeze([
        { title: '字典编码', dataIndex: 'dictCode' },
        { title: '字典名称', dataIndex: 'dictName' },
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
      ]),
      activeId: undefined
    }
  },
  methods: {
    // 新增字典
    onAdd() {
      console.log('新增字典')
      this.$refs.modal.add()
    },
    // 编辑字典
    onEdit(record) {
      console.log('编辑字典')
      this.$refs.modal.edit(record)
    },
    // 删除字典
    onDelete(record) {
      this.$confirm({
        title: '删除',
        content: `确认删除字典 “${record.dictName}” 吗？`,
        onOk: () => {
          return deleteDictByIdApi(record.id).then(() => {
            this.$message.success('删除成功')
            this.fetchPage_mx_table()
          })
        }
      })
    },
    // 自定义行的表现
    customRow(record) {
      return {
        props: {},
        on: {
          click: (e) => {
            console.log('e', e, record, this)
            this.selectRow(record)
          }
        }
      }
    },
    // 设置行的类名
    setRowClassName(record) {
      return record.id === this.activeId ? 'dict-category__row--active' : ''
    },
    selectRow(row) {
      this.activeId = row.id
      this.$emit('select', row)
    },
    // Overwrite 获取分页数据
    fetchPage_mx_table() {
      console.log('获取列表数据')
      this.loading_mx_table = true
      getDictPageApi({
        ...this.params_mx_table,
        pageNo: this.pagination_mx_table.current,
        pageSize: this.pagination_mx_table.pageSize
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
        dictCode: undefined,
        dictName: undefined
      }
    }
  }
}
</script>

<style lang="less">
.dict-category {
  &__row--active {
    background: tint(@primary-color, 89%);
  }
}
</style>
