declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

interface ImportMeta {
  env: {
    VITE_APP_FIREBASE_API_KEY: string;
    VITE_APP_FIREBASE_AUTH_DOMAIN: string;
    VITE_APP_FIREBASE_PROJECT_ID: string;
    VITE_APP_FIREBASE_STORAGE_BUCKET: string;
    VITE_APP_FIREBASE_MESSAGING_SENDER_ID: string;
    VITE_APP_FIREBASE_APP_ID: string;
    VITE_APP_FIREBASE_MEASUREMENT_ID: string;
  };
}
