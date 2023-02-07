<template>
  <div class="q-pa-md">
    <div class="row items-center">
      <div class="col-6 row q-gutter-sm items-center">
        <q-select
          outlined
          v-model="target"
          :options="targetOptions"
          label="Choose Target File"
          emit-value
          map-options
          style="width: fit-content; display: inline-block"
        />
        <div>
          <q-btn-dropdown color="secondary" label="Action">
            <q-list>
              <q-item clickable v-close-popup @click="onCopy">
                <q-item-section>
                  <q-item-label>Copy</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onExport">
                <q-item-section>
                  <q-item-label>Download</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
      <div class="col-6 q-gutter-sm text-right">
        <q-btn
          color="primary"
          label="Setting"
          @click="isSettingDialogOpen = true"
        />
        <q-btn color="positive" label="Save" @click="onSave" />
        <q-btn color="grey-6" label="Reset" @click="onReset" />
      </div>
    </div>
  </div>
  <q-separator color="primary" inset />
  <div class="q-pa-md">
    <q-form ref="form" @validation-error="onFormError">
      <config-form></config-form>
    </q-form>
  </div>
  <setting-dialog></setting-dialog>
</template>

<script setup lang="ts">
import { useNotify } from 'src/composables/Notify';
import ConfigForm from 'src/components/config/ConfigForm.vue';
import SettingDialog from 'src/components/config/SettingDialog.vue';
import { ConfigFile } from 'src/models';
import { ref, Component, ComputedOptions, MethodOptions } from 'vue';
import { copyToClipboard, exportFile, QForm, LocalStorage } from 'quasar';
import { storeToRefs } from 'pinia';
import { useConfigPageStore } from 'src/stores/pages/config';
import { dump } from 'js-yaml';

const form = ref<QForm>();
const notify = useNotify();

const targetOptions = [
  {
    label: `Bundle Product Config (${ConfigFile.BundleProduct})`,
    value: ConfigFile.BundleProduct
  },
  {
    label: `Docker Compose (${ConfigFile.DockerCompose})`,
    value: ConfigFile.DockerCompose
  }
];

const target = ref(ConfigFile.BundleProduct);
const configPageStore = useConfigPageStore();
const { resetForm } = configPageStore;
const { isSettingDialogOpen, currTab, formData, setting } =
  storeToRefs(configPageStore);

function onFormError(
  ref: Component<any, any, any, ComputedOptions, MethodOptions>
) {
  currTab.value = ref.name?.split('.')[0] || 'registration';
}

async function onExport() {
  const ok = await form?.value?.validate(true);
  if (!ok) {
    return;
  }

  let content = '';
  if (target.value === ConfigFile.BundleProduct) {
    content = getBundleProductConfigContent();
  } else if (target.value === ConfigFile.DockerCompose) {
    content = getDockerConfigContent();
  }
  const result = exportFile(target.value, content);
  if (result !== true) {
    notify.error(result.message);
  }
}

async function onCopy() {
  const ok = await form?.value?.validate(true);
  if (!ok) {
    return;
  }

  let content = '';
  if (target.value === ConfigFile.BundleProduct) {
    content = getBundleProductConfigContent();
  } else if (target.value === ConfigFile.DockerCompose) {
    content = getDockerConfigContent();
  }

  copyToClipboard(content)
    .then(() => notify.success('Copy to clipboard'))
    .catch((err) => notify.error(err));
}

function onSave() {
  LocalStorage.set('savedRecord.formData', formData.value);
  LocalStorage.set('savedRecord.setting', setting.value);
  notify.success('Saved');
}

function onReset() {
  resetForm();
}

function getBundleProductConfigContent() {
  const frontendURL = setting.value.enableWebConsole
    ? `${formData.value.server.frontend.scheme}://${formData.value.server.frontend.domainName}:${formData.value.server.frontend.port}`
    : '';
  const backendURL = `${formData.value.server.backend.scheme}://${formData.value.server.backend.domainName}:${formData.value.server.backend.port}`;
  const configData: Record<string, any> = {
    settings: {
      vasp_code: formData.value.registration.vaspCode,
      license_key: formData.value.registration.apiKey,
      webhook_url: formData.value.advanced.webhookURL,
      jwt_secret: formData.value.security.jwtSecret,
      access_token_expire_sec: formData.value.security.accessTokenExpireSec,
      data_encryption_key: formData.value.security.dataEncryptionKey,
      admin_account: formData.value.admin.account,
      admin_password: formData.value.admin.password,
      concurrency: 100
    },
    db: {
      driver: formData.value.database.driver,
      user: formData.value.database.user,
      password: formData.value.database.password,
      host: formData.value.database.host,
      port: formData.value.database.port,
      name: formData.value.database.name
    },
    server: {
      host: '0.0.0.0',
      port: formData.value.server.backend.port,
      enable_rotate_log: true,
      enable_cors: true,
      allow_origins: [frontendURL],
      callback_host: backendURL
    },
    log_file: {
      file_name: 'temp',
      max_size: 100,
      max_backups: 30,
      max_age: 30
    },
    email_service: {
      host: `${formData.value.email.host}:${formData.value.email.port}`,
      account: formData.value.email.account,
      password: formData.value.email.password,
      display_name: formData.value.email.displayName,
      subject_prefix: formData.value.email.subjectPrefix
    },
    frontend: {
      url: frontendURL
    }
  };
  return dump(configData, {
    forceQuotes: true,
    replacer(key, value) {
      if (value === null) {
        return '';
      }
      return value;
    }
  });
}
function getDockerConfigContent() {
  const backendURL = `${formData.value.server.backend.scheme}://${formData.value.server.backend.domainName}:${formData.value.server.backend.port}`;
  let sygnaImageVersion;
  switch (setting.value.targetEnv) {
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
        ports: [`${formData.value.server.backend.port}:8080`],
        volumes: ['./log:/var/log', './config.yml:/app/config.yml:ro']
      }
    }
  };

  if (setting.value.enableWebConsole) {
    configData.services.frontend = {
      image: `sygna/sygna-hub-console:${sygnaImageVersion}`,
      restart: 'unless-stopped',
      ports: [`${formData.value.server.frontend.port}:80`],
      depends_on: ['backend'],
      environment: [`BACKEND_API_URL=${backendURL}/v1`]
    };
  }

  if (formData.value.database.driver === 'postgres') {
    configData.services.postgres = {
      image: 'postgres:12-alpine',
      restart: 'unless-stopped',
      ports: [`${formData.value.database.port}:5432`],
      environment: [
        `POSTGRES_PASSWORD=${formData.value.database.password}`,
        `POSTGRES_USER=${formData.value.database.user}`,
        `POSTGRES_DB=${formData.value.database.name}`
      ],
      volumes: ['./db:/var/lib/postgresql/data']
    };
  }

  return dump(configData, {
    forceQuotes: true
  });
}
</script>
