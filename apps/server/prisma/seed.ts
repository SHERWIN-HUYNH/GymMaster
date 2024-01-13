import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const data = await prisma.user.create({
    data: {
      name:"ChitrunHuynh",
      email: "huynchitrung@gmail.com",
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
