

FILE STRUCTURE:
├── index.js
├── src/
│   ├── server.js
│   ├── api/
│   │   └── v1.js
│   ├── middleware/
│   │   ├── 500.js
│   │   ├── 404.js
│   │   └── model-finder.js
│   ├── pg-models/
│   │   ├── books/
│   │   │   ├── pg-model.js
│   │   │   ├── books-model.js
│   │   │   └── books-schema.sql
│   │   └── pg-model.js
│   └── mongo-models/
│       ├── books/
│       │   ├── pg-model.js
│       │   ├── books-model.js
│       │   └── books-schema.sql
│       ├── memory-model.js
│       └── mongo-model.js
├── public/
└── views/
