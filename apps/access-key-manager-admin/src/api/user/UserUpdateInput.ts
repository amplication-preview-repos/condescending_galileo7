import { InputJsonValue } from "../../types";
import { AccessKeyUpdateManyWithoutUsersInput } from "./AccessKeyUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  accessKeys?: AccessKeyUpdateManyWithoutUsersInput;
};
