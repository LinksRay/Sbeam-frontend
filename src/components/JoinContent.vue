<template>
    <b-container>
        <b-row class="join_content">
            <!--创建账户-->
            <div class="col-12 col-md-8 text-left">
                <div class="join_box">
                    <b-row>
                        <b-col class="col-12 col-md-7">
                            <h5>创建账户</h5>
                            <b-form @submit="onSubmit">
                                <b-form-group label="账户名" label-class="text-white" label-for="input-1">
                                    <b-form-input
                                            id="input-1"
                                            v-model="form.name"
                                            type="password"
                                            required
                                            placeholder="输入账户名">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group label="邮箱地址" label-class="text-white" label-for="input-2">
                                    <b-form-input
                                            id="input-2"
                                            v-model="form.email"
                                            type="email"
                                            required
                                            placeholder="输入邮箱地址">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group label="密码" label-class="text-white" label-for="input-3">
                                    <b-form-input
                                            id="input-3"
                                            type="password"
                                            v-model="form.password"
                                            required
                                            placeholder="输入密码">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group label="再次输入密码" label-class="text-white" label-for="input-4">
                                    <b-form-input
                                            id="input-4"
                                            v-model="form.repeat_password"
                                            type="password"
                                            required
                                            placeholder="输入密码">
                                    </b-form-input>
                                </b-form-group>
                                <b-row>
                                    <b-col class="col-12 col-md-6">
                                        <b-button type="submit" class="btn-block">注 册</b-button>
                                        <!--注册成功-->
                                        <b-modal ref="join-modal" hide-footer title="Sbeam">
                                            <div class="d-block text-left"><h6 class="text-black">
                                                注册成功，点击确认跳转至首页。</h6></div>
                                            <b-button block to="/">确 认</b-button>
                                        </b-modal>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </b-col>
                    </b-row>
                </div>
            </div>
            <!--why-->
            <div class="col-12 col-md-4">
                <WhyBox></WhyBox>
            </div>
        </b-row>
    </b-container>
</template>

<script>
    import WhyBox from "@/components/WhyBox";
    import {register} from "@/apis/api";

    export default {
        name: "JoinContent",
        components: {WhyBox},
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    repeat_password: ''
                }
            }
        },
        methods: {
            onSubmit() {
                register(this.form).then(resp => {
                    if (resp.status != 200)
                        window.console.log(resp.data)
                    if (resp.data.ret == 0) {
                        this.$refs['join-modal'].show()
                    } else
                        window.console.log(resp.data.msg)
                })
            }
        }
    }
</script>

<style scoped>
    h5 {
        color: white;
    }

    .join_box {
        background: #2a2a2a;
        padding: 4% 4% 8% 4%;
    }

    .join_content {
        margin-top: 6%;
        margin-bottom: 5%;
    }
</style>