import { Request, Response, Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/createSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;
  const specificationService = new CreateSpecificationService(specificationRepository);

  specificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationRoutes };
