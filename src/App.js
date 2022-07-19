import InfiniteScroll from "react-infinite-scroll-component";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import Heading from "./components/Heading";
import Loader from "./components/Loader";
import UnsplashImage from "./components/UnsplashImage";
import Data from "./hooks/Data";

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
  
`;

const WrapperImages = styled.section`
    max-width: 70rem;
    margin: 4rem auto;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 300px;
    over-follow: hidden;
`;
function App() {
    const [images, fetchImages] = Data();
    console.log(images);
    return (
        <div className="App">
            <Heading />
            <GlobalStyle />
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={true}
                loader={<Loader />}
                style={{ overFolow: "hidden" }}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <WrapperImages>
                    {images?.map((image) => (
                        <UnsplashImage
                            url={image.thumbnailUrl}
                            key={image.id}
                        />
                    ))}
                </WrapperImages>
            </InfiniteScroll>
        </div>
    );
}

export default App;
