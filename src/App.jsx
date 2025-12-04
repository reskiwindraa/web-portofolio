import DataImage from "./data";
import { useState } from "react";
import { HiArrowDownTray, HiEnvelope } from "react-icons/hi2";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="hero grid grid-cols-2 mb-200">
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
          <div className="flex items-center gap-4 text-center">
            <a
              href="#"
              className="flex items-center gap-2 pl-6 pr-6 bg-violet-900 p-3 rounded-full hover:scale-102 transition hover:bg-violet-700 duration-200 erase-in-out transform"
            >
              <span>Download CV</span>
              <HiArrowDownTray />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 pl-6 pr-6 border-2 border-violet-900 p-3 rounded-full hover:scale-102 transition hover:border-violet-700 duration-200 erase-in-out transform"
            >
              <span>Contact</span>
              <HiEnvelope />
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] ml-auto"
        />
      </div>
    </>
  );
}

export default App;
