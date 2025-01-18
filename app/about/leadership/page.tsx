import Image from "next/image";

export default function Home() {
  return (
    <main className="font-light animate-[fade-me-in_.5s_ease-in-out]">
      Our team of dedicated volunteers is united by a shared passion for preserving and promoting Cambodian culture through dance. Each member plays a vital role in supporting our mission and ensuring the success of our programs.
      <br /><br /><br />
      <div className="grid grid-cols-2 lg:grid-cols-5 justify-end items-end gap-10">
        <div className="m-auto text-sm text-center">
          <div className="bg-slate-200 rounded-full h-[125px] w-[125px] overflow-hidden">
            <Image src="/avatars/teacher-01.png" alt="Placeholder Image" width={125} height={125}></Image>
          </div>
          <br />
          <span className="font-bold">Sovandy Hang</span>
          <br />
          Social Worker
        </div>
        <div className="m-auto text-sm text-center">
          <div className="bg-slate-200 rounded-full h-[125px] w-[125px] overflow-hidden">
            {/* <Image src="/avatars/teacher-02.png" alt="Placeholder Image" width={125} height={125}></Image> */}
          </div>
          <br />
          <span className="font-bold">Sineth</span>
          <br />
          Real Estate Agent
        </div>

        <div className="m-auto text-sm text-center">
          <div className="bg-slate-200 rounded-full h-[125px] w-[125px] overflow-hidden">
            <Image src="/avatars/teacher-03.png" alt="Placeholder Image" width={125} height={125}></Image>
          </div>
          <br />
          <span className="font-bold">Neary Rith</span>
          <br />
          Salon Owner
        </div>

        <div className="m-auto text-sm text-center">
          <div className="bg-slate-200 rounded-full h-[125px] w-[125px] overflow-hidden">
            <Image src="/avatars/teacher-04.png" alt="Placeholder Image" width={125} height={125}></Image>
          </div>
          <br />
          <span className="font-bold">Paul Lang</span>
          <br />
          Entreprenuer
        </div>
        <div className="m-auto text-sm text-center">
          <div className="bg-slate-200 rounded-full h-[125px] w-[125px] overflow-hidden">
            <Image src="/avatars/teacher-05.png" alt="Placeholder Image" width={125} height={125}></Image>
          </div>
          <br />
          <span className="font-bold">Neary Neou</span>
          <br />
          Teacher @ OUSD
        </div>
        {/* <div className="m-auto">
          <div className="bg-slate-200 rounded-full h-[125px] w-[125px] overflow-hidden">
            <Image src="/avatars/teacher-02.png" alt="Placeholder Image" width={125} height={125}></Image>
          </div>
        </div>
        <div className="m-auto">
          <div className="bg-slate-200 rounded-full h-[125px] w-[125px] overflow-hidden">
            <Image src="/avatars/teacher-03.png" alt="Placeholder Image" width={125} height={125}></Image>
          </div>
        </div>
        <div className="m-auto">
          <div className="bg-slate-200 rounded-full h-[125px] w-[125px] overflow-hidden">
            <Image src="/avatars/teacher-04.png" alt="Placeholder Image" width={125} height={125}></Image>
          </div>
        </div>
        <div className="m-auto">
          <div className="bg-slate-200 rounded-full h-[125px] w-[125px] overflow-hidden">
            <Image src="/avatars/teacher-05.png" alt="Placeholder Image" width={125} height={125}></Image>
          </div>
        </div> */}
        {/* <br /> */}
      </div>
    </main >
  );
}
