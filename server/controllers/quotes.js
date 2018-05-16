module.exports = ()=>{
    require("../models/quote")();
    return{
        index: (req, res)=>{
            Author.find({}, (err, authors)=>{
                err=err ? console.log("ERROR ALL:", err) & res.json({message: "INDEX ERROR", error: err}): res.json({message: "Success", authors: authors});
            })
        },
        authorQuotes: (req, res)=>{
            var authId = req.params.id
            Author.findById(authId, (err, author)=>{
                err=err ? console.log("ERROR THIS Author", err) & res.json({message: "Author ERROR", error:err}): res.json({message: "Success", quotes: author});
            })
        },
        createAuthor: (req, res)=>{
            newAuthor = new Author({name: req.body.name, quotes: []});
            newAuthor.save((err)=>{
                err =err ? console.log("Create ERROR", err) & res.json({message:"CREATE ERROR", error: err}): res.json({message: "Success"})
            })
        },
        createQuote: (req, res)=>{
            var authId = req.params.id;
            var newQuote = {quote: req.body.quote, votes: 0};
            Author.findByIdAndUpdate(authId, {runValidators: true}, (err, author)=>{
                err =err ? console.log("Create ERROR", err) & res.json({message:"CREATE ERROR", error: err}):author.quotes.push(newQuote),
                author.save(author), res.json({message: "Success"})
            })
        },
        updateAuthor: (req, res)=>{
            var authId = req.params.id;
            Author.findByIdAndUpdate(authId, {name: req.body.name}, {runValidators: true}, (err)=>{
                err=err ? console.log("UPDATE ERROR", err) & res.json({message: "Update Error", error:err}): res.json({message: "Success"});
            })
        },
        updateVote: (req, res)=>{
            var authId = req.params.id;
            var quoteId = req.params.quoteid;
            console.log(quoteId);
            console.log(authId);
            Author.findById(authId, (err, author)=>{
                if(!err){
                    let quote = author.quotes.id(quoteId);
                    console.log(req.body.votes);
                    console.log(quote);
                    quote.votes += req.body.votes;
                    author.save({runValidators: true}, (error, quote) =>{
                        error = error ? console.log("Vote Error", error) & res.json({message: "Error Vote", error:error}): res.json({message: "Success", quote: quote})
                    })
                } else{
                    res.json({message: "Error with Find Author", err:err})
                }
            })
        },
        deleteQuote: (req, res)=>{
            var authId = req.params.id;
            var quoteId = req.params.quoteid;
            console.log(authId);
            console.log(quoteId);
            Author.findById(authId, (err, author)=>{
                if(!err){
                    author.quotes.id(quoteId).remove();
                    author.save((error)=>{
                        error=error ? console.log("Error Delete", error) & res.json({message: "Quote Delete error", error:error}): res.json({message: "Success"})
                    })
                } else{
                    res.json({message: "AuthorFind Error", err: err})
                }
            })
        }
    }
}