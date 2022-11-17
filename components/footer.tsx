import Link from "next/link";

const Footer = () => {
  return(
      <div>
      <footer class="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <span class="text-sm text-gray-500 sm:text-center text-neue dark:text-gray-400">2022 <a href="https://flowbite.com/" class="hover:underline">BigSky</a>
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="#" class="mr-4 hover:underline md:mr-6 ">docs</a>
              </li>
              <li>
                  <a href="#" class="mr-4 hover:underline md:mr-6">social</a>
              </li>
              <li>
                  <a href="#" class="hover:underline">dev</a>
              </li>
          </ul>
      </footer>
      </div>
  )
}

export default Footer
