import prisma from "../config/prisma";
type CategorDataType = {
  content: string;
  category_slug: string;
};
const categoryCreationService = async (data: CategorDataType) => {
  return await prisma.category.create({
    data,
  });
};
export { categoryCreationService };
