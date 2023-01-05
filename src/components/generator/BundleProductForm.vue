<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 100%">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-primary">
          <q-tab name="registrationInfo" label="Registration Info" />
          <q-tab name="server" label="Server Info" />
          <q-tab name="database" label="Database" />
          <q-tab name="email" label="Email" />
          <q-tab name="security" label="Security" />
          <q-tab name="admin" label="Administrator" />
          <q-tab name="advanced" label="Advanced" />
        </q-tabs>
      </template>
      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="registrationInfo">
            <div class="text-h4 q-mb-md">Registration Info</div>
            <p>註冊成功後收到的信件內容 可以直接填這</p>
            <ul>
              <li>Vasp code</li>
              <li>api key (license_key)</li>
            </ul>
          </q-tab-panel>

          <q-tab-panel name="server">
            <div class="text-h4 q-mb-md">Server Info</div>
            <p>
              主要判斷前後端是否為不同 domain，或是同一domain但是不同
              port，以此產生對應資訊
            </p>
            <ul>
              <li>allow_origins</li>
              <li>callback_host</li>
              <li>frontend.url</li>
              <li>enable_cors</li>
            </ul>
          </q-tab-panel>

          <q-tab-panel name="database">
            <div class="text-h4 q-mb-md">Database</div>
            <p>設定您的資料庫</p>
            <ul>
              <li>driver</li>
              <li>host</li>
              <li>port</li>
              <li>user</li>
              <li>password</li>
              <li>db name</li>
            </ul>
          </q-tab-panel>
          <q-tab-panel name="email">
            <div class="text-h4 q-mb-md">Email</div>
            <p>設定您的發信伺服器</p>
            <ul>
              <li>host</li>
              <li>port</li>
              <li>account</li>
              <li>password</li>
              <li>name</li>
            </ul>
          </q-tab-panel>
          <q-tab-panel name="security">
            <div class="text-h4 q-mb-md">Security</div>
            <p>安全性相關設定</p>
            <ul>
              <li>jwt_secret</li>
              <li>access_token_expire_sec</li>
              <li>data_encryption_key</li>
            </ul>
          </q-tab-panel>
          <q-tab-panel name="admin">
            <div class="text-h4 q-mb-md">Administrator</div>
            <p>初始管理員帳號</p>
            <ul>
              <li>admin_account</li>
              <li>admin_password</li>
            </ul>
          </q-tab-panel>
          <q-tab-panel name="advanced">
            <div class="text-h4 q-mb-md">Advanced</div>
            <p>比較進階的設定</p>
            <ul>
              <li>webhook_url</li>
            </ul>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      tab: ref('mails'),
      splitterModel: ref(20)
    };
  }
};
</script>
