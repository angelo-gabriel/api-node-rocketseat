import type { FastifyRequest } from 'fastify'

export function GetAuthenticatedUser(request: FastifyRequest) {
  const user = request.user

  if (!user) {
    throw new Error('Invalid authentication')
  }

  return user
}
