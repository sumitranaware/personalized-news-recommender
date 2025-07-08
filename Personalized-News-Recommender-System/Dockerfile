FROM maven:3.9.4-eclipse-temurin-21 as builder


WORKDIR /app

COPY pom.xml .
COPY .mvn .mvn
COPY mvnw .

# ✅ Fix permission issue
RUN chmod +x mvnw

# Pre-download dependencies
RUN ./mvnw dependency:go-offline

COPY src ./src

# Build the application
RUN ./mvnw clean package -DskipTests

# ---------- Runtime image ----------
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
