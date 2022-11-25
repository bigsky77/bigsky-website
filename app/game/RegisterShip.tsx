import Grid from '../../components/grid'

const RegisterShip = (props) => {

  const submitShip = () => {
      props.updateRegister(true);
    }

  return(
    <div>
    <form class="flex justify-center">   
    <div class="relative w-1/4 absolute top-80 z-10">
        <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-magentaVibrant rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-magentaVibrant dark:bg-gray-700 dark:border-magentaVibrant dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0x123..." required/>
        <button type="submit" onClick={submitShip} class="text-white absolute right-2.5 bottom-2.5 bg-magentaVibrant hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-magentaVibrant dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register Ship</button>
    </div>
   </form>
    <Grid/>
   </div>
)
}

export default RegisterShip
