const db = require("../../../models");
const Todo = db.todo;
const { updateTodo } = require("../updateTodo");

const mockId = "123456";
const mockUpdateTodo = {
  title: "ini judul todo update",
  description: "ini deskripsi todo update",
};

describe("Unit Test Update Todo Function", () => {
  beforeEach(() => {
    Todo.findByIdAndUpdate = jest.fn().mockReturnValue(mockUpdateTodo);
  })
  test("Update Todo: Valid Input", async () => {
    await expect(updateTodo(mockId, mockUpdateTodo)).toBeTruthy();
  });

  test("Update Todo: No Id", async () => {
    await expect(updateTodo("", mockUpdateTodo)).rejects.toThrowError();
  });

  test("Update Todo: No Input on Update Field", async () => {
    await expect(updateTodo(mockId, "")).rejects.toThrowError();
  });

  test("Update Todo: No ID and No Input on Update Field", async () => {
    await expect(updateTodo("", "")).rejects.toThrowError();
  });

  test("Update Todo: Return Found Document", async () => {
    const {todo} = await updateTodo(mockId, mockUpdateTodo)
    expect(todo).toBeTruthy()
  });

  test("Update Todo: Found Document Title equal", async () => {
    const {todo} = await updateTodo(mockId, mockUpdateTodo)
    expect(todo.title).toEqual(mockUpdateTodo.title)
  });

  test("Update Todo: Found Document Description equal", async () => {
    const {todo} = await updateTodo(mockId, mockUpdateTodo)
    expect(todo.description).toEqual(mockUpdateTodo.description)
  });

  test("Update Todo: No Document Found", async () => {
    Todo.findByIdAndUpdate = jest.fn().mockImplementationOnce(() => {});
    await expect(updateTodo(mockId, mockUpdateTodo)).rejects.toThrowError();
  });

  test("Update Todo: No Input, No Document Found", async () => {
    Todo.findByIdAndUpdate = jest.fn().mockImplementationOnce(() => {});
    await expect(updateTodo(mockId, mockUpdateTodo)).rejects.toThrowError();
  });
});
