export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">{/*Tem que ser dividido no meio em duas secoes */}
      {/*1 Parte- Left*/}
      <div className="flex flex-col items-start justify-between pr-28 pl-28 pt-16 pb-16 relative">
        <div className="absulute right-0 top-1/2 h-[288px] w-[526px]"></div>
      </div>

      {/*2 Parte- Right*/}
      <div className="flex flex-col p-16">
        <div className=" flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a 
              <a href="" className="underline hover:text-gray-50"> criar agora!</a></p>
        </div>
      </div>
    </main>
  )
}
