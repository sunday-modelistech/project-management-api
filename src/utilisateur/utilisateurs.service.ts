/**
 * Required External Modules and Interfaces
 */
import { PrismaClient } from "@prisma/client";
import { RolesService } from "../role/roles.service";


const rolesService = new RolesService();
const prisma = new PrismaClient();


/**
 * Service Methods
 */

export class UtilisateursService {

    async findAll(): Promise<any> {
        
        try {
            return await prisma.utilisateur
                                .findMany()
                                .then(async (result: any) => {
                                    if (result) {
                                        for (let id = 0; id < result.length; id++) {
                                            let data = result[id];
                                            const role = await rolesService.findByID(data.code_role);
                                            data.code_role = role;
                                        }
                                    }
                                    return result;
                                });
        } catch (err) {
            return err;
        }
    }

   async findByID(id: number): Promise<any> {
        
        try {
            
            return await prisma.utilisateur.findUnique({
                                                where: {
                                                    utilisateur_id: id
                                                }
                                            });
           
        } catch (err) {
            return err;
        }
    }
    
    async insert(body: any): Promise<any> {
        
        try {
            return await prisma.utilisateur.create({ data: body });
        } catch (err) {
            return err;
        }
    }

}