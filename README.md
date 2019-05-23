# roos

installation
---
+ 将myserver放在 如 `~/catkin_ws/src`中
+ `cd ~/catkin_ws` 
+  `catkin_make`
+ 将`mys2.html`放在 `scripts`同级的地方
+ 终端执行`roscore`
+ 新终端 执行`rosrun myserver pyws.py`
+ + 如果报错说不是可执行文件 则`chmod +x pyws.py`
+ 打开浏览器 (我在chrome上测的 firefox应该也行）输入文件地址：例如`file:///home/aao/mys2.html`
+ 打开网页后在输入框中输入`start`可以启动`shopping.launch` 
+ 在输入框中输入`topic`可以启动`rostopic list`
+ 点击cleanScreen可以将输出部分清空

**默认绑定和监听的地址是127.0.0.1:8000**
如需改变请改 `pyws.py`开头的**HOST PORT** 以及`mys2.html`中的地址

**输入功能可以在pyws.py中run方法里改变**
