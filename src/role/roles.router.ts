/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import { RolesService } from "./roles.service";


/**
 * Router Definition
 */
export const rolesRouter = express.Router();
const rolesService = new RolesService();


/**
 * Controller Definitions
 */

// GET roles

rolesRouter.get("/", async (req: Request, res: Response) => {

    try {

        const roles = await rolesService.findAll();

        res.status(200).send(roles);
        
    } catch (error: any) {
        console.log(`Error occured when findall role `, error.message);
        res.status(500).send(error.message);
    }
});

// Get roles/:id

rolesRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    
    try {

        const role = await rolesService.findByID(id);

        if (role) {
            return res.status(200).send(role);
        }

        res.status(404).send("role not found");

    } catch (error: any) {
        console.log(`Error occured when findone role `, error.message);
        res.status(500).send(error.message);
    }
});