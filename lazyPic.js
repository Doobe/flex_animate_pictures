import React, { Component } from 'react';
import Lazyimg, { withLazyimg } from 'react-lazyimg-component';
//volecity.js
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

//组建内配置项
const config = {
    js_effect:"transition.flipXIn",
    threshold:"200px"
};
const Lazy = withLazyimg(config);

//threshold: 0, // 指定距离底部多少距离时触发加载
//event: 'scroll', // 指定触发事件，默认为'scroll'
//js_effect: undefined, // 显示图片的js动画效果
//css_effect: undefined, // 显示图片的css动画效果
//container: window, // 指定容器，默认为window
//parent: undefined, // 可以指定动画效果作用于元素的哪个父级元素
//appear: null, // 元素出现在可视窗口时触发appear钩子函数
//load: null,  // 元素图片的加载完后触发load钩子函数
//error: null, // 图片加载出错时触发error钩子函数
//node_type: 'img', // 指定生成的节点类型，默认为'img'
//placeholder: // 占位元素，除了支持普通的图片外，还支持react组件。


export default class LazyPic extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <div style={this.props.container}>
          {
              this.props.lists.map(link =>
                 <Lazy
                    className="lazy"
                    style={this.props.childs}
                    src={link}
                /> 
              )
          }
      </div>
    )
  }
}
