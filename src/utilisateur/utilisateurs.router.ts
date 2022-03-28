/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UtilisateursService } from './utilisateurs.service';



/**
 * Router Definition
 */
export const utilisateursRouter = express.Router();
const prisma = new PrismaClient();
const utilisateursService = new UtilisateursService();


/**
 * Controller Definitions
 */

// GET roles

utilisateursRouter.get("/", async (req: Request, res: Response) => {

    try {

        const utilisateurs = await utilisateursService.findAll();

        res.status(200).send(utilisateurs);
        
    } catch (error: any) {
        console.log(`Error occured when findall utilisateur `, error.message);
        res.status(500).send(error.message);
    }
});

// Get roles/:id

utilisateursRouter.get("/:id", async (req: Request, res: Response) => {
    
    const id: number = parseInt(req.params.id, 10);
    
    try {
        
        const utilisateur = await utilisateursService.findByID(id);

        if (utilisateur) {
            return res.status(200).send(utilisateur);
        }

        res.status(404).send(`Utilisateur with ID ${id} does not exist in the database`);

    } catch (error: any) {
        console.log(`Error occured when find utilisateur by id `, error.message);
        res.status(500).send(error.message);
    }
});


// Post utitilisateur

utilisateursRouter.post("/", async (req: Request, res: Response) => {
    
    try {
        
        const utilisateur = await utilisateursService.insert(req.body);

        if (utilisateur) {
            return res.status(201).send(utilisateur);
        }

    } catch (error: any) {
        console.log(`Error occured when create new utilisateur `, error.message);
        res.status(500).send(error.message);
    }
});

// Update utitilisateur

utilisateursRouter.post("/", async (req: Request, res: Response) => {
    
    try {
        
        const utilisateur = await utilisateursService.insert(req.body);

        if (utilisateur) {
            return res.status(201).send(utilisateur);
        }

    } catch (error: any) {
        console.log(`Error occured when create new utilisateur `, error.message);
        res.status(500).send(error.message);
    }
});

// Delete utitilisateur/:id

utilisateursRouter.delete("/:id", async (req: Request, res: Response) => {
    
    try {
        
        const utilisateur = await utilisateursService.insert(req.body);

        if (utilisateur) {
            return res.status(201).send(utilisateur);
        }

    } catch (error: any) {
        console.log(`Error occured when create new utilisateur `, error.message);
        res.status(500).send(error.message);
    }
});