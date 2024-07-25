import { InputJsonValue } from "../../types";
import { AccessKeyCreateNestedManyWithoutUsersInput } from "./AccessKeyCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  accessKeys?: AccessKeyCreateNestedManyWithoutUsersInput;
};
