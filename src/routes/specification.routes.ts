import { Request, Response, Router } from "express";
import { CreateSpecificationController } from "../modules/cars/controller/createSpecificationController";
import { SpecificationRepository } from "../modules/cars/repositories/implementation/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/createSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request: Request, response: Response) => {
  const createSpecificationService = new CreateSpecificationService(specificationRepository);
  const createSpecificationController = new CreateSpecificationController(createSpecificationService);

  return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
