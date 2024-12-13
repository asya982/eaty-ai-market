import dbConnect from '@/lib/dbConnect'
import {
  allergensMock,
  categoriesMock,
  productsMock,
} from '@/lib/seeds/constantData'
import { Allergen, IAllergen } from '@/models/Allergen'
import { Category, ICategory } from '@/models/Category'
import { Product } from '@/models/Product'
import { faker } from '@faker-js/faker'

export async function seedDatabase() {
  await dbConnect()

  await Allergen.deleteMany({})
  await Category.deleteMany({})
  await Product.deleteMany({})

  const allergensFromDb: IAllergen[] = await Allergen.insertMany(allergensMock)
  const categories: ICategory[] = await Category.insertMany(categoriesMock)

  const updatedProducts = productsMock.map(product => ({
    ...product,
    price: faker.commerce.price({ min: 5, max: 50 }),
    quantity: faker.number.int({ min: 10, max: 200 }),
    allergens: allergensFromDb.filter(({ name }) =>
      product.allergens.includes(name),
    ),
    category: categories.find(({ name }) => name === product.category),
  }))

  await Product.insertMany(updatedProducts)

  console.log('Database seeded with data!')
}
