export const API_BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE == 'remote'
    ? import.meta.env.VITE_BACKEND_SERVER + 'api/'
    : 'http://localhost:8888/api/';
export const BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? import.meta.env.VITE_BACKEND_SERVER
    : 'http://localhost:8888/';
export const DOWNLOAD_BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? import.meta.env.VITE_BACKEND_SERVER + 'download/'
    : 'http://localhost:8888/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';
