# OneIO Backend

This is the backend for the OneIO project. It includes authentication, database schema, and API routes.

## Project Structure

- `src/`: Contains the main source code.
  - `controllers/`: Handles HTTP requests.
  - `services/`: Business logic.
  - `repositories/`: Database interactions.
  - `routes/`: API route definitions.
  - `schemas/`: Validation schemas.
- `drizzle/`: Database migrations and configuration.
- `.env`: Environment variables (not included in version control).

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Run tests:
   ```bash
   pnpm test
   ```