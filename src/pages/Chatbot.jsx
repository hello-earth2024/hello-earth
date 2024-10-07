import { useState, useEffect } from 'react';
import ChatBot from "react-chatbotify";
import Bubble from '../components/Bubble';
import '../assets/css/chatbot.css';
import Toast from '../components/Toast';
import { path } from 'framer-motion/client';

function Chatbot() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    let name;

    useEffect(() => {
        window.addEventListener('resize', () => {
            setViewportWidth(window.innerWidth);
        });
    }, []);

    const styles = {
        chatWindowStyle: {
            height: (viewportWidth >= 1200) ? "75vh" : "100vh",
            width: (viewportWidth >= 1200) ? "65vw" : "100vw",
            boxShadow: "0 20px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: 0,
        },
    }

    const settings = {
        general: {
            primaryColor: "#2C6C6F",
            secondaryColor: "#2C6C6F",
            embedded: true,
            fontFamily: "DM Sans, sans-serif",
            showFooter: false,
        },
        header: {
            title: (<div style={{ margin: 0, fontSize: 20, fontWeight: "bold", fontFamily: "IBM Plex Mono, monospace" }}>
                Hello, Earth!
            </div>),
            buttons: [],
            showAvatar: false,
        },
        chatHistory: {
            disabled: true,
        },
        chatWindow: {
            showScrollbar: true,
        }
    }

    const flow = {
        start: {
            message: "Hi everyone! Welcome to the \"Hello Earth\" chat, a place where we can discuss the current climate crisis and our reality. Please introduce yourself with your name:",
            path: "user_group_entrance",
        },
        user_group_entrance: {
            component: (params) => {
                return <div style={{ display: "flex", flexDirection: "column", margin: "auto", marginBottom: 0 }}><Toast name={params.userInput} /></div>
            },
            path: "allan_entrance",
            transition: 300,
            chatDisabled: true,
        },
        allan_entrance: {
            component: (
                <Toast name="Allan" />
            ),
            path: "olivia_entrance",
            transition: 300,
            chatDisabled: true,
        },
        olivia_entrance: {
            component: (
                <Toast name="Olivia" />
            ),
            path: "lucas_entrance",
            transition: 300,
            chatDisabled: true,
        },
        lucas_entrance: {
            component: (
                <Toast name="Lucas" />
            ),
            path: "allan_presentation",
            transition: 300,
            chatDisabled: true,
        },
        allan_presentation: {
            component: (params) => {
                name = params.userInput
                const text = `Nice to meet you, ${name}! I’m Allan from the Amazon. Our forest is burning like never before, and the river is drying up. My community's survival depends on this forest, and I can't just watch it disappear.
`
                return <Bubble name="Allan">
                    {text}
                </Bubble>
            },
            path: "olivia_presentation",
            transition: 4500,
            chatDisabled: true,
        },
        olivia_presentation: {
            component: (<Bubble name="Olivia">
                Hi everyone! I’m Olivia, from the Central-West. I run a small farm with my family, and climate change is really making things difficult. The weather’s unpredictable, and it’s messing with our crops. Sometimes we have too much rain, and other times not enough. I’m hoping to learn more about what’s happening in the environment and how we can adapt.
            </Bubble>),
            path: "lucas_presentation",
            transition: 7000,
            chatDisabled: true,
        },
        lucas_presentation: {
            component: (
                <Bubble name="Lucas">
                    Hey guys! I’m Lucas from São Paulo, studying Biology and focused on the climate crisis.
                    Recently, my city was ranked the most polluted in the world, causing serious health problems, especially respiratory issues. I’m here to learn how we can address this challenge.
                </Bubble>
            ),
            path: "me_presentation",
            transition: 4500,
            chatDisabled: true,
        },
        me_presentation: {
            message: "Tell them how you're glad to meet them!",
            options: { items: ["It is great meeting you all! Let’s dive into these problems!"], sendOutput: true },
            chatDisabled: true,
            path: "a1",
        },
        a1: {
            component: (
                <Bubble name="Allan">
                    Yeah, let's do it! It’s like the forest is struggling to breathe, we need to do something!
                    Have you guys heard about “flying rivers”? I learned about it in school once.
                </Bubble>
            ),
            path: "l1",
            transition: 4500,
            chatDisabled: true,
        },
        l1: {
            component: (
                <Bubble name="Lucas">
                    Oh yeah, flying rivers! It’s a pretty cool concept. They’re not actual rivers but bands of moisture in the air, kind of like invisible streams of water vapor. The Amazon releases so much water into the air that it helps regulate rain all over South America.
                </Bubble>
            ),
            path: "o1",
            transition: 4500,
            chatDisabled: true,
        },
        o1: {
            component: (
                <Bubble name="Olivia">
                    Wait, so you’re telling me that the Amazon affects the rain here in the Central-West? That could explain why the rainfall patterns have been so unpredictable on my farm...
                </Bubble>
            ),
            path: "a2",
            transition: 4500,
            chatDisabled: true,
        },
        a2: {
            component: (
                <Bubble name="Allan">
                    Yes! That’s what’s happening. When the trees get cut down, there’s less moisture going up into the air. And without that, the flying rivers stop working, which messes with the rain cycles everywhere, which then messes with the local temperature and overall climate!
                </Bubble>
            ),
            path: "q1_enunciado",
            transition: 4500,
            chatDisabled: true,
        },
        q1_enunciado: {
            message: "And you? Are you into this subject?:",
            chatDisabled: true,
            path: "q1_r",
            options: { items: ["Yes! That’s what’s happening.", "No, I don't think that’s it."], sendOutput: true }
        },
        q1_r: {
            transition: (params) => {
                if (params.prevPath === "q1_errada") {
                    return;
                }
                return { duration: 0 };
            },
            path: (params) => {
                if (params.userInput != "Yes! That’s what’s happening.") {
                    return "q1_errada";
                } else {
                    return "q1_certa";
                }
            },
            chatDisabled: true,
        },
        q1_errada: {
            message: "Are you sure? When the trees get cut down, there’s less moisture going up into the air. Could that be something?",
            transition: { duration: 0 },
            path: "q1_enunciado",
            chatDisabled: true,
        },
        q1_certa: {
            message: "Great! Let's continue",
            transition: { duration: 0 },
            chatDisabled: true,
            path: "l2",
        },
        l2: {
            component: (
                <Bubble name="Lucas">
                    You are so right! When the trees get cut down, there’s less moisture going up into the air. And without that, the flying rivers stop working, which messes with the rain cycles everywhere, which then messes with the local temperature and overall climate!
                </Bubble>
            ),
            path: "o2",
            transition: 4500,
            chatDisabled: true,
        },
        o2: {
            component: (
                <Bubble name="Olivia">
                    So, it’s not just about saving the Amazon for the people living there. We’re all impacted by it—farmers, cities, even people halfway across the continent. God, even the entire world!
                </Bubble>
            ),
            path: "a3",
            transition: 4500,
            chatDisabled: true,
        },
        a3: {
            component: () => {
                return <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "1em", width: "100%" }}>
                    <Bubble name="Allan">
                        Look at this thing that I found about fire hotspots in the Amazon, flying rivers, vegetation cover, temperature, and drought.
                    </Bubble>
                    <a href="/flyingrivers" target='blank' style={{ textAlign: "center", padding: "15px", color: "#ffffff", background: "#2C6C6F", borderRadius: "1em", boxShadow: "0 20px 10px rgba(0, 0, 0, 0.2)", display: "block" }}><strong>Click here to check the simulation out.</strong></a>
                </div>
            },
            path: "me_glad",
            transition: 4500,
            chatDisabled: true,
        },
        me_glad: {
            message: "Tell Allan how you have liked his simulation!",
            options: { items: ["Nice discovery, Allan!"], sendOutput: true },
            chatDisabled: true,
            path: "q2_enunciado",
        },
        q2_enunciado: {
            message: "Can you answer me a question about interactions? How the North and Central-West regions interact through?",
            chatDisabled: true,
            path: "q2_r",
            options: { items: ["From the drought caused by fires and deforestation in the Amazon, which results in plants releasing less moisture for the formation of flying rivers, thus negatively impacting the rainfall patterns in the Midwest region.", "The flying rivers are underground rivers that connect the Amazon to the Midwest, replenishing aquifers and rivers in the region.", "The flying rivers are wind currents that carry dust from the Midwest to fertilize the soil of the Amazon rainforest.", "The flying rivers are artificial channels created to transport water from the Amazon to the Midwest during periods of drought."], sendOutput: true }
        },
        q2_r: {
            transition: (params) => {
                if (params.prevPath === "q2_errada") {
                    return;
                }
                return { duration: 0 };
            },
            path: (params) => {
                if (params.userInput != "From the drought caused by fires and deforestation in the Amazon, which results in plants releasing less moisture for the formation of flying rivers, thus negatively impacting the rainfall patterns in the Midwest region.") {
                    return "q2_errada";
                } else {
                    return "q2_certa";
                }
            },
            chatDisabled: true,
        },
        q2_errada: {
            message: "Almost there! Try again. This section focuses on forest fires and their respective impacts, let’s think about that!",
            transition: { duration: 0 },
            path: "q2_enunciado",
            chatDisabled: true,
        },
        q2_certa: {
            message: "Great! Let's continue",
            transition: { duration: 0 },
            chatDisabled: true,
            path: "o3",
        },
        o3: {
            component:
                () => {
                    return <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "1em", width: "100%" }}>
                        <Bubble name="Olivia">
                            This is shocking! In my research, I also found some very interesting information about the rainfall patterns in my region. Check this out:
                        </Bubble>
                        <a href="/precipitation" target='blank' style={{ textAlign: "center", padding: "15px", color: "#ffffff", background: "#2C6C6F", borderRadius: "1em", boxShadow: "0 20px 10px rgba(0, 0, 0, 0.2)", display: "block" }}><strong>Click here to check the simulation out.</strong></a>
                    </div>
                },
            path: "l3",
            transition: 4500,
            chatDisabled: true,
        },
        l3: {
            component:
                () => {
                    return <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "1em", width: "100%" }}>
                        <Bubble name="Lucas">
                            Guys, and if you think that’s not alarming enough, the CO2 from the fires makes the air even worse. That’s why we’ve been having these awful air quality days in São Paulo. People are getting sick from it. The trees in the Amazon usually help absorb CO2, but without them, we’re just pumping more greenhouse gases into the air. Look at it:
                        </Bubble>
                        <a href="/carbon" target='blank' style={{ textAlign: "center", padding: "15px", color: "#ffffff", background: "#2C6C6F", borderRadius: "1em", boxShadow: "0 20px 10px rgba(0, 0, 0, 0.2)", display: "block" }}><strong>Click here to check the simulation out.</strong></a>
                    </div>
                },
            path: "q3_enunciado",
            transition: 6000,
            chatDisabled: true,
        },
        q3_enunciado: {
            message: "Now it's time to complete the phrase: So it is safe to say that ____",
            chatDisabled: true,
            path: "q3_r",
            options: { items: ["\"We can work on individual problems, since one parameter of climate change doesn’t affect the other\"", "\"Our Earth is Connected! And to guarantee a healthy future for all, we must stop deforestation and protect the flying rivers!\"", "\"...climate change in the Amazon doesn’t impact major cities like São Paulo; they have different sources of pollution.\"", "\"If everyone stays at home, we can face this challenge\""], sendOutput: true }
        },
        q3_r: {
            transition: (params) => {
                if (params.prevPath === "q3_errada") {
                    return;
                }
                return { duration: 0 };
            },
            path: (params) => {
                if (params.userInput != "\"Our Earth is Connected! And to guarantee a healthy future for all, we must stop deforestation and protect the flying rivers!\"") {
                    return "q3_errada";
                } else {
                    return "q3_certa";
                }
            },
            chatDisabled: true,
        },
        q3_errada: {
            message: "Oops! What if we focus on actions that have a greater impact instead?",
            transition: { duration: 0 },
            path: "q3_enunciado",
            chatDisabled: true,
        },
        q3_certa: {
            message: "Great! Let's continue",
            transition: { duration: 0 },
            chatDisabled: true,
            path: "a4",
        },
        a4: {
            component: (
                <Bubble name="Allan">
                    I feel like we can’t stop here. Everything we’ve discussed… It's so important! If more people need to understand this!
                </Bubble>
            ),
            path: "o4",
            transition: 4500,
            chatDisabled: true,
        },
        o4: {
            component: (
                <Bubble name="Olivia">
                    What if... we created a website? Where we could show the data and explanations we found. With graphics, videos, and stories.
                </Bubble>
            ),
            path: "l4",
            transition: 4500,
            chatDisabled: true,
        },
        l4: {
            component: (
                    <Bubble name="Lucas">
                        YES!! Let’s do it! What should we call it?
                    </Bubble>
            ),
            path: "me_proposal",
            transition: 4500,
            chatDisabled: true,
        },
        me_proposal: {
            message: "Which name do you suggest for the project?",
            options: { items: ["Hello, Earth!"], sendOutput: true },
            path: "sci_entrance",
            chatDisabled: true,
        },
        sci_entrance: {
            component: (
                <Toast name="A Futurist Scientist" />
            ),
            path: "a7",
            transition: 300,
            chatDisabled: true,
        },
        a7: {
            component: (
                <Bubble name="Allan">
                    Who's this person???
                </Bubble>
            ),
            path: "o8",
            transition: 4500,
            chatDisabled: true,
        },
        o8: {
            component: (
                <Bubble name="Olivia">
                    ????????
                </Bubble>
            ),
            path: "l6",
            transition: 4500,
            chatDisabled: true,
        },
        l6: {
            component: (
                <Bubble name="Lucas">
                    What's happening here???
                </Bubble>
            ),
            path: "god5",
            transition: 4500,
            chatDisabled: true,
        },
        god5: {
            message: "...",
            transition: 1500,
            chatDisabled: true,
            path: "god6",
        },
        god6: {
            message: "...",
            transition: 1500,
            chatDisabled: true,
            path: "god7",
        },
        god7: {
            message: "...",
            transition: 1500,
            chatDisabled: true,
            path: "sci_1",
        },
        sci_1: {
            component: (
                <Bubble name="Sci">
                    Hello to everyone involved in the “Hello, Earth!” project... My name is ******, and I’m a scientist living in the year ******. It feels surreal, but I’ve finally found a way to reach out to the past...
                </Bubble>
            ),
            path: "sci_2",
            transition: 5000,
            chatDisabled: true,
        },
        sci_2: {
            component: (
                <Bubble name="Sci">
                    From where I stand, we are facing a heartbreaking reality, one that we have crafted with our own hands. The polar ice caps, once magnificent and majestic, have melted away completely. The seas have risen, swallowing countless cities, leaving behind memories and homes washed away by relentless tides. All the coral reefs, vibrant ecosystems teeming with life, are now but ghosts of what they once were. Every time I step outside, I must don a mask with air filters, just to breathe, overwhelmed by the choking grip of pollution that suffocates our skies. Our beloved Amazon  is now in a state of irreversible decay... It has crossed its tipping points, and extreme climate events have become our painful new normal, shattering lives and dreams. Water, the very essence of life, has turned into a precious and scarce commodity. Few are fortunate enough to access clean drinking water, and the global food system, the very foundation of our existence, has been devastated by relentless droughts in agriculture...
                </Bubble>
            ),
            path: "sci_3",
            transition: 20000,
            chatDisabled: true,
        },
        sci_3: {
            component: (
                <Bubble name="Sci">
                    Please, I implore you, do not give up the fight to share your voices with the world! Communicate openly and compassionately about the challenges you face, and the beautiful truth that “our Earth is connected.” Let not the consequences of your struggles mirror the catastrophic reality I now endure...
                </Bubble>
            ),
            path: "sci_4",
            transition: 8000,
            chatDisabled: true,
        },
        sci_4: {
            component: (
                <Bubble name="Sci">
                    Hold on to the hope found in crucial actions as a way to globally act upon this issue, as brought by UN SDGs. If we fail to act immediately on this global call to end poverty, protect the environment and climate, and ensure that people everywhere can enjoy peace and prosperity, we risk losing everything. Remember, your individual actions matter. Embrace the “3Rs” — Reduce, Reuse, and Recycle; conserve energy; save water; choose sustainable transportation; engage in conscious consumption; participate in community initiatives; educate others and raise awareness; advocate for political change; and adopt sustainable technologies. Each of these small, compassionate actions, when woven together, holds the power to change the course of our collective future.
                </Bubble>
            ),
            path: "sci_5",
            transition: 15000,
            chatDisabled: true,
        },
        sci_5: {
            component: (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "1em", width: "100%" }}>
                    <Bubble name="Sci">
                    Here is my heartfelt plea... No matter how insurmountable the challenges may seem, always remember to lift your gaze from your feet and look at the world around you. Seek meaning in the beauty and the struggle that surrounds you, and ask yourself how it connects to the intricate web of life, the system of systems that is our planet. Do not lose hope. 
                    </Bubble>
                    <a href="/" target='blank' style={{ textAlign: "center", padding: "15px", color: "#ffffff", background: "#2C6C6F", borderRadius: "1em", boxShadow: "0 20px 10px rgba(0, 0, 0, 0.2)", display: "block" }}><strong>This is the end of our talking, dear friend. Click here to know more about us.</strong></a>
                </div>
            ),
            path: "end",
            transition: 7500,
            chatDisabled: true,
        },
        end: {
            chatDisabled: true
        }
    }

    return <div className="parent">
        <ChatBot styles={styles} settings={settings} flow={flow} />
    </div>
}

export default Chatbot;