import express, { Request, Response, NextFunction } from 'express';

// Clothing Model
import Clothing from '../Models/clothing';

// display page functions
export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.clothing.find()
    Clothing.find(function(err, clothingCollection){
        if(err)
        {
            return console.error(err);
        }

        // print the collection to the console
        console.log(clothingCollection);
    });
}
