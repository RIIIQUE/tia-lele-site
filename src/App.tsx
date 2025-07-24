import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Landing Page TIA LELE criada com sucesso!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A landing page está disponível no arquivo <code>index.html</code> na raiz do projeto.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-3">Características incluídas:</h2>
          <ul className="text-left text-sm text-gray-700 space-y-2">
            <li>✅ Design responsivo e profissional</li>
            <li>✅ Cores suaves (amarelo, branco, azul-claro)</li>
            <li>✅ SEO otimizado</li>
            <li>✅ Botão WhatsApp funcional</li>
            <li>✅ Seções informativas completas</li>
            <li>✅ Compatível com GitHub Pages</li>
            <li>✅ Código limpo e encapsulado</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;