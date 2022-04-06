import Layout from "../../components/Layout";
import ProgressBar from "../../components/ProgressBar"
import ReactPlayer from 'react-player'
import { useState } from "react";
import Head from "next/head";

const dummyUrls = [
    "https://www.youtube.com/watch?v=LOS5WB75gkY&ab_channel=CarlKwan?start=0&end=30",
    "https://www.youtube.com/watch?v=UhV6daog0L0&ab_channel=thiskath?start=0&end=30",
    "https://www.youtube.com/watch?v=_ct3ccrU4AI&ab_channel=NeerusSaiyan?start=0&end=30"
]

const OnboardingPage = () => {
    const [currentStory, setCurrentStory] = useState(0);
    const [currentProgress, setCurrentProgress] = useState(null);

    const handleProgress = (e) => {
        setCurrentProgress(e.playedSeconds);
    }

    const handleOnEnded = (e) => {
        if (currentStory + 1 < dummyUrls.length) {
            setCurrentStory(currentStory + 1);
        }
        else {
            setCurrentStory(0);
        }

        setCurrentProgress(0);
    }

    const handlePrevious = (e) => {
        if (currentStory - 1 >= 0) {
            setCurrentStory(currentStory - 1)
        }
        else {
            setCurrentStory(0);
        }

        setCurrentProgress(0);
    }

    return (
        <Layout>
            <Head>
                <title>
                    PropReturns - Onboarding
                </title>
            </Head>
            <div className="flex justify-center pt-4 mx-3 max-w-sm gap-3">
                {/* Progress Bar */}
                {
                    dummyUrls.map((story, idx) => (
                        <ProgressBar key={idx} bgcolor={"#6A5ACD"} progress={idx === currentStory ? ((currentProgress / 30) * 100) : null} /> //Divided by 20 since each video is 20 seconds long by default
                    ))
                }
            </div>
            <div className={`overflow-hidden mt-5 ${!currentProgress ? "animate-fade-in-down" : ""}`}>

                {/* Video Player */}
                <ReactPlayer
                    url={dummyUrls[currentStory]}
                    height={"68vh"}
                    width={"100vw"}
                    playing={true}
                    onProgress={handleProgress}
                    onEnded={handleOnEnded}
                    config={{
                        youtube: {
                            playerVars: { showinfo: 0, modestBranding: 1 }
                        },
                    }}
                />
            </div>

            {/*Bottom Touch Controls */}
            <div className="h-full grid grid-cols-2">

                {/* Previous Click */}
                <div onClick={handlePrevious} className="h-full"></div>

                {/* Next Click */}
                <div onClick={handleOnEnded} className="h-full"></div>
            </div>
        </Layout>
    );
}

export default OnboardingPage;