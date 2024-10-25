package com.x.attendance.assemble.control.jaxrs.attendanceemployeeconfig;

import com.x.base.core.project.exception.PromptException;

class ExceptionConfigIdEmpty extends PromptException {

	private static final long serialVersionUID = 1859164370743532895L;

	public ExceptionConfigIdEmpty() {
		super("查询操作传入的参数ID为空，无法进行查询操作.");
	}
}
