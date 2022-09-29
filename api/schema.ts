import SchemaBuilder from "@pothos/core";
import { Admin, Prisma, PrismaClient, User } from "@prisma/client";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import RelayPlugin from "@pothos/plugin-relay";

export const prisma = new PrismaClient({});

export const builder = new SchemaBuilder<{
    PrismaTypes: PrismaTypes;
}>({
    plugins: [PrismaPlugin, RelayPlugin],
    prisma: {
        client: prisma,
        // defaults to false, uses /// comments from prisma schema as descriptions
        // for object types, relations and exposed fields.
        // descriptions can be omitted by setting description to false
        exposeDescriptions: true, //boolean | { models: boolean, fields: boolean },
        // use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
        filterConnectionTotalCount: true,
        dmmf: Prisma.dmmf,
    },
    relayOptions: {},
});

import "./graphql";
