import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type clothing controller
import { DisplayClothingListPage } from '../Controllers/clothing';

// Display the Clothing-List Page
router.get('/', DisplayClothingListPage);