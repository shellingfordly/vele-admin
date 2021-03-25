import { Router } from 'vue-router';
import { createPermissionGuard } from './permissionGuard';
import { createScrollGuard } from './scrollGuard'
import { createMessageGuard } from './messageGuard'
import { createHttpGuard } from './httpGuard'
import { createTitleGuard } from './titleGuard'

export default function createGuard(router: Router) {
  createHttpGuard(router)
  createScrollGuard(router)
  createMessageGuard(router)
  createTitleGuard(router)
  createPermissionGuard(router);
}
