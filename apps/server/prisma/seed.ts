import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const data = await prisma.user.delete({
    where: {
      email: "son.tran@enouvo.com",
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
