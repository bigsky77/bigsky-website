import Link from "next/link";

const Footer = () => {
  return(
    <div class="pt-96">
    <div class="border-solid border-t-2 border-burned-gold">
      <div class="relative h-10 font-neue text-burned-gold">
        <div class="space-x-1 grid-cols-3 span-10 flex justify-around content-center">
          <Link href="/">
            <h1>home&nbsp;&nbsp;</h1>
          </Link>
          <Link href="https://github.com/bigsky77">
            <h1>software&nbsp;&nbsp;</h1>
          </Link>
          <Link href="https://mobile.twitter.com/BigSky_7">
            <h1>social</h1>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
