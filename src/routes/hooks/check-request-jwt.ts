import type { FastifyRequest, FastifyReply } from 'fastify'
import jwt from 'jsonwebtoken'

export async function checkRequestJWT(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const token = request.headers.authorization

  if (!token) {
    return reply.status(401).send()
  }

  if (!process.env.JWT_SECRET) {
    throw new Error('JWT Secret must be set')
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    console.log(payload)
  } catch (error) {
    return reply.status(401).send()
  }
}
