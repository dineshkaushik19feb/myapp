import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    console.log(req)
    const movie = await prisma.movie.create({ data: { director: req.body.director,movieName: req.body.movieName,yearReleased: req.body.yearReleased } });
    return res.json(movie);
  }
}