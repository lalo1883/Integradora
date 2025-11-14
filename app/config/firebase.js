import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Configuración de Firebase desde los archivos de configuración
const firebaseConfig = {
  apiKey: 'AIzaSyDZz0R0qpcgcS7r4wELI7eOharAzpIPRYc',
  authDomain: 'integradora-4c9fc.firebaseapp.com',
  projectId: 'integradora-4c9fc',
  storageBucket: 'integradora-4c9fc.firebasestorage.app',
  messagingSenderId: '470901189568',
  appId: '1:470901189568:android:08494aadd90a30062d7625',
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth
export const auth = getAuth(app);

export default app;

