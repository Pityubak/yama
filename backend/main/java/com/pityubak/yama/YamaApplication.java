package com.pityubak.yama;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class YamaApplication {

	/*
	 * @Autowired private YamaRepository repository;
	 */

	public static void main(String[] args) {
		SpringApplication.run(YamaApplication.class, args);
	}

	/*
	 * @Bean CommandLineRunner preLoadMongo() throws Exception { return args -> {
	 * repository.deleteAll(); repository.save(new Yama(new ObjectId(), "Hasselhof",
	 * "brown", false)); repository.save(new Yama(new ObjectId(), "Loopy", "red",
	 * true)); repository.save(new Yama(new ObjectId(), "Poola", "blue", false));
	 * repository.save(new Yama(new ObjectId(), "Yacin", "purple", false));
	 * repository.save(new Yama(new ObjectId(), "ChrisLemon", "yellow", false));
	 * repository.save(new Yama(new ObjectId(), "Giorgo", "black", true));
	 * repository.save(new Yama(new ObjectId(), "Muffin", "green", false));
	 * repository.save(new Yama(new ObjectId(), "May", "gray", false));
	 * repository.save(new Yama(new ObjectId(), "Zoom", "orange", false));
	 * 
	 * }; }
	 */

}
