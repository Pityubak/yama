package com.pityubak.yama.controller;

import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

import org.bson.types.ObjectId;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import com.pityubak.yama.entity.Yama;
import com.pityubak.yama.exception.YamaNotFoundException;
import com.pityubak.yama.repository.YamaRepository;
import com.pityubak.yama.service.YamaModelAssembler;



@RestController
public class YamaController {

	private final YamaRepository repository;

	private final YamaModelAssembler assembler;

	public YamaController(YamaRepository repository, YamaModelAssembler assembler) {
		super();
		this.repository = repository;
		this.assembler = assembler;
	}

	@GetMapping("/yamas")
	public CollectionModel<EntityModel<Yama>> all() {

		List<EntityModel<Yama>> yamas = repository.findAll().stream().map(assembler::toModel)
				.collect(Collectors.toList());

		return new CollectionModel<>(yamas, linkTo(methodOn(YamaController.class).all()).withSelfRel());
	}

	@PostMapping("/yamas")
	ResponseEntity<?> createYama(@RequestBody Yama newYama) throws URISyntaxException {
		EntityModel<Yama> ym = assembler.toModel(repository.save(newYama));

		return ResponseEntity.created(ym.getRequiredLink(IanaLinkRelations.SELF).toUri()).body(ym);
	}

	@GetMapping("/yamas/{id}")
	public EntityModel<Yama> findYamaById(@PathVariable ObjectId id) {
		Yama yama = repository.findById(id).orElseThrow(() -> new YamaNotFoundException(id));

		return assembler.toModel(yama);
	}

	@PutMapping("yamas/{id}")
	ResponseEntity<?> updateYama(@RequestBody Yama newYama, @PathVariable ObjectId id) throws URISyntaxException {
		Yama updatedYama = repository.findById(id).map(yama -> {
			yama.setColor(newYama.getColor());
			yama.setName(newYama.getName());
			yama.setHasThreeEyes(newYama.isHasThreeEyes());
			return repository.save(yama);
		}).orElseGet(() -> {
			newYama.setId(id);
			return repository.save(newYama);
		});

		EntityModel<Yama> yama = assembler.toModel(updatedYama);

		return ResponseEntity.created(yama.getRequiredLink(IanaLinkRelations.SELF).toUri()).body(yama);

	}

	@DeleteMapping("/yamas/{id}")
	ResponseEntity<?> deleteYama(@PathVariable ObjectId id) {
		repository.deleteById(id);

		return ResponseEntity.noContent().build();
	}
}
