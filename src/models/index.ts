export type Nullable<T> = T | null;

export enum ConfigFile {
  BundleProduct = 'config.yml',
  DockerCompose = 'docker-compose.yml',
}

export interface BundleProductConfig {
  settings: {
    vasp_code: Nullable<string>;
    license_key: Nullable<string>;
    webhook_url: Nullable<string>;
    jwt_secret: Nullable<string>;
    access_token_expire_sec: Nullable<number>;
    data_encryption_key: Nullable<string>;
    admin_account: Nullable<string>;
    admin_password: Nullable<string>;
    concurrency: Nullable<number>;
  };
  db: {
    driver: Nullable<string>;
    user: Nullable<string>;
    password: Nullable<string>;
    host: Nullable<string>;
    port: Nullable<number>;
    name: Nullable<string>;
  };
  server: {
    host: Nullable<string>;
    port: Nullable<number>;
    enable_rotate_log: boolean;
    enable_cors: boolean;
    allow_origins: string[];
    callback_host: Nullable<string>;
  };
  google_login?: {
    id: Nullable<string>;
    secret: Nullable<string>;
  };
  log_file: {
    file_name: Nullable<string>;
    max_size: Nullable<number>;
    max_backups: Nullable<number>;
    max_age: Nullable<number>;
  };
  email_service: {
    host: Nullable<string>;
    account: Nullable<string>;
    password: Nullable<string>;
    display_name: Nullable<string>;
    subject_prefix: Nullable<string>;
  };
  frontend: {
    url: Nullable<string>;
  };
  trisa_server?: {
    url: Nullable<string>;
    host: Nullable<string>;
    port: Nullable<number>;
    restful_port: Nullable<number>;
  };
  shyft_server?: {
    rpc_url: Nullable<string>;
  };
};


export interface ConfigFormData {
  registration: {
    vaspCode: Nullable<string>;
    apiKey: Nullable<string>;
  },
  server: {
    frontend: {
      scheme: Nullable<string>;
      domainName: Nullable<string>;
      port: Nullable<number>;
    },
    backend: {
      scheme: Nullable<string>;
      domainName: Nullable<string>;
      port: Nullable<number>;
    }
  },
  database: {
    driver: Nullable<string>;
    host: Nullable<string>;
    port: Nullable<number>;
    user: Nullable<string>;
    password: Nullable<string>;
    name: Nullable<string>;
  },
  email: {
    host: Nullable<string>;
    port: Nullable<number>;
    account: Nullable<string>;
    password: Nullable<string>;
    displayName: Nullable<string>;
    subjectPrefix: Nullable<string>;
  },
  security: {
    jwtSecret: Nullable<string>;
    accessTokenExpireSec: Nullable<number>;
    dataEncryptionKey: Nullable<string>;
  },
  admin: {
    account: Nullable<string>;
    password: Nullable<string>;
  },
  advanced: {
    webhookURL: Nullable<string>;
  }
};
