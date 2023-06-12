import React,  {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Headbanner';
import Footer from '../components/Footer'
import contactHeader from '../assets/contact_head.jpg'
import bulletinData from '../artefacts/bulletinList.json'
import News from '../components/News';
import LatestNews from '../components/LatestNews'
import { db } from '../service/firebase';
import { collection, getDocs } from '@firebase/firestore'
import Pagination from '../components/Pagination';
import bulletinCover from '../assets/bulletin_img.jpg'

export default function Bulletin () {   
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [bulletin, setBulletin] = useState([])
    const bulletinCollectionRef = collection(db, "bulletin");


    useEffect(() => {
        const getBulletin = async () => {
            const data = await getDocs(bulletinCollectionRef)
            setBulletin(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };

        getBulletin();
    }, [])

    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          setBulletin(bulletin);
          setLoading(false);
        };
    
        fetchPosts();
      }, []);

        // Get current posts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = bulletin.slice(indexOfFirstPost, indexOfLastPost);

         // Change page
        const paginate = pageNumber => setCurrentPage(pageNumber);
        console.log('paginaete: ', paginate)

    return (
        <>
        <Navbar></Navbar>
        <Banner image={bulletinCover} title="BULLETIN" titlerow2="" desc=""></Banner>

        <div className='container px-16 mx-auto'>

        <div>
            <div className='px-2 py-8'>
                <h2 className='text-4xl text-center font-bold uppercase'>Follow Our News and Updates</h2>
            </div>
            <div>
                <h3 className='text-lg uppercase mb-10 mt-10'>Latest News</h3>
                <LatestNews></LatestNews>
            </div>

            <div className='mb-10'>
                <h3 className='text-lg uppercase mb-10 mt-10'>Previous News</h3>
                <News bulletin={currentPosts} loading={loading}></News>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={bulletin.length}
                    paginate={paginate}
                />
            </div>
            

        </div>

    </div>

<Footer>
</Footer>
</>

)}