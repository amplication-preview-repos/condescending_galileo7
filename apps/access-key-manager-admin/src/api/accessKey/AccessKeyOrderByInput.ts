import { SortOrder } from "../../util/SortOrder";

export type AccessKeyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateOfProcurement?: SortOrder;
  expiryDate?: SortOrder;
  status?: SortOrder;
  userId?: SortOrder;
};
