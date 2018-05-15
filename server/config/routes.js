var path = require("path");
module.exports = (app)=>{
    var controller = require("../controllers/quotes")();
    app.get("/authors", (req, res)=>{
        controller.index(req, res);
    })
    app.get("/author/:id", (req, res)=>{
        controller.authorQuotes(req, res);
    })
    app.post("/author", (req, res)=>{
        controller.createAuthor(req, res);
    })
    app.put("/quote/:id", (req, res)=>{
        controller.createQuote(req, res);
    })
    app.put("/author/edit/:id", (req, res)=>{
        controller.updateAuthor(req, res);
    })
    app.put("/vote/:id/:quoteid", (req, res)=>{
        controller.updateVote(req, res);
    })
    app.delete("/quote/:id/:quoteid", (req, res)=>{
        controller.deleteQuote(req, res);
    })
    // below app.all defaults to Angular Front-end routes after checking Server Back-end routes
    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}