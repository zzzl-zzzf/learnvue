<template>
    <a-layout id="components-layout-demo-custom-trigger" style="height: 100%">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible style="height: 100%">
            <div class="logo">OREY</div>
            <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" style="height: 100%">
                <a-menu-item key="1" @click="$router.push({path:'/'})">
                    <a-icon type="appstore" />
                    <span>总览</span>
                </a-menu-item>
                <a-menu-item key="2" @click="$router.push({path:'/users'})">
                    <a-icon type="user" />
                    <span>用户中心</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="money-collect" />
                    <span>摇钱树</span>
                </a-menu-item>
                <a-menu-item key="4">
                    <a-icon type="customer-service" />
                    <span>售后支持</span>
                </a-menu-item>
                <a-menu-item key="5">
                    <a-icon type="align-left" />
                    <span>花生壳</span>
                </a-menu-item>
                <a-menu-item key="6">
                    <a-icon type="smile" />
                    <span>向日葵</span>
                </a-menu-item>
                <a-menu-item key="7">
                    <a-icon type="fire" />
                    <span>蒲公英</span>
                </a-menu-item>
                <a-menu-item key="8">
                    <a-icon type="right-circle" />
                    <span>域名</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0; text-align: right;">
                <a-dropdown>
                    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                        用户 <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                        <a-menu-item>
                            <a href="javascript:;">服务号</a>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;">我的消息</a>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;">退出</a>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
                <a-dropdown>
                    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                        帮助 <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                        <a-menu-item>
                            <a href="javascript:;">钻石vip</a>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </a-layout-header>
            <div>
                <a-layout-content
                        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px', display:'block'}"
                >
                <router-view/>
                </a-layout-content>
            </div>
            <div style="margin: 10px 6px">
                <ul>
                    <li class="fenzhi">
                        <div class="hah">
                            <div class="haha">
                                <div class="con">
                                    <div class="conbtn">
                                        <a href="" class="bs">立即续费</a>
                                        <p style="line-height: 35px; font-size:14px;color: grey;">续费热线：020-62219009</p>
                                    </div>
                                    <div class="im">
                                        <img style="vertical-align: top;margin-right: 8px;" src="../assets/icon_renew.png" height="60" width="60"/>
                                        <div class="info"><p class="til">产品服务</p></div></div>

                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="fenzhi">
                        <div class="hah">
                            <div class="haha">
                                <div class="con">
                                    <div class="conbtn">
                                        <a href="" class="bs1">索取发票</a>
                                        <a href="" class="bs1">查看订单</a>
                                    </div>
                                    <div class="im">
                                        <img style="vertical-align: top;margin-right: 8px;" src="../assets/icon_order.png" height="60" width="60"/>
                                        <div class="info"><p class="til">我的订单</p>
                                            <p style="line-height: 12px;color: grey ;font-size:12px;" >待支付  <span style="color: black">0</span></p></div></div>

                                </div>
                            </div>
                        </div>
                        <!--<div class="hah"><div class="haha ">-->
                        <!--<div class="con"><img src="../assets/icon_order.png" height="60" width="60"/></div>-->
                        <!--</div></div>-->
                    </li>
                    <li class="fenzhi">
                        <div class="hah">
                            <div class="haha">
                                <div class="con">
                                    <div class="conbtn">
                                        <a href="" class="bs1">我要招领</a>
                                    </div>
                                    <div class="im">
                                        <img style="vertical-align: top;margin-right: 8px;" src="../assets/icon_lost.png" height="60" width="60"/>
                                        <div class="info"><p class="til">汇款招领</p>
                                            <p style="line-height: 12px;color: grey ;font-size:12px;" >银行转账的款项，需招领才能充值成功</p></div></div>

                                </div>
                            </div>
                        </div>
                        <!--<div class="hah"><div class="haha">-->
                        <!--<div class="con"><img src="../assets/icon_lost.png" height="60" width="60"/></div>-->
                        <!--</div></div>-->
                    </li>
                    <li class="fenzhi">
                        <div class="hah">
                            <div class="haha">
                                <div class="con">
                                    <div class="conbtn">
                                        <a href="" class="bs1">立即查看</a>
                                        <p style="line-height: 35px; font-size:14px;color: grey;">技术专线：020-62219000</p>
                                    </div>
                                    <div class="im">
                                        <img style="vertical-align: top;margin-right: 8px;" src="../assets/icon_service.png" height="60" width="60"/>
                                        <div class="info"><p class="til">客服工单</p>
                                            <p style="line-height: 12px;color: grey ;font-size:12px;" >进行中的工单  <span style="color: black">0</span></p></div></div>

                                </div>
                            </div>
                        </div>
                        <!--<div class="hah"><div class="haha">-->
                        <!--<div class="con"><img src="../assets/icon_service.png" height="60" width="60"/></div>-->
                        <!--</div></div>-->
                    </li>
                </ul>
            </div>

        </a-layout>
    </a-layout>
</template>

<script>
    export default {
        name: "Commlayout",
        data() {
            return {
                collapsed: false,
            };
        },
    }
</script>

<style scoped>
    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
        font-size:28px;
        color: aqua;

    }
    #fon{
        font-weight: bold;
        font-size: 28px;
        text-align: left;
        margin-bottom: 0px;
    }
    #avatar {
        width: 140px;
        height: 140px;
        position: relative;
        overflow: hidden;
        float: left;
        margin: 0;
        -webkit-border-radius: 70px;
        margin-right: 30px;
    }
    #dis{
        overflow: hidden;
    }
    table{
        width: 100%;
    }
    td{
        height: 32px;
        line-height: 32px;
        text-align: left;
    }
    .gray{
        color: gray;
    }
    .ant-menu-dark.ant-menu-inline .ant-menu-item, .ant-menu-dark.ant-menu-inline .ant-menu-submenu-title {
        text-align: left;
    }
    .fenzhi{
        width: 50%;
        min-height: 180px;
        float: left;
    }
    .hah{
        padding: 10px;
    }
    .haha{
        background: #fff;
        height: 160px;
    }
    li{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    .con{
        padding: 50px 18px 0 18px;
    }
    .conbtn{
        float: right;
        height: 60px;
        line-height: 60px;
        margin: 0;
        text-align: right;
    }
    .im{
        overflow: hidden;
        vertical-align: top;
        text-align: left;
    }
    .info{
        display: inline-block;
        vertical-align: top;
        padding: 0;
    }
    .til{
        font-size: 18px;
        line-height: 26px;
        color: #333;
        margin: 3px 0;
    }
    .bs{
        height: 30px;
        line-height: 30px;
        width: 88px;
        font-size: 14px;
        display: inline-block;
        margin-bottom: 0;
        text-align: center;
        cursor: pointer;
        border: 1px solid #ff0042;
        color: #ff0042;
        background: none;
        padding: 0;
    }
    .bs1{
        height: 30px;
        line-height: 30px;
        width: 88px;
        font-size: 14px;
        display: inline-block;
        margin-bottom: 0;
        text-align: center;
        cursor: pointer;
        border: 1px solid grey;
        color: black;
        background: none;
        margin-left: 10px;
    }
</style>