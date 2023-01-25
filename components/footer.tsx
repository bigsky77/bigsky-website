import Link from "next/link";

const Footer = () => {
  return(
      <div>
      <footer class="fixed bottom-0 left-0 z-20 p-4 w-full bg-gradient-to-r from-purple-700 to-purple900 border-t-2 border-burned-gold shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-burned-gold">
          <span class="text-sm text-soft-white sm:text-center dark:text-gray-400">©BigSky 2023 <a href="https://flowbite.com/" class="hover:underline"></a>
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm text-soft-white dark:text-gray-400 sm:mt-0">
              <li>
              </li>
              <li>
              </li>
              <li>
              </li>
          </ul>
      </footer>
      </div>
  )
}

export default Footer
