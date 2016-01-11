/**
 * Created by dell on 2015-12-22.
 */

'use strict';
var React = require('react-native');

var {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
    } = React;

var styles= StyleSheet.create({
    container :{//总框架
        width:1024,
        height:743,
        borderWidth:3,
        borderColor:"#9370DB",//紫色
        flexDirection: 'column',//垂直分
        alignItems: 'center'//水平居中
    },
    content:{//界面

        width:1024,
        //borderWidth:3,
        borderColor:"#FFC0CB",//粉红色
        flexDirection: 'column',//垂直分
        flex: 19,//占19
        alignItems: 'center',//水平居中
        justifyContent: 'center'//垂直居中
    },

    content_main: {
        borderColor:'red',
        //borderWidth:1,
        margin:0,
        height:720,
        width:1005,
        flexDirection:'row',

    },
    content_main_left:{
        borderColor:'red',
        //borderWidth:1,
        flex:1,
        flexDirection:'column' ,
    },
    content_main_right :{
        borderColor:'red',
        //borderWidth:0,
        flex:3,
        flexDirection:'column'
    },
    content_main_left_top:{
        borderColor:'red',
        // borderWidth:2,
        flex:1,
    },
    content_main_left_bottom:{
        borderColor:'red',
        //borderWidth:2,
        flex:1,
    },
    content_main_right_top:{
        borderColor:'red',
        // borderWidth:1,
        flex:3,
    },
    content_main_right_bottom:{
        borderColor:'red',
       // borderWidth:1,
        flex:1,
        flexDirection:'row'
    },
    content_main_right_bottom_left:{
        borderColor:'red',
       // borderWidth:1,
        flex:2,
    },
    content_main_right_bottom_right:{
        borderColor:'red',
         //borderWidth:1,
        flex:1,
    },

    //页脚
    footer :{
        borderColor:'#c0c0c0',//灰色
        borderWidth:1,
        flex:1,//占1份
        width: 1024,
        height: 40,
        alignItems: 'center',//水平居中
        justifyContent: 'center'//垂直居中
    },

    //页脚文字格式
    text: {
        fontSize: 15
    },

});
//var 所跳转页面 = require ('./所跳转页面');
//class Login extends  Component {
var DoYouKnow = React.createClass({

    getInitialState(){
        return {
            user: [],
        };
    },

    componentDidMount: function() {
        //这里获取从Login传递过来的参数: user
        this.setState({
            user: this.props.paramsUser
        });
    },

    //跳转到下一页
    pressButtonToNext() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                //name: '所跳转页面',
                //component: 所跳转页面,

                //这里多出了一个 params 其实来自于<Navigator 里的一个方法的参数...
                params: {
                    paramsUser: this.state.user
                }
            })
        }
    },


    /* 渲染函数 ，通过return 返回一个布局 */
    render: function () {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image  resizeMode='contain'  style={{width:1024,height:743 }} source={require('./image/u5.png')}>
                        <View style={styles.content_main}>
                            <View style={styles.content_main_left}>{/*左半部分*/}
                                <View style={styles.content_main_left_top}>
                                    <Text style={{fontSize:60,textAlign:'center' ,marginTop:140,}}>
                                        boat
                                    </Text>
                                </View>
                                <View style={styles.content_main_left_bottom}>
                                    <Image source={require('./image/home/peale___u7.png')}
                                           style={{width:125,height:125,marginLeft:5,marginTop:150}}/>
                                </View>
                            </View>
                            <View style={styles.content_main_right}>{/*右半部分*/}
                                <View style={styles.content_main_right_top}>{/*内容文字*/}
                                    <Text style={{fontSize:45,textAlign:'center' ,marginTop:300,}}>
                                        船是重要的水上交通工具。在石器时代，
                                        就出现了最早的船——独木舟。
                                    </Text>
                                </View>

                                <View style={styles.content_main_right_bottom}>{/*back*/}
                                    <View style={styles.content_main_right_bottom_left}>
                                    </View>
                                    <View style={styles.content_main_right_bottom_right}>
                                        <TouchableOpacity onPress={() =>this.pressButtonToNext()}>
                                            <Image source={require('./image/boat/u15.png')}
                                                   style={{marginTop:7,marginLeft:50}}>
                                            </Image>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Image>
                </View>
                {/*页脚*/}
                <View style={styles.footer}>
                    <Text style={[styles.text,{ color: 'grey'}]}>首都师范大学</Text>
                    <Text>用户信息:{JSON.stringify(this.state.user)}</Text>
                </View>
            </View>
        )
    }
})

module .exports=DoYouKnow;