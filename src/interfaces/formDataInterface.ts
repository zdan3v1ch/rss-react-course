import { InferType } from "yup";
import { schemaControlled } from "../features/validation/schemes";

export type FormData = InferType<typeof schemaControlled>;

export interface IFormData {
  name: string | undefined;
  age: string | undefined;
  email: string | undefined;
  password: string | undefined;
  passwordSecond: string | undefined;
  gender: string | undefined;
  tAndC?: boolean | undefined;
  picture: FileReader | File | string | undefined;
  country: string | undefined;
}
