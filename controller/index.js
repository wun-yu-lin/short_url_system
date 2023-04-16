
const { ReturnDocument } = require("mongodb");
const Url = require("../model/urlDB");
const router = require("express").Router();

//function
async function confirmUsable(digits){ // <== 上面的匿名函式 用 cb 代入參考

    let urlCode = await makeRandom(digits); //隨機產生亂數Key
    console.log(urlCode);
    const urlExist = await Url.findOne({shortenUrl:urlCode});
    console.log(urlExist);
    if (!urlExist){
        //無url 就執行cd function
        return(urlCode)
    } else {
        //透過遞迴來重複執行 confirmUsable 直到沒有撞key
        return confirmUsable(digits);
    }
  }
  
// 隨機取得由大小寫及數字組成的亂數
function makeRandom( digits ){

let text = "";
let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for (let i = 0; i < digits; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

return text;

}



//index API
router.get("/", (req,res)=>{
    console.log("in index page")
    res.render("index"); 
});

router.get("/getShortenUrl", (req,res) =>{
    res.render("index2"); 
    res.status(200).render("index2");
})


//shortenUrl API
router.post("/", async (req,res)=>{
    //check Url 是否在資料庫中有重複
        let urlCode = await confirmUsable(6);
        console.log(urlCode);
        //確認 database沒有此 urlCode 之後開始存入ＤＢ當中
        let newUrl = new Url({
            shortenUrl:urlCode,
            trueUrl:req.body.trueUrl
        });
        console.log("starting create new shortenUrl to DB");
        try {
            await newUrl.save();
            console.log("Sucessful save to DB.")
            res.send(urlCode);
        } catch (error) {
            console.log(error);
            res.send("製作失敗");
        }
    

});





  module.exports = router;