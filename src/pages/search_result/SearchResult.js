import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import PageTitle from "../../components/PageTitle";
import JobAdResult from './JobAdResult';
import axios from 'axios';


export default function SearchResult() {
    const location = useLocation();
    const [jobAds, setJobAds] = useState([]);
    const [comuPosts, setComuPosts] = useState([]);
    const query = new URLSearchParams(location.search);
    const keyword = query.get('keyword');

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const [jobAdResponse, comuResponse] = await Promise.all([
                    axios.get(`/api/search/jobad?keyword=${keyword}`),
                    axios.get(`/api/search/comupost?keyword=${keyword}`)
                ]);

                setJobAds(jobAdResponse.data);
                setComuPosts(comuResponse.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        if (keyword) {
            fetchSearchResults();
        }
    }, [keyword]);

    return (
        <SearchResultContainer>
            <PageTitle text="검색 결과" />
            <JobAdResult postInfo={jobAds} />
        </SearchResultContainer>
    );
};

const SearchResultContainer = styled.div`
    width: auto;
    height: 52rem;
    display: block;
    align-items: flex-start;
    padding: 2rem 6rem 0 6rem;
`;
