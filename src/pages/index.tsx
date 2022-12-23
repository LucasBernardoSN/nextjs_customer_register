import { useState } from 'react';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Lucas', 24, '2'),
    new Cliente('Jó', 54, '3'),
  ];

  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela');

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
  }

  return (
    <div
      className={` 
            flex justify-center items-center h-screen
            bg-gradient-to-r from-green-500 to-green-600
            text-gray-100
        `}
    >
      <Layout titulo={'Cadastro Simples'}>
        {visivel === 'tabela' ? (
          <>
            <div className={'flex justify-end'}>
              <Botao
                cor={'blue'}
                className={'mb-4'}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
              clientes={clientes}
            />
          </>
        ) : (
          <Formulario cliente={clientes[1]} />
        )}
      </Layout>
    </div>
  );
}
