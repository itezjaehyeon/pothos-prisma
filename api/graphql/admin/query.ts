import { builder, prisma } from "../../schema";

export const twhoami = builder.queryType({
    fields: (t) => ({
        whoami: t.prismaField({
            nullable: {
                list: true,
                items: true,
            },
            type: ["Admin"],
            resolve: async (src, args) => {
                const admin = await prisma.admin.findMany();
                return admin;
            },
        }),
    }),
});
