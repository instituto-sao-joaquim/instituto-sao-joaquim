export default function Campaigns({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <span className="text-4xl font-bold text-gray-700 mb-4">🚧 Em Construção</span>
      <p className="text-gray-500 text-lg">
        {message || "Estamos trabalhando para trazer esta página em breve."}
      </p>
    </div>
  );
}
