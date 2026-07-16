# Personal Portfolio

A premium, dark-themed developer portfolio built with **React 19 + Vite**.

---

## Live Demo

View the portfolio via GitHub Pages:
**[https://asishjac.github.io/portfolio-app/](https://asishjac.github.io/portfolio-app/)**

---

## Portfolio Sections

| Section | Description |
|---|---|
| **Hero** | Introduction with floating certification badge |
| **About** | Professional summary, domain background, and core competencies |
| **Skills** | Multi-category tech stack across Languages, Frameworks, Cloud, Databases, CI/CD, and Security |
| **Experience** | Vertical timeline of professional history |
| **Projects** | Highlighted open-source GitHub repositories with tech stacks and status |
| **Contact** | Social and contact links |

---

## Design System

- **Theme**: Custom dark slate (`#060913`) with green (`#76b900`) and cyan (`#06b6d4`) accents
- **Glassmorphism**: Semi-transparent cards with `backdrop-filter: blur(16px)` and subtle glow borders
- **Animations**: Scroll-triggered `framer-motion` fade-in/slide-up transitions and floating badge animation
- **Typography**: Google Fonts — `Outfit` (headings) and `Inter` (body)
- **Responsive**: Mobile-first layout via Material UI Grid system

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| UI Components | Material UI (MUI) v6 |
| Animations | Framer Motion |
| Styling | Vanilla CSS (custom design tokens) + MUI `sx` prop |
| Icons | Lucide React |
| Fonts | Google Fonts — Outfit & Inter |

---

## Featured Projects

### [reguassist-ai](https://github.com/asishjac/reguassist-ai)
Grounded AI for regulated knowledge. A production-ready, multi-tenant RAG platform for compliance teams in banking and insurance.
`Spring Boot 3` `Java 21` `React 19` `pgvector` `PostgreSQL` `OpenAI API` `Flyway` `Docker`

### [chatr](https://github.com/asishjac/chatr)
AWS-native professional messaging platform with real-time AI image moderation via AWS Rekognition.
`Node.js` `Express` `React` `DynamoDB` `S3` `SES` `Socket.io` `Terraform` `Nginx`

### [Distributed-Notification-System](https://github.com/asishjac/Distributed-Notification-System)
Event-driven notification gateway with reactive Spring WebFlux, SQS, and serverless Kotlin Lambda workers.
`Kotlin` `Spring Boot WebFlux` `AWS Lambda` `SQS` `DynamoDB` `PostgreSQL` `R2DBC` `LocalStack` `Terraform`

### [event-driven-tweet-processor](https://github.com/asishjac/event-driven-tweet-processor) *(In Progress)*
Scalable microservices ingestion pipeline — Kafka topics, Elasticsearch indexing, stream processing, and analytics.
`Java 25` `Spring Boot` `Spring Cloud` `Apache Kafka` `Kafka Streams` `Elasticsearch` `Keycloak` `Prometheus` `ELK`

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build
```
