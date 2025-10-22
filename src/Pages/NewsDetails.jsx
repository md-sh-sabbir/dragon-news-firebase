import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/homeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useParams } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner';

const NewsDetails = () => {

    const [data, setData] = useState([])
    const [news, setNews] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch('/news.json');
                const data = await res.json();
                setData(data);

                const newsDetails = data.find(singleNews => singleNews.id == id)
                setNews(newsDetails)
            } catch (err) {
                setError(err.message);
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        }

        return fetchData
    }, [])

    // console.log(data, id, news);

    if (loading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;