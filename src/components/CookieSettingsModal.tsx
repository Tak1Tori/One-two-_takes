const CookieSettingsModal = ({ close }: { close: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white text-black rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-lg font-bold mb-4">Cookie Einstellungen</h2>

        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" disabled checked />
            Notwendig (immer aktiv)
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Statistik (Google Analytics)
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Marketing (z.B. Meta Pixel)
          </label>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-3 py-1 bg-gray-400 text-white rounded"
            onClick={close}
          >
            Abbrechen
          </button>
          <button
            className="px-3 py-1 bg-green-600 text-white rounded"
            onClick={() => {
              console.log("✅ Einstellungen gespeichert");
              close();
            }}
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsModal;
