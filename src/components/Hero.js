import Arrow from "@/icons/Arrow";

export default function Hero() {
  return (
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white md:px-40">Developer tools to make your life <span className="bg-gradient-to-r from-pink-600 to-purple-400 inline-block text-transparent bg-clip-text">easier</span></h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-72 dark:text-gray-400">A collection of coding tools designed to simplify developers lives and boost productivity.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#about" class="bg-gradient-to-r from-pink-600 to-purple-400 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Learn more
                </a> 
                <a href="#addtool" class="group inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Add tool
					<Arrow className="w-4 h-4 transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition duration-150 ml-2"/>
                </a>
            </div>
        </div>
    </section>
  );
}
