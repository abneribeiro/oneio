import { db } from '../index';
import { usersTable } from '../db/schema'
import { eq } from 'drizzle-orm';

export const UserRepository = {
    async findByEmail(email: string) {
        return await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1)
    },

    async create(user: { name: string; email: string; password: string }) {
        const [created] = await db.insert(usersTable).values(user).returning();
        return created;
    },

    async updatedByID(id: number, user: { name: string; email?: string; password?: string }) {
        return await db.update(usersTable).set({
            updated_at: new Date(),
            ...user,
        })
        .where(eq(usersTable.id, id))
    },

    async deleledByID(id: number) {
        return await db.delete(usersTable).where(eq(usersTable.id, id));
    }
}


