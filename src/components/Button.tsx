export default function Button({ text }: { text: string }) {
  return (
    <button
      type='button'
      className='fixed bottom-5 right-20 min-w-[200px] min-h-[50px] text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2'>
      {text}
    </button>
  )
}
