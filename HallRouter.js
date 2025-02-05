import express from 'express'
import { AllCustomerBookedData, BookRoom, BookedRoomData, CreateRoom, RoomDetail, customerBookingDetails } from './HallController.js';

const router = express.Router()

router.get('/allroomdetails',RoomDetail)
router.post('/createroom', CreateRoom)
router.post('/bookingroom', BookRoom)
router.get('/bookedroomdata', BookedRoomData)
router.get('/allcustomerbookeddata', AllCustomerBookedData)
router.get('/customerbookingcount', customerBookingDetails)

export default router;