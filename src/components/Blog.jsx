import React from "react";
import styled from 'styled-components';


const Blog = () => {
  
  return (
    <BlogPageWrapper>
    <ArticlesSection>
    <Article>
    <MemberImage src="/images/blog1.jpg" alt="blob1" />
        <ArticleTitle>Mirum Est Notare Quam</ArticleTitle>
        <ArticleTitle>20/June/2018</ArticleTitle>
        <ArticleContent>
        Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur debitis, deserunt distinctio doloremque explicabo fuga maiores necessitatibus quisquam quos repudiandae suscipit tempore totam voluptatibus.
        </ArticleContent>
      </Article>
      <Article>
      <MemberImage src="/images/blog2.jpg" alt="blob1" />
      <ArticleTitle>Mirum Est Notare Quam</ArticleTitle>
        <ArticleTitle>20/June/2018</ArticleTitle>
        <ArticleContent>
        Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur debitis, deserunt distinctio doloremque explicabo fuga maiores necessitatibus quisquam quos repudiandae suscipit tempore totam voluptatibus.
        </ArticleContent>
      </Article>
      <Article>
      <MemberImage src="/images/blog3.jpg" alt="blob1" />
        <ArticleTitle>Mirum Est Notare Quam</ArticleTitle>
        <ArticleTitle>20/June/2018</ArticleTitle>
        <ArticleContent>
        Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur debitis, deserunt distinctio doloremque explicabo fuga maiores necessitatibus quisquam quos repudiandae suscipit tempore totam voluptatibus.
        </ArticleContent>
      </Article>
      <Article>
      <MemberImage src="/images/blog1.jpg" alt="blob1" />
        <ArticleTitle>Caring for Your Diamond Jewelry</ArticleTitle>
        <ArticleContent>
          Learn how to properly care for your diamond jewelry to ensure it stays sparkling and beautiful for years to come.
        </ArticleContent>
      </Article>
    </ArticlesSection>
    
    <ArticleTag>POPULAR TAGS</ArticleTag>
    <TagsSection>
      <Tag>Engagement Rings</Tag>
      <Tag>Trends</Tag>
      <Tag>Care Tips</Tag>
      <Tag>Gold</Tag>
      <Tag>Diamonds</Tag>
      <Tag>Jewelry Design</Tag>
    </TagsSection>
  </BlogPageWrapper>
  );
};

const BlogPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ArticlesSection = styled.section`
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Article = styled.article`

background: white;
border-radius: 15px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
margin: 20px;
padding: 30px;
width: 100%;
max-width: 600px;
transition: transform 0.3s ease-in-out;
    flex: 1 1 calc(33% - 40px);
    box-sizing: border-box;
    max-width: calc(33% - 40px);

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 900px) {
      flex: 1 1 calc(50% - 40px);
      max-width: calc(50% - 40px);
  }

  @media (max-width: 600px) {
      flex: 1 1 calc(100% - 40px);
      max-width: calc(100% - 40px);
  }
`;

const MemberImage = styled.img`
    position: relative;
    top: -10px;
    height: 120px;
    overflow: hidden;
    border-radius: 100%;
    margin: 20px 0;
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.3);
    transition: all 0.6s ease;
    width: 53%;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    z-index: 2;
`;
const ArticleTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  font-family: "Droid Serif";
    font-style: italic;
    font-weight: bold;
`;

const ArticleTag = styled.h3`
text-transform: uppercase;
font-family: "Montserrat";
font-size: 1.8rem;
line-height: 1.5;
border-bottom: 1px dashed #c5c5c5;
margin-bottom: 30px;
padding-bottom: 10px;
text-align: center;
`;

const ArticleContent = styled.p`
  font-size: 1.2rem;
  color: #666;
  font-family: "Droid Serif";
    font-style: italic;
`;

const TagsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Tag = styled.div`
color: black;
padding: 10px;
margin: 5px;
border-radius: 5px;
font-size: 1.2rem;
border: 2px solid black;

&:hover {
  background-color: red;
}
`;

export default Blog;
