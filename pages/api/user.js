import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    const user = await prisma.user.create({ data: { email: req.body.email,name: req.body.name,mobile: req.body.mobile,password:req.body.password } });
    return res.json(user);
  }
}