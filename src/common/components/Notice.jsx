export const CurrentlyUnderConstruction = ({
  title,
  firstNotice,
  secondNotice,
}) => {
  return (
    <div>
      <div className='flex justify-center items-center m-12'>
        <h1 className='inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-5xl tracking-tight text-transparent'>
          {title}
        </h1>
      </div>
      <p className='flex justify-center items-start text-2xl text-white'>
        {firstNotice || 'This page is currently under construction.'}
      </p>
      <p className='flex justify-center items-start text-2xl text-white'>
        {secondNotice || 'Please check back later.'}
      </p>
    </div>
  )
}
