import Image from "next/image";

export default function Home() {
  return (
    <main className="font-light animate-[fade-me-in_.5s_ease-in-out]">
      Our leadership team is comprised of passionate individuals committed to preserving and promoting Cambodian culture through dance.
      <br /><br /><br />
      <div className="grid grid-cols-2 lg:grid-cols-5 justify-end items-end gap-10">
        <div className="m-auto">
          <div className="bg-slate-200 rounded-full h-[125px] w-[125px] overflow-hidden">
            <Image src="/avatars/teacher-01.png" alt="Placeholder Image" width={125} height={125}></Image>
          </div>
        </div>
        <div className="m-auto">
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
        </div>
        <br />
      </div>
    </main >
  );
}
