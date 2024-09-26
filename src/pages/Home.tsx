import { useMyContext } from "../libs/context";
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useState } from "react";
import { socmed } from "../libs/socmed";
import { skills } from "../libs/skills";
import { IRepo } from "../models/Repos";
import axios from "axios";
import animateGo from "../assets/lottie/go.json";
import animatePlanet from "../assets/lottie/planet.json";
import animateEducation from "../assets/lottie/user-interface.json";
import animationWork from "../assets/lottie/working-chart.json";
import animationSun from "../assets/lottie/Sun.json";
import animationSunset from "../assets/lottie/Sunset.json";
import flagIndo from "../assets/icons/flag-ind.svg";
import flagAmerica from "../assets/icons/flag-america.svg";
import animationContactMe from "../assets/lottie/call-center.json";
import resume from "../assets/documents/resume.pdf";
import Carousel from "../component/Carousel";

const Home = () => {
    // Toggle between dark and light mode
    const { isDark, setIsDark, languange, setLanguange } = useMyContext();

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }

    const toggleLanguage = () => {
        setLanguange(languange === 'en' ? 'id' : 'en');
        localStorage.setItem('language', languange === 'en' ? 'id' : 'en');
    }

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
    );

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "CV Muh Fariza.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 lg:p-60 lg:pt-20 p-10">
                    <div className="flex flex-row items-end justify-end mb-4 gap-4">
                        <button className="bg-white dark:bg-slate-200 rounded-full " onClick={toggleDarkMode}>
                            <Player
                                src={isDark ? animationSunset : animationSun}
                                loop
                                autoplay
                                style={{ height: '50px', width: '50px' }}
                            />
                        </button>
                        <button className="bg-white dark:bg-slate-200 rounded-full " onClick={toggleLanguage}>
                            <img src={languange === 'en' ? flagAmerica : flagIndo} alt="Bendera" width={50} height={50} className="rounded-full p-1" />
                        </button>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 border-2 border-primary lg:p-20 p-10 rounded-lg shadow-2xl shadow-primary">
                        <div className="flex lg:justify-start justify-center items-center">
                            <img src="/profile.jpg" alt="Profile Image" className="rounded-full" width={200} height={200} />
                        </div>
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <h3 className="lg:text-4xl text-xl font-bold text-center text-nowrap">{languange === 'en' ? "Hi, My Name Is Muh Fariza" : "Hi, Nama Saya Muh Fariza"}</h3>
                            <p className="lg:text-2xl text-md font-bold text-center text-nowrap">Software Engineer</p>
                            <div className="lg:flex lg:flex-row lg:gap-8 mt-10 grid grid-cols-3 gap-10 justify-center">
                                {socmed.map((item, index) => (
                                    <a key={index} href={item.link} target="_blank" rel="noreferrer">
                                        <Player
                                            loop={true}
                                            autoplay={true}
                                            src={item.icon}
                                            keepLastFrame={true}
                                            style={{ width: 50, height: 50, backgroundColor: '#e2e8f0', padding: '8px', borderRadius: '50%' }}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{languange === 'en' ? "My Personal Projects" : "Proyek Pribadi Saya"}</h3>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 lg:p-60 lg:pt-8 pr-10 pl-10 gap-4">
                    {repos.map((repo) => (
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-4 bg-white dark:bg-slate-200 rounded-lg shadow-lg p-4 hover:transform hover:scale-105 transition duration-300 hover:shadow-primary">
                            <div className="flex justify-center items-center">
                                <Player
                                    loop={true}
                                    autoplay={true}
                                    src={animateGo}
                                    keepLastFrame={true}
                                    style={{ width: 80, height: 80, backgroundColor: '#e2e8f0', padding: '8px', borderRadius: '50%' }}
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
                        <h3 className="lg:text-6xl text-3xl font-bold mb-8">{languange === 'en' ? "Education" : "Pendidikan"}</h3>
                        <div className="flex flex-col gap-2 border-l-2 border-warning pl-4 mb-8">
                            <p className="font-bold">{languange === 'en' ? "Bachelor of Computer Science" : "Sarjana (S1) Teknik Informatika"}</p>
                            <p>{languange === 'en' ? "STMIK Akakom Yogyakarta (University of Technology And Digital Indoensia)" : "STMIK Akakom Yogyakarta (Universitas Teknologi Digital Indonesia"}</p>
                            <p>2017 - 2020</p>
                        </div>
                        <div className="flex flex-col gap-2 border-l-2 border-warning pl-4">
                            <p className="font-bold">{languange === 'en' ? "Computer And Network" : "Teknik Komputer Dan Jaringan"}</p>
                            <p>{languange === 'en' ? "Vocational High School State 3 Palu" : "SMK Negeri 3 Palu"}</p>
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
                        <h3 className="lg:text-6xl text-3xl font-bold mb-8">{languange === 'en' ? "Work Experience" : "Pengalaman Kerja"}</h3>
                        <div className="flex flex-col gap-2 border-r-2 border-info pr-4 mb-8">
                            <p className="font-bold">Software Engineer | PT Tata Sarana Mandiri (TSM Technology)</p>
                            <p>{languange === 'en' ? "2022 - Now" : "2022 - Sekarang"}</p>
                        </div>
                        <div className="flex flex-col gap-2 border-r-2 border-info pr-4 mb-8">
                            <p className="font-bold">Freelance Web Developer</p>
                            <p>{languange === 'en' ? "2020 - Now" : "2020 - Sekarang"}</p>
                        </div>
                        <div className="flex flex-col gap-2 border-r-2 border-info pr-4 mb-8">
                            <p className="font-bold">{languange === 'en' ? "Outsourcing IT Consultan | Public Works, Housing and Energy Office of Mineral Resources of the Special Region of Yogyakarta" : "Outsourcing IT Konsultan | Dinas Pekerjaan Umum, Perumahan dan Energi Sumber Daya Mineral Daerah Istimewa Yogyakarta"}</p>
                            <p>2021 - 2022</p>
                        </div>
                        <div className="flex flex-col gap-2 border-r-2 border-info pr-4">
                            <p className="font-bold">{languange === 'en' ? "(Internship) IT Staff | Yogyakarta City Population and Civil Registration Office" : "(Magang) Staff IT | Dinas Kependudukan Dan Catatan Sipil Kota Yogyakarta"}</p>
                            <p>2019</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:p-20 p-8">
                    <h3 className="text-3xl font-bold mb-8 mt-8 text-center">{languange === 'en' ? "My Skills" : "Kemampuan Saya"}</h3>
                    <div className="flex flex-col items-center border-4 rounded-lg shadow-2xl shadow-primary">
                        <div className="grid lg:grid-cols-11 grid-cols-3 gap-10 lg:p-20 lg:pt-8 lg:pb-8 p-8">
                            {skills.map((item, index) => (
                                <img key={index} src={item.image} alt={item.alt} className="col-span-1 hover:scale-125 duration-300" height={50} width={50} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 pt-20 pr-10 pl-10 pb-20 bg-[#f5f5f5] dark:bg-transparent">
                    <h3 className="text-3xl font-bold mb-8 mt-8 text-center">{languange === 'en' ? "I'm Involved In" : "Saya Terlibat Pada"}</h3>
                    <Carousel />
                </div>
                <div className="grid grid-cols-1 pt-20">
                    <h3 className="text-3xl font-bold mb-8 mt-8 text-center">{languange === 'en' ? "Let's Work Together" : "Mari Bekerja Sama"}</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <Player
                            loop={true}
                            autoplay={true}
                            src={animationContactMe}
                            keepLastFrame={true}
                            style={{ width: 400, height: 400 }}
                        />
                        <div className="flex flex-col p-20 gap-8">
                            <h3 className="text-1xl font-bold text-start">{languange === 'en' ? "Contact Me On Social Media" : "Hubungi Saya Di Media Sosial"}</h3>
                            <div className="lg:flex lg:flex-row lg:gap-8 grid grid-cols-3 gap-10 justify-start">
                                {socmed.map((item, index) => (
                                    <a key={index} href={item.link} target="_blank" rel="noreferrer">
                                        <Player
                                            loop={true}
                                            autoplay={true}
                                            src={item.icon}
                                            keepLastFrame={true}
                                            style={{ width: 50, height: 50, backgroundColor: '#e2e8f0', padding: '8px', borderRadius: '50%' }}
                                        />
                                    </a>
                                ))}
                            </div>
                            <button className="btn btn-primary" onClick={() => downloadResume()}>{languange === 'en' ? "Download Resume" : "Unduh Resume"}</button>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4837660690864!2d106.76912197445579!3d-6.199729160733765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6dfec23394f%3A0x28d29f54bf05ce3f!2sJl.%20H.%20Suaib%20II%20No.18%2C%20RT.3%2FRW.2%2C%20Kb.%20Jeruk%2C%20Kec.%20Kb.%20Jeruk%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011530!5e0!3m2!1sen!2sid!4v1727347027900!5m2!1sen!2sid" width="100%" height="300" style={{ border: 0, borderRadius: '10px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex flex-row item-center justify-center p-2">
                    <h3>{languange === 'en' ? "Made with 💙 by Muh Fariza" : "Dibuat dengan 💙 oleh Muh Fariza"}</h3>
                </div>
            </div>
        </>
    )
}

export default Home