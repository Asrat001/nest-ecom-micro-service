
🛒 NestJS E-Commerce Microservices
A modular, scalable e-commerce backend built with NestJS, leveraging microservices architecture. This project utilizes gRPC for inter-service communication, PostgreSQL for data persistence, and Docker for containerization.

📦 Features
Microservices Architecture: Decoupled services for user management, product catalog, order processing, and API gateway.

gRPC Communication: Efficient inter-service communication using Protocol Buffers.

PostgreSQL Integration: Robust relational database support.

Dockerized Environment: Containerized services for consistent development and deployment.

TypeScript Support: Type-safe codebase for better maintainability.

Scalable Design: Easily extendable to accommodate additional services or features.​
GitHub
+2
GitHub
+2
GitHub
+2

🏗️ Project Structure
bash
Copy
Edit
nest-ecom-micro-service/
├── apps/
│   ├── apigetway/          # API Gateway handling client requests
│   ├── user_service/       # User management microservice
│   ├── product_service/    # Product catalog microservice
│   └── order_service/      # Order processing microservice
├── libs/
│   └── shared/             # Shared modules and utilities
├── proto/                  # Protocol Buffer definitions
├── docker-compose.yml      # Docker Compose configuration
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation
🚀 Getting Started
Prerequisites
Node.js (v16 or later)

NestJS CLI

Docker & Docker Compose

PostgreSQL​

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Asrat001/nest-ecom-micro-service.git
cd nest-ecom-micro-service
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

Copy the example environment file:​

bash
Copy
Edit
cp .env.example .env
Update .env with your configuration.​

Generate Protocol Buffers:

bash
Copy
Edit
npm run proto:gen
Build the project:

bash
Copy
Edit
npm run build
Start services:

For development:​

bash
Copy
Edit
npm run start:dev
For production:​
GitHub
+3
GitHub
+3
GitHub
+3

bash
Copy
Edit
npm run start:prod
🐳 Docker Deployment
To run the entire application stack using Docker:

Build and start containers:

bash
Copy
Edit
docker-compose up --build
Access the API Gateway:

Navigate to http://localhost:3000 in your browser.​

📄 API Documentation
The API Gateway integrates Swagger for API documentation. Once the application is running, access the docs at:​
GitHub

bash
Copy
Edit
http://localhost:3000/api
🧪 Testing
To run tests for individual services:​

bash
Copy
Edit
# Navigate to the service directory
cd apps/user_service

# Run tests
npm run test
Repeat the above steps for other services (product_service, order_service, etc.).​

📁 Environment Variables
Ensure the following environment variables are set in your .env file:​

env
Copy
Edit
# PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name

# gRPC
USER_SERVICE_URL=localhost:5001
PRODUCT_SERVICE_URL=localhost:5002
ORDER_SERVICE_URL=localhost:5003