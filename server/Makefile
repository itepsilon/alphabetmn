start-dev:
	@mvn spring-boot:run -Dspring-boot.run.profiles=dev

deploy:
	@mvn clean package -DskipTests appengine:deploy -P cloud-gcp