import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Routes } from "@/enums/routes";
import { AccordionSection } from "@/components/landing/accordion";
import { verifySession } from "@/lib/services/sessions";

export default async function Home() {
  const { isAuth, name } = await verifySession()
  return (
    <section>
      <section className="bg-transparent h-[80vh] flex items-center">
        <div className="bg-[url('@/assets/landing.jpg')] bg-no-repeat bg-cover h-[100vh] w-full -z-10 absolute top-0 left-0"></div>
        <aside className="bg-black/40 w-1/3 rounded-md text-white p-3 text-center ml-10 flex flex-col items-center gap-3">
          <h1 className="font-playfair font-bold mb-2 text-2xl">
            Welcome to Eaty – Your Personal Shopping Assistant
          </h1>
          <p>
            At <b>Eaty</b>, we revolutionize your online grocery shopping
            experience with a personalized, seamless, and intelligent approach.
            With our AI-powered chatbot, finding the perfect products has never
            been easier.
          </p>
          <div className="flex gap-4 justify-evenly w-full">
            {isAuth ? <p>Welcome back, {name}</p> : <><Button
              as={Link}
              href={Routes.LOG_IN}
              color="warning"
              variant="bordered"
            >
              Log in
            </Button>
              <Button
                as={Link}
                href={Routes.SIGN_UP}
                color="warning"
                variant="bordered"
              >
                Sign up
              </Button></>}
          </div>
        </aside>
      </section>
      <AccordionSection />
    </section>
  );
}
