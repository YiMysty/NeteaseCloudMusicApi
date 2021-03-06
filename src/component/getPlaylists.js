import request from 'request'
import { origin, globalOption } from '../config'
import { deepCopy } from '../util'

const getPlaylists = (id, callback) => {
  const option = deepCopy(globalOption)
  const url = `${origin}/api/playlist/detail?id=${id}`
  const method = 'get'
  Object.assign(option, {url, method})
  request(option, (err, res, body) => {
    if(!err && res.statusCode == 200) {
      let info = JSON.parse(body)
      callback && callback(JSON.stringify(info, '', 2))
    } else {
      console.error(err)
    }
  })
}
export { getPlaylists }
