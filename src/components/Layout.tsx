import Titulo from './Titulo';

interface LayoutProps {
  titulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={` 
            flex flex-col w-2/3 px-2 py-1
            bg-white text-gray-800 rounded-md
        `}
    >
      <Titulo>{props.titulo}</Titulo>
      <div className={'p-2'}>{props.children}</div>
    </div>
  );
}
