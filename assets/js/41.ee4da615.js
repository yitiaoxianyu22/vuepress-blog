(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{392:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第三十五周arts总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三十五周arts总结"}},[s._v("#")]),s._v(" 第三十五周ARTS总结")]),s._v(" "),a("h2",{attrs:{id:"algorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm"}},[s._v("#")]),s._v(" Algorithm")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://leetcode.com/problems/first-missing-positive/",target:"_blank",rel:"noopener noreferrer"}},[s._v("First Missing Positive"),a("OutboundLink")],1)])]),s._v(" "),a("blockquote",[a("p",[s._v("0ms | 100.00% Run time"),a("br"),s._v("\n34.6MB | 100.00% Memory")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("firstMissingPositive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Arrays.sort(nums); 该排序的时间复杂度为O(nlogn)，所以不能使用")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 由于int只能存储32个数的状态，因此直接采用数组")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 利用warehouse来存储每个位置的状态，1代表nums中有该值，否则无")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 本来容量想直接设置为Integer.MAX_VALUE的，但是没必要，而且会OutOfMemory")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// warehouse容量最大不需要超过nums的长度+2")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" warehouse "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 时间复杂度:O(n)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" warehouse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        warehouse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 时间复杂度:O(n)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" warehouse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("warehouse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h2",{attrs:{id:"review"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[s._v("#")]),s._v(" Review")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ataulm.github.io/2019/10/28/resolving-view-attributes.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Resolving View Attributes on Android"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"tip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tip"}},[s._v("#")]),s._v(" Tip")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Handler")]),s._v("机制：\n"),a("ul",[a("li",[s._v("目的：线程间通信")]),s._v(" "),a("li",[s._v("涉及到的主要类：\n"),a("ul",[a("li",[a("code",[s._v("Handler")]),s._v("：负责消息的发送与处理")]),s._v(" "),a("li",[a("code",[s._v("Looper")]),s._v("：负责管理"),a("code",[s._v("MessageQueue")]),s._v("，"),a("code",[s._v("Looper")]),s._v("会不断的从"),a("code",[s._v("MessageQueue")]),s._v("取出消息，交给"),a("code",[s._v("Handler")]),s._v("处理")]),s._v(" "),a("li",[a("code",[s._v("MessageQueue")]),s._v("：消息队列，负责存放消息"),a("br"),s._v(" "),a("strong",[s._v("注：一个线程中可以有多个"),a("code",[s._v("Handler")]),s._v("，但只有一个"),a("code",[s._v("Looper")]),s._v("和一个"),a("code",[s._v("MessageQueue")])])])])]),s._v(" "),a("li",[s._v("注意点：\n"),a("ul",[a("li",[s._v("在子线程使用"),a("code",[s._v("Handler")]),s._v("前一定要先为子线程创建"),a("code",[s._v("Looper")]),s._v("，创建的方式是直接调用"),a("code",[s._v("Looper.prepare()")]),s._v("方法")]),s._v(" "),a("li",[s._v("在同一个线程里，"),a("code",[s._v("Looper.prepare()")]),s._v("方法不能被调用两次")]),s._v(" "),a("li",[s._v("只有调用了"),a("code",[s._v("Looper.loop()")]),s._v("方法，"),a("code",[s._v("Handler")]),s._v("机制才能正常工作")]),s._v(" "),a("li",[a("code",[s._v("Looper.loop()")]),s._v("方法一定要在调用了"),a("code",[s._v("Looper.prepare()")]),s._v("方法之后调用")]),s._v(" "),a("li",[s._v("不要在主线程调用"),a("code",[s._v("Looper.prepare()")]),s._v("方法")]),s._v(" "),a("li",[s._v("当我们在子线程使用"),a("code",[s._v("Handler")]),s._v("时，如果"),a("code",[s._v("Handler")]),s._v("不再需要发送和处理消息，那么一定要退出子线程的消息轮询")])])]),s._v(" "),a("li",[s._v("当一个线程有多个"),a("code",[s._v("Handler")]),s._v("，那会由哪个"),a("code",[s._v("Handler")]),s._v("来处理这个消息呢：发该消息的那个")])])]),s._v(" "),a("li",[s._v("给"),a("code",[s._v("Activity")]),s._v("的"),a("code",[s._v("<meta-data>")]),s._v("加上如下代码用于声明此"),a("code",[s._v("Activity")]),s._v("的逻辑父级"),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("activity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("android:")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v(".DisplayMessageActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("android:")]),s._v("parentActivityName")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v(".MainActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- The meta-data tag is required if you support API level 15 and lower --\x3e")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("meta-data")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("android:")]),s._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("android.support.PARENT_ACTIVITY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("android:")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v(".MainActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("activity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("code",[s._v("Android")]),s._v("安全功能：\n"),a("ul",[a("li",[a("code",[s._v("Android")]),s._v("操作系统是一种多用户"),a("code",[s._v("Linux")]),s._v("系统，其中的每个应用都是一个不同的用户;")]),s._v(" "),a("li",[s._v("默认情况下，系统会为每个应用分配一个唯一的"),a("code",[s._v("Linux")]),s._v("用户ID（该ID仅由系统使用，应用并不知晓）。系统会为应用中的所有文件设置权限，使得只有分配给该应用的用户ID才能访问这些文件;")]),s._v(" "),a("li",[s._v("每个进程都拥有自己的虚拟机(VM)，因此应用代码独立于其他应用而运行;")]),s._v(" "),a("li",[s._v("默认情况下，每个应用都在其自己的"),a("code",[s._v("Linux")]),s._v("进程内运行。"),a("code",[s._v("Android")]),s._v("系统会在需要执行任何应用组件时启动该进程，然后当不再需要该进程或系统必须为其他应用恢复内存时，其便会关闭该进程。")])])]),s._v(" "),a("li",[a("code",[s._v("ViewPage2")]),s._v("的优势\n"),a("ul",[a("li",[s._v("基于"),a("code",[s._v("RecyclerView")]),s._v("实现")]),s._v(" "),a("li",[s._v("支持滑动方向的一键切换")]),s._v(" "),a("li",[s._v("支持禁止用户滑动页面")]),s._v(" "),a("li",[s._v("支持通过代码方式模拟用户滚动页面")]),s._v(" "),a("li",[s._v("支持同时添加多个"),a("code",[s._v("PageTransformer")])]),s._v(" "),a("li",[s._v("支持"),a("code",[s._v("DiffUtil")])]),s._v(" "),a("li",[s._v("支持"),a("code",[s._v("RTL(right-to-left)")]),s._v("布局")])])]),s._v(" "),a("li",[a("code",[s._v("HashMap")]),s._v("的实现方式\n"),a("ul",[a("li",[a("code",[s._v("jdk1.6 jdk1.7")]),s._v("：采用数组+链表实现")]),s._v(" "),a("li",[a("code",[s._v("jdk1.8")]),s._v("：采用数组+链表+红黑树实现，当链表长度超过阈值时，自动转为红黑树")])])])]),s._v(" "),a("h2",{attrs:{id:"share"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#share"}},[s._v("#")]),s._v(" Share")]),s._v(" "),a("p",[s._v("暂无内容")])])}),[],!1,null,null,null);t.default=e.exports}}]);