const ScoreBar = (props: turn) => {
  return(
    <div class="flex justify-center">
      <div class="absolute bottom-32 border border-solid border-2 border-magentaVibrant rounded-lg px-32 py-2.5">
        <div class="flex space-x-4">
        <p class="text-gray-900 bg-white hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg font-neue font-2xl px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">Turn: {props.turn}</p>
           <p class="text-gray-900 bg-white hover:border-burned-gold focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg font-neue font-2xl px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">Score</p>
        </div>
      </div>
    </div>
  )
}

export default ScoreBar
