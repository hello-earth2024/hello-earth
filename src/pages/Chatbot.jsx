import { useState, useEffect } from 'react';
import ChatBot from "react-chatbotify";
import Bubble from '../components/Bubble';
import '../assets/css/chatbot.css';
import Toast from '../components/Toast';

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
            transition: 0,
            chatDisabled: true,
        },
        allan_entrance: {
            component: (
                <Toast name="Allan" />
            ),
            path: "olivia_entrance",
            transition: 0,
            chatDisabled: true,
        },
        olivia_entrance: {
            component: (
                <Toast name="Olivia" />
            ),
            path: "lucas_entrance",
            transition: 0,
            chatDisabled: true,
        },
        lucas_entrance: {
            component: (
                <Toast name="Lucas" />
            ),
            path: "allan_presentation",
            transition: 0,
            chatDisabled: true,
        },
        allan_presentation: {
            component: (params) => {
                name = params.userInput
                const text = `Nice to meet you ${params.userInput}! I’m Allan, and I’m from a village in the Amazon. For us, the forest is everything, but now… it’s burning more than ever. The fires are out of control, and it feels like the rain has abandoned us. We rely on the river for water, but it’s drying up. I’m here because my community’s survival depends on this forest, and I can’t just watch it disappear.`
                return <Bubble name="Allan">
                    {text}
                </Bubble>
            },
            path: "olivia_presentation",
            transition: 0,
            chatDisabled: true,
        },
        olivia_presentation: {
            component: (<Bubble name="Olivia">
                Hi everyone! I’m Olivia, from the Central-West. I run a small farm with my family, and climate change is really making things difficult. The weather’s unpredictable, and it’s messing with our crops. Sometimes we have too much rain, and other times not enough. I’m hoping to learn more about what’s happening in the environment and how we can adapt.
            </Bubble>),
            path: "lucas_presentation",
            transition: 0,
            chatDisabled: true,
        },
        lucas_presentation: {
            component: (
                <Bubble name="Lucas">
                    Hey guys! I’m Lucas, from the Southeast. I live in São Paulo city, majoring in  Biology and have  much interest in understanding the climate crisis. Recently, my city was ranked as the most polluted city in the world! This situation has caused many health problems, especially respiratory issues. I hope to learn even more from you so that I can think about how we can tackle this health challenge.
                </Bubble>
            ),
            path: "a1",
            transition: 0,
            chatDisabled: true,
        },
        a1: {
            component: (
                <Bubble name="Allan">
                    I know what you mean, Lucas, The air quality has been terrible here too! And Olivia, the droughts? It is too much to handle!
                    The wildfires are getting worse every year, and the animals we rely on for food and medicine are disappearing.
                    It’s like the forest is struggling to breathe.
                    I heard something at school once about “flying rivers.”
                    You guys know about that?
                </Bubble>
            ),
            path: "l1",
            transition: 0,
            chatDisabled: true,
        },
        l1: {
            component: (
                <Bubble name="Lucas">
                    Oh yeah, flying rivers! It’s a pretty cool concept. They’re not actual rivers but bands of moisture in the air, kind of like invisible streams of water vapor. The Amazon releases so much water into the air that it helps regulate rain all over South America.
                </Bubble>
            ),
            path: "o1",
            transition: 0,
            chatDisabled: true,
        },
        o1: {
            component: (
                <Bubble name="Olivia">
                    Wait, so you’re telling me that the Amazon affects the rain here in the Central-West? That could explain why the rainfall patterns have been so unpredictable on my farm.
                </Bubble>
            ),
            path: "a2",
            transition: 0,
            chatDisabled: true,
        },
        a2: {
            component: (
                <Bubble name="Allan">
                    Yes! That’s what’s happening. When the trees get cut down, there’s less moisture going up into the air. And without that, the flying rivers stop working, which messes with the rain cycles everywhere which then messes with the local temperature and overall climate!
                </Bubble>
            ),
            path: "l2",
            transition: 0,
            chatDisabled: true,
        },
        l2: {
            component: (
                <Bubble name="Lucas">
                    Exactly, and it doesn’t stop there. When there’s less rain, rivers dry up, like what we’re  seeing with the Paraná River here in São Paulo. That’s probably what’s causing our water shortages. The moisture from the Amazon is supposed to help, but with all the deforestation, it’s barely reaching us.
                </Bubble>
            ),
            path: "o2",
            transition: 0,
            chatDisabled: true,
        },
        o2: {
            component: (
                <Bubble name="Olivia">
                    So it is all connected! If the Amazon dries out, so do we.
                </Bubble>
            ),
            path: "q1_enunciado",
            transition: 0,
            chatDisabled: true,
        },
        q1_enunciado: {
            message: "Guys, I got really curious and decided to do some research to understand the impact of these flying rivers. You won’t believe what I found out:",
            chatDisabled: true,
            path: "q1_r",
            options: { items: ["The flying rivers from the Amazon reach as far as Argentina, Chile, even Bolivia. If we don’t do something, it’s going to affect the way the entire world functions!", "We can ignore this issue because the earth will self-regulate and it will all be fine!", "The Amazon flying rivers only affects Brazil’s climate, since its closer to the amazon core", "The flying rivers have nothing to do with these climate impacts that we are experiencing"], sendOutput: true }
        },
        q1_r: {
            transition: (params) => {
                if (params.prevPath === "q1_errada") {
                    return;
                }
                return { duration: 0 };
            },
            path: (params) => {
                if (params.userInput != "The flying rivers from the Amazon reach as far as Argentina, Chile, even Bolivia. If we don’t do something, it’s going to affect the way the entire world functions!") {
                    return "q1_errada";
                } else {
                    return "q1_certa";
                }
            },
            chatDisabled: true,
        },
        q1_errada: {
            message: "Nice try! Why don't we focus on the international impact of flying rivers? ",
            transition: { duration: 0 },
            path: "q1_enunciado",
            chatDisabled: true,
        },
        q1_certa: {
            message: "Great!",
            transition: { duration: 0 },
            chatDisabled: true,
            path: "o3",
        },
        o3: {
            component: (
                <Bubble name="Olivia">
                    So, it’s not just about saving the Amazon for the people living there. We’re all impacted by it—farmers, cities, even people halfway across the continent.
                </Bubble>
            ),
            path: "l3",
            transition: 0,
            chatDisabled: true,
        },
        l3: {
            component: (
                <Bubble name="Lucas">
                    And that impacts food production, the economy, everything. If we don’t have water, we can’t farm, and if we can’t farm, we lose our income, our food security…
                </Bubble>
            ),
            path: "a3",
            transition: 0,
            chatDisabled: true,
        },
        a3: {
            component: () => {
                const text = `That is a great finding, ${name}! This connection truly exists! Look at this data I found about fire hotspots in the Amazon, flying rivers, vegetation cover, temperature, and drought.`
                return <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "1em", width: "100%" }}>
                    <Bubble name="Allan">
                        {text}
                    </Bubble>
                    <a href="" target='blank' style={{ textAlign: "center", padding: "15px", color: "#ffffff", background: "#2C6C6F", borderRadius: "1em", boxShadow: "0 20px 10px rgba(0, 0, 0, 0.2)", display: "block" }}><strong>Click here to check the simulation out.</strong></a>
                </div>
            },
            path: "o4",
            transition: 0,
            chatDisabled: true,
        },
        o4: {
            component: (
                <Bubble name="Olivia">
                    Oh my god! Look at how everything could become! We need to protect it if we want to protect our water, our food, and even our health.
                </Bubble>
            ),
            path: "q2_enunciado",
            transition: 0,
            chatDisabled: true,
        },
        q2_enunciado: {
            message: "Exactly! Look at how the North and Central-West regions interact through:",
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
            message: "Great!",
            transition: { duration: 0 },
            chatDisabled: true,
            path: "o5",
        },
        o5: {
            component: (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "1em", width: "100%" }}>
                    <Bubble name="Olivia">
                        This is shocking! In my research, I also found some very interesting information about the rainfall patterns in my region. Check this out:
                    </Bubble>
                    <a href="" target='blank' style={{ textAlign: "center", padding: "15px", color: "#ffffff", background: "#2C6C6F", borderRadius: "1em", boxShadow: "0 20px 10px rgba(0, 0, 0, 0.2)", display: "block" }}><strong>Click here to check the simulation out.</strong></a>
                </div>
            ),
            path: "l4",
            transition: 0,
            chatDisabled: true,
        },
        l4: {
            component: (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "1em", width: "100%" }}>
                    <Bubble name="Lucas">
                        Guys, and if you think that’s not alarming enough, the CO2 from the fires makes the air even worse. That’s why we’ve been having these awful air quality days in São Paulo. People are getting sick from it. The trees in the Amazon usually help absorb CO2, but without them, we’re just pumping more greenhouse gases into the air. Look at it:
                    </Bubble>
                    <a href="" target='blank' style={{ textAlign: "center", padding: "15px", color: "#ffffff", background: "#2C6C6F", borderRadius: "1em", boxShadow: "0 20px 10px rgba(0, 0, 0, 0.2)", display: "block" }}><strong>Click here to check the simulation out.</strong></a>
                </div>
            ),
            path: "q3_enunciado",
            transition: 0,
            chatDisabled: true,
        },
        q3_enunciado: {
            message: "Complete the phrase: So it is safe to say that____",
            chatDisabled: true,
            path: "q3_r",
            options: { items: ["\"...climate change in the Amazon doesn’t impact major cities like São Paulo; they have different sources of pollution.\"", "\"To guarantee a healthy future for all, we must stop deforestation and protect the flying rivers!\"", "\"The solution is for everyone to wear masks daily\"", "\"If everyone stays at home, we can face this challenge\""], sendOutput: true }
        },
        q3_r: {
            transition: (params) => {
                if (params.prevPath === "q3_errada") {
                    return;
                }
                return { duration: 0 };
            },
            path: (params) => {
                if (params.userInput != "\"To guarantee a healthy future for all, we must stop deforestation and protect the flying rivers!\"") {
                    return "q3_errada";
                } else {
                    return "q3_certa";
                }
            },
            chatDisabled: true,
        },
        q3_errada: {
            message: "Oops! What if we focus on actions that have a greater impact sinstead?",
            transition: { duration: 0 },
            path: "q3_enunciado",
            chatDisabled: true,
        },
        q3_certa: {
            message: "Great!",
            transition: { duration: 0 },
            chatDisabled: true,
            path: "god1",
        },
        god1: {
            message: "Alright, everyone, we’ve talked a lot about the climate interconnections in Brazil and how everything is connected—from the Amazon rainforest to the big cities. How do you think we can share this with more people?",
            transition: 0,
            chatDisabled: true,
            path: "a4",
        },
        a4: {
            component: (
                <Bubble name="Allan">
                    I feel like we can’t stop here. Everything we’ve discussed… it’s so important! If more people understood the connection between what’s happening in the rainforest and what we’re experiencing in other parts of world, maybe we could get even more support to protect the environment.
                </Bubble>
            ),
            path: "o6",
            transition: 0,
            chatDisabled: true,
        },
        o6: {
            component: (
                <Bubble name="Olivia">
                    I agree! What if we created a website? Where we could show the data and explanations we found. With graphics, videos, and stories. Because, honestly, I didn’t know how much deforestation in the Amazon affected rainfall in my region until I talked to you all...
                </Bubble>
            ),
            path: "l5",
            transition: 0,
            chatDisabled: true,
        },
        l5: {
            component: (
                <Bubble name="Lucas">
                    Yes! And I also think many people don’t understand how much this impacts even big cities, like São Paulo. We could make something accessible and interactive, where people can really feel these connections. Like… a place where the audience can explore the impact of what’s happening here in the Amazon and how it’s felt elsewhere.
                </Bubble>
            ),
            path: "a5",
            transition: 0,
            chatDisabled: true,
        },
        a5: {
            component: (
                <Bubble name="Allan">
                    Yeah, because seeing the numbers and reading scientific articles doesn’t always help. But if we create a visual experience… something that shows how the fires are causing climate changes, affecting rivers, and even impacting our health, people could feel the impact, you know?
                </Bubble>
            ),
            path: "o7",
            transition: 0,
            chatDisabled: true,
        },
        o7: {
            component: (
                <Bubble name="Olivia">
                    And we could also include stories from our communities! Show what it’s like to live in these regions, what we’re facing, and connect that to the “flying rivers,” the effects of deforestation, the fires. I think people from outside need to hear our voices too, not just see numbers and satellite images.
                </Bubble>
            ),
            path: "god2",
            transition: 0,
            chatDisabled: true,
        },
        god2: {
            message: "I think we’re onto something big here! What do you think of calling the site:",
            transition: 0,
            chatDisabled: true,
            path: "god3",
        },
        god3: {
            message: "...",
            transition: 0,
            chatDisabled: true,
            path: "god4",
        },
        god4: {
            message: "Hello, Earth!",
            transition: 0,
            chatDisabled: true,
            path: "a6",
        },
        a6: {
            component: (
                <Bubble name="Allan">
                    “Hello, Earth!”… I like it! It’s a friendly name that draws people in. The idea would be to greet the planet and, at the same time, invite people to explore these connections we’ve discussed.
                </Bubble>
            ),
            path: "sci_entrance",
            transition: 0,
            chatDisabled: true,
        },
        sci_entrance: {
            component: (
                <Toast name="A Futurist Scientist" />
            ),
            path: "a7",
            transition: 0,
            chatDisabled: true,
        },
        a7: {
            component: (
                <Bubble name="Allan">
                    Who's this person???
                </Bubble>
            ),
            path: "o8",
            transition: 0,
            chatDisabled: true,
        },
        o8: {
            component: (
                <Bubble name="Olivia">
                    ????????
                </Bubble>
            ),
            path: "l6",
            transition: 0,
            chatDisabled: true,
        },
        l6: {
            component: (
                <Bubble name="Lucas">
                    What's happening here???
                </Bubble>
            ),
            path: "god5",
            transition: 0,
            chatDisabled: true,
        },
        god5: {
            message: "...",
            transition: 0,
            chatDisabled: true,
            path: "god6",
        },
        god6: {
            message: "...",
            transition: 0,
            chatDisabled: true,
            path: "god7",
        },
        god7: {
            message: "...",
            transition: 0,
            chatDisabled: true,
            path: "sci_1",
        },
        sci_1: {
            component: (
                <Bubble name="Sci">
                    Hello to everyone involved in the “Hello, Earth!” project... My name is ******, and I’m a scientist living in the year ******. It feels surreal, but I’ve finally found a way to reach out to the past..
                </Bubble>
            ),
            path: "sci_2",
            transition: 0,
            chatDisabled: true,
        },
        sci_2: {
            component: (
                <Bubble name="Sci">
                    From where I stand, we are facing a heartbreaking reality, one that we have crafted with our own hands. The polar ice caps, once magnificent and majestic, have melted away completely. The seas have risen, swallowing countless cities, leaving behind memories and homes washed away by relentless tides. All the coral reefs, vibrant ecosystems teeming with life, are now but ghosts of what they once were. Every time I step outside, I must don a mask with air filters, just to breathe, overwhelmed by the choking grip of pollution that suffocates our skies. Our beloved Amazon  is now in a state of irreversible decay... It has crossed its tipping points, and extreme climate events have become our painful new normal, shattering lives and dreams. Water, the very essence of life, has turned into a precious and scarce commodity. Few are fortunate enough to access clean drinking water, and the global food system, the very foundation of our existence, has been devastated by relentless droughts in agriculture...
                </Bubble>
            ),
            path: "sci_3",
            transition: 0,
            chatDisabled: true,
        },
        sci_3: {
            component: (
                <Bubble name="Sci">
                    Please, I implore you, do not give up the fight to share your voices with the world! Communicate openly and compassionately about the challenges you face, and the beautiful truth that “our Earth is connected.” Let not the consequences of your struggles mirror the catastrophic reality I now endure...
                </Bubble>
            ),
            path: "sci_4",
            transition: 0,
            chatDisabled: true,
        },
        sci_4: {
            component: (
                <Bubble name="Sci">
                    Hold on to the hope found in crucial actions, like the UN Sustainable Development Goals. If you fail to act IMMEDIATELY on SDGs 13 and 15, the ripple effects will shatter all other goals, especially 2, 3, and 6. And remember, your individual actions matter... Embrace the “3Rs”: Reduce, Reuse, and Recycle; conserve energy; save water; choose sustainable transportation; engage in conscious consumption; participate in community initiatives; educate others and raise awareness; advocate for political change; and adopt sustainable technologies. Each of these small, compassionate actions, when woven together, holds the power to change the course of our collective future.
                </Bubble>
            ),
            path: "sci_5",
            transition: 0,
            chatDisabled: true,
        },
        sci_5: {
            component: (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "1em", width: "100%" }}>
                    <Bubble name="Sci">
                        Here is my heartfelt plea... No matter how insurmountable the challenges may seem, always remember to lift your gaze from your feet and look at the world around you. Seek meaning in the beauty and the struggle that surrounds you, and ask yourself how it connects to the intricate web of life, the system of systems that is our planet. Do not lose hope.
                    </Bubble>
                    <a href="" target='blank' style={{ textAlign: "center", padding: "15px", color: "#ffffff", background: "#2C6C6F", borderRadius: "1em", boxShadow: "0 20px 10px rgba(0, 0, 0, 0.2)", display: "block" }}><strong>This is the end of our talking, dear friend. Click here to know more about us.</strong></a>
                </div>
            ),
            path: "end",
            transition: 0,
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