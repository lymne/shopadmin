<template>
    <div class="table">
        <el-form :inline="true" :model="formInline" ref="formInline" :rules="rules"  >
            <el-form-item label="名称" prop="name" required>
                <el-input v-model="formInline.name" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="排序" prop="displayorder">
                <el-input v-model="formInline.displayorder" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="备注" prop="remark">
                <el-input v-model="formInline.remark" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
                <el-button ref="submitButton" type="primary" @click="submitForm('formInline')" :loading="false">新增分类</el-button>
                <el-button @click="resetForm('formInline')">重置</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="分类名称" width="150">
            </el-table-column>
            <el-table-column prop="displayorder" label="排序" width="120">
            </el-table-column>
            <el-table-column prop="remark" label="备注" width="120">
            </el-table-column>
            <el-table-column label="操作" width="180" >
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
                    name: '小天才',
                    displayorder: '1',
                    remark: ''
                }, {
                    name: '小天才',
                    displayorder: '1',
                    remark: ''
                }, {
                    name: '小天才',
                    displayorder: '1',
                    remark: ''
                }, {
                    name: '小天才',
                    displayorder: '1',
                    remark: ''
                }],
                formInline: {
                  name: '',
                  displayorder: '',
                  remark: ''
                },
                 rules: {
                  name: [
                    { required: true, message: '请输入分类名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                  ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                  if (valid) {
                    alert('submit!');
                  } else {
                    console.log('error submit!!');
                    return false;
                  }
                });
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
               console.log(row)
               this.$confirm('确认删除此数据?').then(() => {
                  this.tableData.splice(index,1);
                  this.$message.success('成功删除第'+(index+1)+'行');
               })
            },
            resetForm(formName) {
               this.$refs[formName].resetFields();
            }
         }
     }

</script>
