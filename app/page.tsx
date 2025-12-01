import HomeNav from "@/components/HomeNav";
import Slogan from "@/components/Slogan";
import StartButton from "@/components/StartButton";
import { Button } from "@/components/ui/button";
import { Code, Link } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center text-center">
      <HomeNav />
      <div className="flex flex-col justify-center text-start md:text-center mx-6">
        <section className="md:flex md:justify-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold">划水 AI ，</h2>
          <h2 className="text-4xl lg:text-5xl mt-2 md:mt-0">
            智能写作 高效工作
          </h2>
        </section>
        <Slogan />
        <section className="mt-10 flex justify-center space-x-4">
          <StartButton />
          <Link href="/join-dev">
            <Button variant="secondary" className="text-base" size="lg">
              <Code className="h-4 w-4" />
              &nbsp;加入研发团队
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
