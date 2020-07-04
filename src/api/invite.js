import request from '../config/request';

// request an invite
export function submitInviteForm(data) {
  return request({
    url: '/prod/fake-auth',
    method: 'post',
    data
  })
}