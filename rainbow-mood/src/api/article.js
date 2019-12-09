import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/article/list",
    method: "post",
    data
  });
}
