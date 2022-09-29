import { PrismaObjectFieldBuilder } from "@pothos/plugin-prisma/dts/prisma-field-builder";
import { Prisma } from "@prisma/client";
import { getModel } from "../../../prisma/test";
import { builder } from "../../schema";

export const tAdmin = builder.prismaObject("Admin", {
    fields: (t) => ({
        id: t.exposeInt("id"),
        loginId: t.exposeString("loginId"),
        state: t.model,
    }),
});
export const tUser = builder.prismaObject("User", {
    fields: (t) => ({
        id: t.exposeString("id"),
        phone: t.exposeString("phone"),
        // joinedAt: t.exposeDateTime("joinedAt"),
        agreeMarketing: t.exposeBoolean("agreeMarketing"),
    }),
});
