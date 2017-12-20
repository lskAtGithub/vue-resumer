<template>
    <div id="preview">
        <h1>{{resume.profile.name || '请填写姓名'}}</h1>
        <p>{{resume.profile.city || '请添加所在地'}} | {{resume.profile.age || '请填写出生年月'}}</p>

        <hr>
        <section v-if="filter(resume.study).length > 0">
            <h2>教育经历</h2>
            <ul v-for="item in filter(resume.study)">
                <li>学校名称：{{item.school}}</li>
                <li>毕业时间：{{item.duration}}</li>
                <li>学位：{{item.degree}}</li>
            </ul>
        </section>

        <section v-if="filter(resume.winning).length > 0">
            <h2>获奖情况</h2>
            <ul v-for="item in filter(resume.winning)">
                <li>获得荣誉：{{item.getWin}}</li>
                <li>奖项描述：{{item.describe}}</li>
            </ul>
        </section>
        
        <section v-if="filter(resume.project).length > 0">
            <h2>项目经验</h2>
            <ul v-for="item in filter(resume.project)">
                <li>项目名称：{{item.name}}</li>
                <li>项目时间：{{item.degree}}</li>
                <li>项目总结:{{item.summary}}</li>
            </ul>
        </section>

        <section v-if="filter(resume.work).length > 0">
            <h2>工作经历</h2>
            <ul v-for="item in filter(resume.work)">
                <li>公司名：{{item.company}}</li>
                <li>工作内容：{{item.content}}</li>
            </ul>
        </section>

        <section>
            <h2>联系方式</h2>
            <p>手机号码：{{resume.contact.phone || '请输入您的手机号'}}</p>
            <p>e-mail：{{resume.contact.email || '请添加您的邮箱'}}</p>
            <p>微信：{{resume.contact.VX || '请添加您的WeChat'}}</p>
            <p>QQ：{{resume.contact.QQ || '请添加您的QQ'}}</p>
        </section>   
    </div>
</template>

<style lang="scss">
#preview {
    hr{
        margin: 24px 0 0 0;
    }
    h1{
        margin: 16px;
    }
    h2{
        padding-bottom: 5px;
        padding-left: 5px;
        margin-top: 16px;
    }
    p{
        margin: 16px;
    }
    section{
        margin: 0 32px;
        border-bottom: 1px solid #ccc;

        > ul > li{
            margin: 8px;
        }
    }

}

</style>

<script>
    export default {
        props:['resume'],
        methods:{
            filter(arr){
                return arr.filter(item=> !this.isEmpty(item))
            },
            isEmpty(obj){
                let empty = true
                for(let key in obj){
                    if(obj[key]){
                        empty = false
                        break
                    }
                }
                return empty
            }
        }
    }
</script>