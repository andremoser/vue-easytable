(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230df7"],{edac:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"content example-md-doc"},[r("h2",[e._v("常见问题")]),r("anchor",{attrs:{"is-edit":"",label:"scrollWidth 属性",fileName:"QA.md"}}),e._m(0),e._m(1),r("anchor",{attrs:{"is-edit":"",label:"固定列",fileName:"QA.md"}}),r("p",[e._v("Q:为什么设置固定列后，有些列无法显示？")]),e._m(2),r("anchor",{attrs:{"is-edit":"",label:"rowKeyFieldName 属性",fileName:"QA.md"}}),e._m(3),r("p",[e._v("A:此属性为了解决数据更新时，渲染的正确性。适用的功能有：行展开、行单选、行多选、行点击高亮、虚拟滚动")]),r("anchor",{attrs:{"is-edit":"",label:"报错：‘ReferenceError: h is not defined’",fileName:"QA.md"}}),e._m(4),e._m(5),e._m(6),r("anchor",{attrs:{"is-edit":"",label:"长文本破坏布局",fileName:"QA.md"}}),r("p",[e._v("Q:为什么当单元格内容过多时，设置的宽度不生效")]),e._m(7),e._m(8)],1)},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Q:"),r("code",[e._v("scrollWidth")]),e._v("属性的用法？")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("A:当外层容器宽度小于 "),r("code",[e._v("scrollWidth")]),e._v(" 值时，将会出现横向滚动条；当外层容器宽度大于 "),r("code",[e._v("scrollWidth")]),e._v(" 值时，将会跟随容器自适应")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("A:因为设置的 "),r("code",[e._v("scrollWidth")]),e._v("值小于列（设置具体宽度的）的宽度之和，会导致未设置宽度或者设置百分比的列挤掉")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Q:什么时候使用"),r("code",[e._v("rowKeyFieldName")]),e._v(" 属性？")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Q:为什么使用自定义列渲染函数"),r("code",[e._v("renderBodyCell")]),e._v("报‘ReferenceError: h is not defined’")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("A:参考"),r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html#JSX"}},[e._v("官方文档")]),e._v("。你可以"),r("strong",[e._v("加上")]),e._v("第二个参数解决，如：")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",[e._v("renderBodyCell: ({ row, column, rowIndex },h) => {\n       return (<div>hello</div>);\n}\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("A:当单元格文本内容过多时会破坏布局，此时可以通过样式 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break"}},[e._v("word-break")]),e._v(" 控制（"),r("a",{attrs:{href:"#/zh/doc/table/column-width?anchor=long-text-destroys-layout"}},[e._v("具体参考这个示例")]),e._v("），如：")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{staticClass:"language-html"},[e._v('<template>\n  <ve-table\n    style="word-break: break-all"\n    :columns="columns"\n    :table-data="tableData"\n  />\n</template>\n')])])}],a=r("2877"),c={},o=Object(a["a"])(c,n,l,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d230df7.70968969.js.map