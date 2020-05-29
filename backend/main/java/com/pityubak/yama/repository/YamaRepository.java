package com.pityubak.yama.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pityubak.yama.entity.Yama;

@Repository
public interface YamaRepository extends MongoRepository<Yama, ObjectId> {

	Yama findByColor(String color);

	Yama findByHasThreeEyes(boolean hasThreeEyes);
}
