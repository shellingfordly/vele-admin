import { Router } from 'vue-router';

import { createPermissionGuard } from './permissionGuard';

export default function createGuard(router: Router) {
  createPermissionGuard(router);
}
