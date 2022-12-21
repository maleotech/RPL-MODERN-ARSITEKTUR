const { ObjectID } = require("bson");
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "test";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err, client) => {
  if (err) {
    return console.log("Connection failed");
  }
  console.log("Connection success");

  // choose database
  const db = client.db(dbName);

  // Add 1 data to collection
  //   db.collection("blog").insertOne(
  //     {
  //       title: "Express JS and REST API",
  //       body: "Backend Programming",
  //       author: "messi",
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Failed to add data");
  //       }
  //       console.log(result);
  //     }
  //   );

  // Add many more than 1 data
  //   db.collection("blog").insertMany(
  //     [
  //       {
  //         title: "API Request",
  //         body: "The blog is about how to do API Request",
  //         author: "cristiano",
  //       },
  //       {
  //         title: "Intro to JSX",
  //         body: "Blog ini menjelaskan mengenai apa itu React JSX",
  //         author: "cristiano",
  //       },
  //     ],
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Failed to added the data");
  //       }
  //       console.log(result);
  //     }
  //   );

  // show the data in blog collections'
  //   console.log(
  //     db
  //       .collection("blog")
  //       .find()
  //       .toArray((err, result) => {
  //         console.log(result);
  //       })
  //   );

  //   show the specific data on blog collections
  //   console.log(
  //     db
  //       .collection("blog")
  //       .find({ _id: ObjectID("63a2c4aa09522ef62a57c6dd") })
  //       .toArray((err, result) => {
  //         console.log(result);
  //       })
  //   );

  //   update data
  //   const updatePromise = db.collection("blog").updateOne(
  //     {
  //       _id: ObjectID("63a2c4aa09522ef62a57c6dd"),
  //     },
  //     {
  //       $set: {
  //         author: "cristiano",
  //       },
  //     }
  //   );

  //   updatePromise
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // delete one data
  //   db.collection("blog")
  //     .deleteOne({
  //       _id: ObjectID("63a2c4aa09522ef62a57c6dd"),
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // delete many data
  db.collection("blog")
    .deleteOne({
      author: "cristiano",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
