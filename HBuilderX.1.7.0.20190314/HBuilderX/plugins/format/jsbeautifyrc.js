module.exports = {
	parsers: {
		".js": "js",
		".json": "js",
		".njs": "js",
		".css": "css",
		".nss": "css",
		".wxss": "css",
		".html": "html",
		".ux": "html",
		".wxml": "html",
		".nml": "html",
		".vue": "html",
		".nvue": "html"
	},
	options: {
		"indent_size": "1",
		"indent_char": "\t",
		"indent_with_tabs": false, //使用tab缩进
		"eol": "\r\n", //行结束符
		"end_with_newline": false, //使用换行结束输出
		"indent_level": 0, //起始代码缩进数
		"preserve_newlines": true, //保留空行
		"max_preserve_newlines": null, //最大连续保留换行符个数。比如设为2，则会将2行以上的空行删除为只保留1行
		"space_in_paren": false, //括弧添加空格 示例 f( a, b )
		"space_in_empty_paren": false, //函数的括弧内没有参数时插入空格 示例 f( )
		"jslint_happy": false, //启用jslint-strict模式
		"space_after_anon_function": false, //匿名函数的括号前加空格
		"brace_style": "collapse", //代码样式，可选值 [collapse|expand|end-expand|none][,preserve-inline] [collapse,preserve-inline
		"unindent_chained_methods": false, //不缩进链式方法调用
		"break_chained_methods": false, //在随后的行中断开链式方法调用
		"keep_array_indentation": false, //保持数组缩进
		"unescape_strings": false, //使用xNN符号编码解码可显示的字符
		"wrap_line_length": 120,
		"e4x": false, //支持jsx
		"comma_first": false, //把逗号放在新行开头，而不是结尾
		"operator_position": "before-newline",
		"unformatted": ["wbr"],
		"html": {
			"indent_handlebars": true,
			"indent_inner_html": true,
			"indent-scripts": "normal", //[keep|separate|normal]
			"extra_liners": [] //配置标签列表，需要在这些标签前面额外加一空白行
		}
	}
}