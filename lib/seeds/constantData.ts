import { TProducts } from '@/types/products'

export const productsMock: Array<
  Partial<Omit<TProducts, 'category' | 'allergens'>> & {
    category: string
    allergens: string[]
  }
> = [
  {
    name: 'Organic Gala Apples',
    description:
      'Crisp and sweet organic gala apples, perfect for snacking or baking.',
    category: 'Fruits & Vegetables',
    allergens: [],
    price: 3.2,
    img: 'https://i.pinimg.com/736x/1a/33/32/1a333264566404cda9974a7f4a37307a.jpg',
  },
  {
    name: 'Almond Milk',
    description:
      'Plant-based milk alternative made from almonds. Dairy-free and gluten-free.',
    category: 'Dairy Products',
    allergens: ['Tree Nuts'],
    img: 'https://i.pinimg.com/736x/32/e1/29/32e1299d4694d9d89a5c6f5b514585f7.jpg',
  },
  {
    name: 'Whole Wheat Bread',
    description: 'Nutritious whole wheat bread with no added preservatives.',
    category: 'Bakery & Bread',
    allergens: ['Gluten'],
    img: 'https://i.pinimg.com/736x/fe/05/a8/fe05a8428596dddcb50e83c90247aaae.jpg',
  },
  {
    name: 'Fresh Atlantic Salmon',
    description: 'Fresh and sustainably sourced Atlantic salmon fillets.',
    category: 'Seafood',
    allergens: ['Fish'],
    img: 'https://i.pinimg.com/736x/fa/3b/5f/fa3b5f1b7879b14c856af4c68b3a9df7.jpg',
  },
  {
    name: 'Salted Potato Chips',
    description: 'Classic salted potato chips, perfect for snacks or parties.',
    category: 'Snacks & Beverages',
    allergens: [],
    img: 'https://i.pinimg.com/736x/a1/72/6a/a1726ad759464e05d04565abcb04d714.jpg',
  },
  {
    name: 'Organic Baby Spinach',
    description:
      'Fresh and crisp organic baby spinach leaves for salads or cooking.',
    category: 'Fruits & Vegetables',
    allergens: [],
    img: 'https://i.pinimg.com/736x/85/ef/39/85ef3906ae7e6f85790f6a34303f3e83.jpg',
  },
  {
    name: 'Greek Yogurt',
    description:
      'Creamy and thick Greek yogurt, perfect as a snack or in recipes.',
    category: 'Dairy Products',
    allergens: ['Dairy'],
    img: 'https://i.pinimg.com/736x/6f/03/26/6f032620ccfe110f663131b3de7cda6c.jpg',
  },
  {
    name: 'Chocolate Chip Cookies',
    description: 'Classic chocolate chip cookies baked fresh daily.',
    category: 'Bakery & Bread',
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    img: 'https://i.pinimg.com/736x/d7/f9/ce/d7f9ce95198deb22ad3495f8b7009321.jpg',
  },
  {
    name: 'Raw Shrimp',
    description:
      'Peeled and deveined raw shrimp for a variety of seafood dishes.',
    category: 'Seafood',
    allergens: ['Shellfish'],
    img: 'https://i.pinimg.com/736x/f0/f7/4e/f0f74ed80fe06e4eb7a37d3823e95bfd.jpg',
  },
  {
    name: 'Sparkling Water',
    description: 'Refreshing and bubbly sparkling water with no added sugars.',
    category: 'Snacks & Beverages',
    allergens: [],
    img: 'https://i.pinimg.com/736x/2e/cf/54/2ecf541b0fc8a0b7129aa6218cec45ff.jpg',
  },
  {
    name: 'Avocado',
    description:
      'Creamy and ripe avocados, perfect for toast, salads, or guacamole.',
    category: 'Fruits & Vegetables',
    allergens: [],
    img: 'https://i.pinimg.com/736x/96/77/88/96778825efafa4e196585f6a3d50cb17.jpg',
  },
  {
    name: 'Cheddar Cheese',
    description:
      'Rich and flavorful cheddar cheese, great for sandwiches or cooking.',
    category: 'Dairy Products',
    allergens: ['Dairy'],
    img: 'https://i.pinimg.com/736x/8f/58/c3/8f58c32f37371278ebd3c6f19268efa4.jpg',
  },
  {
    name: 'Butter Croissants',
    description: 'Flaky and buttery croissants, freshly baked each morning.',
    category: 'Bakery & Bread',
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    img: 'https://i.pinimg.com/736x/67/30/f1/6730f184e9b5be9f40bf678d7f4569ff.jpg',
  },
  {
    name: 'Tilapia Fillets',
    description:
      'Fresh and mild tilapia fillets, ideal for grilling or frying.',
    category: 'Seafood',
    allergens: ['Fish'],
    img: 'https://i.pinimg.com/736x/91/61/4b/91614bb7f639b800aaab5d543096f0c8.jpg',
  },
  {
    name: 'Trail Mix',
    description:
      'A blend of nuts, dried fruit, and chocolate for a healthy snack.',
    category: 'Snacks & Beverages',
    allergens: ['Tree Nuts'],
    img: 'https://i.pinimg.com/736x/96/df/5b/96df5bb6f97bd687fc64161524af84ca.jpg',
  },
  {
    name: 'Carrots',
    description: 'Crunchy and fresh carrots, perfect for snacking or cooking.',
    category: 'Fruits & Vegetables',
    allergens: [],
    img: 'https://i.pinimg.com/736x/61/5a/ed/615aed2fdb69ee189bc08224d1e5a2da.jpg',
  },
  {
    name: 'Mozzarella Cheese',
    description:
      'Soft and mild mozzarella cheese, ideal for pizzas and salads.',
    category: 'Dairy Products',
    allergens: ['Dairy'],
    img: 'https://i.pinimg.com/736x/6d/6e/c9/6d6ec9354ad5a92ab0cccdd6c49820ce.jpg',
  },
  {
    name: 'Banana Bread',
    description:
      'Moist and flavorful banana bread, baked fresh with ripe bananas.',
    category: 'Bakery & Bread',
    allergens: ['Gluten', 'Eggs'],
    img: 'https://i.pinimg.com/736x/13/a8/13/13a81390bdea014c4cfb8c54ac9ff65b.jpg',
  },
  {
    name: 'Crab Legs',
    description:
      'Sweet and succulent crab legs, ready to be steamed or grilled.',
    category: 'Seafood',
    allergens: ['Shellfish'],
    img: 'https://i.pinimg.com/736x/92/fe/9e/92fe9e2a033b505d98afccfa9967edc6.jpg',
  },
  {
    name: 'Granola Bars',
    description:
      'Chewy granola bars with nuts and dried fruit for on-the-go snacking.',
    category: 'Snacks & Beverages',
    allergens: ['Tree Nuts', 'Gluten'],
    img: 'https://i.pinimg.com/736x/ac/76/3c/ac763c44552f80955492febd2860b378.jpg',
  },
  {
    name: 'Red Bell Peppers',
    description:
      'Sweet and vibrant red bell peppers, great for roasting or salads.',
    category: 'Fruits & Vegetables',
    allergens: [],
    img: 'https://i.pinimg.com/736x/0b/bb/57/0bbb578fe0e88e251a5d7aecd0af3167.jpg',
  },
  {
    name: 'Sour Cream',
    description:
      'Rich and tangy sour cream, perfect for dips and baked potatoes.',
    category: 'Dairy Products',
    allergens: ['Dairy'],
    img: 'https://i.pinimg.com/736x/a8/82/33/a88233f39e7b5089b040fc96e90b620c.jpg',
  },
  {
    name: 'Baguette',
    description:
      'Crispy and crusty French baguette, ideal for sandwiches or sides.',
    category: 'Bakery & Bread',
    allergens: ['Gluten'],
    img: 'https://i.pinimg.com/736x/f7/2e/e8/f72ee8db08a4c4dfd475a1f020e4e5c6.jpg',
  },
  {
    name: 'Lobster Tails',
    description:
      'Tender and juicy lobster tails, ready to be grilled or steamed.',
    category: 'Seafood',
    allergens: ['Shellfish'],
    img: 'https://i.pinimg.com/736x/5d/9c/9c/5d9c9cc3dfc0c5da9c083e4506665f81.jpg',
  },
  {
    name: 'Pretzels',
    description:
      'Savory and crunchy pretzels, perfect for dipping or snacking.',
    category: 'Snacks & Beverages',
    allergens: ['Gluten'],
    img: 'https://i.pinimg.com/736x/44/8a/d2/448ad28a830d3b73d78a31c61b0472ca.jpg',
  },
  {
    name: 'Cucumber',
    description: 'Cool and crisp cucumbers, perfect for salads or pickling.',
    category: 'Fruits & Vegetables',
    allergens: [],
    img: 'https://i.pinimg.com/736x/7a/ab/a0/7aaba05da785b41e9b3dfbfba7ad3bf2.jpg',
  },
  {
    name: 'Parmesan Cheese',
    description:
      'Nutty and salty Parmesan cheese, perfect for pasta and salads.',
    category: 'Dairy Products',
    allergens: ['Dairy'],
    img: 'https://i.pinimg.com/736x/0b/ee/1d/0bee1dbddd3edf74ee142d2a1f2016b3.jpg',
  },
  {
    name: 'Blueberry Muffins',
    description: 'Soft and moist blueberry muffins with a crumbly top.',
    category: 'Bakery & Bread',
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    img: 'https://i.pinimg.com/736x/99/39/a3/9939a3de3e6dc40f82482b8ef3d8ab97.jpg',
  },
  {
    name: 'Scallops',
    description:
      'Sweet and tender scallops, ideal for pan-searing or grilling.',
    category: 'Seafood',
    allergens: ['Shellfish'],
    img: 'https://i.pinimg.com/736x/9c/71/e1/9c71e1e25497e7f9399c188e1e4f79f1.jpg',
  },
  {
    name: 'Chips and Salsa',
    description: 'Crispy tortilla chips served with fresh and spicy salsa.',
    category: 'Snacks & Beverages',
    allergens: [],
    img: 'https://i.pinimg.com/736x/00/66/bc/0066bc65ac5f0527b677c492f587e9b6.jpg',
  },
  {
    name: 'Broccoli',
    description: 'Fresh broccoli florets, ideal for steaming or stir-fries.',
    category: 'Fruits & Vegetables',
    allergens: [],
    img: 'https://i.pinimg.com/736x/48/4d/35/484d355d9472b5c3618c03e2937f5a6a.jpg',
  },
  {
    name: 'Cream Cheese',
    description:
      'Smooth and creamy cheese spread, perfect for bagels and desserts.',
    category: 'Dairy Products',
    allergens: ['Dairy'],
    img: 'https://i.pinimg.com/736x/f3/49/5c/f3495caf90aead07c426a14ae62e3462.jpg',
  },
  {
    name: 'Cinnamon Rolls',
    description: 'Soft cinnamon rolls topped with a sweet cream cheese glaze.',
    category: 'Bakery & Bread',
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    img: 'https://i.pinimg.com/736x/6a/82/45/6a8245e77322a44f88d890aea8948c7d.jpg',
  },
  {
    name: 'Crab Cakes',
    description:
      'Delicious crab cakes made with fresh crab meat and seasonings.',
    category: 'Seafood',
    allergens: ['Shellfish', 'Eggs'],
    img: 'https://i.pinimg.com/736x/b1/76/c2/b176c2fdeb7bdafaa1cebf9195c11709.jpg',
  },
  {
    name: 'Fruit Juice',
    description: 'Natural and refreshing fruit juice with no added sugars.',
    category: 'Snacks & Beverages',
    allergens: [],
    img: 'https://i.pinimg.com/736x/e7/fd/41/e7fd413f9eb0f1425c39aafb25843068.jpg',
  },
]

export const allergensMock = [
  { name: 'Peanuts' },
  { name: 'Dairy' },
  {
    name: 'Gluten',
  },
  { name: 'Soy' },
  { name: 'Shellfish' },
  {
    name: 'Eggs',
  },
  {
    name: 'Tree Nuts',
  },
]

export const categoriesMock = [
  { name: 'Fruits & Vegetables', icon: '🥦' },
  { name: 'Dairy Products', icon: '🧀' },
  { name: 'Bakery & Bread', icon: '🍞' },
  { name: 'Seafood', icon: '🦞' },
  { name: 'Snacks & Beverages', icon: '🥤' },
]
