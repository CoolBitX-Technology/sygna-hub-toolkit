import { defineStore } from 'pinia';
import { ConfigFormData } from 'src/models';
import { generatePassword, randomInRange } from 'src/utils';
import { LocalStorage } from 'quasar'

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

const defaultSetting: Setting = {
  targetEnv: 'prod',
  enableWebConsole: true,
  enableTRISA: false,
  enableShyft: false,
}

const defaultFormData: ConfigFormData = {
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
    jwtSecret: generatePassword(randomInRange(12, 20), true),
    accessTokenExpireSec: 3600,
    dataEncryptionKey: generatePassword(32, false),
  },
  admin: {
    account: null,
    password: null,
  },
  advanced: {
    webhookURL: null,
  }
}

export const useConfigPageStore = defineStore('config-page', {
  state: (): State => ({
    isSettingDialogOpen: false,
    setting: LocalStorage.getItem('savedRecord.setting') || defaultSetting,
    currTab: 'registration',
    formData: LocalStorage.getItem('savedRecord.formData') || defaultFormData
  }),
  getters: {

  },
  actions: {
    resetForm() {
      this.setting = defaultSetting;
      this.formData = defaultFormData;
    }
  },
});
