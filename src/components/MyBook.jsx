import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "../pages/Cover/Cover";
import coverImg from '../assets/coverImage.avif'
import FirstPage from "../pages/Hero/FirstPage";
import Skill from "../pages/Skills/Skill";
import ActivityPage from "../pages/Activity/ActivityPage";

function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title='My Book'/>
      </Page>
      <Page number={2}>
       <FirstPage />
      </Page>
      <Page number={3}>
       <Skill/>
      </Page>
      <Page number={4}>
       <ActivityPage />
      </Page>
    
    </HTMLFlipBook>
  );
}

export default MyBook;
