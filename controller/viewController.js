const User = require("./../model/userModel");
exports.getOverview = (req, res, next) => {
  //console.log("Hi");
  res.status(200).render("overview");
};

exports.getLogin = (req, res, next) => {
  res.status(200).render("login");
};
exports.getSignup = (req, res, next) => {
  res.status(200).render("signup");
};
exports.updateBlog = (req, res, next) => {
  res.status(200).render("updateblog");
};
exports.getBlog = async (req, res, next) => {
  //const contact = Contact.findOne({ slug });

  res.status(200).render("blog", {
    title: "new Title",
  });
};
