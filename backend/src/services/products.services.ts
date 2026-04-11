import prisma from "../config/prisma";

type ProductType = {
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: boolean;
};
const productCreationService = async (
  data: ProductType,
  admin_id: string,
  category_id: string,
) => {
  return await prisma.product.create({
    data: {
      ...data,
      category: {
        connect: { id: category_id },
      },
      admin: {
        connect: {
          id: admin_id,
        },
      },
    },
  });
};
export { productCreationService };
