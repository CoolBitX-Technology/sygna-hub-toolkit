import { dump } from 'js-yaml';
import { defineStore } from 'pinia';
import { ConfigFormData, Nullable } from 'src/models';

interface Setting {
  targetEnv: string,
  enableWebConsole: boolean,
  enableTRISA: boolean,
  enableShyft: boolean,
}

interface State {
  isSettingDialogOpen: boolean;
  setting: Setting;
  currTab: string;
  formData: ConfigFormData;
}

export const useConfigPageStore = defineStore('config-page', {
  state: (): State => ({
    isSettingDialogOpen: false,
    setting: {
      targetEnv: 'prod',
      enableWebConsole: true,
      enableTRISA: false,
      enableShyft: false,
    },
    currTab: 'registration',
    formData: {
      registration: {
        vaspCode: null,
        apiKey: null,
      },
      server: {
        frontend: {
          scheme: 'http',
          domainName: 'localhost',
          port: 8000,
        },
        backend: {
          scheme: 'http',
          domainName: 'localhost',
          port: 8080,
        }
      },
      database: {
        driver: 'postgres',
        host: 'localhost',
        port: 5432,
        user: 'admin',
        password: 'p@ssWord0',
        name: 'db'
      },
      email: {
        host: null,
        port: null,
        account: null,
        password: null,
        displayName: null,
        subjectPrefix: null,
      },
      security: {
        jwtSecret: 'p@ssWord0',
        accessTokenExpireSec: 3600,
        dataEncryptionKey: null,
      },
      admin: {
        account: null,
        password: null,
      },
      advanced: {
        webhookURL: null,
      }
    }
  }),
  getters: {
    bundleProductConfigContent(state) {
      const { formData, setting } = state;
      const frontendURL = setting.enableWebConsole ? `${formData.server.frontend.scheme}://${formData.server.frontend.domainName}:${formData.server.frontend.port}` : '';
      const backendURL = `${formData.server.backend.scheme}://${formData.server.backend.domainName}:${formData.server.backend.port}`;
      const configData: Record<string, any> = {
        settings: {
          vasp_code: formData.registration.vaspCode,
          license_key: formData.registration.apiKey,
          webhook_url: formData.advanced.webhookURL,
          jwt_secret: formData.security.jwtSecret,
          access_token_expire_sec: formData.security.accessTokenExpireSec,
          data_encryption_key: formData.security.dataEncryptionKey,
          admin_account: formData.admin.account,
          admin_password: formData.admin.password,
          concurrency: 100
        },
        db: {
          driver: formData.database.driver,
          user: formData.database.user,
          password: formData.database.password,
          host: formData.database.host,
          port: formData.database.port,
          name: formData.database.name
        },
        server: {
          host: '0.0.0.0',
          port: formData.server.backend.port,
          enable_rotate_log: true,
          enable_cors: true,
          allow_origins: [frontendURL],
          callback_host: backendURL
        },
        google_login: {
          id: '',
          secret: ''
        },
        log_file: {
          file_name: 'temp',
          max_size: 100,
          max_backups: 30,
          max_age: 30
        },
        email_service: {
          host: `${formData.email.host}:${formData.email.port}`,
          account: formData.email.account,
          password: formData.email.password,
          display_name: formData.email.displayName,
          subject_prefix: formData.email.subjectPrefix
        },
        frontend: {
          url: frontendURL
        }
      };
      return dump(configData);
    },
    dockerConfigContent(state) {
      const { formData, setting } = state;
      const backendURL = `${formData.server.backend.scheme}://${formData.server.backend.domainName}:${formData.server.backend.port}`;
      let sygnaImageVersion;
      switch (setting.targetEnv) {
        case 'prod':
          sygnaImageVersion = 'latest';
          break;
        case 'test':
          sygnaImageVersion = 'latest-beta';
          break;
        default:
          sygnaImageVersion = '';
      }
      const configData: Record<string, any> = {
        version: '2.1',
        services: {
          backend: {
            image: `sygna/sygna-hub:${sygnaImageVersion}`,
            restart: 'unless-stopped',
            ports: [`${formData.server.backend.port}:8080`],
            volumes: [
              "./log:/var/log",
              "./config.yml:/app/config.yml:ro",
            ]
          }
        },
      };

      if (setting.enableWebConsole) {
        configData.services.frontend = {
          image: `sygna/sygna-hub-console:${sygnaImageVersion}`,
          restart: 'unless-stopped',
          ports: [`${formData.server.frontend.port}:80`],
          depends_on: ['backend'],
          environment: [
            `BACKEND_API_URL=${backendURL}/v1`
          ]
        }
      }

      if (formData.database.driver === 'postgres') {
        configData.services.postgres = {
          image: 'postgres:12-alpine',
          restart: 'unless-stopped',
          ports: [`${formData.database.port}:5432`],
          environment: [
            `POSTGRES_PASSWORD=${formData.database.password}`,
            `POSTGRES_USER=${formData.database.user}`,
            `POSTGRES_DB=${formData.database.name}`,
          ],
          volumes: [
            "./db:/var/lib/postgresql/data"
          ]
        }
      }

      return dump(configData);
    }
  },
  actions: {
  },
});
