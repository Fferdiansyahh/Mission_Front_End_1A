export default function NotifModul() {
  return (
    <>
      <div className="absolute right-[-0px] mt-12 w-90 z-50  max-sm:right-[-53px]">
        <div className="relative bg-white border border-white shadow-xl rounded-xl p-6">
          <div className="absolute -top-[9px] right-[30px]  max-sm:right-[57px] w-4 h-4 bg-white rotate-45 border-t border-r border-white shadow -z-10"></div>
          <h1 className="font-semibold text-lg mb-2">
            25% Modul Telah Selesai
          </h1>
          <hr className="mb-3" />
          <p className="text-base text-gray-500 mb-4 leading-relaxed">
            Selesaikan Semua Modul Untuk Mendapatkan Sertifikat
          </p>
          <button
            disabled
            className="w-full bg-gray-200 text-gray-400 py-2 rounded-md font-semibold text-sm cursor-not-allowed"
          >
            Ambil Sertifikat
          </button>
        </div>
      </div>
    </>
  );
}
