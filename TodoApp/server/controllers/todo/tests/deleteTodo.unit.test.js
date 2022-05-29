const db = require("../../../models");
const Todo = db.todo;
const { deleteTodo } = require("../deleteTodo");

const mockId = "123456";
const mockDeletedTodo = {
  title: "ini judul todo update",
  description: "ini deskripsi todo update",
};

describe("Unit Test Delete Todo Function", () => {
  beforeEach(() => {
    Todo.findByIdAndRemove = jest.fn().mockReturnValue(mockDeletedTodo);
  });
  test("Delete Todo: Valid Input", async () => {
    await expect(deleteTodo(mockId)).toBeTruthy();
  });

  test("Delete Todo: No ID", async () => {
    await expect(deleteTodo("")).rejects.toThrowError();
  });

  test("Delete Todo: Return Deleted Document", async () => {
    const { todo } = await deleteTodo(mockId);
    expect(todo).toBeTruthy();
  });

  test("Delete Todo: Same Title for Deleted Document", async () => {
    const { todo } = await deleteTodo(mockId);
    expect(todo.title).toEqual(mockDeletedTodo.title);
  });

  test("Delete Todo: Same Desc for Deleted Document", async () => {
    const { todo } = await deleteTodo(mockId);
    expect(todo.description).toEqual(mockDeletedTodo.description);
  });

  test("Delete Todo: No Document Found", async () => {
    Todo.findByIdAndRemove = jest.fn().mockImplementationOnce(() => {});
    await expect(deleteTodo(mockId)).rejects.toThrowError();
  });
});
