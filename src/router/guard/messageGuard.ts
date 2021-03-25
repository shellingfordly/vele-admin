import type { Router } from 'vue-router';
import projectSetting from '/@/setting/projectSetting';
import {ElNotification, ElMessage,} from 'element-plus'

/**
 * Used to close the message instance when the route is switched
 * @param router
 */
export function createMessageGuard(router: Router) {
  const { closeMessageOnSwitch } = projectSetting;

  router.beforeEach(async () => {
    try {
      if (closeMessageOnSwitch) {
        (ElNotification as any).closeAll() 
        ElMessage.closeAll()
      }
    } catch (error) {
      console.warn('message guard error:' + error);
    }
    return true;
  });
}
