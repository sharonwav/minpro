

const CreatorPage: React.FC = () => {
  return (
    <main className="w-full h-screen z-10">
      <section className="m-auto w-full max-w-screen-xl h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 w-full p-4">
          
          <div className="border rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-medium">Event Aktif</span>
              <span className="text-sm text-orange-500">DETAIL</span>
            </div>
            <p className="text-4xl font-bold mt-4">0</p>
            <p className="text-lg text-gray-500">Event</p>
          </div>

          
          <div className="border rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-medium">Event Draf</span>
            </div>
            <p className="text-4xl font-bold mt-4">0</p>
            <p className="text-lg text-gray-500">Event</p>
          </div>

          
          <div className="border rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-medium">Total Transaksi</span>
            </div>
            <p className="text-4xl font-bold mt-4">0</p>
            <p className="text-lg text-gray-500">Transaksi</p>
          </div>

          
          <div className="border rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-medium">Total Tiket Terjual</span>
            </div>
            <p className="text-4xl font-bold mt-4">0</p>
            <p className="text-lg text-gray-500">Tiket</p>
          </div>

    
          <div className="border rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-medium">Total Penjualan</span>
            </div>
            <p className="text-4xl font-bold mt-4">Rp 0</p>
            <p className="text-lg text-gray-500">Penjualan</p>
          </div>


          <div className="border rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-medium">Total Pengunjung</span>
            </div>
            <p className="text-4xl font-bold mt-4">0</p>
            <p className="text-lg text-gray-500">Orang</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CreatorPage
