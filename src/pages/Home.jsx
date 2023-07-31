import React, {useEffect, useRef} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import '../styles/Home.css';
import OutlineButton from "../components/OutlineButton";
import SlideIn from "../animations/SlideIn";
import AnimatedPage from "../animations/AnimatedPage";
import RecyclingBackground from "../assets/Home/RecyclingBackground.jpg";
import PlasticWrapper from "../assets/Home/ItemCategories/PlasticWrapper.png";
import PlasticBottle from "../assets/Home/ItemCategories/PlasticBottle.png";
import MetalCan from "../assets/Home/ItemCategories/MetalCan.png";
import GlassBottle from "../assets/Home/ItemCategories/GlassBottle.png";
import Battery from "../assets/Home/ItemCategories/Battery.png";
import PlasticBag from "../assets/Home/ItemCategories/PlasticBag.png";
import MobilePhone from "../assets/Home/ItemCategories/MobilePhone.png";
import CardboardBox from "../assets/Home/ItemCategories/CardboardBox.png";
import Laptop from "../assets/Home/ItemCategories/Laptop.png";
import PlasticContainer from "../assets/Home/ItemCategories/PlasticContainer.png";
import ElectronicCoords from "../assets/Home/ItemCategories/ElectronicCoords.png";
import PaperBag from "../assets/Home/ItemCategories/PaperBag.png";
import Cigarette from "../assets/Home/ItemCategories/Cigarette.png";
import Mask from "../assets/Home/ItemCategories/Mask.png";
import Lightbulb from "../assets/Home/ItemCategories/Lightbulb.png";
import GameController from "../assets/Home/ItemCategories/GameController.png";



const Home = () => {
    const leftScrollRef = useRef(null);
    const rightScrollRef = useRef(null);

    // Transforms the current vertical scroll to horizontal scroll
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const horizontalScroll = scrollY / 20; // Adjust the divisor to control the movement speed
        leftScrollRef.current.style.transform = `translateX(${-horizontalScroll}px)`;
        rightScrollRef.current.style.transform = `translateX(${horizontalScroll}px)`;
    };

    // Scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="HomePanelLanding">
                <img src={RecyclingBackground} alt="Recycling Background" className="HomePanelLandingBackground"/>
            </div>
            <div className="PanelOne">
                <div className='Title'>
                    Thousands of Objects<br></br> 
                    to Detect From, That<br></br>
                    Help You Recycle
                </div>
                <div className='ItemCategories'>
                    <div className='ItemRow' ref={leftScrollRef}>
                        <img src={PlasticWrapper} alt="Plastic Wrapper" className='Item' />
                        <img src={PlasticBottle} alt="Plastic Bottle" className='Item' />
                        <img src={MetalCan} alt="Metal Can" className='Item' />
                        <img src={GlassBottle} alt="Glass Bottle" className='Item' />
                        <img src={Battery} alt="Battery" className='Item' />
                        <img src={PlasticBag} alt="Plastic Bag" className='Item' />
                        <img src={MobilePhone} alt="Mobile Phone" className='Item' />
                        <img src={CardboardBox} alt="Cardboard Box" className='Item' />
                    </div>
                    <div className='ItemRow' ref={rightScrollRef}>
                        <img src={Laptop} alt="Laptop" className='Item' />
                        <img src={PlasticContainer} alt="Plastic Container" className='Item' />
                        <img src={ElectronicCoords} alt="Electronic Coords" className='Item' />
                        <img src={PaperBag} alt="Paper Bag" className='Item' />
                        <img src={Cigarette} alt="Cigarette" className='Item' />
                        <img src={Mask} alt="Mask" className='Item' />
                        <img src={Lightbulb} alt="Lightbulb" className='Item' />
                        <img src={GameController} alt="Game Controller" className='Item' />
                    </div>
                </div>
            </div>
            <div className='PanelTwo'>
                <div className='PanelTwoText'>
                    <div className='Title'>
                        Take a Snap of Any<br></br> 
                        Item, Anywhere
                    </div>
                    <div className='SubText'>
                        Take a picture of the object in front of you,<br></br>
                        that’s all you have to do! Let SnapCycle do<br></br>
                        the rest as it detects the object for you, and<br></br>
                        lets you in on all the sweet disposing details.
                    </div>
                    <div className='SubText'>
                        Try out SnapCycle today and experience the<br></br>
                        power of smooth recycling.
                    </div>
                    <OutlineButton title="Try Now" destination="/demo"/>
                </div>
            </div>
            <div className='PanelThree'>
                <div className='PanelThreeImage'>

                </div>
                <div className='PanelThreeText'>
                    <div className='Title'>
                        Can't Take a Picture?<br></br>
                        No Worries!
                    </div>
                    <div className='SubText'>
                        Search through our ever growing database<br></br>
                        of objects to learn how to dispose of them.<br></br>
                        Say no more to scientific articles going into<br></br>
                        detail on things you don't need to know! 
                    </div>
                    <div className='SubText'>
                        Try out SnapCycle today and experience the<br></br>
                        power of smooth recycling.
                    </div>
                    <div className='PanelThreeButton'>
                        <OutlineButton title="Try Now" destination="/demo"/>
                    </div>
                </div>
            </div>
            <div className='PanelFour'>
                <div className='Title'>
                    Let the Numbers Speak<br></br>
                    for Themselves.
                </div>
                <div className='SubText'>
                    As the world migrates into the technological<br></br>
                    age, its time to make a change.
                </div>
                <div className='StatisticsContainer'>
                    <div className='Statistic'>
                        <div className='Title'>
                            <AnimateNumber number={6139487} yuh={""}/>
                        </div>
                        <div className='StatisticSubText'>
                            Recyclables are disposed<br></br>
                            incorrectly.
                        </div>
                    </div>
                    <div className='Statistic'>
                        <div className='Title'>
                            <AnimateNumber number={5} suffix={" Masks"}/>
                        </div>
                        <div className='StatisticSubText'>
                            are littered every 30<br></br>
                            minutes.
                        </div>
                    </div>
                    <div className='Statistic'>
                        <div className='Title'>
                            <AnimateNumber number={95} suffix={" %"}/>
                        </div>
                        <div className='StatisticSubText'>
                            of waste in the<br></br>
                            ocean is easily<br></br>
                            avoidable.
                        </div>
                    </div>
                    <div className='Statistic'>
                        <div className='Title'>
                            <AnimateNumber number={300000}/>
                        </div>
                        <div className='StatisticSubText'>
                            of recyclables could be<br></br>
                            saved with the use of<br></br>
                            SnapCycle!
                        </div>
                    </div>
                </div>
            </div>
            <AnimatedPage>
                <div className="panel">
                    <SlideIn invert={true}>
                        <div>
                            panel 3
                        </div>
                    </SlideIn>
                </div>
            </AnimatedPage>
        </div>
    )
}

const AnimateNumber = ({number, suffix = ""}) => {
    return (
        <VisibilitySensor>
            {({isVisible}) =>
                <div style={{ height: 50 }}>
                    {isVisible ? <CountUp end={number} suffix={suffix}/> : 0 + suffix}
                </div>
            }
        </VisibilitySensor>
    );
}

export default Home;