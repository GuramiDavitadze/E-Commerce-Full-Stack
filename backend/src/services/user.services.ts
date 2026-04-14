import prisma from "../config/prisma";
type UpdateUserType = {
  fullname?: string;
  image?: string;
  isActive?: boolean;
};
const updateUserService = async (id:string,data:UpdateUserType) => {
    return await prisma.user.update({
        where: { id },
        data
    })
}
export {updateUserService}