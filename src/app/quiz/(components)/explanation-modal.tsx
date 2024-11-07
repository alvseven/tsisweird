type ExplanationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  explanation: string;
};

export function ExplanationModal({
  isOpen,
  onClose,
  explanation,
}: ExplanationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
           {" "}
      <div className="bg-[#1a1f3d] rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
                <h3 className="text-xl font-bold mb-4">Explanation</h3>       {" "}
        <p className="text-sm mb-4">{explanation}</p>       {" "}
        <button
          onClick={onClose}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
                    Close        {" "}
        </button>
             {" "}
      </div>
         {" "}
    </div>
  );
}
