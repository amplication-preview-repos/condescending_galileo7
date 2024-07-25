import { JsonValue } from "type-fest";
import { AccessKey } from "../accessKey/AccessKey";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  accessKeys?: Array<AccessKey>;
};
