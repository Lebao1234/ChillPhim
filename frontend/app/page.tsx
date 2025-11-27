"use client";

import { useState, useEffect, useRef } from 'react'; // Thêm import cho state và effect
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Info, Bell, Search, Volume2, VolumeX } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { start } from 'repl';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  

  const moviesAsia = [
  {
    id: 1,
    title: "Stranger Things",
    year: "2016",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
  },
  {
    id: 2,
    title: "The Witcher",
    year: "2019",
    poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/ueuUdxP6H4SjKkzK2WZPlj2Sl3n.jpg"
  },
  {
    id: 3,
    title: "Money Heist",
    year: "2017",
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/cpQNnwN53LsU6PwJ37gXiJ9ui7b.jpg"
  },
  {
    id: 4,
    title: "Alice in Borderland",
    year: "2020",
    poster: "https://image.tmdb.org/t/p/w500/20mOwAAPwZ1vLQkw0fvuQHiG7bO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/qD85eJ2Y84Gx05ZljzsP5hz1V7R.jpg"
  },
  {
    id: 5,
    title: "All of Us Are Dead",
    year: "2022",
    poster: "https://image.tmdb.org/t/p/w500/8gj5xYwGla6eF7VW04qP4u6Vmj.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2myH9EJpGv4YojcHnSUaxRkEheP.jpg"
  },
  {
    id: 6,
    title: "Sweet Home",
    year: "2020",
    poster: "https://image.tmdb.org/t/p/w500/7KlZP8R6kz9A4q2yPz9vywgqbiZ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/6nQwIbbK3VkOITkkOZ1xxvovZqV.jpg"
  },
  {
    id: 7,
    title: "The Glory",
    year: "2022",
    poster: "https://image.tmdb.org/t/p/w500/6Hru9x1UkE3JrA3ESGxn5x5Yucs.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/k6E4YApBF55n3DLE9Ey8SiDybZ1.jpg"
  },
  {
    id: 8,
    title: "Moving",
    year: "2023",
    poster: "https://image.tmdb.org/t/p/w500/5zmiBoMzeeVd14Fqe6rbHvH9Z5P.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pMsDoZ7fSy1F7tHrideJyh0bX0.jpg"
  },
  {
    id: 9,
    title: "Squid Game",
    year: "2021",
    poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCji9wA.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg"
  },
  {
    id: 10,
    title: "Kingdom",
    year: "2019",
    poster: "https://image.tmdb.org/t/p/w500/pJbVHbAMpzK8MWgqzpYJ3WURa8P.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9sXHqZTet3Zg5W9ILFBxxp5RhZl.jpg"
  },
  {
    id: 11,
    title: "Dark",
    year: "2017",
    poster: "https://image.tmdb.org/t/p/w500/7gfoRzS1yd4pqcoi48vEwC1Kqyx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/mzR4X7Odj43Z2J7Ry3Yukh9R2Q.jpg"
  },
  {
    id: 12,
    title: "The Sandman",
    year: "2022",
    poster: "https://image.tmdb.org/t/p/w500/q54qEgagGOYCq5D1903eBVMNkbo.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/945CzQW1wFS6gRARXvoF3SkomKZ.jpg"
  },
  {
    id: 13,
    title: "Wednesday",
    year: "2022",
    poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9YZcbQKxP7FdflOYe5GYhrXovaj.jpg"
  },
  {
    id: 14,
    title: "Hellbound",
    year: "2021",
    poster: "https://image.tmdb.org/t/p/w500/5NYdSAnDV3QYpaXjZTLkQgwfL9O.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2tQMEyfgWFi5tLHULauWGfrL4GF.jpg"
  },
  {
    id: 15,
    title: "Narcos",
    year: "2015",
    poster: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh4JbO0Y8i2LJpzeN6.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yIItKxR4heR1fYEsnO8l4o1t6sT.jpg"
  },
  {
    id: 16,
    title: "Lupin",
    year: "2021",
    poster: "https://image.tmdb.org/t/p/w500/a7N0uqW2v1SrYbUmAOZlMEr4euO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5nRyaVklxyA9OkxqZaPv1KBRqpd.jpg"
  },
  {
    id: 17,
    title: "One Piece",
    year: "2023",
    poster: "https://image.tmdb.org/t/p/w500/2I5eBh98Q4aPq8U6O5Iq6XazLcD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4d3Ql3Jdn1JZjNhQIJie7akfYyT.jpg"
  },
  {
    id: 18,
    title: "Rebel Moon",
    year: "2023",
    poster: "https://image.tmdb.org/t/p/w500/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/zNE4N0R3sJBAbdhfretuBqBjd6B.jpg"
  },
  {
    id: 19,
    title: "The 8 Show",
    year: "2024",
    poster: "https://image.tmdb.org/t/p/w500/nCEOLhCEI0KBLSYb0tze2Nc4bIU.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/3NnjGxM6aJhFZzOdn4rK0JJ6yGh.jpg"
  },
  {
    id: 20,
    title: "My Demon",
    year: "2023",
    poster: "https://image.tmdb.org/t/p/w500/1K2Vq6KYFAsWEtTR9P94p42PFsC.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/woMPmxjSPdZRhqUTrWyd4InENcy.jpg"
  }
];
   const firstFive = moviesAsia.slice(0, 5);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Chuyển khi scroll > 100px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-[#000000]">
      <header className="relative text-white font-sans overflow-x-hidden">
        <nav 
          className={`fixed top-0 w-full z-50 flex items-center justify-between px-4 md:px-12 py-4 transition-all duration-300 ${
            isScrolled ? 'bg-black' : 'bg-gradient-to from-black/80 to-transparent'
          }`}
        >
          <div className="flex items-center gap-12">
            <h1 className="text-white text-3xl font-bold tracking-tighter cursor-pointer">CHILLMOVIE</h1>
            
            <ul className="hidden md:flex items-center gap-6 text-sm text-gray-300">
              <li className="font-medium text-white cursor-pointer">Trang chủ</li>
              <li className="hover:text-gray-400 cursor-pointer transition">Series</li>
              <li className="hover:text-gray-400 cursor-pointer transition">Phim</li>
              <li className="hover:text-gray-400 cursor-pointer transition">Mới & Phổ biến</li>
              <li className="hover:text-gray-400 cursor-pointer transition">Danh sách của tôi</li>
            </ul>
          </div>

          <div className="flex items-center gap-6 text-white">
            <div 
              className={`flex items-center border transition-all duration-300 ease-in-out ${
                isSearchOpen 
                  ? 'border-white bg-black/80 px-2 py-1' 
                  : 'border-transparent bg-transparent'  
              }`}
            >
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="focus:outline-none"
              >
                <Search className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
              </button>

              <Input 
                ref={inputRef}
                placeholder="Phim, diễn viên, thể loại..." 
                className={`
                  bg-transparent border-none text-white placeholder-gray-400 
                  focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none
                  transition-all duration-300 ease-in-out origin-left
                  ${isSearchOpen ? 'w-60 opacity-100 ml-2' : 'w-0 opacity-0 p-0'}
                `}
                onBlur={(e) => {
                   if (e.target.value === '') setIsSearchOpen(false);
                }}
              />
            
              {isSearchOpen && (
                 <button 
                   className="cursor-pointer text-gray-400 hover:text-white transition-opacity ml-1"
                   onClick={() => setIsSearchOpen(false)} >X</button>
              )}
            </div>
            <Bell className="w-6 h-6 cursor-pointer" aria-label="Notifications" />
            <div className="flex items-center gap-2 cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </nav>
        <video
        ref={videoRef}
        className="w-full h-full object-cover brightness-60 transition-opacity duration-1000"
        autoPlay
        muted={isMuted} 
        loop
        playsInline 
        poster="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop" 
      >
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-[#000000] via-transparent to-transparent opacity-90 bottom-0 h-40 mt-auto w-full z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent z-10" />


        <div className="absolute top-[30%] md:top-[40%] left-4 md:left-12 z-20 w-[90%] md:w-[40%] space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Cùng Bạn Bè Và <br/> Mọi Người
          </h1>
          
          <p className="text-white text-sm md:text-lg drop-shadow-md line-clamp-3 md:line-clamp-none">
            Khám phá kho phim và chương trình truyền hình đa dạng, từ những bộ phim bom tấn đến các series độc quyền. Tận hưởng trải nghiệm giải trí đỉnh cao với chất lượng hình ảnh và âm thanh tuyệt vời, mọi lúc mọi nơi.
          </p>

          {/* Nút hành động */}
          <div className="flex items-center gap-3 pt-4">
            <Button className="bg-white text-black hover:bg-white/80 font-bold px-8 py-6 text-lg rounded-md flex items-center gap-2">
              <Play fill="black" size={24} /> Xem Phim
            </Button>
            <Button className="bg-gray-500/70 text-white hover:bg-gray-500/50 font-bold px-8 py-6 text-lg rounded-md flex items-center gap-2 backdrop-blur-sm">
              <Info size={24} /> Thông tin khác
            </Button>
          </div>
        </div>

        <div className="absolute bottom-[35%] right-0 z-20 flex items-center gap-4">
          <button 
            onClick={toggleMute}
            className="border border-white/50 rounded-full p-2 hover:bg-white/10 transition bg-black/30 backdrop-blur-sm text-white"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          
          <div className="bg-gray-500/30 border-l-4 border-white py-1 pl-3 pr-8 backdrop-blur-sm text-white font-semibold">
            T13
          </div>
        </div>
      </header>

      <main className='flex-1 px-4 md:px-12 py-8 space-y-12 bg-[#000000]'>
        <section className="space-y-4">
  <h2 className="text-white text-2xl font-bold mb-4">Phim Châu Á Nổi Bật</h2>

  <Carousel
    opts={{
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps",
    }}
  >
    <CarouselContent className="-ml-4">
      {moviesAsia.map((movie) => (
        <CarouselItem
          key={movie.id}
          className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 px-2"
        >
          <div className="relative group cursor-pointer">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-auto rounded-md transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-2 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-sm font-semibold">{movie.title}</h3>
              <p className="text-gray-300 text-xs">{movie.year}</p>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>

    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10">
      &#10094;
    </CarouselPrevious>
    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10">
      &#10095;
    </CarouselNext>
  </Carousel>
        </section>
      </main>
    </div>
  );
}
