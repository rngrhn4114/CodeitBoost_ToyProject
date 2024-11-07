import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Banner from "../components/Banner"
import "./PublicGroupList.css"



const PublicGroupList = () => {

    // const [groups, setGroups] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // API에서 그룹 목록을 가져오는 함수
    // useEffect(() => {
    //     axios.get('/api/groups')
    //     .then((response) => {
    //         setGroups(response.data);
    //         setIsLoading(false);
    //     })
    //     .catch((error) => {
    //         console.error('그룹 목록을 가져오는 중 오류 발생:', error);
    //         setIsLoading(false);
    //     });
    // }, []);

    // 검색어에 따라 그룹 목록을 필터링
    // const filteredGroups = groups.filter(group =>
    //     group.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    // if (isLoading) {
    // return <p>로딩 중...</p>;
    // }
    
    return (
        <div>
            <Banner />
            <div className="public-group-page">
                <h1>공개 그룹 목록 페이지</h1>
  
                <div className="group-header">
                    <button>공개</button>
                    <button>비공개</button>
                    <input
                        type="text"
                        placeholder="그룹명을 검색해 주세요"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="groupCreate">그룹 만들기</button>
                </div>
  
                {/* <div className="group-list">
                    {filteredGroups.map(group => (
                        <div className="group-card" key={group.id}>
                            <img src={group.imageUrl} alt={group.name} />
                            <div className="group-info">
                                <p>{group.name}</p>
                                <p>{group.description}</p>
                                <p>참여 인원: {group.members}명</p>
                                <p>그룹 공감: {group.likes}</p>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default PublicGroupList
