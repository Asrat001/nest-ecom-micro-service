# 🛒 NestJS E-Commerce Microservices

A modular, scalable e-commerce backend built with NestJS, leveraging microservices architecture. This project uses gRPC for inter-service communication, PostgreSQL for persistence, and Docker for containerization.

---

## 📦 Features

- **Microservices Architecture** – Decoupled services for user, product, order, and gateway
- **gRPC Communication** – Efficient service-to-service communication using Protocol Buffers
- **PostgreSQL Integration** – Reliable relational database support
- **Dockerized Environment** – Consistent development & deployment
- **Scalable & Modular Design** – Easily extendable

---

## 🏗️ Project Structure

```
nest-ecom-micro-service/
├── apps/
│   ├── apigetway/          # API Gateway
│   ├── user_service/       # User microservice
│   ├── product_service/    # Product microservice
│   └── order_service/      # Order microservice
├── libs/
│   └── shared/             # Shared modules/utilities
├── proto/                  # Protocol Buffer files
├── docker-compose.yml      # Docker config
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. **Clone the repo**

```bash
git clone https://github.com/Asrat001/nest-ecom-micro-service.git
cd nest-ecom-micro-service
```

2. **Install dependencies**

```bash
npm install 
```
in some case use 
```bash
npm install  --force
```

3. **Set up environment variables**

```bash
cp .env.example .env
# Edit .env with your local DB and gRPC URLs
```

4. **Generate Protocol Buffers**

```bash
npx protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto   --ts_proto_out=./   --ts_proto_opt=nestJs=true   ./proto/user-service.proto
npx protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto   --ts_proto_out=./   --ts_proto_opt=nestJs=true   ./proto/order-service.proto
npx protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto   --ts_proto_out=./   --ts_proto_opt=nestJs=true   ./proto/product-service.proto
```

5. **Build the project**

```bash
npm run build
```

6. **Start services**

- For development:

```bash
npm run start:dev apigetway
npm run start:dev user_service
npm run start:dev product_service
npm run start:dev order_service
```

- For production:

```bash
npm run start:prod
```

---

## 🐳 Docker

Start the app using Docker:

```bash
docker-compose up --build
```

Access the API gateway at:  
**http://localhost:3000**

---

## 📄 API Documentation

Once running, visit:

```
http://localhost:3000/docs
```

Swagger will list available routes from the gateway.

---

## 🧪 Testing

To run tests inside any microservice:

```bash
# Example for user service
cd apps/user_service
npm run test
```


---

## 📁 Environment Variables

Example `.env`:

```env
# PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USER=youruser
DB_PASSWORD=yourpass
DB_NAME=ecom

# gRPC
USER_SERVICE_URL=localhost:5001
PRODUCT_SERVICE_URL=localhost:5002
ORDER_SERVICE_URL=localhost:5003
```

---

## Things I Did't Complete
using Nx


