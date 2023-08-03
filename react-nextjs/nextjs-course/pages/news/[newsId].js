import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;//newsId represents the property between the [] of the file name

    //send a request to the backend API
    //to fetch the news item with newsId

    return <h1>The Detail Page</h1>
}
export default DetailPage;