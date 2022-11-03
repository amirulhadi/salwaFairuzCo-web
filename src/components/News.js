import React from 'react';
import Newslist from '../artefacts/bulletinList.json'

export default function News () {
    return (
        <>
            <div class="grid grid-cols-3 gap-2">
                {
                    Newslist.map(news => {
                        return(
                            <div class=" max-w-sm pb-5 mb-10 rounded overflow-hidden shadow-lg">
                                <div key={news.id}>
                                    {/* <img class="w-full" src={news.url} alt="Sunset in the mountains" />  */}
                                    <iframe src={news.embeded} height="180" width="300" />
                                    
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