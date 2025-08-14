# api-node-rocketseat

## Sobre o projeto
Este repositório contém o **Desafio de API em Node.js**, realizado como parte da formação da Rocketseat.  
O projeto foi desenvolvido utilizando **TypeScript** e segue padrões convencionais de organização e boas práticas de desenvolvimento.

## Tecnologias utilizadas
- **Node.js** — ambiente de execução
- **TypeScript** — tipagem estática para maior robustez e manutenção
- **drizzle** — mapeamento e migrações de banco de dados
- **Docker / docker-compose** — execução e consistência entre ambientes
- Outras bibliotecas definidas no `package.json`

## Requisitos
- Node.js (versão recomendada: 18.x)
- Docker e Docker-Compose (opcional, caso utilize contêineres)
- Yarn ou npm

## Instalação e execução

### Com Docker
```bash
docker-compose up -d
# O serviço será iniciado com banco de dados e API
```

## Diagrama de fluxo da aplicação

```mermaid
flowchart TD
    A[Cliente] -->|POST /courses| B[Fastify - Controller de Cursos]
    B -->|Valida dados| C[Service de Cursos]
    C -->|Insere novo curso| D[(Banco de Dados PostgreSQL)]
    D -->|Confirma inserção| E[Resposta: Curso criado]

    A -->|GET /courses| F[Fastify - Controller de Cursos]
    F -->|Solicita lista| G[Service de Cursos]
    G -->|Consulta todos os cursos| D
    D -->|Retorna lista| H[Resposta: Lista de cursos]

    A -->|GET /courses/:id| I[Fastify - Controller de Cursos]
    I -->|Valida ID| J[Service de Cursos]
    J -->|Consulta curso específico| D
    D -->|Retorna curso| K[Resposta: Curso encontrado]
