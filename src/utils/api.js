import service from './service';

// 登录
export function login(data) {
  return service({
    url: `/login`,
    method: "post",
    data
  });
}

// 注册
export function register(data) {
  return service({
    url: `/register`,
    method: "post",
    data
  })
}

// 密码重置
export function resetPwd(data) {
  return service({
    url: `/resetPwd`,
    method: "post",
    data
  })
}

// 任务列表
export function queryTaskList(params) {
  return service({
    url: `/queryTaskList`,
    method: "get",
    params
  })
}

// 添加任务
export function addTask(data) {
  return service({
    url: `/addTask`,
    method: "post",
    data
  })
}

// 编辑任务
export function editTask(data) {
  return service({
    url: `/editTask`,
    method: "put",
    data
  })
}

// 操作任务状态
export function updateTaskStatus(data) {
  return service({
    url: `/updateTaskStatus`,
    method: "put",
    data
  })
}

// 点亮红星标记
export function updateMark(data) {
  return service({
    url: `/updateMark`,
    method: "put",
    data
  })
}

// 删除任务
export function deleteTask(data) {
  return service({
    url: `/deleteTask`,
    method: "delete",
    data
  })
}