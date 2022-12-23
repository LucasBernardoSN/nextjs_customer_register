interface EntradaProps {
  tipo?: 'text' | 'number';
  texto: String;
  valor: any;
  somenteLeitura?: boolean;
  className?: any;
  onChange?: (valor: any) => void;
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className={'mb-2 text-gray-900 text-xl '}>{props.texto}</label>

      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.onChange?.(e.target.value)}
        className={` flex-col
                    border border-gray-700 rounded-lg bg-gray-200 focus:outline-none
                    px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
      />
    </div>
  );
}
