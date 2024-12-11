import styles from "./page.module.css";

import Image from "next/image";
import { notFound } from "next/navigation";

import { getOneMeal } from "@/lib/meals";

export async function generateMetadata({ params }) {
  const meal = getOneMeal(params.mealId);

  if (!meal) notFound();

  return {
    title: meal.title,
    description: meal.summary,
  };
}

const Meal = ({ params }) => {
  const meal = getOneMeal(params.mealId);

  if (!meal) notFound();

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.slug} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator.email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>{" "}
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default Meal;
