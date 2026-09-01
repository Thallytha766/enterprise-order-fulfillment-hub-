# 🏛️ Enterprise Omnichannel Order Fulfillment Hub

[![Java 17](https://img.shields.io/badge/Java-17-orange.svg?logo=openjdk)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-brightgreen.svg?logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/Frontend-React_18-blue.svg?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/BFF-Node.js_Express-green.svg?logo=node.js)](https://nodejs.org/)
[![Oracle Database](https://img.shields.io/badge/Database-Oracle_19c-red.svg?logo=oracle)](https://www.oracle.com/database/)
[![MongoDB](https://img.shields.io/badge/NoSQL-MongoDB-darkgreen.svg?logo=mongodb)](https://www.mongodb.com/)
[![Jenkins CI/CD](https://img.shields.io/badge/CI%2FCD-Jenkins_Pipeline-red.svg?logo=jenkins)](https://www.jenkins.io/)

Plataforma corporativa de alta performance projetada para orquestração, processamento e despacho de pedidos em escala multinacional. O ecossistema adota persistência poliglota, separação de responsabilidades via BFF (Backend-for-Frontend), interface reativa em React e pipeline de integração contínua (CI/CD) automatizado com Jenkins.

---

## 📐 Arquitetura do Sistema

```text
[ React Frontend ]  
       │ (REST / JSON)
       ▼
[ Node.js BFF Gateway ]  
       │ (Orquestração de Chamadas)
       ▼
[ Java 17 / Spring Boot API ] 
   ├───▶ [ Oracle DB ] (Persistência Relacional ACID / Transações Financeiras)
   └───▶ [ MongoDB ]   (NoSQL / Catálogo Dinâmico & Auditoria de Eventos)
       ▲
[ Jenkins CI/CD Pipeline ] (Automação de Build, Testes e Qualidade Contínua)
```
## Competências & Destaques de Engenharia
 Java & Spring Boot: Desenvolvimento de REST APIs resilientes, injeção de dependências, controle transacional e tratamento fail-fast.
 Persistência Poliglota:
 Oracle Database (Relacional): Modelagem DDL, integridade referencial e índices otimizados para conformidade contábil.
 MongoDB (NoSQL): Estrutura de documentos flexíveis com validação via JSON Schema para trilha de auditoria e telemetria.
 Frontend React: Interface moderna com controle de estado, validação reativa e desacoplamento de serviços.
 Node.js BFF: Camada intermediária para agregação de endpoints, redução de latência e consumo de APIs externas.
 DevOps & Melhoria Contínua (Jenkins + Git): ⁠Jenkinsfile⁠ com pipeline multi-estágio automatizado (Linting ➔ Testes Unitários ➔ Build ➔ Quality Gate).

📂 Estrutura de Pastas
```text
├── backend/            # REST API em Java 17 e Spring Boot
├── bff-node/           # Gateway Backend-For-Frontend em Node.js
├── frontend/           # Aplicação SPA em React
├── database/           # Scripts DDL Oracle (Relacional) e MongoDB (NoSQL)
├── Jenkinsfile         # Pipeline declarativo CI/CD para automação contínua
└── README.md           # Documentação de arquitetura e padrões corporativo
```

