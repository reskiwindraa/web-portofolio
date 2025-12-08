import DataImage from "./data";
import { useState } from "react";
import { HiArrowDownTray, HiEnvelope } from "react-icons/hi2";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 w-fit p-1 hover:scale-105 transition-all hover:bg-violet-900 rounded-[10px]">
            <div className="flex items-center bg-zinc-800 p-4 rounded-lg">
              <img
                src={DataImage.HeroImage}
                alt="Hero Image"
                className="w-10 rounded-md"
              />
              <q className="text-white ml-4 ">
                Kode yang indah, lahir dari ketekunan.:)
              </q>
            </div>
          </div>

          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Jhon Thor</h1>
          <p className="text-base/loose font-mono ">
            Seorang UI/UX dan Frontend Developer dengan fokus pada pengembangan
            antarmuka mobile banking yang modern, intuitif, dan berorientasi
            pada pengalaman pengguna. Berpengalaman dalam membuat ilustrasi
            interface, mengembangkan prototype, serta melakukan penyempurnaan
            alur dan tampilan aplikasi agar lebih efisien dan mudah digunakan.
            Memiliki ketertarikan pada desain sistem, konsistensi visual, dan
            peningkatan kualitas produk melalui detail-detail kecil yang
            berdampak besar.
          </p>
          <div className="flex items-center gap-4 text-center mt-4">
            <a
              href="#"
              className="flex items-center gap-2 pl-6 pr-6 bg-violet-900 p-3 rounded-full hover:scale-102 transition hover:bg-violet-500 duration-200 erase-in-out transform"
            >
              <span>Download CV</span>
              <HiArrowDownTray />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 pl-6 pr-6 border-2 border-violet-900 p-3 rounded-full hover:scale-102 transition hover:border-violet-500 duration-200 erase-in-out transform"
            >
              <span>Contact</span>
              <HiEnvelope />
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 mx-auto p-7 bg-zinc-800 rounded-lg">
          <p className="text-base/loose">
            Seorang UI/UX dan Frontend Developer yang fokus bikin tampilan
            mobile banking jadi lebih modern, simple, dan nyaman dipakai. Udah
            biasa ngerjain prototype, sampai nge-improve flow dan tampilan biar
            aplikasi makin efisien dan gampang dipahami. Suka banget sama design
            system, konsistensi visual, dan detail-detail kecil yang bikin
            kualitas produk naik level.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45 <span className="text-violet-500">+</span>
                </h1>
                <p>Projek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tentang */}
    </>
  );
}

export default App;
