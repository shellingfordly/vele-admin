import { resultPageSuccess } from "../_util";
import { MockMethod } from "vite-plugin-mock";
import { Random } from "mockjs";

const list = (() => {
  return new Array(50).fill("").map((_, i) => ({
    id: i,
    date: "@datetime",
    name: "@cname()",
    email: "@email",
    address: "@county(true)",
  }));
})();

const treeList = (() => {
  return new Array(10).fill("").map((_, i) => ({
    id: `${i}`,
    date: "@date('yyyy-MM-dd')",
    name: "@cname()",
    email: "@email",
    address: "@province",
    children: new Array(Math.floor(Math.random() * 20 + 1))
      .fill("")
      .map((_, j) => ({
        id: `${i}-${j}`,
        date: "@date('yyyy-MM-dd')",
        name: "@cname()",
        email: "@email",
        address: "@province",
      })),
  }));
})();

export default [
  {
    url: "/mock-api/table/list",
    timeout: 100,
    method: "get",
    response: ({ query }: any) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, list);
    },
  },
  {
    url: "/mock-api/table/treelist",
    timeout: 100,
    method: "get",
    response: ({ query }: any) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, treeList);
    },
  },
] as MockMethod[];
