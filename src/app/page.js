'use client'
import { useRouter } from "next/navigation";

const Home = () => {

const router  = useRouter();

  return <section>
    <h1>useRouter</h1>
    <button onClick={() => router.push("about")}>Go to About Page</button>
  </section>
};

export default  Home;

