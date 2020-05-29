package com.pityubak.yama.exception;

import org.bson.types.ObjectId;

public class YamaNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7107583063287605041L;

	public YamaNotFoundException(ObjectId id) {
		super("Could not find yama by " + id);

	}

}
