const router = require("express").Router();
const Url = require('../model/urlDB');

router.get("/", (req,res)=>{
    res.send("Hello");
})


router.get("/:url",(req,res)=>{
    console.log("router /s")
    console.log(req.params.url);
    let shorten_url = req.params.url
    console.log(`redirect: ${shorten_url} `);
    if(shorten_url && shorten_url != 'undefined' && shorten_url != null){
        Url.findOne({shortenUrl:shorten_url}).then((results)=>{
            console.log(results.trueUrl);
            res.redirect(results.trueUrl);
        }).catch((err)=>{
            console.log(err);
            res.redirect("/",404);
        })
    }else{
        res.send("shortUrl not find");
    }
});




// module.exports = (req, res) => {

//   console.log( 'redirect:' + req.params.shortenUrl )

//   if( req.params.shortenUrl && req.params.shortenUrl != 'undefined'){

//     Url.findAll({
//       where: { shorten_url: req.params.shortenUrl }
//     })
//     .then( result => {
//       console.log(result[0].true_url)

//       if(result[0].true_url && result[0].true_url !== 'undefined'){
//         res.redirect(result[0].true_url)
//       }

//     })
//     .catch( err => {
//       console.log(err)
//       res.redirect('http://thinkr.tw:3001') //如果有錯誤，跳回首頁。
//     })
//   }

// }


module.exports = router;