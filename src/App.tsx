import Button from './components/Button'
import Card from './components/Card'
import Container from './components/Container'

function App() {
  return (
    <Container className='centerAll gap-11'>
      <MainCard />
      <LeftCard />
      <RightCard />
      <Button text='Post News' />
    </Container>
  )
}

export default App
// https://picsum.photos/200/300

function MainCard({}) {
  return (
    <div className='sm:w-[1000px] sm:h-[600px] relative centerAll mb-32'>
      <img src='https://picsum.photos/1000/600' alt='' className='w-full rounded-xl' />
      <Card className='absolute -bottom-32 w-[90%]'>
        <div className='flex gap-5 mb-2'>
          <img src='https://picsum.photos/50/50' alt='' className='rounded' />
          <div>
            <h1 className='text-high font-bold'>Do consectetur aute et occaecat.</h1>
            <span>8 Nov 2022</span>
          </div>
        </div>
        <p>
          Lorem sit nisi eiusmod excepteur reprehenderit commodo elit sunt laborum dolor deserunt
        </p>
        <MediaIcons />
      </Card>
    </div>
  )
}

function LeftCard({}) {
  return (
    <Card className='relative sm:w-[80%]'>
      <img
        src='https://picsum.photos/1000/600'
        alt=''
        className='shadow-lg h-[70%] w-[170px] sm:h-[80%] sm:w-[300px] rounded-xl absolute left-16 top-1/2 -translate-y-1/2 -translate-x-1/2'
      />
      <div className='ml-36 sm:ml-40'>
        <div className='flex gap-5 mb-2'>
          <img src='https://picsum.photos/50/50' alt='' className='rounded' />
          <div>
            <h1 className='text-high font-bold'>Do consectetur aute et occaecat.</h1>
            <span>8 Nov 2022</span>
          </div>
        </div>
        <p>
          Lorem sit nisi eiusmod excepteur reprehenderit commodo elit sunt laborum dolor deserunt
        </p>
        <MediaIcons />
      </div>
    </Card>
  )
}
function RightCard({}) {
  return (
    <Card className='relative sm:w-[80%]'>
      <img
        src='https://picsum.photos/1000/600'
        alt=''
        className='shadow-lg h-[70%] w-[170px] sm:h-[80%] sm:w-[300px] rounded-xl absolute top-1/2 -right-80 -translate-y-1/2 -translate-x-1/2'
      />
      <div className='mr-36 sm:mr-40'>
        <div className='flex gap-5 mb-2'>
          <img src='https://picsum.photos/50/50' alt='' className='rounded' />
          <div>
            <h1 className='text-high font-bold'>Do consectetur aute et occaecat.</h1>
            <span>8 Nov 2022</span>
          </div>
        </div>
        <p>
          Lorem sit nisi eiusmod excepteur reprehenderit commodo elit sunt laborum dolor deserunt
          non enim exercitation. Fugiat eu tempor aute aliqua commodo ullamco deserunt commodo
          voluptate aliquip fugiat enim. Sunt eiusmod tempor non nisi duis adipisicing dolor do.
        </p>
        <MediaIcons />
      </div>
    </Card>
  )
}

function MediaIcons({}) {
  return (
    <div className='flex mt-3 text-gray-600'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
        />
      </svg>
      <div className='ml-auto flex'>
        <span className='mx-2'>201</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 mr-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
          />
        </svg>
        <span className='mx-2'>5k</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 mr-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
      </div>
    </div>
  )
}