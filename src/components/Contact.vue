<template>
    <div>
        <h2>联系方式</h2>
        <el-form>
            <el-form-item label="手机号码">
                <el-input v-model="contact.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱地址">
                <el-input v-model="contact.email"></el-input>
            </el-form-item>
            <el-form-item label="微信号">
                <el-input v-model="contact.VX"></el-input>
            </el-form-item>
            <el-form-item label="QQ">
                <el-input v-model="contact.QQ"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        props: ['contact']
    }
</script>