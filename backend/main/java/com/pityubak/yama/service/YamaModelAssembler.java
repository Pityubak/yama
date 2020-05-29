package com.pityubak.yama.service;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import com.pityubak.yama.controller.YamaController;
import com.pityubak.yama.entity.Yama;


@Component
public class YamaModelAssembler implements RepresentationModelAssembler<Yama,EntityModel<Yama>> {

	@Override
	public EntityModel<Yama> toModel(Yama entity) {
		
		return new EntityModel<>(entity,
				linkTo(methodOn(YamaController.class).findYamaById(entity.getId())).withSelfRel(),
				linkTo(methodOn(YamaController.class).all()).withRel("yamas"));
				
	}

}
