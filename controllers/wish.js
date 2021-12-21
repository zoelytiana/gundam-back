const Wish = require("../models/wish");
const { ObjectId } = require('mongodb');


module.exports.getWishes = (req, res) => {
    console.log('param', req.params)
  Wish.findOne({ userId: req.params.userId }).populate('wishDetail').
    exec(function (err, wish) {
    if (err) return handleError(err);
    console.log('The wish detail is %s', wish.wishDetail.productName);
    // prints "The author is Ian Fleming"
    res.json(wish);
  });
};

module.exports.getOneWish = (req, res) => {
    console.log('param', req.params)
    Wish.findOne({ _id: req.params.id }).then((wish) => {
    res.status(200).json(wish);
  });
};

module.exports.deleteWish = (req, res) => {
  Wish.deleteOne({ _id: req.params.id }).then((wish) => {
    res.status(200).json(wish);
  });
};
module.exports.postWish = (req, res, next) => {
    console.log("object")
  const AddWish = new Wish({
    userId: req.body.userId,
    wishDetail: req.body.wishDetail
  });
  AddWish.save().then(() => {
    res.status(201).json({
      data: AddWish,
      message: "Wish saved",
    });
  });
};

module.exports.putWish = (req, res, next) => {
    console.log('object', req.body);
    console.log('userid', req.params.userId );
    Wish.findOne({ userId: req.params.userId }).then((wish) => {
        const wD = wish.wishDetail;
        wD.push(req.body.wishDetail);
        console.log('wD', wD);
        /*const wishData = new Wish({
            _id : wish._id,
            wishDetail: wD
        });*/
        //console.log('wishData', wishData);
        //Wish.updateOne({userId: req.params.userId}, wishData).then(
            Wish.updateOne({userId: req.params.userId}, {$addToSet: { wishDetail: wD}}).then(  
          () => {
            res.status(201).json({
                data : wD,
              message: 'Wish updated successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
    });
}


module.exports.removeWish = (req, res, next) => {
  console.log('req', req.body);
  console.log('param userid', req.params.userId );
  console.log('wishdetail _id', req.body._id)
  Wish.findOne({ userId: req.params.userId }).then((wish) => {

    const wD = [];
    console.log('wD', wD)
    wish.wishDetail.map((wish, index)=>{
      
      console.log('wish._id', wish._id.toString() )
          if (wish._id.toString() === req.body._id){
            console.log('supprimé', req.body._id)
            //wD.split(index,1)
          }else{
            wD.push(wish);
          }
    })
    console.log('wD', wD);
        Wish.updateOne({userId: req.params.userId}, {$set: { wishDetail: wD}}).then(  
              () => {
                res.status(201).json({
                    data : wD,
                  message: 'Wish updated successfully!'
                });
              }
            ).catch(
              (error) => {
                res.status(400).json({
                  error: error
                });
              }
            );
  })
    
};

module.exports.existWish = (req, res) => {
  console.log('param', req.params)
  console.log('body', req.body)
  const wId = ObjectId(req.body.wish);
  console.log('The wish detail is wId', wId);
  // find all documents named john and at least 18
Wish.find({ userId: req.params.userId , wishDetail: { $in : wId}}).then(
  (wish) => {
    console.log('The wish req is %s', req.body);
    console.log('The wish detail is %s', wish);
    // prints "The author is Ian Fleming"
    if(wish.length===0){
      res.status(200).json(false);
    }else{
      res.status(200).json(true);
    }
    
  }).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    });
  
/*  Wish.findOne({ _id: req.params.id }).then((wish) => {
  res.status(200).json(wish);
});*/
};