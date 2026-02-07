# 🚀 Jobify
> *Early-stage prototype for a scalable recruitment and job-seeking platform built with a microservices architecture.*

---

## 🚧 Project Status

**Current Phase: Backend Development**  
This project is actively being built! Functional core services are in place, but the frontend and user-facing features are still in the works.

> **Status:** `Prototype / Experimental`  
> **Progress:** `~40% Complete`

---

## 📖 Overview

**Jobify** aims to solve the complexity of modern recruitment by providing a modular, scalable platform designed for:

- 👨‍💻 **Job Seekers:** Manage profiles, upload resumes, and apply for jobs seamlessly.
- 🏢 **Recruiters:** Post openings, manage candidates, and streamline the hiring process.

The project utilizes a **Microservices Architecture** to ensure high scalability, fault tolerance, and clear separation of concerns.

---

## ⚡ Current Progress

The following backend components are currently implemented and functional:

### 🔐 **Auth Service** (`services/auth`)
- ✅ **User Registration & Login:** Full authentication flow.
- ✅ **Role-Based Access Control (RBAC):** Distinct roles for **Job Seekers** and **Recruiters**.
- ✅ **Security:** Secure password hashing with **Bcrypt** & **JWT** authentication.
- ✅ **Database:** Integrated with **Neon (Serverless PostgreSQL)** for user data.
- ✅ **Caching:** Integrated with **Redis** for session management.
- ✅ **Schemas:** Initial database tables (Users, Skills) created.

### 🛠 **Utils Service** (`services/utils`)
- ✅ **Shared Utilities:** Common helper endpoints.
- ✅ **Async Processing:** **Kafka Consumer** for background tasks (e.g., email notifications).
- ✅ **Media Helper:** Integrated **Cloudinary** for image/resume uploads.
- ✅ **Email:** Configured **Nodemailer** for transactional emails.

---

## 🔮 Planned Features

Below is the roadmap for upcoming features:

- [ ] 👤 **User Service:** Comprehensive profile management (Education, Experience, Portfolios).
- [ ] 💼 **Job Service:** Job posting, searching, application tracking, and management.
- [ ] 🖥 **Frontend Application:** Modern, responsive web interface (React/Next.js).
- [ ] 🔔 **Real-time Notifications:** WebSockets for application updates and messages.
- [ ] 🔍 **Search & Match:** Advanced filtering and AI-driven candidate matching.

---

## 🛠 Tech Stack

We use cutting-edge tools to build a robust platform:

| Category | Technology |
|----------|------------|
| **Runtime** | ![NodeJS](https://img.shields.io/badge/Node.js-18.x-green) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) |
| **Framework** | ![Express](https://img.shields.io/badge/Express.js-Backend-black) |
| **Database** | ![Postgres](https://img.shields.io/badge/PostgreSQL-Neon-336791) ![Redis](https://img.shields.io/badge/Redis-Cache-red) |
| **Messaging** | ![Kafka](https://img.shields.io/badge/Apache_Kafka-Event_Bus-231F20) |
| **Cloud** | ![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-orange) |

---

## 📂 Project Structure

```bash
Jobify/
├── frontend/           # 🔜 (Coming Soon) Frontend application
├── services/
│   ├── auth/           # 🔐 Authentication & Database handling
│   ├── user/           # 👤 (Placeholder) User profile management
│   └── utils/          # 🛠 Utility service (Email, Uploads, etc.)
```

---

## 🏁 Getting Started

> **Note:** This project is in **active development**. Some setup steps require external infrastructure (DB, Redis, Kafka).

### 📋 Prerequisites
- **Node.js** (v18+ recommended)
- **npm** or **yarn**
- **PostgreSQL** Database (e.g., Neon)
- **Redis** Instance
- **Apache Kafka** Broker
- **Cloudinary** Account

### 🚀 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/jobify.git
    cd jobify
    ```

2.  **Setup Auth Service**
    ```bash
    cd services/auth
    npm install
    
    # Create a .env file with:
    # PORT=...
    # DB_URL=... (Neon connection)
    # Redis_url=...
    
    npm run dev
    ```

3.  **Setup Utils Service**
    ```bash
    cd ../utils
    npm install
    
    # Create a .env file with:
    # PORT=...
    # CLOUD_NAME=...
    # API_KEY=...
    # API_SECRET=...
    
    npm run dev
    ```

---

## ⚠️ Known Limitations

- **No Graphical Interface:** Interaction is currently limited to API endpoints (Postman/cURL).
- **Service Dependency:** Services require all infrastructure (Kafka, Redis) to be active.
- **Error Handling:** Basic handling is implemented; complex edge cases are being refined.

---

## 🗺 Roadmap

| Phase | Goal |
|-------|------|
| **Near-term** | Complete User Service & harden Kafka communication. |
| **Mid-term** | Launch MVP Frontend for basic user flows. |
| **Long-term** | AI Matching, Analytics & Advanced Search. |

---

## 🤝 Contributing

Contributions are **welcome**! 
Since we are in the early stages, please **open an issue** first to discuss your ideas. We'd love to hear your feedback!
