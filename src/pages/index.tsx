import Link from "next/link"
import router from "next/router";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    router.push('/login');
}, []);

  return (
    <>
    </>
  );
}
