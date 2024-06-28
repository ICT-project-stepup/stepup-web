import { useState, useEffect } from 'react';
import styled from 'styled-components';
import RoundGreenBtn from '../../../components/buttons/RoundGreenBtn';

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [replyInfo, setReplyInfo] = useState({ commentId: null, parentAuthor: null });

  /* 댓글 불러오기 */
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments/${postId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
  }, [postId]);

  /* 댓글 추가 */
  const addComment = async () => {
    if (commentText.trim() === '') {
      alert("댓글을 작성해주세요.");
      return;
    }

    let newCommentText = commentText;
    if (replyInfo.commentId !== null) {
      newCommentText = `@${replyInfo.parentAuthor} ${commentText}`;
    }

    const newComment = {
      communityId: postId,
      userId: 'test2',
      text: newCommentText,
      parentId: replyInfo.commentId,
    };

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
      if (!response.ok) {
        throw new Error('Failed to add comment');
      }
      await response.json();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
    window.location.reload(); // 등록 후 페이지 새로고침
  };

  const renderComments = (comments, parentId = null) => {
    return comments
      .filter(comment => comment.parentId === parentId)
      .map(comment => (
        <>
          <CommentContainer className="commentContainer" key={comment.commentId} parentId={parentId}>
            <CommentContent>
              <span className='author'>{comment.userNickname}</span>
              <span className='content'>{comment.text}</span>
            </CommentContent>
            <DateBtnWrapper>
              <CommentDateTime>
                {new Date(comment.createdTime).toLocaleString('ko-KR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: false,
                })}
              </CommentDateTime>
              <ReplyButton onClick={() => setReplyInfo({ commentId: comment.commentId, parentAuthor: comment.userNickname })}>답글 달기</ReplyButton>
            </DateBtnWrapper>
          </CommentContainer>
          <Replies>
            {renderComments(comments, comment.commentId)}
          </Replies>
        </>
      ));
  };

  return (
    <CommentsContainer>
      <CommentCount>
        <span>댓글</span>
        <span className='digit'>{comments.length}개</span>
      </CommentCount>
      <CommentsList>
        {renderComments(comments)}
      </CommentsList>
      <CommentForm>
        <CommentInput
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder={replyInfo.commentId ? `@${replyInfo.parentAuthor} 님에게 답글을 입력하세요.` : '댓글을 입력하세요.'}
        />
        <RoundGreenBtn
          text="등록하기"
          onClick={addComment}
          style={{
            width: "8.8rem", height: "3.6rem",
            fontFamily: "Pretendard-SemiBold",
            fontSize: "1.5rem",
            backgroundColor: "#AFBFA5",
            alignSelf: "flex-end",
            margin: "0.4rem 1rem"
          }}
        />
      </CommentForm>
    </CommentsContainer>
  );
}

const CommentsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2rem 0 0 0;
`;

const CommentCount = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: Pretendard-Medium;
  font-size: 2rem;
  color: #6E6E6E;
  margin-bottom: 1rem; 

  .digit {
    font-family: Pretendard-Regular;
    font-size: 1.5rem;
    margin-left: 0.8rem;
  }
`;

const CommentsList = styled.div`
  text-align: left;
`;

const CommentForm = styled.div`
  width: 100%;
  height: 9rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 3rem 0;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 100%;
  font-family: Pretendard-Regular;
  font-size: 1.5rem;
  border: 0.18rem solid #AFBFA5;
  border-radius: 1.5rem;
  padding: 1.5rem 10rem 0 1.5rem;

  &::placeholder {
    color: #AFBFA5;
  }
  &:focus {
    outline: none;
    border: 0.18rem solid #AFBFA5;
  }
`;

const CommentContainer = styled.div`
  padding: 1.5rem;
  border-bottom: 0.1rem solid #AFBFA5;
`;

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;

  .author {
    font-family: Pretendard-SemiBold;
    font-size: 1.5rem;
  }
  .content {
    font-family: Pretendard-Regular;
    font-size: 1.5rem;
    margin: 0.5rem 0;
    white-space: pre-line;
  }
`;

const CommentDateTime = styled.div`
  font-family: Pretendard-Regular;
  font-size: 1.25rem;
  color: #6E6E6E;
`;

const DateBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ReplyButton = styled.button`
  background: none;
  border: none;
  font-family: Pretendard-Regular;
  font-size: 1.25rem;
  color: #8AA353;
  margin-left: 1rem;
  cursor: pointer;
`;

const Replies = styled.div`
  .commentContainer {
    padding-left: 6rem;
  }
`;