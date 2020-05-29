package com.pityubak.yama.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class YamaNotFoundAdvice {

	@ResponseBody
	@ExceptionHandler(YamaNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	String YamaNotFoundHandler(YamaNotFoundException ex) {
		return ex.getMessage();

	}
}
