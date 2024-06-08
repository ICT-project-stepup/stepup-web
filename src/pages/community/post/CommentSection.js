import { useState } from 'react';
import styled from 'styled-components';
import RoundGreenBtn from '../../../components/buttons/RoundGreenBtn';


export default function CommentSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: '저도 갈 생각인데, 지원하셨나요?',
      author: '구수한숭늉',
      dateTime: '2024.05.17 23:11',
      replies: [
        {
          id: 1,
          text: '@구수한 숭늉 네 했습니다!',
          author: '홍익인간',
          dateTime: '2024.05.17 23:22',
          replies: [],
        },
        {
          id: 2,
          text: '@홍익인간 그럼 그날 뵙죠^^',
          author: '구수한숭늉',
          dateTime: '2024.05.17 23:44',
          replies: [],
        },
      ],
    },
    {
      id: 2,
      text: '저 지원해놨습니다',
      author: '너구리구리',
      dateTime: '2024.05.17 23:15',
      replies: [],
    },
    {
      id: 3,
      text: '혹시 마늘 일 해보셨나요? \n많이 어려울까요ㅠㅠㅠ',
      author: '아홉수',
      dateTime: '2024.05.17 23:15',
      replies: [],
    },
  ]);

  const [commentText, setCommentText] = useState('');
  const [replyInfo, setReplyInfo] = useState({ commentId: null, parentAuthor: null });

  const generateDateTimeString = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  const addComment = () => {
    if (commentText.trim() === '') return;

    const currentDateTime = generateDateTimeString();

    if (replyInfo.commentId) {
      const newComments = comments.map((comment) => {
        if (comment.id === replyInfo.commentId) {
          const newReply = {
            id: comment.replies.length + 1,
            text: `@${replyInfo.parentAuthor} ${commentText}`,
            author: '익명',
            dateTime: currentDateTime,
            replies: [],
          };
          return { ...comment, replies: [...comment.replies, newReply] };
        }
        return comment;
      });
      setComments(newComments);
      setReplyInfo({ commentId: null, parentAuthor: null });
    } else {
      const newComment = {
        id: comments.length + 1,
        text: commentText,
        author: '익명',
        dateTime: currentDateTime,
        replies: [],
      };
      setComments([...comments, newComment]);
    }

    setCommentText('');
  };

  return (
    <CommentsContainer>
      <CommentCount>
        <span>댓글</span> 
        <span className='digit'>{comments.length + comments.reduce((acc, comment) => acc + comment.replies.length, 0)}개</span> 
        </CommentCount>
      <CommentsList>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onReply={(commentId, parentAuthor) => setReplyInfo({ commentId, parentAuthor })}
          />
        ))}
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
            margin: "0 1rem"
          }}
        />
      </CommentForm>
    </CommentsContainer>
  );
};

const Comment = ({ comment, onReply }) => {
  return (
    <>
      <CommentContainer className='commentContainer'>
        <CommentContent>
          <span className='author'>{comment.author}</span>
          <span className='content'>{comment.text}</span>
        </CommentContent>
        <DateBtnWrapper>
          <CommentDateTime>{comment.dateTime}</CommentDateTime>
          <ReplyButton onClick={() => onReply(comment.id, comment.author)}>답글 달기</ReplyButton>
        </DateBtnWrapper>
      </CommentContainer>
      <Replies>
        {comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} onReply={onReply} />
        ))}
      </Replies>
    </>
  );
};

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
  margin: 2rem 0;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 100%;
  font-family: Pretendard-Regular;
  font-size: 1.5rem;
  border: 0.18rem solid #AFBFA5;
  border-radius: 1.5rem;
  padding: 1rem 0 0 1rem;

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
    padding-left: 5rem;
  }
`;