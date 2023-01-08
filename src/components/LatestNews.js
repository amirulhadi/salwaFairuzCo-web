import React, {useState, useEffect} from 'react';
import Newslist from '../artefacts/bulletinList.json'
import { db } from '../service/firebase';
import { collection, getDocs } from '@firebase/firestore'
import moment from 'moment'
import _ from 'lodash'

export default function News () {
    const [bulletin, setBulletin] = useState([])
    const bulletinCollectionRef = collection(db, "bulletin");


    useEffect(() => {
        const getBulletin = async () => {
            const data = await getDocs(bulletinCollectionRef)
            setBulletin(data.docs.map((doc) => ({...doc.data(), id: doc.id})).slice(0,3))
        };

        getBulletin();
    }, [])

    const listbulletin = _.orderBy(bulletin, (bul) => {
        return new Date(bul.date)
    }, ['desc'])
    return (
        <>
            <div class="grid grid-cols-3 gap-2">
                {
                    listbulletin.map(news => {
                        return(
                            <div class=" max-w-sm pb-5 mb-10 rounded overflow-hidden shadow-lg">
                                <div key={news.id}>
                                    {/* <img class="w-full" src={news.url} alt="Sunset in the mountains" />  */}
                                    <iframe src={news.embeded} height="180" width="390" />
                                    
                                    <div class="px-6 py-2">
                                        <div class="font-bold text-xl mb-2">{news.title}</div>
                                        <p class="text-gray-700 text-base">
                                            {news.description}
                                        </p>
                                        <a href={news.url} target="_blank">Watch News Here</a>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{news.date}</span>
                                    </div>   
                                </div>
                        </div>
                        )
                    })
                }
            </div>

        </>
    )
}