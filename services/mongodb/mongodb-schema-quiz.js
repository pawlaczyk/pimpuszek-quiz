import mongoose from "mongoose";

const notionQuizzSchema = new mongoose.Schema({
  lessonName: String,
  lessonId: String,
  notionDatabaseId: String,
  notionDatabaseUrl: String,
  columns: [
    {
      type: String,
    },
  ],
  //   https://www.mongodb.com/community/forums/t/can-a-reference-field-in-a-mongoose-schema-pertain-to-more-than-one-data-model/153708
  data: [{ type: mongoose.Schema.Types.Mixed }],
  //   dołożyć daty created i modified
  //   email właściciela wuizu
  emailOwner: { type: String },
  // TODO dołożyć tagi do quizu
  // tags: [
  //   {
  //     type: String,
  //   },
  // ],
});

// BUG error - OverwriteModelError: Cannot overwrite `NotionQuizzes` model once compiled.
// const NotionQuizzModel = mongoose.model("NotionQuizzes", notionQuizzSchema);
// export default NotionQuizzModel;

// https://stackoverflow.com/a/43761258
// export const NotionQuizzModel =
//   mongoose.models.NotionQuizzes ||
//   mongoose.model("NotionQuizzes", notionQuizzSchema);

// https://stackoverflow.com/questions/71197230/user-create-is-not-a-function-mongodb
module.exports =
  mongoose.models.NotionQuizzes ||
  mongoose.model("NotionQuizzes", notionQuizzSchema);
