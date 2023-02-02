import { Notify } from 'quasar'

function success(message: string) {
  Notify.create({
    message,
    position: 'bottom-right',
    type: 'positive',
    icon: 'cloud_done',
    group: false,
  });
}

function error(message: string) {
  Notify.create({
    message,
    type: 'negative',
    position: 'bottom-right',
    group: false,
  });
}

export const useNotify = () => {
  return { success, error };
};
