// module.exports = mongoose => {
//   const Todo = mongoose.model(
//     'todo',
//     mongoose.Schema(
//       {
//         title: String,
//         description: String
//       },
//       { timestamps: true}
//     )
//   )
// };

module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      title: String,
      description: String,
    },
    { timestamps: true }
  );
  schema.method("toJSON", function() {
    const {__v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Todo = mongoose.model('todo', schema);
  return Todo;
}
