const express = require("express"); 
//Load hotel model
const Hotel = require("../../models/hotel");
//Handle all the route parameters with ease
const router = express.Router();

router.get('/test', (req,res) => {
    res.send("test api route is working fine");
})

// @route GET api/hotels
// @description Give all the tickets
// @access public
// Read operation
router.get("/",(req,res) => {
    Hotel.find()
        .then((hotels) => res.json(hotels))
        .catch((err) => res.status(404).json({noticketsfound: 'MongoDB could not the details'}))

});

//@route GET api/hotels/:id
// @description Get single hotel details by searching for the ID
// @access public
// READ and SEARCH operation
router.get("/:id", (req,res) => {
    Hotel.findById(req.params.id)
        .then((hotel) => res.json(hotel))
        .catch((err) => res.status(404).json({ nohotelfound: "Could not find the hotel"}));
    // res.json({
    //     OK:"Get Hotel By Id route is working fine"
    // })
});

// @route GET api/hotels/
// @description Save a new Hotel
// @access public
// CREATE operation

router.post("/", (req,res) => {
    Hotel.create(req.body)
        .then((hotel) => res.json( {msg: "A new hotel was created successfully"}))
        .catch((err) => res.status(400).json({ ErrorEvent: "Could not create the hotel"}))
    // res.json({
    //     OK:"Create a hotel successfully"
    // })
})

// @route GET api/hotels/:id
// @description Find a new hotels by its ID and update it
// @access public
// Find and UPDATE and SEARCH operation

router.put("/:id", (req,res) => {
    Hotel.findByIdAndUpdate(req.params.id, req.body)
        .then((hotel) => res.json( {msg:"This hotel was updated successfully"}))
        .catch((err) => res.status(400).json({ error: "Could not update this hotel"}))
    
});

// @route GET api/hotelss/:id
// @description Find a new hotel by its ID and delete it
// @access public
// FIND and DELETE and SEARCH operation

router.delete("/:id", (req,res) => {
    Hotel.findByIdAndDelete(req.params.id, req.body)
        .then((hotel) => res.json({msg:"This hotel was deleted successfully"}))
        .catch((err) => res.status(404).json({ error: "Could not delete this hotel"}))
   
});


module.exports = router;
