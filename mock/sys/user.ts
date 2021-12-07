import { MockMethod } from "vite-plugin-mock";
import {
  resultError,
  resultSuccess,
  getRequestToken,
  requestParams,
} from "../_util";

const userList = [
  {
    id: 1,
    username: "admin",
    token: "user_token_1",
    password: "123456",
  },
  {
    id: 2,
    username: "test",
    token: "user_token_2",
    password: "123456",
  },
];

const loginApi: MockMethod = {
  url: "/mock-api/login",
  timeout: 200,
  method: "post",
  response: ({ body }: any) => {
    const { username, password } = body;
    const checkUser = userList.find(
      (item) => item.username === username && item.password === password
    );
    return resultSuccess(checkUser);
  },
};

const getUserInfoApi: MockMethod = {
  url: "/mock-api/getUserInfo",
  method: "get",
  response: (request: requestParams) => {
    const token = getRequestToken(request);
    if (!token) return resultError("Invalid token");
    const checkUser = userList.find((item) => item.token === token);
    return resultSuccess(checkUser);
  },
};

export default [loginApi, getUserInfoApi];
