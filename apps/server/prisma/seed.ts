import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const data = await prisma.user.delete({
    data: {
      name:"ChitrunHuynh",
      email: "huynchitrung020503@gmail.com",
      password:"Hello#world1"
    },
  });

  console.log(data);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
