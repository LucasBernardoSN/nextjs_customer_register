export default function Titulo(props) {
  return (
    <div
      className={` 
            flex flex-col justify-center 
        `}
    >
      <h1
        className={` items-center
                px-5 py-2 text-2xl text-gray-900   
            `}
      >
        {props.children}
      </h1>
      <hr className={'border-2 border-green-500'} />
    </div>
  );
}
