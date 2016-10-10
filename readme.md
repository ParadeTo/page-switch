# jquery轮播图插件
* 支持横屏/竖屏滑动
* 支持循环播放
* 支持自动播放（鼠标悬停到导航按钮上可暂停）
* 支持键盘方向键和鼠标滑轮切换

## 效果
![image](https://github.com/ParadeTo/page-switch/blob/master/img/demo.gif)

## 使用
```javascript
	<div id="container">
		<div class="sections">
			<div class="section" id="section0"><h3>this is the page0</h3></div>
			<div class="section" id="section1"><h3>this is the page1</h3></div>
			<div class="section" id="section2"><h3>this is the page2</h3></div>
			<div class="section" id="section3"><h3>this is the page3</h3></div>
		</div>
	</div>
	<script src="./jquery.min.js"></script>
	<script src="../dist/pageSwitch.min.js"></script>
	<script>
		$("#container").PageSwitch({
			direction:'horizontal',
			easing:'ease-in',
			duration:1000,
			autoPlay:true,
			loop:'false'
		});
	</script>
```

## 参数说明
```javascript
selectors : {
	sections : ".sections",  // 容器
	section : ".section", // 每一页
	pages : ".pages", // 分页导航(小圆点)
	active : ".active" // 当前激活页
},
index : 0, // 开始位置
easing :  "ease", // 动画函数
duration : 500, // 毫秒
loop : false, // 是否循环播放，自动播放时该属性为true，设置无效
pagination : true, // 是否分页处理，是否显示小圆点
keyboard : true, // 是否支持键盘上下左右切换
direction : "vertical", // 竖直或水平滑动
autoPlay: true, // 自动播放
interval: 3000, // 自动播放间隔
callback :  "" // 切换动画结束后回调函数
```
