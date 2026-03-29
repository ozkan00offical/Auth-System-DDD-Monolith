import * as repo from "../../infrastructure/userRepo.ts";
import { logger } from "../../../../shared/lib/logger.ts";
import { ErrorException } from "../../../../shared/lib/error-exception.ts";
import type { User } from "../../domain/types.ts";

export const findAllUsers = async (): Promise<User[]> => {
  try {
    logger.info("User FindAll: start");

    const users = await repo.findAll();
    if (!users.length) throw ErrorException("No users found", 404);

    logger.info("User FindAll: success");
    return users;
  } catch (err) {
    logger.error("User FindAll: error");
    throw err;
  }
};