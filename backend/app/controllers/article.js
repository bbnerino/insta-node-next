const Article = require("../models/article");

exports.create = (req, res) => {
  console.log(req.body.data);
  if (!req.body.data) {
    res.status(400).send({ message: "데이터 형식이 틀렸습니다." });
  }
  const { title, content, userGuid } = req.body.data;
  const newPost = new Article({ title, content, userGuid });
  newPost.save((err, data) => {
    if (err) {
      res.status(500).send({ message: "정보가 없습니다." });
    } else {
      console.log(data);
      res.status(201).send({ message: `${title} 글이 등록 되었습니다.` });
    }
  });
};

