import type { FastifyRequest, FastifyReply } from 'fastify'
import { GetAuthenticatedUser } from '../../utils/get-authenticated-user.ts'

export function checkUserRole(role: 'student' | 'manager') {
  return async function (request: FastifyRequest, reply: FastifyReply) {
    const user = GetAuthenticatedUser(request)

    if (user.role !== role) {
      return reply.status(401).send()
    }
  }
}
