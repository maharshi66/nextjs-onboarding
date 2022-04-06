import Layout from "../../components/Layout";
import ProgressBar from "../../components/ProgressBar"
import ReactPlayer from 'react-player'
import { useState } from "react";

const dummyUrls = [
    "https://www.youtube.com/watch?v=LOS5WB75gkY&ab_channel=CarlKwan?start=0&end=20",
    "https://www.youtube.com/watch?v=UhV6daog0L0&ab_channel=thiskath?start=0&end=20",
    "https://www.youtube.com/watch?v=_ct3ccrU4AI&ab_channel=NeerusSaiyan?start=0&end=20"
]

const OnboardingPage = () => {

    const [mediaDuration, setMediaDuration] = useState(null);
    const [currentStory, setCurrentStory] = useState(0);
    const [currentProgress, setCurrentProgress] = useState(null);

    const handleProgress = (e) => {
        setCurrentProgress(e.playedSeconds);
    }

    const handleDuration = (e) => {
        setMediaDuration(e);
    }

    const handleOnEnded = (e) => {
        if (currentStory + 1 < dummyUrls.length) {
            setCurrentStory(currentStory + 1)
        }
        else {
            setCurrentStory(0);
        }
    }

    const handlePrevious = (e) => {
        if (currentStory - 1 >= 0) {
            setCurrentStory(currentStory - 1)
        }
        else {
            setCurrentStory(0);
        }
    }

    return (
        <Layout>
            <div className="flex justify-center pt-4 mx-1 max-w-sm gap-5">
                {
                    dummyUrls.map((story, idx) => (
                        <ProgressBar key={idx} progress={idx === currentStory ? currentProgress : null} />
                    ))
                }
            </div>
            <div className="overflow-hidden mt-5 animate-bounce-short">
                <ReactPlayer
                    url={dummyUrls[currentStory]}
                    height={"65vh"}
                    width={"100vw"}
                    playing={true}
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                    onEnded={handleOnEnded}
                    config={{
                        youtube: {
                            playerVars: { showinfo: 0, modestBranding: 1 }
                        },
                    }}
                />
            </div>
            <div className="h-full grid grid-cols-2">
                {/* Previous Click */}
                <div onClick={handlePrevious} className="h-full"></div>

                {/* Next Click */}
                <div onClick={handleOnEnded} className="h-full "></div>
            </div>
        </Layout>
    );
}

export default OnboardingPage;