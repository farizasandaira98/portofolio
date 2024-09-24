import { useMyContext } from "../libs/context";
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useState } from "react";
import { socmed } from "../libs/socmed";
import { IRepo } from "../models/Repos";
import axios from "axios";
import animateGo from "../assets/lottie/go.json";

const Home = () => {
    // Toggle between dark and light mode
    const { languange, setLanguange, isDark, setIsDark } = useMyContext();

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

    if (loading) return <p>Loading...</p>;

    return (
        <>
            {/* Home
            <button className="btn btn-primary" onClick={toggleDarkMode}>Toggle Dark Mode</button>
            <button className="btn btn-success" onClick={toggleLanguage}>Toggle Language</button> */}
            {/* <div className="flex flex-row justify-between items-center pt-8 pl-10 pr-10">
                <button className="btn btn-primary" onClick={toggleDarkMode}>Toggle Dark Mode</button>
                <button className="btn btn-success" onClick={toggleLanguage}>Toggle Language</button>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-10">
                
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center">
                        <img src="/profile.jpg" alt="Profile Image" className="rounded-full" width={200} height={200}/>
                    </div>
                    <h3 className="text-2xl font-bold mt-10 text-center">Check My Social Media</h3>
                    <div className="flex flex-row gap-10 justify-center mt-5">
                        <Player
                            loop={false}
                            hover={true}
                            autoplay={true}
                            src={animationFacebook}
                            keepLastFrame={true}
                            style={{ width: 150, height: 150 }}
                        />
                    </div>
                    <div className="flex flex-col gap-4 mt-10">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold">Pendidikan</h3>
                            <p className="font-bold">Sarjana (S1) Teknik Informatika</p>
                            <p>STMIK Akakom Yogyakarta (Universitas Teknologi Digital Indonesia)</p>
                            <p>2017 - 2020</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold">Teknik Komputer Dan Jaringan</p>
                            <p>SMK Negeri 3 Palu</p>
                            <p>2014 - 2016</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold">Keahlian</h3>
                        <div className="grid grid-cols-3 gap-2">
                            <p>Javascript</p>
                            <p>PHP</p>
                            <p>CSS</p>
                            <p>React JS / TS</p>
                            <p>Tailwind</p>
                            <p>Bootstrap</p>
                            <p>Laravel</p>
                            <p>CodeIgniter</p>
                            <p>MySQL</p>
                            <p>Version Control : (Github & Gitlab)</p>
                            <p>AWS Service : (Cognito, Lambda, S3, DynamoDB, Amplify)</p>
                            <p>Agile & Scrum : (Jira, Trello, Clickup)</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 items-center">
                        <h3 className="text-5xl font-bold ">Muh Fariza</h3>
                        <p className="text-3xl">Software Engineer</p>
                        <div className="bg-current h-1 w-full"></div>
                    </div>
                    <div className="flex flex-col gap-4 mt-8">
                        <h3 className="text-2xl font-bold">Tentang Saya</h3>
                        <p>Software Engineer yang memiliki passion dalam merancang website yang interaktif. Berpengalaman dalam HTML, CSS, dan JavaScript, serta berbagai framework lainnya, saya mengkhususkan diri dalam membangun situs web yang mengutamakan kemudahan penggunaan dengan keseimbangan antara estetika dan fungsi. Selalu terbuka untuk berkolaborasi dan menjelajahi inovasi teknologi terbaru. Mari bekerja sama dan menciptakan terobosan di dunia digital.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">Pengalaman</h3>
                        <p className="font-bold">Software Engineer | PT Tata Sarana Mandiri (TSM Technology)</p>
                        <p>Software Engineer yang bersemangat dengan keahlian dalam membangun aplikasi yang tangguh menggunakan teknologi mutakhir. Berpengalaman dalam React.js, React.ts dan Golang, serta mahir memanfaatkan layanan AWS seperti DynamoDB, Lambda, Cognito, dan IoT Core untuk menciptakan solusi yang skalabel. Terampil dalam pengembangan frontend dengan Bootstrap dan Tailwind, memastikan pengalaman pengguna yang mulus.</p>
                        <p>2022 - Sekarang</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Freelance Web Developer</p>
                        <p>Web Developer Freelance yang kreatif, mengkhususkan diri dalam framework Laravel dan CodeIgniter. Berpengalaman dalam manajemen basis data MySQL dan mahir merancang antarmuka pengguna yang responsif dengan Bootstrap dan Blade. Berkomitmen untuk menyediakan solusi web berkualitas tinggi yang disesuaikan dengan kebutuhan klien.</p>
                        <p>2020 - Sekarang</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Outsourcing IT Consultan | Dinas PUP ESDm Provinsi DIY</p>
                        <p>Spesialis IT yang berdedikasi dan dipercaya untuk mengelola input data pada 41 saluran irigasi di Provinsi DIY. Berpengalaman dalam jaringan MikroTik, administrasi server DHCP, serta pengembangan web menggunakan PHP. Terampil dalam memelihara infrastruktur jaringan dan layanan web yang penting untuk operasional departemen.</p>
                        <p>2021 - 2022</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Intern IT Staff | Dinas Kependudukan Dan Catatan Sipil Kota Yogyakarta</p>
                        <p>Staf IT Magang yang inovatif dan berperan penting dalam pengembangan sistem pendaftaran kartu identitas berbasis web untuk anak-anak. Berpengalaman dalam PHP dan manajemen basis data MySQL, dengan perhatian khusus pada desain yang ramah pengguna menggunakan Bootstrap. Terbiasa dalam memelihara infrastruktur jaringan untuk mendukung produksi e-KTP.</p>
                        <p>2019</p>
                    </div>
                </div>
            </div> */}
            <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 p-60 pt-20 pb-20">
                    <div className="grid grid-cols-2 gap-6 border-2 border-primary p-20 rounded-lg shadow-2xl shadow-primary">
                        <img src="/profile.jpg" alt="Profile Image" className="rounded-full" width={200} height={200} />
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <h3 className="text-4xl font-bold text-center text-nowrap">Hi, My Name Is Muh Fariza</h3>
                            <p className="text-2xl font-bold">Software Engineer</p>
                            <div className="flex flex-row gap-8 mt-10">

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
                <h3 className="text-2xl font-bold text-center">My Personal Projects</h3>
                <div className="grid grid-cols-3 gap-6 p-20 pt-2">
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
                </div>
            </div>
        </>
    )
}

export default Home