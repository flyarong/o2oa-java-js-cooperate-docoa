package com.x.program.center.jaxrs.invoke;

import com.x.base.core.project.exception.PromptException;

class ExceptionClientEmpty extends PromptException {

	private static final long serialVersionUID = 4132300948670472899L;

	ExceptionClientEmpty() {
		super("sso 配置client不能为空.");
	}
}
