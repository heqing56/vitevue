import Mock from "mockjs";

// 登录
Mock.mock(/\/getAdminList/, "get", (options) => {
  const body = JSON.parse(options.body);
  let pageSize=body.pageSize
  let num = "list|" + pageSize;

 let list = Mock.mock({
    [num]: [
      {
        name: "@cname",
        "age|18-28": 0,
        sex: "@boolean",
        date: '@datetime("yyyy-MM-dd")',
        addrName: "@province()-@city()-@county()",
        addr: ["11", "1101", "110101"],
        id: "@id",
      },
    ],
  });
  list.pageSize=body.pageSize
  list.currentPage=body.currentPage
  list.total=121
  return {
    code: 1,
    message: "获取成功",
    data: list,
  };
});
