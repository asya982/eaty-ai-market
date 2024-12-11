import dbConnect from "@/lib/dbConnect";
import {
  allergensMock,
  categoriesMock,
  productsMock,
} from "@/lib/seeds/constantData";
import { Allergen } from "@/models/Allergen";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import { faker } from "@faker-js/faker";

export async function seedDatabase() {
  await dbConnect();

  await Allergen.deleteMany({});
  await Category.deleteMany({});
  await Product.deleteMany({});

  const allergensFromDb = await Allergen.insertMany(allergensMock);
  const categories = await Category.insertMany(categoriesMock);

  const updatedProducts = productsMock.map((product) => ({
    ...product,
    price: faker.commerce.price({ min: 5, max: 50 }),
    quantity: faker.number.int({ min: 10, max: 200 }),
    img: "",
    allergens: allergensFromDb.filter(({ name }) =>
      product.allergens.includes(name)
    ),
    category: categories.find(({ name }) => name === product.category),
  }));

  await Product.insertMany(updatedProducts);

  console.log("Database seeded with data!");
}
