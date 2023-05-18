import { User } from "lucide-react"
import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">{/*Tem que ser dividido no meio em duas secoes */}
      {/*1 Parte- Left*/}
      
      <div className="flex bg-[url(../assets/bg-stars.svg)] bg-cover flex-col items-start justify-between px-28 py-16 relative overflow-hidden">
        
        {/*Efeito BLUR da cor Roxa*/}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] 
        -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full"></div>
        
        {/*Stripes - Linhaszinhas no meio da aplicação*/}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes  border-r border-white/10 pr-2"/>
          
          <a href="" 
          className="flex items-center gap-3 hover:text-gray-50 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
              <User className="h-5 w-5 text-white-400" />
            </div>
            <p className="text-sm leading-snug max-w-[140px]"><span className="underline">Crie sua conta</span> e salve suas memórias!</p>
          </a>
          
          {/*Parte onde tem o HERO */}
           <div className="space-y-5">
            <Image src={nlwLogo} alt="logo do nlw"/>{/*Essa prop Image do Next otimiza a imagem */}

            <div className="max-w-[420px] space-y-1">
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-gray-50">
                Sua cápsula do tempo
              </h1>
              <p className="mt-1 text-lg leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
            </div>
            <a className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-700 font-semibold" href="">
              CADASTRAR LEMBRANÇA
            </a>
          </div>

          {/*Copyright */}
          <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da <a 
              target="_blank" 
              rel="noreferrer"
              className="underline text-gray-100" 
              href='hhtps://rocketseat.com.br'>Rocketseat</a>
          </div>

      </div>

      {/*2 Parte- Right*/}  {/*Adicionando o svg das estrelinhas no background */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className=" flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a 
              <a href="" className="underline hover:text-gray-50"> criar agora!</a></p>
        </div>
      </div>
    </main>
  )
}
