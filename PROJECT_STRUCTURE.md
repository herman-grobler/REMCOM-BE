# Project Structure for Full-Stack App

## Overview

This setup includes:
- Backend: Node.js with Express, tested by Jest and Supertest
- Frontend: React with Vite, tested by React Testing Library
- Frontend proxies API requests to backend during development

---

## Folder Structure

```
/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   └── routes/
│   │       └── index.js
│   ├── tests/
│   │   └── app.test.js
│   ├── package.json
│   └── jest.config.js
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tests/
│   │   └── App.test.jsx
│   ├── vite.config.js
│   ├── index.html
│   └── package.json
└── README.md
```

---

## Key Points

- **backend/**: Express app, Jest & Supertest test, `src/` for code, `tests/` for tests.
- **frontend/**: Vite+React app, React Testing Library test, `src/` for code, `tests/` for tests.
- **Proxy**: Frontend's `vite.config.js` configures proxy to backend at `/api`.

---

## Placeholder Test Files

- `backend/tests/app.test.js`: Placeholder Jest/Supertest test.
- `frontend/tests/App.test.jsx`: Placeholder React Testing Library test.
