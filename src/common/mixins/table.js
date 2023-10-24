export default {
  data() {
    return {
      loading_mx_table: false,
      params_mx_table: this.initParams_mx_table(),
      dataSource_mx_table: [],
      columns_mx_table: [],
      pagination_mx_table: {
        current: 1,
        pageSize: 10,
        total: 0,
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: (total) => `共 ${total} 条数据`
      }
    }
  },
  mounted() {
    this._first_enter_mx_table = true
    this.fetchPage_mx_table()
  },
  activated() {
    if (this._first_enter_mx_table === true) {
      this._first_enter_mx_table = false
      return
    }
    this.fetchPage_mx_table()
  },
  methods: {
    // Overwrite - 数据请求
    fetchPage_mx_table() {},

    // Overwrite - 初始化参数
    initParams_mx_table() {
      return {}
    },

    // 点击搜索按钮
    onSearch_mx_table() {
      // 触发搜索时，分页页码改为1
      this.pagination_mx_table.current = 1
      this.fetchPage_mx_table()
    },

    // 点击重置按钮
    onReset_mx_table() {
      // 重置操作，分页页码改为1
      this.pagination_mx_table.current = 1
      // 重置参数
      this.params_mx_table = this.initParams_mx_table()
      this.fetchPage_mx_table()
    },

    // 修改分页器
    onChangeTable_mx_table({ current, pageSize }) {
      console.log(current, pageSize)
      this.pagination_mx_table.current = current
      this.pagination_mx_table.pageSize = pageSize
      this.fetchPage_mx_table()
    }
  }
}
