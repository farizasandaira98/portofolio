// import { useMyContext } from "../libs/context";
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useState } from "react";
import { socmed } from "../libs/socmed";
import { IRepo } from "../models/Repos";
import axios from "axios";
import animateGo from "../assets/lottie/go.json";
import animatePlanet from "../assets/lottie/planet.json";
import animateEducation from "../assets/lottie/user-interface.json";
import animationWork from "../assets/lottie/working-chart.json"

const Home = () => {
    // Toggle between dark and light mode
    // const { languange, setLanguange, isDark, setIsDark } = useMyContext();

    // const toggleDarkMode = () => {
    //     setIsDark(!isDark);
    //     localStorage.setItem('theme', isDark ? 'dark' : 'light');
    //     document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    // }

    // const toggleLanguage = () => {
    //     setLanguange(languange === 'en' ? 'id' : 'en');
    //     localStorage.setItem('language', languange === 'en' ? 'id' : 'en');
    // }

    const [repos, setRepos] = useState<IRepo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(
                    "https://api.github.com/users/farizasandaira98/repos",
                    { headers: { Authorization: `${import.meta.env.VITE_GITHUB_API as string}` } }
                );
                setRepos(response.data.slice(0, 6));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching repositories:", error);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center p-20">
            <Player
                src={animatePlanet}
                loop
                autoplay
                style={{ height: '500px', width: '500px' }}
            />
        </div>
    )

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 lg:p-60 p-10">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 border-2 border-primary lg:p-20 p-10 rounded-lg shadow-2xl shadow-primary">
                        <div className="flex justify-center items-center">
                        <img src="/profile.jpg" alt="Profile Image" className="rounded-full" width={200} height={200} />
                        </div>
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <h3 className="lg:text-4xl text-xl font-bold text-center text-nowrap">Hi, My Name Is Muh Fariza</h3>
                            <p className="lg:text-2xl text-md font-bold text-center text-nowrap">Software Engineer</p>
                            <div className="lg:flex lg:flex-row lg:gap-8 mt-10 grid grid-cols-3 gap-10 justify-center">
                                {socmed.map((item, index) => (
                                    <a key={index} href={item.link} target="_blank" rel="noreferrer">
                                        <Player
                                            loop={true}
                                            autoplay={true}
                                            src={item.icon}
                                            keepLastFrame={true}
                                            style={{ width: 50, height: 50, backgroundColor: 'currentColor', padding: '8px', borderRadius: '50%' }}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">My Personal Projects</h3>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 lg:p-60 lg:pt-8 pr-10 pl-10 gap-4">
                    {repos.map((repo) => (
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-4 bg-current rounded-lg shadow-lg p-4 hover:transform hover:scale-105 transition duration-300 hover:shadow-primary">
                            <div className="flex justify-center items-center">
                                <Player
                                    loop={true}
                                    autoplay={true}
                                    src={animateGo}
                                    keepLastFrame={true}
                                    style={{ width: 80, height: 80, backgroundColor: 'currentColor', padding: '8px', borderRadius: '50%' }}
                                />
                            </div>
                            <div className="flex flex-col gap-2 text-start">
                                <p className="text-black font-bold">{repo.name}</p>
                                <p className="text-black">{repo.description}</p>
                            </div>
                        </a>
                    ))}
                    <div className="lg:col-span-3 flex flex-col justify-center">
                        <a href='https://github.com/farizasandaira98' className="text-center">And more...</a>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:pl-20 pl-10 pr-10 pt-10 lg:p-20 lg:pt-0">
                    <div className='flex flex-col lg:text-start text-center'>
                        <h3 className="lg:text-6xl text-3xl font-bold mb-8">Pendidikan</h3>
                        <div className="flex flex-col gap-2 border-l-2 border-warning pl-4 mb-8">
                            <p className="font-bold">Sarjana (S1) Teknik Informatika</p>
                            <p>STMIK Akakom Yogyakarta (Universitas Teknologi Digital Indonesia)</p>
                            <p>2017 - 2020</p>
                        </div>
                        <div className="flex flex-col gap-2 border-l-2 border-warning pl-4">
                            <p className="font-bold">Teknik Komputer Dan Jaringan</p>
                            <p>SMK Negeri 3 Palu</p>
                            <p>2014 - 2016</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Player
                            loop
                            autoplay
                            src={animateEducation}
                            style={{ height: '400px', width: '400px' }}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Player
                            loop
                            autoplay
                            src={animationWork}
                            style={{ height: '400px', width: '400px' }}
                        />
                    </div>
                    <div className='flex flex-col lg:text-end text-center mt-2'>
                        <h3 className="lg:text-6xl text-3xl font-bold mb-8">Pekerjaan</h3>
                        <div className="flex flex-col gap-2 border-r-2 border-info pr-4 mb-8">
                            <p className="font-bold">Software Engineer | PT Tata Sarana Mandiri (TSM Technology)</p>
                            <p>2022 - Sekarang</p>
                        </div>
                        <div className="flex flex-col gap-2 border-r-2 border-info pr-4 mb-8">
                            <p className="font-bold">Freelance Web Developer</p>
                            <p>2020 - Sekarang</p>
                        </div>
                        <div className="flex flex-col gap-2 border-r-2 border-info pr-4 mb-8">
                            <p className="font-bold">Outsourcing IT Consultan | Dinas PUP ESDm Provinsi DIY</p>
                            <p>2021 - 2022</p>
                        </div>
                        <div className="flex flex-col gap-2 border-r-2 border-info pr-4">
                            <p className="font-bold">Intern IT Staff | Dinas Kependudukan Dan Catatan Sipil Kota Yogyakarta</p>
                            <p>2019</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home