import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessKeyUpdateInput = {
  dateOfProcurement?: Date | null;
  expiryDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
