/** Не выполнять запросы Supabase с фильтром по id, если значение null/undefined. */
export function isNullish(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}
