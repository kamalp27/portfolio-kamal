import type { ProjectRecord } from '../types';

export const PROJECTS_DATA: ProjectRecord[] = [
  {
    id: 'secure-doc-management',
    title: 'AI-Powered Secure Document Management System',
    categoryLabel: 'Flagship Project &bull; RAG & Security',
    isFlagship: true,
    shortDescription:
      'Document-focused RAG application built with FastAPI, vector retrieval, and role-based access control.',
    problem:
      'Managing collections of documents requires semantic search capabilities while ensuring that access to sensitive documents is restricted according to user roles.',
    approach:
      'Built a document application using Python and FastAPI that indexes documents with embeddings and vector retrieval, generates answers using an LLM, and enforces authorization through JWT and role-based access control (RBAC).',
    technicalHighlights: [
      'Document ingestion and vector indexing support for 1,000+ documents.',
      'Vector retrieval and embeddings for semantic document search.',
      'LLM integration to generate answers grounded in retrieved document context.',
      'JWT authentication and role-based access control with 40+ passing authorization test scenarios.',
    ],
    evaluationMethodology:
      'Evaluated on a 200-question evaluation set measuring retrieval recall, retrieval latency, answer faithfulness, and authorization test scenarios (resume-reported figures).',
    resultsAndMetrics: [
      {
        metric: '87%',
        label: 'Recall@5',
        context: 'Retrieval recall metric on 200-question evaluation set',
        category: 'Retrieval',
        verified: false,
      },
      {
        metric: '< 200 ms',
        label: 'Median Retrieval Latency',
        context: 'Vector retrieval latency (evaluation set)',
        category: 'Retrieval',
        verified: false,
      },
      {
        metric: '85%',
        label: 'Answer Faithfulness',
        context: 'Reported answer faithfulness score',
        category: 'Generation',
        verified: false,
      },
      {
        metric: '40+',
        label: 'Authorization Tests',
        context: 'Passing JWT and RBAC test scenarios',
        category: 'Security',
        verified: false,
      },
      {
        metric: '1,000+',
        label: 'Documents Supported',
        context: 'Document ingestion and indexing capacity',
        category: 'Scale',
        verified: false,
      },
    ],
    projectStatus: 'Resume Reported',
    technologyStack: [
      'Python',
      'FastAPI',
      'RAG',
      'Embeddings',
      'Vector Retrieval',
      'LLMs',
      'JWT / RBAC',
    ],
    githubUrl: undefined, // Repository link not provided
    liveDemoUrl: undefined, // Live demo not available on this portfolio
  },
  {
    id: 'documind-ai',
    title: 'DocuMind AI',
    categoryLabel: 'Full-Stack RAG &bull; Document QA',
    isFlagship: false,
    shortDescription:
      'An AI-powered document question-answering application that uses Retrieval-Augmented Generation (RAG) to help users ask questions about PDF documents and receive grounded answers with page-level citations.',
    problem:
      'Extracting precise information from dense multi-page documents is time-consuming, while general-purpose LLMs can hallucinate unsupported answers without verifiable references.',
    approach:
      'Engineered an end-to-end RAG architecture with a FastAPI backend and React 18/TypeScript frontend. The system extracts and chunks PDF text with PyMuPDF, computes dense vector embeddings using Sentence Transformers, indexes vectors in ChromaDB, and synthesizes grounded answers using Google Gemini with page-level citations and bounded timeout/retry handling.',
    technicalHighlights: [
      'Page-by-page PDF ingestion pipeline validating magic bytes, rejecting scanned/empty files, and preserving 1-indexed page boundaries.',
      'Deterministic text chunking (800 chars, 120 overlap) with dense vector indexing in ChromaDB using all-MiniLM-L6-v2 embeddings.',
      'Document-scoped semantic retrieval calibrated to a 0.85 cosine distance threshold, featuring single-document summary fallback.',
      'Grounded prompt construction isolating untrusted document content inside XML boundary tags to defend against prompt injection.',
      'Resilient Google Gemini (gemini-3.6-flash) integration with 45-second client timeouts, LOW thinking level, and bounded 503/504 retries.',
      'Interactive React UI with slide-in Citation Drawer displaying source document, page numbers, similarity match score, and verbatim excerpt.',
      'Full test automation across 75 backend pytest integration tests and 31 frontend Vitest component tests (100% pass rate).',
    ],
    evaluationMethodology:
      'Verified through automated end-to-end integration tests (75 backend tests, 31 frontend component tests) covering semantic retrieval, threshold calibration, citation mapping, and bounded error recovery.',
    resultsAndMetrics: [
      {
        metric: '106',
        label: 'Automated Tests Passed',
        context: '75 backend (pytest) and 31 frontend (Vitest) tests',
        category: 'Quality',
        verified: true,
      },
      {
        metric: '0.85',
        label: 'Cosine Distance Cutoff',
        context: 'Calibrated relevance threshold for semantic retrieval',
        category: 'Retrieval',
        verified: true,
      },
      {
        metric: '45 s',
        label: 'Client Timeout Budget',
        context: 'Bounded Gemini API deadline with 503/504 retries',
        category: 'Reliability',
        verified: true,
      },
      {
        metric: '384-d',
        label: 'Dense Embeddings',
        context: 'all-MiniLM-L6-v2 sentence transformer vectors',
        category: 'Pipeline',
        verified: true,
      },
      {
        metric: '10 MB',
        label: 'Max File Size',
        context: 'Enforced file size limit with PDF signature validation',
        category: 'System',
        verified: true,
      },
    ],
    projectStatus: 'Completed',
    technologyStack: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Vite',
      'Google Gemini',
      'Sentence Transformers',
      'ChromaDB',
      'RAG',
    ],
    githubUrl: 'https://github.com/kamalp27/documind-ai',
    liveDemoUrl: undefined, // Live demo not available; deployment pending
  },
  {
    id: 'ai-knowledge-base',
    title: 'AI Knowledge Base',
    categoryLabel: 'RAG & Retrieval Evaluation',
    isFlagship: false,
    shortDescription:
      'Document knowledge base using vector retrieval and LLMs with iterative pipeline improvements for response quality.',
    problem:
      'Finding information across document collections can be slow and fragmented, while querying LLMs directly without relevant context can produce unsupported answers.',
    approach:
      'Built a document knowledge base in Python and FastAPI using embeddings, vector retrieval, and LLMs, iteratively refining the pipeline to improve retrieval recall and answer faithfulness.',
    technicalHighlights: [
      'Ingestion support for 1,000+ documents.',
      'Vector embeddings and similarity search for document retrieval.',
      'Iterative pipeline improvements to reduce unsupported answers.',
      'FastAPI backend providing document search and question answering endpoints.',
    ],
    evaluationMethodology:
      'Evaluated on retrieval recall, answer faithfulness, and end-to-end response latency based on resume-reported project tests.',
    resultsAndMetrics: [
      {
        metric: '80%+',
        label: 'Recall@5',
        context: 'Retrieval recall metric on project documents',
        category: 'Retrieval',
        verified: false,
      },
      {
        metric: '80%+',
        label: 'Answer Faithfulness',
        context: 'Reported answer faithfulness score',
        category: 'Generation',
        verified: false,
      },
      {
        metric: '< 2.5 s',
        label: 'Median End-to-End Latency',
        context: 'Query-to-answer response latency',
        category: 'System',
        verified: false,
      },
      {
        metric: '30%+',
        label: 'Reduction in Unsupported Answers',
        context: 'Reported improvement via iterative pipeline refinements',
        category: 'Generation',
        verified: false,
      },
      {
        metric: '1,000+',
        label: 'Documents Ingested',
        context: 'Document ingestion support',
        category: 'Scale',
        verified: false,
      },
    ],
    projectStatus: 'Resume Reported',
    technologyStack: [
      'Python',
      'FastAPI',
      'Embeddings',
      'Vector Retrieval',
      'LLMs',
      'RAG Evaluation',
    ],
    githubUrl: undefined, // Repository link not provided
    liveDemoUrl: undefined, // Live demo not available on this portfolio
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    categoryLabel: 'Full-Stack Web & SQL',
    isFlagship: false,
    shortDescription:
      'Full-stack expense tracking application with REST APIs, SQL database storage, and category-wise tracking.',
    problem:
      'Users need a straightforward way to track daily expenses, organize spending by category, and maintain persistent transaction records.',
    approach:
      'Built a responsive web application with a React user interface and a Node.js/Express backend that handles CRUD operations through REST APIs and stores data in a SQL database.',
    technicalHighlights: [
      'Responsive React user interface for expense tracking and category-wise views.',
      'Node.js and Express.js REST API supporting CRUD operations.',
      'SQL database for persistent data storage.',
      'Category-wise tracking and organization of financial transactions.',
    ],
    evaluationMethodology:
      'Validated through functional CRUD testing and persistent database storage verification.',
    resultsAndMetrics: [
      {
        metric: 'CRUD',
        label: 'Data Operations',
        context: 'CRUD operations supported via REST APIs',
        category: 'System',
        verified: false,
      },
      {
        metric: 'SQL',
        label: 'Database Storage',
        context: 'Persistent database storage',
        category: 'System',
        verified: false,
      },
    ],
    projectStatus: 'Resume Reported',
    technologyStack: [
      'React',
      'Node.js',
      'Express.js',
      'SQL',
      'REST APIs',
    ],
    githubUrl: undefined, // Repository link not provided
    liveDemoUrl: undefined, // Live demo not available on this portfolio
  },
];
