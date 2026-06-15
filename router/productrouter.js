import express from 'express'
import { addproduct, deleteproduct, getall, getById, update } from '../controller/productcontroller.js';
import { User } from '../middleware/user.js';


const router = express.Router();

router.post('/add',User , addproduct);
router.get('/get/:id', User ,getById);
router.get('/getall',User , getall);

router.put('/update/:id', update);
router.delete('/delete/:id', deleteproduct);



export default router ;