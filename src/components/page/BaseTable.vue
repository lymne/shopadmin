<template>
    <div class="table">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="formInline.region"  placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="时间范围">
                <el-date-picker
                    v-model="formInline.time"
                    type="datetimerange"
                    placeholder="选择时间范围"
                    align="right">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" sortable width="150" fixed="left">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="200">
            </el-table-column>
            <el-table-column prop="address" label="地址"width="200">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="200">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="200">
            </el-table-column>
            <el-table-column prop="address" label="地址"width="200" >
            </el-table-column>
            <el-table-column prop="address" label="地址" width="200">
            </el-table-column>
            <el-table-column prop="tag" label="标签" width="120"
                    :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                    :filter-method="filterTag">
                <template scope="scope">
                    <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}
                    </el-tag>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="180" fixed="right">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    layout="total, prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2017-02-02',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道18号',
                    tag: '家'
                }, {
                    date: '2017-02-04',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道17号',
                    tag: '公司'
                }, {
                    date: '2017-02-01',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道19号',
                    tag: '家'
                }, {
                    date: '2017-02-03',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道16号',
                    tag: '公司'
                }],
                formInline: {
                  user: '',
                  region: '',
                  time: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log(this.formInline.user, this.formInline.region, this.formInline.time)
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
               this.$confirm('此操作将永久删除该文件, 是否继续?').then(() => {
                  this.tableData.splice(index,1);
                  this.$message.success('删除第'+(index+1)+'行');
               })
            }
         }
     }

</script>
