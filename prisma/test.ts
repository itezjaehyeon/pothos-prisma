import { config } from "dotenv";
import { Prisma, PrismaClient } from "@prisma/client";
import { L, S } from "../api/fp";
import { builder } from "../api/schema";
import { FieldRef, findSync } from "@prisma/client/runtime";

config();

const prisma = new PrismaClient();

const ctx = {
    prisma,
};
export type PrismaObjectFieldBuilder<Types extends SchemaTypes, ParentShape> = PothosSchemaTypes.ObjectFieldBuilder<
    Types,
    ParentShape
>;
export interface SchemaTypes extends PothosSchemaTypes.UserSchemaTypes {
    outputShapes: {
        String: unknown;
        ID: unknown;
        Int: unknown;
        Float: unknown;
        Boolean: unknown;
    };
    inputShapes: {
        String: unknown;
        ID: unknown;
        Int: unknown;
        Float: unknown;
        Boolean: unknown;
    };
    Objects: {};
    Interfaces: {};
    Scalars: {
        String: { Input: unknown; Output: unknown };
        ID: { Input: unknown; Output: unknown };
        Int: { Input: unknown; Output: unknown };
        Float: { Input: unknown; Output: unknown };
        Boolean: { Input: unknown; Output: unknown };
    };
    DefaultFieldNullability: boolean;
    DefaultInputFieldRequiredness: boolean;
    Root: object;
    Context: object;
}

export const getModel = (object: Prisma.DMMF.Model) => {
    const a = S.pipe(
        object.fields,
        L.map((v) => {
            if (v.kind === "scalar") {
                let data = `t.expose${v.type}("${v.name}")`;
                return [v.name, data] as [string, string];
            }
        }),
        L.compact,
        S.fromEntries
    );

    return a;
};
const template = `export const t{MODEL} = builder.prismaObject("{MODEL}", {
    fields: (t) => ({DATA}),
});`;
import { writeFileSync } from "fs";
const main = async () => {
    let objectText = "";
    S.pipe(
        Prisma.dmmf.datamodel.models,
        S.each((v) => {
            const a = getModel(v);
            const data = template.replace(/{MODEL}/g, v.name).replace("{DATA}", JSON.stringify(a));
            objectText += data + "\n";
        })
    );
    writeFileSync("text.ts", objectText);
};
main()
    .catch((e) => console.log(e))
    .finally(async () => {
        await prisma.$disconnect();
        process.exit(0);
    });
