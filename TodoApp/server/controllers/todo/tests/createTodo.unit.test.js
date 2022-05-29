const db = require("../../../models/");
const Todo = db.todo;
const { createTodo } = require("../createTodo");

const mockTodo = {
  title: "ini judul todo",
  description: "ini deskripsi todo",
};

describe("Unit Test Create Todo Function", () => {
  beforeEach(() => {
    Todo.prototype.save = jest.fn().mockImplementation(() => {});
  });

  test("Create Todo: Ideal Input", async () => {
    await expect(createTodo(mockTodo.title, mockTodo.description)).toBeTruthy();
  });

  test("Create Todo: Input Number", async () => {
    await expect(createTodo(4392345, 123123123)).toBeTruthy();
  });

  test("Create Todo: Input Negative Number", async () => {
    await expect(createTodo(-45891385, -123123123)).toBeTruthy();
  });

  test("Create Todo: Input Number and String", async () => {
    await expect(
      createTodo(`MyTitleString${-3454392345}`, `MyDescString${-123123123}`)
    ).toBeTruthy();
  });

  test("Create Todo: Input Emoji", async () => {
    await expect(createTodo("🖥️💻⌨️📀", "🐁🧳🌂☂️")).toBeTruthy();
  });

  test("Create Todo: Input Unicode Symbol", async () => {
    await expect(createTodo("©®", "⎋¥")).toBeTruthy();
  });

  test("Create Todo: Input Non-Alphabet Language Character", async () => {
    await expect(createTodo("جغلَظسشإَ", "きゃひげ")).toBeTruthy();
  });

  test("Create Todo: Input Combine All Character", async () => {
    await expect(createTodo(`MyTitleString${-3454392345}🖥️💻⌨️©®جغلَظسشإَ`, `MyDescString${-123123123}🐁🧳🌂☂️⎋¥きゃひげ`)).toBeTruthy();
  });

  test("Create Todo: Input Extra Long String", async () => {
    await expect(
      createTodo(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt ullamcorper odio ac porta. Donec suscipit ante quis augue lobortis, in rhoncus nunc fringilla",
        "Suspendisse laoreet ullamcorper orci, at semper ipsum euismod sed. Duis vehicula quis lectus non iaculis"
      )
    ).toBeTruthy();
  });

  test("Create Todo: No Title", async () => {
    await expect(createTodo("", mockTodo.description)).rejects.toThrowError();
  });

  test("Create Todo: No Description", async () => {
    await expect(createTodo(mockTodo.title, "")).rejects.toThrowError();
  });

  test("Create Todo: No Title and No Description", async () => {
    await expect(createTodo(mockTodo.title, "")).rejects.toThrowError();
  });

  test("Create Todo: Return Created Doc", async () => {
    const { todo } = await createTodo(mockTodo.title, mockTodo.description);
    expect(todo.title).toBeTruthy()
  });

  test("Create Todo: Return same Todo title", async () => {
    const { todo } = await createTodo(mockTodo.title, mockTodo.description);
    expect(todo.title).toEqual(mockTodo.title);
  });

  test("Create Todo: Return same Todo desc", async () => {
    const { todo } = await createTodo(mockTodo.title, mockTodo.description);
    expect(todo.description).toEqual(mockTodo.description);
  });
});
