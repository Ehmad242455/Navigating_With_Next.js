import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href="/About">About</a><br />
      <a href="/login">Login</a>
      <h1>
        This is local page
      </h1>
      
    </main>
  );
}

const step00 = ()=>{
  return(
    <div>
      <h1>
        Hello World This is the beautiful World
      </h1>
    </div>
  )
}
