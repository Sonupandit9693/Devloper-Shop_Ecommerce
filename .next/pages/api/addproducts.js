import Product from "../../models/Product"
import connectDB from "../../middlewear/mongoose"

const handler = async(req, res)=>{
    console.log(req.body)
    if(req.method == 'POST'){
        for(let i = 0; i< req.body.length; i++){
        let p = new Product({
            title: req.body[i].title,
            slug: req.body[i]. slug,
            desc: req.body[i].desc,
            img: req.body[i].img,
            category: req.body[i].category,
            size: req.body[i].size,
            color:req.body[i].color,
            price: req.body[i].price,
            availabelQty: req.body[i].availabelQty
        })

      await p.save()
      res.status(200).json({ sucess:"sucessful" })
    }
    }else{
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDB(handler);