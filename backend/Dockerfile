FROM adoptopenjdk/openjdk8-openj9:latest
WORKDIR /app
COPY Yama-0.0.1-SNAPSHOT.jar /app/backend.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","backend.jar"]