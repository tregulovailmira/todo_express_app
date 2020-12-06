class Task {
  //отвечает за обновление данных в контейнере, где они хранятся(массив, Map...)
  static async create(values) {
    const { value, isDone, deadline } = values;
    console.log(values);
    const {
      rows: [createdTask],
    } = await Task.client.query(`INSERT INTO tasks(value, is_done, deadline)
    VALUES ('${value}', ${isDone}, '${new Date(
      deadline
    ).toISOString()}') RETURNING value, is_done, deadline`);
    return createdTask;
  }
  static findById(id) {}
  static findAll() {}
  static update(id, values) {}
  static delete(id) {}
}

module.exports = Task;
