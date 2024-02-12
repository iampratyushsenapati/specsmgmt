const express = require("express");
const hotel = require("../../models/hotel");
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
    hotel.find()
    .then((hotels) => res.json(hotels))
    .then(() => res.json({OK: "All Hotel route working fine"}))
    .catch((err) => req.status(404).json({noticketsfound: 'MongoDB could not the details'}))
   // res.json({OK: "All hotel route working fine"})
});

//@route GET api/hotels/:id
// @description Get single hotel details by searching for the ID
// @access public
// READ and SEARCH operation
router.get("/:id", (req,res) => {
    hotel.findById(req.params.id)
    .then((hotel) => res.json(hotel))
    .catch((err) => res.status(404).json({ nohotelfound: "Could not find the hotel"}))
    // res.json({
    //     OK:"Get Hotel By Id route is working fine"
    // })
})

// @route GET api/hotels/
// @description Save a new Hotel
// @access public
// CREATE operation

router.post("/", (req,res) => {
    hotel.create(req.body)
    .then((hotel) => res.json( {msg: "A new hotel was created successfully"}))
    .catch((err) => res.status(404).json({ nohotelfound: "Could not create the hotel"}))
    // res.json({
    //     OK:"Create a hotel successfully"
    // })
})

// @route GET api/hotels/:id
// @description Find a new hotels by its ID and update it
// @access public
// Find and UPDATE and SEARCH operation

router.put("/", (req,res) => {
    hotel.findByIdAndUpdate(req.params.id, req.body)
    .then((hotel) => res.json( {msg:"This hotel was updated successfully"}))
    .catch((err) => res.status(400).json({ nohotelfound: "Could not update this hotel"}))
    // res.json({
    //     OK:"Update a hotel successfully"
    // })
})

// @route GET api/hotelss/:id
// @description Find a new hotel by its ID and delete it
// @access public
// FIND and DELETE and SEARCH operation

router.delete("/", (req,res) => {
    hotel.findByIdAndRemove(req.params.id, req.body)
    .then((hotel) => res.json({msg:"This hotel was deleted successfully"}))
    .catch((err) => res.status(404).json({ nohotelfound: "Could not delete this hotel"}))
    // res.json({
    //     OK:"Delete the  hotel successfully"
    // })
})


module.exports = router;
