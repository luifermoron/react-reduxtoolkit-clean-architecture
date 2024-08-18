export default interface IRepository<Entity> {
    getAll(): Promise<Entity[]>;
}