/**
 * Required External Modules and Interfaces
 */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();




/**
 * Service Methods
 */

export class RolesService {

    async findAll(): Promise<any> {
        try {
            return await prisma.role.findMany();
        } catch (err) {
            return err;
        }
    }

   async findByID(id: number): Promise<any> {
       try {
            
            return await prisma.role.findUnique({
                where: {
                    role_id: id
                }
            });
           
        } catch (err) {
            return err;
        }
   }

}