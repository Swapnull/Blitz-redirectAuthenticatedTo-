import { Ctx } from "blitz"
import db from "db"

export default async function getCurrentUser({ test = false }, { session }: Ctx) {
  console.log("isTest", test)

  if (!session.userId) return null
  const user = await db.user.findFirst({
    where: { id: session.userId },
    select: { id: true, name: true, email: true, role: true },
  })

  return user
}
