import DataImage from "./data";
// import { useState } from "react";
import { HiArrowDownTray, HiEnvelope, HiArrowRight } from "react-icons/hi2";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { listTools, listProyek } from "./data";
import Button from "./components/ui/Button";


function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 w-fit p-1 hover:scale-105 transition-all hover:bg-primary-light rounded-[10px]">
            <div className="flex items-center bg-primary-lighter p-4 rounded-lg">
              <img
                src={DataImage.HeroImage}
                alt="Hero Image"
                className="w-10 rounded-md"
              />
              <q className="text-text-primary ml-4 ">
                Kode yang indah, lahir dari GPT:)
              </q>
            </div>
          </div>

          <div className="flex flex-col">
          <h1 className="text-5xl/tight text-text-active font-bold">
            Hi,Saya
          </h1>
          <h1 className="text-5xl/tight text-text-primary font-bold mb-6">
            Robet Davis Chaniago
          </h1>
          </div>

          <p className="text-text-secondary font-mono ">
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
            <Button variant="primary">
              Download CV
              <HiArrowDownTray />
            </Button>

            <Button variant="secondary">
              Kontak Gua
              <HiEnvelope />
            </Button>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto rounded-4xl mt-12 hover:scale-104 transition-all hover:shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();

                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const centerX = rect.width / 4;
                  const centerY = rect.height / 4;

                  const rotateX = ((y - centerY) / centerY) * -12;
                  const rotateY = ((x - centerX) / centerX) * 12;

                  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "rotateX(0deg) rotateY(0deg)";
                }}
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-primary-lighter border-5 border-primary-light rounded-lg shadow-xl shadow-neutral-200/80">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-text-primary">
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
                <h1 className="text-4xl text-text-primary mb-1">
                  45 <span className="text-primary">+</span>
                </h1>
                <p className="text-text-secondary">Projek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl text-text-primary mb-1">
                  4 <span className="text-primary">+</span>
                </h1>
                <p className="text-text-secondary">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug text-text-primary font-bold mb-4">
            Tools yang di pakai
          </h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose text-text-secondary">
            Berikut ini beberapa tools yang saya pakai untuk membuat website dan
            design
          </p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 [perspective:1000px]">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className=" group flex items-center gap-2 p-4 border border-primary-hover rounded-2xl
               bg-primary-lighter hover:bg-primary-light
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
                  <h4 className="font-bold text-text-primary">{tool.nama}</h4>
                  <p className="text-text-secondary">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* tentang */}

      {/* proyek */}
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl text-text-primary font-bold mb-2">
          Project
        </h1>
        <p className="text-base/loose text-center text-text-secondary">
          Berikut ini beberapa project yang telah saya kerjakan
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="bg-primary-lighter p-4 rounded-2xl hover:scale-104 transition-all  "
            >
              <img
                src={proyek.gambar}
                alt="Proyek image"
                className="rounded-2xl"
              />
              <div>
                <h1 className="text-2xl text-text-primary font-bold my-4">
                  {proyek.nama}
                </h1>
                <p className="text-base/loose text-text-secondary mb-4">
                  {proyek.desk}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 text-text-inverse rounded-md font-semibold bg-primary-hover"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
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
