package com.pityubak.yama.entity;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

@Document(collection = "yamas")
public class Yama {

	@Id
	@JsonSerialize(using= ToStringSerializer.class)
	private ObjectId id;

	private String name;

	private String color;

	private boolean hasThreeEyes;


	public Yama(ObjectId id, String name, String color, boolean hasThreeEyes) {
		super();
		this.id = id;
		this.name = name;
		this.color = color;
		this.hasThreeEyes = hasThreeEyes;
	}


	public ObjectId getId() {
		return id;
	}


	public void setId(ObjectId id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public boolean isHasThreeEyes() {
		return hasThreeEyes;
	}

	public void setHasThreeEyes(boolean hasThreeEyes) {
		this.hasThreeEyes = hasThreeEyes;
	}

}
