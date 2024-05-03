import * as Yup from "yup"

import { User } from "../types/User"

export const UserSchema = Yup
  .object<User>().shape({
    fullName: Yup.string().required("Este campo é obrigatório"),
    document: Yup.string().required("Este campo é obrigatório"),
    birthDate: Yup.date(),
    email: Yup
      .string()
      .email("E-mail não reconhecido")
      .required("Este campo é obrigatório"),
    emailVerified: Yup.boolean().default(false),
    mobile: Yup.string().required("Este campo é obrigatório"),
    zipCode: Yup
      .string()
      .required("Este campo é obrigatório")
      .transform((value) => value.replace(/[^\d]+/g, "")),
    addressName: Yup.string().required("Este campo é obrigatório"),
    number: Yup.string().required("Este campo é obrigatório"),
    complement: Yup.string(),
    neighborhood: Yup.string().required("Este campo é obrigatório"),
    city: Yup.string().required("Este campo é obrigatório"),
    state: Yup.string().required("Este campo é obrigatório"),
  })
  .required()