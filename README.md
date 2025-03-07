# TypeScript Express Template

Um template robusto para aplicações Node.js com Express, fornecendo uma estrutura base com várias funcionalidades essenciais pré-configuradas.

## 🚀 Funcionalidades

- ✅ Setup completo com TypeScript
- 🔒 Middleware de autenticação JWT
- 🔑 Sistema de autorização baseado em roles
- 📊 Métricas com Prometheus
- 🛡️ Configurações de CORS e Helmet para segurança
- 🔍 Sistema robusto de tratamento de erros
- 📝 Logging de requisições
- 🗄️ Integração com Prisma ORM
- 🧪 Testes unitários com Jest

## 📦 Estrutura do Projeto

```
src/
├── config/         # Configurações da aplicação
├── controllers/    # Controladores
├── errors/        # Classes de erro personalizadas
├── middlewares/   # Middlewares da aplicação
├── routes/        # Rotas da API
└── tests/         # Testes unitários
```

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma
- Jest
- Prometheus
- JWT
- Cors
- Helmet
- Zod
- Pino (Logging)

## 🚀 Como Usar

1. Clone o repositório:

```bash
git clone [url-do-repositório]
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

4. Configure as variáveis necessárias no arquivo `.env`:

```
PORT=8080
DATABASE_URL=
JWT_SECRET=
```

5. Execute o projeto:

```bash
npm run dev
```

## 🔍 Endpoints Disponíveis

### Health Check

- `GET /health` - Verifica o status da aplicação

### Métricas

- `GET /metrics` - Retorna métricas do Prometheus

## 🔒 Segurança

O template inclui várias camadas de segurança:

- Autenticação JWT
- CORS configurável
- Headers de segurança com Helmet
- Sistema de autorização baseado em roles
- Sanitização de entradas

## 🧪 Testes

Para executar os testes:

```bash
npm test
```

## 🔄 Tratamento de Erros

O sistema possui classes de erro personalizadas para diferentes cenários:

- `AppError`: Erro base da aplicação
- `HttpErrors`: Erros relacionados a HTTP
- `PrismaErrors`: Erros relacionados ao banco de dados
- `UserErrors`: Erros relacionados a usuários

## 📊 Monitoramento

### Prometheus

O template inclui configuração básica do Prometheus para monitoramento de métricas.

Configuração disponível em `prometheus.yml`:

```yaml
scrape_configs:
  - job_name: "express-app"
    static_configs:
      - targets: ["localhost:8080"]
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
