import { UserInfoModel } from '/@/types/user'

import {
  TOKEN_KEY,
  USER_INFO_KEY,
} from '/@/enums/cacheEnum';

interface CacheState {
  [TOKEN_KEY]: string | number | null | undefined;
  [USER_INFO_KEY]: UserInfoModel;
}

export type CacheModel = keyof CacheState