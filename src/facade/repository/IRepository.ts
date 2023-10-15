export interface IRepository<T> {
  findAll(): T[];

  save(record: T): T;
}