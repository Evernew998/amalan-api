import { uuid, varchar, timestamp, pgTable, boolean } from 'drizzle-orm/pg-core'

export const habits = pgTable('habits', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull(),
  behavior: varchar('behavior', { length: 100 }).notNull(),
  anchor: varchar('anchor', { length: 100 }).notNull(),
  celebration: varchar('celebration', { length: 100 }).notNull(),
  frequency: varchar('frequency', { length: 20 }).notNull(), // daily, weekly, monthly
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})
