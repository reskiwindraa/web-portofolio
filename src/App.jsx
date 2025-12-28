import DataImage from "./data";
// import { useState } from "react";
import { HiArrowDownTray, HiEnvelope,  HiArrowRight   } from "react-icons/hi2";
import { listTools, listProyek } from "./data";

function App() {
  // const [count, setCount] = useState(0);
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
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose">
            Seorang UI/UX dan Frontend Developer yang fokus bikin tampilan
            mobile banking jadi lebih modern, simple, dan nyaman dipakai. Udah
            biasa ngerjain prototype, sampai nge-improve flow dan tampilan biar
            aplikasi makin efisien dan gampang dipahami. Suka banget sama design
            system, konsistensi visual, dan detail-detail kecil yang bikin
            kualitas produk naik level.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
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

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang di pakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
            Berikut ini beberapa tools yang saya pakai untuk membuat website dan
            design
          </p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 [perspective:1000px]">
            {listTools.map((tool) => (
              
              <div
                key={tool.id}
                className=" group flex items-center gap-2 p-4 border border-neutral-700 rounded-2xl
               bg-zinc-900 hover:bg-zinc-800
               transition-transform duration-200 ease-out will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();

                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  const rotateX = ((y - centerY) / centerY) * -10;
                  const rotateY = ((x - centerX) / centerX) * 10;

                  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "rotateX(0deg) rotateY(0deg)";
                }}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14  p-1
                 transition-transform duration-200
                 group-hover:scale-110"
                  style={{ transform: "translateZ(25px)" }}
                />

                <div style={{ transform: "translateZ(15px)" }}>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="text-neutral-400">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* tentang */}

      {/* proyek */}
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
        <p className="text-base/loose text-center text-neutral-400">
          Berikut ini beberapa project yang telah saya kerjakan
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="bg-neutral-800 p-4 rounded-2xl  "
            >
              <img
                src={proyek.gambar}
                alt="Proyek image"
                className="rounded-2xl"
              />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3  rounded-md font-semibold bg-neutral-700"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="inline-flex items-center p-2 bg-violet-900 rounded-full mt-4 hover:scale-105 transition-all duration-200 cursor-pointer">
                  <a href="" className="px-2 py-1">Lihat Website</a>
                  <HiArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* proyek */}
    </>
  );
}

export default App;
