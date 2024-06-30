import Pagination from 'react-js-pagination';
import { styled } from "styled-components";


export default function CustomPagination({ activePage, totalItemsCount, handlePageChange }) {
    if (totalItemsCount === 0) {
        return null; // totalItemsCount가 0일 때 페이지네이션을 숨김
    }
    
    return (
        <PaginationWrapper>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={7}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                prevPageText={<PageText style={{ opacity: activePage === 1 ? 0 : 1 }}>이전</PageText>}
                nextPageText={<PageText style={{ opacity: activePage === Math.ceil(totalItemsCount / 7) ? 0 : 1 }}>다음</PageText>}
                hideFirstLastPages
            />
        </PaginationWrapper>
    );
}

const PaginationWrapper = styled.div`
    margin: 3rem 0;
    font-family: Pretendard-Regular;
    font-size: 1.5rem;

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    ul {
        list-style: none;
        padding: 0;
    }
    
    ul.pagination li {
        width: 3.5rem;
        height: 2.8rem;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #6E6E6E;
    }
    
    ul.pagination li a {
        text-decoration: none;
        background-color: none;
        padding: 0.55rem 1.1rem;
        border-radius: 0.75rem;
        color: #6E6E6E;
    }
    
    ul.pagination li.active a {
        color: white;
        background-color: #8AA353;
    }
`;

const PageText = styled.div`
    width: 4rem;
    display: flex;
    justify-content: center;
    pading: 0;
    font-size: 1.188rem;
`;
