module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      body: String,
      author: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Blog = mongoose.model("Blog", schema);
  return Blog;
};
