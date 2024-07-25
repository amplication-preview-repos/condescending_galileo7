import { User } from "../user/User";

export type AccessKey = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateOfProcurement: Date | null;
  expiryDate: Date | null;
  status?: "Option1" | null;
  user?: User | null;
};
