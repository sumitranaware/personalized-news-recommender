#  Personalized News Recommender System

This is a full-stack Personalized News Recommender System developed using:
- **Frontend:** React.js
- **Backend:** Spring Boot (Java 21)
- **ML Recommendation Service:** FastAPI (Python)
- **Deployment:** Docker & Render
- **CI/CD:** GitHub Actions

---

##  Live Deployments (Render)

- **Frontend (React)**: [https://personalizednewsrecommenderapp-react-r3mr.onrender.com](https://personalizednewsrecommenderapp-react-r3mr.onrender.com)
- **Backend (Spring Boot)**: [https://personalizednewsrecommenderapp-backend.onrender.com](https://personalizednewsrecommenderapp-backend.onrender.com)
- **ML Recommendation Service (FastAPI)**: [https://personalizednewsrecommenderapp-fastapi-a1t2.onrender.com](https://personalizednewsrecommenderapp-fastapi-a1t2.onrender.com)

---

##  Getting Started

###  Folder Structure
```
 Personalized-News-Recommender
 ┣ 📂 news-recommender-frontend (React)
 ┃ ┣ 📂 src/api (springApis.js, fastApis.js)
 ┃ ┣ 📂 src/pages (Home.js, Recommendations.js)
 ┃ ┣ 📂 public/index.html (title + favicon)
 ┃ ┗ Dockerfile
 ┣ 📂 Personalized-News-Recommender-System (Spring Boot)
 ┃ ┣ 📂 controller, dto, entity, repository, service
 ┃ ┗ Dockerfile
 ┣ 📂 News-Recommender-ML (FastAPI)
 ┃ ┣  model.py, recommender.py, main.py
 ┃ ┗ Dockerfile
 ┣  docker-compose.yml
```

###  Tech Stack
- Java 21, Spring Boot, WebClient, DTOs, JPA
- Python, FastAPI, pandas, sklearn
- React 18.2, Axios, Bootstrap
- Docker + Docker Compose
- Render for live deployment
- GitHub Actions for CI/CD

---

##  GitHub Actions (CI/CD)

### 1. Create GitHub Repo
Push all folders to a mono repo .

### 2. Add Secrets in GitHub
For example:
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

### 3. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Each push triggers Docker build + push to Docker Hub + Render redeploy via API/Webhook.

---

## Docker Setup

### Dockerfile (per service)
Each component has its own Dockerfile.

### Docker Compose (for local testing)
```yaml
services:
  backend:
    build: ./Personalized-News-Recommender-System
  frontend:
    build: ./news-recommender-frontend
  ml:
    build: ./News-Recommender-ML
```

---

##  Features

- Category-based news fetching from GNews API
- Personalized recommendations based on user input
- FastAPI model classifier (ML logic)
- Real-time timestamp display
- CORS configured for Render
- Clean UI using Bootstrap

---

##  Common Errors Solved

- CORS Error from Render → Fixed using `@CrossOrigin`
- Axios network issues → Fixed API baseURL in `springApis.js`
- Docker build context & image tagging issues
- CI/CD not triggering → Corrected `main` branch push trigger

---
