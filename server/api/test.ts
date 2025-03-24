import { consola as logger} from 'consola'

export default defineEventHandler(async (event) => {
  const headers = getRequestHeaders(event)
  const body = await readBody(event)

  logger.log('payload', { headers, body, method: event.method })

  return 'bye'
})
