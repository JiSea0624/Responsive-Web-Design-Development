// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Novu app loaded!');
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Get DOM elements
    const browseBtn = document.getElementById('browseBtn');
    const loginBtn = document.getElementById('loginBtn');
    const storiesSection = document.getElementById('storiesSection');
    const aboutSection = document.getElementById('aboutSection');
    const storiesGrid = document.getElementById('storiesGrid');
    const introSection = document.querySelector('.intro-section');
    
    // Sample stories data
    const sampleStories = [
        {
            id: 1,
            title: "My 7 Minutes",
            excerpt: "When Carl visits his girlfriend Liza in the hospital, he's greeted with a tender nickname he doesn't understand—'my 7 Minutes.' But the meaning becomes heartbreakingly clear...",
            summary: "When Carl visits his girlfriend Liza in the hospital, he's greeted with a tender nickname he doesn't understand—'my 7 Minutes.' But the meaning becomes heartbreakingly clear: in the seven minutes a brain stays alive after the heart stops, people relive their best memories… and for Liza, those memories are all of him. <br><br>What begins as a quiet visit turns into a terrifying fight for her life, leaving Carl helpless behind closed doors as doctors rush to save her. Through fear, prayers, and the weight of almost losing her, he realizes just how deeply their love has shaped every moment he cherishes.<br><br>A moving story about fragile moments, unforgettable memories, and the love that remains even in the quiet spaces between life and loss.",
            chapters: [
            {
                content: `
                    <p>It was already midnight when I decided to go out for a walk to the nearest park. <br><br>The air was cool and carried a faint, pleasant scent, wrapping me in a quiet calm as I arrived. The world felt still, as though the night itself was holding its breath. <br><br>I stopped at a bench, my legs suddenly heavy. Sitting down, I tilted my head back to gaze at the sky. The moon hung low, luminous and serene. <br><br><b>“The moon always waits for the stars every night.” </b><br><br>Your words echoed in my mind, unbidden. The same thing you'd say every time we walked together and looked up at the night sky. <br><br><b>“Like the moon, always remember that I will be waiting for you.” </b><br><br><i>Why now? Why, when I thought I was doing better, did these memories come rushing back?  </i><br><br>A lump formed in my throat, and before I could stop it, tears spilled over. My chest tightened, a heavy ache spreading through me. My body felt drained, but the weight in my heart hurt most of all. <br><br>Had I been lying to myself all this time? Fooling myself into believing I was healing? <br><br> “Here.” <br><br>The voice startled me. Turning to my left, I froze. <br><br>You. <br><br>Tears fell faster as my heart thundered in my chest. <br><br> “Stop crying already,” you said softly, sitting beside me. Your handkerchief brushed against my cheeks as you wiped my tears. “You're too beautiful for that.” <br><br>I could only stare, unable to speak. <br><br> “Y-you're alive?” My voice trembled. <br><br>You paused, your hand stilling. “I'm sorry, Miss. I think you've mistaken me for someone else. I was just passing by and saw you crying.” <br><br>I hurriedly wiped my face with my hands, standing up. “I'm sorry. You just look... very similar to someone I know. Thank you for helping me, but I have to go.” <br><br>I turned and walked away, my mind a whirlwind of confusion and longing. Was it really you? Could it be? Or was this stranger just someone who shared your face? <br><br>Lost in thought, I barely registered the world around me until a hand grabbed mine. I stumbled forward into someone's chest—warm, familiar. <br><br>Without thinking, I clung to them, burying my face against their shirt as sobs wracked my body. The person stiffened, but didn't pull away. They let me cry, their presence solid and comforting. <br><br>When the tears finally slowed, I stepped back, wiping my face once more. <br><br> “I'm sorry—” I began, looking up. <br><br>It was you. Again. <br><br> “I'm not who you think I am,” you said softly, handing me the handkerchief. “But someone as beautiful as you shouldn't cry. It doesn't suit you.” <br><br>You offered a sad smile before turning and walking away, your figure growing smaller with every step. I stood rooted to the spot, watching until you disappeared into the night. <br><br><br><b>The Guy's Perspective:</b><br><br>Seeing you in so much pain shattered me. Wiping your tears felt like reopening old wounds—wounds I knew I'd caused. <br><br>Pretending not to know you was agony. Every part of me wanted to hold you, to kiss you, to tell you how much I missed you. But I couldn't. I didn't deserve that anymore. <br><br>I followed you and I'm glad I did. You almost stepped into an accident —you didn't even notice. I wanted to scold you, to snap you out of the haze you were in. <br><br>But then you hugged me. I froze, startled, but I couldn't bring myself to push you away. Not when you were crying like that. Not when I knew I was the reason for your pain. <br><br>When I handed you the handkerchief and walked away, it was the hardest thing I'd ever done. My tears fell as soon as my back was turned. Because tonight might be the last time I'll see you. <br><br>I never wanted you to know the truth. Never wanted you to see the broken pieces I've become. I know it would destroy you. <br><br>But watching you cry, knowing I caused it, is a burden I'll carry forever.</p>
                    `
                }
            ],
            readTime: 5,
            author: "Mise",
            image: "pics/covers/M7M.jpg"
        },
        {
            id: 2,
            title: "Debate: Heart vs Mind",
            excerpt: "Gabriel Isaac Thorne is the boy who hides his feelings in love quotes—each one secretly written for Amara Serene Chavez...",
            summary: "Gabriel Isaac Thorne is the boy who hides his feelings in love quotes—each one secretly written for Amara Serene Chavez, the brilliant girl who has no idea she's the muse behind his every word. When their teacher announces a debate on what matters more—following the heart or the mind—they're chosen to face each other: Gab, the heart; Amara, the mind. <br><br>What begins as a playful classroom debate turns into an unexpected exchange of truths, confessions hidden between arguments, and glances neither of them can ignore. As their words clash, something deeper stirs—logic versus emotion, fear versus courage, mind versus heart. <br><br>And for the first time, Gab decides to stop writing love quotes <b>about her and finally say something to her.</b> <br><br>A light, romantic school-story about young love, courage, and the moment when the heart finally speaks louder than the mind.",
            chapters: [
            {
                content: `
                    <p>“Gab, give me a love quote for a girl.” <br><br>I looked around for a moment, pretending to think, though my heart had already whispered the answer. <br><br>As my eyes wandered aimlessly across the room, they found you. You weren’t doing anything out of the ordinary, just sitting there with your head tilted slightly, your lips curved in that soft, effortless smile that always seemed to light up everything around you. <br><br>I cleared my throat. “My eyes adore you, but it was my soul that fell in love with you.” <br><br> “Whoa,” one of my friends said, dragging out the word. “That’s deep, man. Gab, give me another one. You’re on fire today.” <br><br>I leaned back in my chair, closing my eyes for a moment to think. Or maybe just to stop myself from looking at you again. <br><br> “I love you like how I love the moon,” I said after a moment. “In all phases and even in its absence.” <br><br>My friends erupted into laughter and mock swooning. “Man, how are you so good at this stuff? I bet you’ve got a girl, don’t you? You probably say this to her all the time!” <br><br>I rolled my eyes, shaking my head. “I don’t have a girlfriend, dorks.” <br><br> “Sure, sure,” one of them said, nudging me with his elbow. “No girlfriend, huh? You’re just writing poetry for the universe, then?” <br><br>I ignored them. Their heads were full of nonsense most of the time, anyway. <br><br>As the conversation died down, I pulled out my phone and started scrolling through my social media feed. It was the same as always—pictures of sunsets, memes, and a flood of unnecessary opinions. But after a few minutes, even that failed to hold my attention. <br><br>My eyes drifted back to you and then I saw it—your laugh. <br><br>You were laughing at something your friend had said, your head tilted back slightly, your eyes crinkling at the corners. It wasn’t the loud kind of laugh that demanded attention, but it was bright and beautiful. <br><br>I quickly looked away, my heart racing for reasons I didn’t want to admit. I stared at my phone, before typing out a post: <br><br><b><i>I never knew that love had a sound until I heard you laugh.</b></i> <br><br>I hit “post” before I could think twice. <br><br>A flood of comments came almost instantly. My friends and followers filled the section with teasing remarks. <br><br><i>“Who’s the lucky girl, Gab?” <br>“Spill it, Romeo!” <br>“I wish someone would write things like this about me.”</i> <br><br>I chuckled to myself, shaking my head. My friends were relentless, but they didn’t know the truth. They didn’t know that every word I wrote, every quote they teased me for, had always been about you. <br><br>Every word I said, every poetic line that came to mind—it all started and ended with you. <br><br>A few minutes later, the teacher suddenly entered the room. <br><br>"Class, today we will be having a debate: What's more important—following your heart or following your mind?" <br><br>The room erupted in cheers and excited whispers before the teacher could finish her sentence. I leaned back in my chair, already wondering what this was going to be about. <br><br>"Quiet! Quiet!" the teacher called over the noise. "Gabriel Isaac Thorne will represent the heart, and Amara Serene Chavez will represent the mind." <br><br>The buzz got louder as my name was announced alongside hers. I caught your gaze from across the room. You gave me a raised eyebrow, her confidence radiating as always, while I smirked back. <br><br>"Thorne versus Chavez," someone whispered like it was a boxing match. <br><br>I stood and stretched, making a show of my supposed nonchalance. "Piece of cake," I said to no one in particular, though my eyes lingered on her for just a moment longer than necessary. <br><br>I saw that you are already scribbling notes with an unshakable focus. You were the kind of person who took everything seriously, the model student. I, on the other hand, was winging it, as usual. <br><br>The teacher waved us to the front. “Let’s keep it civil. Gabriel, you’ll start. Convince us why the heart should lead.” <br><br>I sauntered up to the podium, running a hand through my hair for no reason other than habit. My eyes scanned the room, but they kept pulling back to you. <br><br>"Well," I started, keeping my tone warm and casual, "the heart is what makes us human, right? It’s where passion lives, where dreams are born. Sure, logic and reason are important, but without the heart, we’re just machines. The heart gives life meaning—it’s the reason we wake up every morning." <br><br>I saw a few classmates nodding, and I couldn’t help but grin. But then my gaze landed on you again, and my confidence wavered for just a second. <br><br>"But, uh…" I cleared my throat. "The truth is, the heart can lead you places your mind never dares to go. Sometimes, following your heart means taking risks you wouldn’t calculate otherwise." <br><br>I saw how you are writing furiously, your pen moving like clockwork. I hesitated before adding, "And sometimes, your heart knows things your mind hasn’t figured out yet." <br><br>The teacher nodded. “Thank you, Gabriel. Amara, your turn.” <br><br>You stood, calm and composed, adjusting her blazer as she approached the podium. <br><br>"Thank you," you began, your voice steady and confident. "While the heart is undoubtedly important, it’s the mind that ensures we don’t let emotions cloud our judgment. The mind analyzes, plans, and protects. It prevents us from making impulsive decisions that could lead to regret." <br><br>You turned your gaze directly at me, and I swear, the room felt a little colder. <br><br>"Following your heart without the guidance of your mind," you said, "is like sailing a ship without a compass. You might feel free, but you’ll likely end up lost." <br><br>The class murmured in agreement. <br><br>"And besides," you continued, your tone softening just slightly, "logic doesn’t mean abandoning emotion. It means balancing it. The mind helps us achieve what the heart desires, but in a way that is sustainable and wise." <br><br><i>Impressive. </i><br><br>The debate went on, our points clashing like sparring partners. My arguments got bolder, more impassioned, while yours remained precise and calculated. Every word out of your mouth was like a scalpel, dissecting everything I said. <br><br>But I wasn’t really trying to win anymore. <br><br>"Here’s the thing," I said during one of my turns, my voice quieter now, more deliberate. "The mind is safe. It tells you to play it cool, to avoid risks. But if you listen to it all the time, you might miss out on something... incredible." <br><br>I looked at you, and for the first time, you faltered. Just for a second. <br><br>"Sometimes," I said, my voice soft but steady, "the heart doesn’t make sense. It doesn’t follow rules or logic. It just… knows. Like when you can’t stop thinking about someone, even when your mind tells you it’s a bad idea." <br><br>The room went silent. I felt my classmates' stares, but all I saw was you. <br><br>You stood for her rebuttal, your expression unreadable. <br><br>"The heart may be unpredictable," you said, her voice steady again, "but the mind ensures we don’t let fleeting emotions guide our lives. It helps us see the bigger picture, even when things feel overwhelming." <br><br>But then, your tone softened. "That said… the heart has a way of pushing us to be braver than we think we are. To take steps we might otherwise be too afraid to take." <br><br>I smiled, leaning back. "So… you’re saying the heart wins?" <br><br>You crossed her arms and tilted your head thoughtfully. "I’m saying they work together. But don’t get cocky, Thorne." <br><br>The teacher clapped her hands. “Excellent debate, both of you. I think we’ll let the class decide the winner.” <br><br>As we sat down, I leaned closer to you, lowering my voice so only you could hear. "Hey," I said, "you said the heart makes us braver, right?" <br><br>You nodded, curious. <br><br>"Well," I said, my grin returning, "I guess my heart’s telling me to ask if you’d like to grab coffee after school." <br><br>You blinked, caught off guard for once. Then, to my relief, you smiled. <br><br>"Maybe," you said in a teasing voice. "If your mind doesn’t talk you out of it."</p>
                    `
                }
            ],
            readTime: 5,
            author: "Mise",
            image: "pics/covers/DHVM.jpg"
        },
        {
            id: 3,
            title: "X Studio's Segment Series",
            excerpt: "Matthew Olivares never expected a mysterious letter from X Studio to pull him into an interview on Valentine's Day...",
            summary: "Matthew Olivares never expected a mysterious letter from X Studio to pull him into an interview on Valentine's Day—let alone an interview about love. What begins as a simple Q&A soon turns deeply personal as he opens up about the girl he once loved, the dreams they chased, and the heartbreak that tore them apart.<br><br>But the true purpose of the segment is revealed in an instant. <br><br>One sliding wall.<br>One held breath.<br>One unforgettable face from his past—standing right in front of him. <br><br>Brought together by a studio determined to reconnect lost bonds, Matthew must confront the love he never fully let go of… and the girl who became both his greatest memory and his greatest regret. <br><br>A gripping, emotional reunion story about unfinished love, second chances, and the truth that time can't erase.",
            chapters: [
            {
                content: `
                    <p>“Matthew Olivares! There’s a letter for you!” my mom called from outside. I put my phone down and went to grab the letter. It was from a place called X Studio. <br><br>Then my phone rang. A voice on the other end said, “Did you get the letter?” <br><br> “Yeah, what is this about?” <br><br> “Just read it and go to the address.” The call ended abruptly. <br><br>I stared at the letter, curious, but before I could open it, my mom called me again. <br><br> “Matthew, time to eat!” <br><br>After dinner, I went back to my room. Oddly, the letter was there again on my desk, as if it had been waiting for me. This time, I opened it. <br><br><i>Dear Mr. Olivares, <br>We would like to invite you for an interview at the Plaza Hall in Manila. Look for the big banner with our studio’s name; it will guide you. Please join us on February 14 at 10 a.m. <br><br>- X Studio</i> <br><br>I checked the date—it was February 13. One thing puzzled me: why schedule an interview on Valentine’s Day? <br><br>The next day, I got ready, ate breakfast, and said goodbye to my mom before heading to the address. When I arrived, I walked into the studio and asked, “Is this X Studio?” <br><br>A staff member greeted me, “Oh, hi! You must be Matthew Haziel Olivares. Come in!” <br><br>I was led into a small, soundproof room with chairs and a camera set up. The interviewer smiled at me. <br><br> “The interview we’re about to do might not feel as sweet as this day is supposed to. Hope that’s okay with you.” <br><br>I nodded, a little unsure of what to expect. <br><br>The interviewer started recording. “Let’s begin! Can you introduce yourself?” <br><br> “Hi, I’m Matthew Haziel Olivares. I’m 24, and I work as a doctor.” <br><br> “What’s your marital status?” <br><br> “Single and… taken,” I said. The interviewer looked confused, so I clarified. “I’m legally single, but in my heart, I’m taken by someone.” I gave an awkward smile. <br><br>The questions continued. <br><br> “Do you know why you’re here?” <br><br> “Not really. Why am I here?” <br><br> “We’re hosting a segment about reconnecting with someone special. A friend of yours recommended you. That’s why we sent the letter.” <br><br>I sighed. “Ah, okay.” <br><br> “Have you ever been in love?” <br><br>I smiled. <br><br> “Would you like to share why you smiled?” <br><br> “Yes. I’ve been in love. I still remember the first time I couldn’t take my eyes off her. I courted her for a year—she was focused on her studies, and I wasn’t exactly the best student. We eventually became a couple, but things didn’t work out in the end.” <br><br> “Can you describe her?” <br><br> “When we first met, I thought she’d just be an annoying friend. But she turned out to be my light in the dark. Her smile could melt your heart.” <br><br> “Why did you break up?” <br><br> “We had different goals. We tried to make it work, but in the end, we only hurt each other more.” <br><br> “Do you regret anything?” <br><br> “The only regret I have is not fighting harder to make her stay. But I held back because I didn’t want to hurt her more than she already was.” <br><br> “How did you know things were falling apart?” <br><br> “She told me one day—she was tired of loving me.” <br><br> “If you could talk to her now, what would you say?” <br><br> “I’d tell her I’m happy for her—that she’s living her dreams. And I’d hope she keeps going.” <br><br> “Do you know who you’ll meet today?” <br><br>I hesitated. “I have a guess. Based on these questions, maybe my ex. But I doubt it. She’s happy now. I don’t think she’d be here.” <br><br> “Are you ready?” <br><br> “Ready for what?” I asked, confused. <br><br>Suddenly, the wall to my left slid down quickly. Standing on the other side was her. Her face mirrored my own shock. <br><br>The interviewer smiled. “Let’s move on to the next part of the interview.”</p>
                    `
                }
            ],
            readTime: 7,
            author: "Mise",
            image: "pics/covers/XSSS.jpg"
        },
        {
            id: 4,
            title: "Taho",
            excerpt: "Five years after their painful separation, Kenneth receives a sudden phone call from LJ—the girl he once loved and never forgot...",
            summary: "Five years after their painful separation, Kenneth receives a sudden phone call from LJ—the girl he once loved and never forgot—asking to meet one last time. Torn between the life he knows and the love he left behind, Kenneth chooses to go… and that decision changes everything. <br><br>What begins as a quiet reunion at Intramuros unfolds into a heartbreaking truth: LJ is dying, and her time is running out. Determined to give her the happiness she once dreamed of, Kenneth spends her remaining days reliving their memories, creating new ones, and loving her with the time she has left. <br><br>But love cannot stop what's coming.<br><br><i>TAHO</i> is a deeply emotional story of first love, second chances, unfinished promises, and the bittersweet beauty of loving someone who's slipping away. A reminder that some goodbyes are painful… but worth every moment shared.",
            chapters: [
            {
                content: `
                    <p>I had just woken up and was about to take a bath. My friends and I were meeting for a get-together later that morning, but just as I grabbed my towel, my phone rang.<br><br><b>Unknown Number.</b><br><br><i>Hmm, I wonder who this is?</i><br><br>"Hello? Who is this?" I asked as I sat on the couch. There was no response. A minute passed, then two. Still silence.<br><br> was about to hang up when finally, a voice spoke.<br><br>"Can we meet today? By 12 p.m.?" My breath caught in my throat. <br><br><i>That voice... It can’t be.</i><br><br>”It's LJ," she continued. "I know this sounds strange, but can we meet? I promise it won't take long." <br><br>"Why?" I asked, trying to hide the shake in my voice. <br><br>"What I have to say... it has to be said in person. But if you're not free today..." There was a long pause. "Then I guess I won’t be able to say it at all." Before I could respond, she spoke again. <br><br>"I’ll be waiting for you at the entrance of Intramuros. It's your choice—to come and hear what I have to say, or to ignore this message completely." <br><br>And with that, the call ended. I glanced at the clock. It was 9:08 a.m. The get-together was at 10:30. <br><br><i>What should I do?</i><br><br>I took a shower and ate, still unsure of my decision. Eventually, I headed to the café where my friends and I were meeting. <br><br>"Kenneth! There you are! Glad you could make it!" one of my friends called out. I smiled and gave him a quick hug. "You know I wouldn’t miss this." <br><br>We shared laughter, stories, and food. For a while, I forgot the uneasiness that LJ’s call left me with. <br><br>While in the bathroom, washing my hands, a friend entered. <br><br>"Neth, do you have to go somewhere?" he asked. "You’ve been checking the clock a lot." I laughed nervously, rubbing the back of my neck. <br><br>"Well... LJ called this morning. She asked to meet up. She said it's personal, but left the decision up to me." <br><br>He looked at me knowingly. "Neth, I’ve known you too long. You won’t sleep tonight if you don’t go. You need to hear her out." <br><br>"But what if... what if not going is the better choice?" I asked quietly. <br><br>"Maybe. But aren’t you even a little curious? After everything, for her to gather the courage to call you... that must mean something." He placed a hand on my shoulder. “Go.” <br><br>I nodded slowly. "Can you tell the others I left early for a work emergency?" <br><br>"Of course." <br><br>I left the café and drove straight to Intramuros. It was already 4:00 p.m. I sped up—enough to rush, but not enough to get pulled over. <br><br><b>LJ’s Point of View</b><br>Calling him after five years might be the last time I ever speak to him. <br><br>My phone vibrated. It was my best friend. <br><br>"Hey," I answered softly. <br><br>"He’s still not there, is he?" <br><br>I sighed. "No." <br><br>"It’s been four hours, LJ. Let’s just meet and I’ll treat you to samgyupsal." <br><br>"I’ve waited five years. I can wait a little longer," I said, walking toward the entrance to buy a ticket. <br><br>"You really think he’ll come?" <br><br>"I don’t know," I admitted. <br><br>"Then why are you still hoping?" <br><br>"Because... it’s what keeps me going, Min." <br><br>"You’re so stubborn." <br><br>I chuckled. "I know. But you love me anyway." <br><br>"Five years is enough. I’m setting you up on a blind date." <br><br>I was about to protest when the staff at the booth interrupted. "How many tickets, ma’am?" <br><br>"One—" "Two tickets, please," a familiar voice said from beside me. I turned. My breath caught in my chest. Kenneth. Covered in sweat, panting, and very real. <br><br>"You ran?" I asked cautiously. <br><br>"Yeah. The parking was far. And I wasn’t sure I’d make it, so I ran." <br><br>"That’s 200 pesos. Cash or card?" I reached into my bag for my wallet, but he was quicker—already tapping his card. <br><br>"Here’s your ticket. Enjoy your visit!" <br><br>We both thanked the staff and headed inside. I checked my phone, forgotten that I was walking to Sassy a while ago, but it looks like she ended the call the moment Kenneth came. As we walked, I handed him a tissue. <br><br>"For your sweat... so you don’t catch a cold." He took it with a nod, wiping his forehead. Then he looked at me. <br><br>"Before I say what I came to say... can we pretend? Just for today? That we’re a couple again for the last time?" <br><br><b>Third Person</b><br>Kenneth didn’t understand what LJ meant by "for the last time," but he agreed. <br><br>They wandered Intramuros like old lovers. Took photos. Ate street food. Bought trinkets. <br><br>But every so often, LJ had to stop and rest, struggling to catch her breath. Kenneth always noticed—helping her sit, offering water, asking if she was okay. <br><br>It was almost 7:30 when they sat quietly on a bench, the sun starting to set.
<br><br>"I don’t know if you remember," LJ began, eyes on the horizon. "But I always said I wanted to come here on a date." <br><br>Kenneth turned to her. Her face was pale, her hands cold. <br><br>"When I was younger, I made a promise—to bring the person I would marry here." She laughed, bitter and quiet. "But that dream... it won’t happen anymore." <br><br>Suddenly, she coughed. Blood stained the tissue. She hid it before he could see, threw it away quickly, then stood up. <br><br>"I had fun today, Kennedy," she whispered, using the nickname only she had ever called him. It made his heart clench. <br><br>"But I need to go. I only asked to meet because I wanted to see you. You look happy." <br><br>He stood with her. "LJ... what’s going on?" <br><br>She hesitated before answering, “I’m not coming back anymore after this.” Kenneth froze. <br><br>"For the last five years, there was no one but you. I waited. And now, meeting you here is enough. Please be happy..." As she turned to leave, blood dripped from her nose. She wiped it quickly. <br><br>"I’ll always love you... from afar." She tried to walk away, but Kenneth chased after her. Then, suddenly, LJ collapsed. <br><br>Kenneth caught her, lowering her gently to the ground. Blood streamed from her nose. Her hands trembled. <br><br>"Kenneth," she whispered, "d-don’t tell my family..." She passed out. <br><br>People screamed. Someone called an ambulance. Kenneth held her, desperate and terrified. <br><br><b>At the Hospital</b><br>"Doctor, how is she?"The doctor sighed heavily. "She’s stable... for now. But I suggest you prepare yourself." <br><br>Kenneth’s heart raced. "Prepare? For what?" <br><br>"LJ has Stage 4 lung cancer. She was given six months to live. Given her current condition... she might not last a week. I’m sorry." <br><br>He stood in stunned silence but a voice called out. <br><br>"KENNETH!" <br><br>Then—<i>SLAP.</i><br><br>It was Sassy, LJ’s best friend. <br><br>"Letting her meet you was a mistake!" she screamed. "She waited five damn years for you! She loved you more than herself and this is how you repay her?!" Kenneth didn’t defend himself. He just stood there, broken. <br><br>"When was she diagnosed?" he finally asked. <br><br>Felix, LJ’s friend, stepped forward. "Two years ago. She kept it from everyone. She still hoped you’d come back... but her body couldn't keep up with her heart." <br><br>Kenneth couldn’t speak. The guilt consumed him. <br><br><b>Kenneth’s Point of View – Two Days Later</b><br><br>"Please... wake up," I whispered, holding her cold hand. Tears spilled down my cheeks. I pressed her hand to my forehead. Then, I felt something brush my cheek. I looked up. <br><br>Her eyes were open. She was smiling. <br><br>"Hey," she said weakly. <br><br>I collapsed into her arms, sobbing like a child. She stroked my back, comforting me. <br><br>"You’ve been asleep for two days!" I said through tears. <br><br>"You could’ve died," I whispered. <br><br>"I know... but I’m glad I didn’t. I needed to see you one last time." She paused, then cupped my face gently. <br><br>"Let’s spend my remaining time together. I don’t regret anything that happened." I tried to protest, but she cut me off with a soft smile. <br><br>"Just stay. That’s all I ask." <br><br><b>Later, in the Waiting Area</b><br><br>Felix sat beside me. <br><br>"She’s really happy, you know." <br><br>"But she’s dying," I replied quietly. <br><br>"Yes... but she’s also living—right now. With you." I looked away, tears threatening to fall again. <br><br>"Spend the time you have left with her," Felix said as he stood. "That’s what she wants." <br><br>Her words echoed in my mind. <br><br><i>"The person I bring to Intramuros will be the one I marry."</i><br><br>And in that moment, I knew exactly what to do. <br><br>After that day in the hospital, I swore to myself that I wouldn’t waste a single second. LJ’s time was ticking, but for me… every moment was precious. <br><br><b>Day 1: Midnight Stroll</b><br>That night, after she was discharged, I drove her to the baywalk. <br><br>The night breeze was soft, the moonlight gentle on her pale skin. She leaned her head against the car window, quietly watching the waves. <br><br>"Want to walk for a bit?" I asked<br><br>She nodded weakly, and I helped her out of the car. We walked slowly, hand in hand, just like we used to. <br><br>"Kennedy," she said softly, "remember when you used to bring me taho every morning?" <br><br>I laughed. "Even when you said you didn’t want any, I always brought two cups." <br><br>"I was always hoping you would," she whispered with a smile. <br><br>I stopped by a vendor and bought her taho, holding it out like it was a gift of gold. Her eyes lit up like a child’s. <br><br>"I missed this," she said, her voice full of warmth.<br><br><b>Day 2: Stargazing on the Rooftop</b><br>The next night, we went to the rooftop of her old apartment. Felix helped me get access. I brought a blanket, a thermos of hot chocolate, and her old CD player that I managed to find in storage. <br><br>As we lay on the rooftop, staring at the stars, soft music played in the background. <br><br>"This was our song..." she whispered. <br><br>"I know." <br><br>She turned her head toward me. "I didn’t think I’d get to hear it again... especially with you." <br><br>I pulled her hand to my lips and kissed it gently. <br><br>"You’ll hear it as many times as you want." <br><br>We didn’t say anything more after that. Words felt too heavy. The silence between us was filled with meaning. <br><br><b>Day 3: Bucket List—Just the Simple Things</b><br>She gave me a small folded paper that afternoon. <br><br><b>"LJ’s Tiny Bucket List"</b><br>• Ride a ferris wheel<br>• Take photo booth pictures<br>• Eat cotton candy<br>• Dance under the rain<br><br>And so, we did them all. I took her to a nearby carnival. She squealed when the ferris wheel moved, and I held her close as we reached the top. <br><br>We crammed into a small photo booth and made silly faces—even though she had to pause between takes to breathe. <br><br>She licked the cotton candy like a child, her tongue turning pink. <br><br>And when a light drizzle started outside, I looked at her, and she nodded. I lifted her up and carried her outside. We danced slowly under the rain. <br><br>She was cold. But she was smiling. <br><br>"I never thought dying could be this beautiful," she whispered. <br><br>"Don’t say that," I said, pulling her into my chest. <br><br><b>Day 4: Final Stop—Rizal Park</b><br>The sun was setting when we arrived. She had wanted to go there since she left the hospital. <br><br>I helped her walk to a bench near the monument, beneath a quiet tree. Birds fluttered overhead. Children were playing nearby. Everything was warm, quiet, peaceful. <br><br>She leaned her head on my shoulder, her breathing uneven. <br><br>For a moment, I just held her hand in silence, the weight of everything pressing down on me. Then, with trembling fingers, I reached into my pocket and pulled out the small velvet box I had been carrying for days. <br><br> “LJ…” My voice cracked. “I don’t know how much time we still have, but I can’t let it slip by without saying this.” <br><br>She turned her tired eyes toward me, questioning. <br><br>I opened the box, revealing the ring that glimmered faintly under the fading light. My throat tightened, but I forced the words out. <br><br> “Marry me,” I whispered. “Even if it’s just for tonight, even if it’s only in name, I want you to know that you’re the only woman I’ve ever wanted by my side. Be my wife, LJ.” <br><br>Her lips trembled, and tears welled in her eyes. Slowly, weakly, she nodded. <br><br> “You really are a fool,” she breathed, her smile faint but radiant despite her frailty. “But you’re my fool.” <br><br>My hands shook as I slipped the ring onto her finger, and I kissed it gently. She leaned her forehead against mine, her breath warm but fragile. <br><br>And then, with her hand still in mine, she whispered softly—<br><br> “I’m so tired, Kennedy…”<br><br>I held her hand, kissed the top of her head. <br><br>"I know. You can rest now," I said gently. "You did well, love. So, so well." <br><br>She let out a weak breath, almost like a sigh of relief. <br><br>"Can I sleep... just a little? I want to sleep," she said, her voice barely audible. <br><br>"Yes," I said, tightening my hold around her. <br><br>"You can sleep, LJ. I’ll be here." She smiled. <br><br>"Thank you for loving me... even if it’s only for a short time again." <br><br>Her fingers loosened. Her breathing slowed... then stopped. <br><br>I stayed still. <br><br>The breeze passed over us gently. <br><br>I didn't cry right away. I just closed my eyes and leaned my head against hers. <br><br>The park staff found us that way—me holding her like nothing had changed. But everything had. She was gone. <br><br>I returned to that bench a week later, holding a small box of taho, and whispered, “I’m still bringing you two.”
</p>
                    `
                }
            ],
            readTime: 9,
            author: "Mise",
            image: "pics/covers/TH.jpg"
        },
        {
            id: 5,
            title: "The Moon",
            excerpt: "On a quiet midnight walk, she finds herself beneath the moon—its soft glow stirring memories of the boy who once promised to wait for her...",
            summary: "On a quiet midnight walk, she finds herself beneath the moon—its soft glow stirring memories of the boy who once promised to wait for her like the stars wait for the night. She thought she had healed. She thought she had moved on. Until she sees someone who looks exactly like him. <br><br>A stranger… or the ghost of a love she never truly let go? <br><br>Their brief encounter shatters the walls she built around her heart, pulling her back into the ache she tried to outrun. What she doesn't know is that the man she mistakes for her past is hiding a truth of his own—one written in regret, longing, and the pain of loving her from afar. <br><br>Told from two aching hearts, <i>The Moon</i> is a haunting, bittersweet story about memories that don't fade, love that lingers even in silence, and the moment when fate lets two souls meet again… even if they can't stay.",
            chapters: [
            {
                content: `
                    <p>It was already midnight when I decided to go out for a walk to the nearest park. <br><br>The air was cool and carried a faint, pleasant scent, wrapping me in a quiet calm as I arrived. The world felt still, as though the night itself was holding its breath. <br><br>I stopped at a bench, my legs suddenly heavy. Sitting down, I tilted my head back to gaze at the sky. The moon hung low, luminous and serene. <br><br><b>“The moon always waits for the stars every night.” </b><br><br>Your words echoed in my mind, unbidden. The same thing you'd say every time we walked together and looked up at the night sky. <br><br><b>“Like the moon, always remember that I will be waiting for you.” </b><br><br><i>Why now? Why, when I thought I was doing better, did these memories come rushing back?  </i><br><br>A lump formed in my throat, and before I could stop it, tears spilled over. My chest tightened, a heavy ache spreading through me. My body felt drained, but the weight in my heart hurt most of all. <br><br>Had I been lying to myself all this time? Fooling myself into believing I was healing? <br><br> “Here.” <br><br>The voice startled me. Turning to my left, I froze. <br><br>You. <br><br>Tears fell faster as my heart thundered in my chest. <br><br> “Stop crying already,” you said softly, sitting beside me. Your handkerchief brushed against my cheeks as you wiped my tears. “You’re too beautiful for that.” <br><br>I could only stare, unable to speak. <br><br> “Y-you’re alive?” My voice trembled. <br><br>You paused, your hand stilling. “I’m sorry, Miss. I think you’ve mistaken me for someone else. I was just passing by and saw you crying.” <br><br>I hurriedly wiped my face with my hands, standing up. “I’m sorry. You just look... very similar to someone I know. Thank you for helping me, but I have to go.” <br><br>I turned and walked away, my mind a whirlwind of confusion and longing. Was it really you? Could it be? Or was this stranger just someone who shared your face? <br><br>Lost in thought, I barely registered the world around me until a hand grabbed mine. I stumbled forward into someone’s chest—warm, familiar. <br><br>Without thinking, I clung to them, burying my face against their shirt as sobs wracked my body. The person stiffened, but didn’t pull away. They let me cry, their presence solid and comforting. <br><br>When the tears finally slowed, I stepped back, wiping my face once more. <br><br> “I’m sorry—” I began, looking up. <br><br>It was you. Again. <br><br> “I’m not who you think I am,” you said softly, handing me the handkerchief. “But someone as beautiful as you shouldn’t cry. It doesn’t suit you.” <br><br>You offered a sad smile before turning and walking away, your figure growing smaller with every step. I stood rooted to the spot, watching until you disappeared into the night. <br><br><br><b>The Guy's Perspective:</b><br><br>Seeing you in so much pain shattered me. Wiping your tears felt like reopening old wounds—wounds I knew I’d caused. <br><br>Pretending not to know you was agony. Every part of me wanted to hold you, to kiss you, to tell you how much I missed you. But I couldn’t. I didn’t deserve that anymore. <br><br>I followed you and I’m glad I did. You almost stepped into an accident —you didn’t even notice. I wanted to scold you, to snap you out of the haze you were in. <br><br>But then you hugged me. I froze, startled, but I couldn’t bring myself to push you away. Not when you were crying like that. Not when I knew I was the reason for your pain. <br><br>When I handed you the handkerchief and walked away, it was the hardest thing I’d ever done. My tears fell as soon as my back was turned. Because tonight might be the last time I’ll see you. <br><br>I never wanted you to know the truth. Never wanted you to see the broken pieces I’ve become. I know it would destroy you. <br><br>But watching you cry, knowing I caused it, is a burden I’ll carry forever.</p>
                    `
                }
            ],
            readTime: 5,
            author: "Mise",
            image: "pics/covers/TM.jpg"
        },
        {
            id: 6,
            title: "Save Me (So This is Peace)",
            excerpt: "After a devastating breakup, Jess finds herself drowning in grief she can no longer contain...",
            summary: "After a devastating breakup, Jess finds herself drowning in grief she can no longer contain. One moment of overwhelming pain pushes her into a dangerous spiral—one that almost ends her life. But when she wakes in a hospital, confused and broken, she chooses to run… straight toward the edge of the rooftop where she believes peace awaits. <br><br>What Jess doesn't expect is to be found—by the friends who love her and by the boy she thought had stopped caring. As she stands on the railing, heart shattered and hope fading, a desperate confrontation unfolds. Questions demand answers. Old wounds reopen. And in one final moment, life and death hang on a single, slipping hand. <br><br>Save Me (So This Is Peace) is a raw and emotional story about heartbreak, despair, and the fragile thread that tether us to the people who refuse to let us fall. A story that asks: <br><b>When pain becomes unbearable… can love still reach you in time?</b>",
            chapters: [
            {
                content: `
                    <p>I was writing a story, our story. But I planned on giving it a happy ending—the one we never got. I decided to take a break and scrolled through Facebook when a notification popped up. It stopped me in my tracks. <br><br>I put my phone down and walked to the bathroom. <br><br>Inside, I turned on the faucet to fill the tub. Grabbing a handful of sleeping pills, I shoved them into my mouth. The water soaked me as I held a knife, trembling. <br><br>I didn’t know what to do. I couldn’t think. My mind was a whirlwind. My heart felt shattered. <br><br><i>It’s only been a month since we parted. How could you? How could we end like this? What is this feeling? It’s suffocating. It’s hopeless.</i><br><br>I wanted to cry. I wanted to scream. I wanted to die. <br><br><i>Someone, anyone… save me.</i><br><br>I made a few cuts on my wrist, yet I didn’t feel pain. I couldn’t feel anything. <br><br>Blood dripped down my arms. My vision blurred. My body felt heavy, my eyelids fighting to stay open. I don’t know how long I stayed conscious. I just remember seeing someone enter the bathroom before everything went black. <br><br>When I opened my eyes, blinding light pierced through my vision. As I adjusted to the brightness, I noticed someone sitting in a chair beside my bed, their head resting against the mattress. I couldn’t see who it was, but it didn’t matter anymore. <br><br>I pulled the needle out of my arm and slowly stood up. My legs were weak, but I managed to make it to the door. After checking if the coast was clear, I headed toward the emergency exit. <br><br>The door to the rooftop creaked as I pushed it open, and a cold breeze hit my face. I walked to the edge, tears streaming down my cheeks. But before I could jump, the door burst open behind me. <br><br>It was you—and my friends. <br><br> “Jess, don’t do it!” one of my friends shouted. You tried to approach me but stopped when you saw I was already on the railing, teetering over the edge. <br><br> “Why? Why are you here? Why do you care?!” I screamed, my voice raw with agony. <br><br> “Please, Jess,” you pleaded. “Don’t do this. This isn’t you.” <br><br> “This isn’t me?” I laughed bitterly, wiping tears from my face. “You’re right—it’s not me. But you made me like this!” My voice cracked. “How could you? Was I that easy to replace? Was your love already gone when you ended things between us? Answer me!” <br><br> “My love was never gone. It was never gone, Jess. Please, step away from the edge.” <br><br> “Lies!” I shouted as I released one hand from the railing, my body falling. You started running toward me. <br><br>Falling felt surreal. Time slowed, and I saw your face twisted in fear. I saw my friends scream. I saw your tears, and for a moment, I smiled. <br><br>This is peace, I thought. <br><br>But then… <br><br>Your hand caught mine. <br><br> “Hold on, Jess!” you yelled, your grip firm but trembling. “I’ll pull you up! Guys, help me!” Your voice sounded desperate. <br><br>My friends rushed over, all of you trying to lift me. But my weight dragged us down, and I felt your hand slipping. <br><br>Time slowed again as I saw your face. The shock, the pain… all of it etched into your expression. Tears floated around me as I began to fall again. I saw you try to jump after me, but was held back by our friends. <br><br>And in that final moment, as the world blurred, I can see my tears floating and so I smiled. <br><br><i>So this is finally peace.</i></p>
                    `
                }
            ],
            readTime: 7,
            author: "Mise",
            image: "pics/covers/SM.jpg"
        },
        {
            id: 7,
            title: "Perfect Date",
            excerpt: "After weeks of anticipation, today is finally their perfect date—coffee at the café where they first met...",
            summary: "After weeks of anticipation, today is finally their perfect date—coffee at the café where they first met, playful banter, arcade games, stolen photos, and a quiet dinner under the stars. Every moment feels soft, warm, and beautifully ordinary. The kind of day she wished could last forever.<br><br>But perfect days don't prepare you for the darkness waiting at the end. <br><br>When a hooded stranger slips past them on a secluded overlook, everything changes. Her boyfriend's laughter fades into violent coughing, panic takes over, and the night unravels into fear and confusion. The joy they built that day collapses in an instant, leaving her gripping him helplessly as the world blurs around them. <br><br>What she doesn't know yet is that this moment is only the beginning— of the truth she was never meant to discover, of the danger inching closer, and of a love now tangled in something far more sinister than heartbreak. <br><br><i>Perfect Date</i> is a gripping romantic-suspense story about love, innocence, and the one unexpected moment that flips a perfect day into a nightmare.",
            chapters: [
            {
                content: `
                    <p>I woke up feeling refreshed and excited; today was the day we were finally going on a date. After drinking a glass of water, I jumped into the shower, eager to start the day. <br><br>I chose a cute blue floral dress paired with a white bag and the heart necklace you gave me—the one with our initials etched into the pendant. Slipping on my white sandals, I headed out to our meeting place, the cafe where we first met. <br><br>We’re often mistaken for siblings because of our 10-year age gap, but that only makes our bond more unique. <br><br>Sitting inside the cozy cafe, I sipped my coffee, the warm aroma enveloping me as I waited for you. My mind wandered to all the plans we had for the day. <br><br>As I took another sip, someone covered my eyes from behind. <br><br> “Guess who?” you said in a teasing tone. <br><br>I decided to play along. “Hmm, let me think... This person is cute, handsome, and looks young. It must be Caleb!” <br><br>The hands over my eyes vanished, and you quickly sat down across from me, looking offended. <br><br> “Caleb? Do I look like Caleb? How could you not recognize my voice?” you exclaimed dramatically, your tone exaggerated. <br><br>I couldn’t help but laugh at your adorable reaction. “I’m just teasing, Boo! Of course, I knew it was you from your voice alone.” <br><br>You raised an eyebrow, curious. “How?” <br><br> “Your voice is the kind that makes people lean closer,” I said with a smile. “Not because it’s quiet, but because it carries the warmth of home. That’s how I knew.” <br><br>Your expression shifted to one of surprised admiration, which only made me laugh harder. <br><br> “Come on, we don’t have all day,” I said, grabbing your hand. We left the cafe and headed straight to the nearest arcade. <br><br>There, we lost ourselves in the fun—playing claw machines, basketball, shooting games, air hockey, and racing simulators. We even squeezed into a photo booth to capture the moment. <br><br>By the end, you’d managed to win me a small white teddy bear holding a red heart using the tickets we had earned. <br><br>Our next stop was a museum. As I admired the preserved artwork and historical exhibits, you quietly took candid pictures of me. I caught you once, and your sheepish grin made me laugh. <br><br>It was little moments like these that made me love you even more. <br><br>When we finally stepped outside, the sky had turned a deep indigo, speckled with stars. You took my hand and led me to a spot I hadn’t seen before. <br><br>The walk was quiet, the only sounds were our footsteps and the distant hum of the city. When we stopped, I gasped at the sight before me. <br><br>The city sprawled out below us, a sea of glittering lights that shimmered like jewels. The view was breathtaking, and I couldn’t tear my eyes away. <br><br> “It’s so beautiful,” I murmured, taking it all in. <br><br> “It is very beautiful,” you replied. When I glanced at you, I realized you weren’t looking at the view—you were looking at me. My cheeks flushed, but I couldn’t stop smiling. <br><br> “For the last agenda on our date, we’re having dinner here,” you announced, pulling out a bag from behind you. “I got your favorite—McDonald’s!” <br><br>We sat down on a nearby bench, eating fries and burgers under the stars. You insisted on taking photos, mostly of me, to update my social media profile picture. Your enthusiasm was contagious, and I couldn’t stop laughing as you directed my poses. <br><br>But as I smiled for the camera, something or rather someone caught my attention. A figure dressed entirely in black hoodie, face mask, pants, and sneakers, the figure approached from behind you. <br><br>They passed by quickly, but you suddenly stopped smiling. Your expression darkened, and the joyful moment shattered. <br><br> “What’s wrong?” I asked, concerned, but before you could answer, you cough violently. <br><br>Panic surged through me as I rushed to your side. <br><br> “What’s happening? Are you okay?” I cried, holding onto you. Your face was pale, your breaths shallow. The figure in black was long gone, and I felt helpless, tears streaming down my face as I desperately called for help. <br><br>The joyous day we had shared seemed like a distant memory, replaced by a creeping sense of dread. <br><br>The world seemed to blur, and I clung to you, unsure of what would happen next. <br><br>Something wasn’t right, and deep down, I knew this was just the beginning of something far darker.</p>
                    `
                }
            ],
            readTime: 7,
            author: "Mise",
            image: "pics/covers/PD.jpg"
        }
    ];
    
    // Function to show stories and about section
    function showStoriesAndAbout() {
        console.log('Browse button clicked!');
        
        // Hide the intro section
        introSection.style.display = 'none';
        
        // Show the stories section
        storiesSection.classList.remove('hidden');
        
        // Show the about section
        aboutSection.classList.remove('hidden');
        
        // Load stories into the grid
        loadStories();
        
        // Smooth scroll to stories section
        storiesSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
    
    // Function to load stories into the grid
    function loadStories() {
        // Clear any existing content
        storiesGrid.innerHTML = '';
        
        // Add each story to the grid
        sampleStories.forEach(story => {
            const storyCard = document.createElement('div');
            storyCard.className = 'story-card';
            storyCard.dataset.id = story.id;
            
            storyCard.innerHTML = `
                <div class="story-image">
                    <img src="${story.image}" alt="${story.title}">
                </div>
                <div class="story-content">
                    <h3 style="letter-spacing: 1px;">${story.title}</h3>
                    <p>${story.excerpt}</p>
                    <div class="story-meta">
                        <span>Fiction</span>
                        <span>${story.readTime} min read</span>
                    </div>
                    <button class="read-btn" data-id="${story.id}">Read Story</button>
                </div>
            `;
            
            storiesGrid.appendChild(storyCard);
        });
        
        // Add event listeners to story cards
        document.querySelectorAll('.story-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target.classList.contains('read-btn')) {
                    e.stopPropagation();
                    const storyId = e.target.dataset.id;
                    readStory(storyId);
                } else if (!e.target.classList.contains('story-card') && 
                           !e.target.classList.contains('story-content') && 
                           !e.target.closest('button')) {
                    const storyId = this.dataset.id;
                    readStory(storyId);
                }
            });
        });
    }
    
    // Function to handle reading a story
    function readStory(storyId) {
        const story = sampleStories.find(s => s.id == storyId);
        if (story) {
            showStoryReader(story);
        }
    }
    
    // Function to show story reader
    function showStoryReader(story) {
        const existingModal = document.querySelector('.story-reader-modal');
        if (existingModal) {
            document.body.removeChild(existingModal);
        }
        
        const modal = document.createElement('div');
        modal.className = 'story-reader-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;
        
        modal.innerHTML = `
            <div class="story-reader-content" style="
                background: white;
                border-radius: var(--border-radius);
                padding: 30px;
                max-width: 800px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
            ">
                <button class="close-btn" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    color: var(--color);
                ">×</button>
                
                <div class="story-preview">
                    <h2 style="font-family: var(--font-titles); color: var(--hover-color); margin-bottom: 10px; letter-spacing: 1.5px;">
                        ${story.title}
                    </h2>
                    <p style="color: var(--color); opacity: 0.8; margin-bottom: 20px;">
                        By ${story.author} • ${story.readTime} min read
                    </p>
                    
                    ${story.image ? `
                        <div style="margin: 25px 0; text-align: center;">
                            <img src="${story.image}" alt="${story.title}" style="
                                max-width: 200px;
                                max-height: 300px;
                                border-radius: var(--border-radius);
                                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                            ">
                        </div>
                    ` : ''}
                    
                    <div class="story-description" style="
                        margin: 30px 0;
                        padding: 25px;
                        background: #f9f9f9;
                        border-radius: var(--border-radius);
                        border-left: 4px solid var(--button-bg);
                    ">
                        <h3 style="font-family: var(--font-titles); color: var(--color); margin-bottom: 15px;">
                            About This Story
                        </h3>
                        <p style="color: var(--color); line-height: 1.7; font-size: 1.1rem;">
                            ${story.summary}
                        </p>
                    </div>
                    
                    <div class="start-reading-section" style="text-align: center; margin: 40px 0;">
                        <button class="start-reading-btn" data-story-id="${story.id}" style="
                            padding: 18px 50px;
                            background-color: #FF8A4C;
                            color: white;
                            border: none;
                            border-radius: 20px;
                            font-family: var(--font-titles);
                            font-size: 1.3rem;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
                        ">
                            Start Reading
                        </button>
                        <p style="margin-top: 15px; color: var(--color); opacity: 0.7; font-style: italic;">
                            Click to begin reading this story
                        </p>
                    </div>
                </div>
                
                <div class="story-content-view" style="display: none;"></div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.start-reading-btn').addEventListener('click', function() {
            showStoryContent(modal, story);
        });
        
        modal.querySelector('.close-btn').addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        document.addEventListener('keydown', function closeOnEscape(e) {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', closeOnEscape);
            }
        });
    }

    function showStoryContent(modal, story) {
        modal.querySelector('.story-preview').style.display = 'none';
        
        const contentDiv = modal.querySelector('.story-content-view');
        contentDiv.style.display = 'block';
        
        const chapter = story.chapters && story.chapters.length > 0 ? story.chapters[0] : null;
        
        contentDiv.innerHTML = `
            <div class="full-story-view">
                <button class="back-to-description-btn" style="
                    padding: 10px 20px;
                    background: #FF8A4C;
                    border: 1px solid #ddd;
                    border-radius: 20px;
                    cursor: pointer;
                    font-family: var(--font-family);
                    color: white;
                    margin-bottom: 25px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                ">
                    ← Back to Description
                </button>
                
                <div style="text-align: center; margin-bottom: 40px;">
                    <h1 style="font-family: var(--font-titles); color: var(--hover-color); margin-bottom: 10px; letter-spacing: 2px;">
                        ${story.title}
                    </h1>
                    <p style="color: var(--color); opacity: 0.8; font-size: 1.1rem;">
                        By ${story.author}
                    </p>
                    <div style="
                        display: inline-block;
                        margin-top: 10px;
                        padding: 5px 15px;
                        background: var(--header-bg);
                        border-radius: 20px;
                        color: var(--color);
                        font-size: 0.9rem;
                    ">
                        ${story.readTime} min read
                    </div>
                </div>
                
                <div class="story-text-content" style="
                    line-height: 1.9;
                    font-size: 1.15rem;
                    color: #333;
                    padding: 30px;
                    background: #fcfcfc;
                    border-radius: var(--border-radius);
                    margin-bottom: 30px;
                    text-align: justify;
                ">
                    ${chapter ? chapter.content : '<p>Story content not available.</p>'}
                </div>

                <div style="
                    text-align: center;
                    margin: 60px 0;
                    padding: 40px 0;
                    position: relative;
                ">
                    <div style="
                        position: absolute;
                        top: 50%;
                        left: 20%;
                        right: 20%;
                        height: 1px;
                        background: linear-gradient(to right, transparent, #FF8A4C, transparent);
                        transform: translateY(-50%);
                    "></div>
                    
                    <div style="
                        display: inline-block;
                        background: white;
                        padding: 0 30px;
                        position: relative;
                        z-index: 1;
                    ">
                        <div style="
                            font-family: var(--font-titles);
                            font-size: 2.5rem;
                            color: #FF8A4C;
                            font-weight: bold;
                            letter-spacing: 8px;
                            text-transform: uppercase;
                            opacity: 0.8;
                        ">
                            Fin
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                    <button class="share-story-btn" style="
                        padding: 12px 25px;
                        background: #FF8A4C;
                        border: none;
                        border-radius: 20px;
                        cursor: pointer;
                        font-family: var(--font-family);
                        color: white;
                    ">
                        📖 Share Story
                    </button>
                </div>
                
                <div class="comments-section" style="
                    margin-top: 50px;
                    padding: 30px;
                    background: var(--header-bg);
                    border-radius: var(--border-radius);
                ">
                    <h3 style="font-family: var(--font-titles); margin-bottom: 20px; color: var(--color);">
                        Comments (<span class="comment-count">0</span>)
                    </h3>
                    
                    <div class="comment-form" style="margin-bottom: 30px;">
                        <textarea class="comment-input" placeholder="Share your thoughts about this story..." style="
                            width: 98%;
                            padding: 15px;
                            border-radius: var(--border-radius);
                            border: 1px solid #ddd;
                            font-family: var(--font-family);
                            font-size: 1rem;
                            resize: none;
                            min-height: 120px;
                            margin-bottom: 15px;
                        "></textarea>
                        <button class="post-comment-btn" style="
                            padding: 12px 30px;
                            background: #FF8A4C;
                            color: white;
                            border: none;
                            border-radius: 20px;
                            cursor: pointer;
                            font-family: var(--font-family);
                            font-size: 1rem;
                        ">
                            Post Comment
                        </button>
                    </div>
                    
                    <div class="comments-list">
                        <p class="no-comments" style="
                            text-align: center;
                            color: var(--color);
                            opacity: 0.7;
                            font-style: italic;
                            padding: 20px;
                        ">
                            No comments yet. Be the first to share your thoughts!
                        </p>
                    </div>
                </div>
            </div>
        `;
        
        const backButton = contentDiv.querySelector('.back-to-description-btn');
        backButton.addEventListener('click', () => {
            contentDiv.style.display = 'none';
            modal.querySelector('.story-preview').style.display = 'block';
        });
        
        const shareButton = contentDiv.querySelector('.share-story-btn');
        if (shareButton) {
            shareButton.addEventListener('click', () => {
                if (navigator.share) {
                    navigator.share({
                        title: story.title,
                        text: story.summary,
                        url: window.location.href
                    });
                } else {
                    navigator.clipboard.writeText(window.location.href)
                        .then(() => {
                            showNotification('Link copied to clipboard!', 'success');
                        })
                        .catch(() => {
                            prompt('Copy this link to share:', window.location.href);
                        });
                }
            });
        }
        
        loadComments(contentDiv, story.id);
        
        const commentButton = contentDiv.querySelector('.post-comment-btn');
        commentButton.addEventListener('click', async function() {
            const textarea = contentDiv.querySelector('.comment-input');
            const commentText = textarea.value.trim();
            
            if (!commentText) {
                showNotification('Please write a comment before posting.', 'error');
                textarea.focus();
                return;
            }
            
            try {
                const newComment = await CommentsAPI.postComment(story.id, commentText);
                
                textarea.value = '';
                
                const commentsList = contentDiv.querySelector('.comments-list');
                const noCommentsMsg = contentDiv.querySelector('.no-comments');
                
                if (noCommentsMsg) {
                    noCommentsMsg.remove();
                }
                
                const commentElement = createCommentElement(newComment);
                commentsList.insertBefore(commentElement, commentsList.firstChild);
                
                const commentCount = contentDiv.querySelector('.comment-count');
                const currentCount = parseInt(commentCount.textContent) || 0;
                commentCount.textContent = currentCount + 1;
                
                showNotification('Comment posted successfully!', 'success');
                
            } catch (error) {
                console.error('Error posting comment:', error);
                showNotification('Failed to post comment. Please try again.', 'error');
            }
        });
    }
    
    // Event Listeners
    browseBtn.addEventListener('click', showStoriesAndAbout);
    
    console.log('Event listeners set up successfully!');
    
    Auth.checkAuth().then(user => {
        updateUIForUser(user);
    });
});

// Auth module
const Auth = {
    currentUser: null,
    
    async login(username, password) {
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.currentUser = data.user;
                localStorage.setItem('novu_user', JSON.stringify(data.user));
                return { success: true, user: data.user };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Network error. Please try again.' };
        }
    },
    
    async register(username, email, password) {
        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.currentUser = data.user;
                localStorage.setItem('novu_user', JSON.stringify(data.user));
                return { success: true, user: data.user };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error('Register error:', error);
            return { success: false, message: 'Network error. Please try again.' };
        }
    },
    
    logout() {
        this.currentUser = null;
        localStorage.removeItem('novu_user');
    },
    
    async checkAuth() {
        const savedUser = localStorage.getItem('novu_user');
        if (savedUser) {
            try {
                const user = JSON.parse(savedUser);
                const response = await fetch(`http://localhost:3000/api/current-user?userId=${user.id}`);
                const data = await response.json();
                
                if (data.user) {
                    this.currentUser = data.user;
                    return data.user;
                } else {
                    this.logout();
                    return null;
                }
            } catch {
                this.logout();
                return null;
            }
        }
        return null;
    }
};

// Comments API module
const CommentsAPI = {
  baseURL: 'http://localhost:3000/api',
  
  async getComments(storyId) {
    try {
      const response = await fetch(`${this.baseURL}/comments/${storyId}`);
      if (!response.ok) throw new Error('Failed to fetch comments');
      const comments = await response.json();
      return comments;
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  },
  
  async postComment(storyId, content) {
    try {
      const response = await fetch(`${this.baseURL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          storyId,
          content,
          userId: Auth.currentUser ? Auth.currentUser.id : null,
          username: Auth.currentUser ? Auth.currentUser.username : null
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to post comment');
      }
      
      return data.comment;
      
    } catch (error) {
      console.error('Error posting comment:', error);
      throw error;
    }
  },
  
  async likeComment(commentId) {
    try {
        const response = await fetch(`${this.baseURL}/comments/${commentId}/like`, {
            method: 'POST'
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Failed to like comment');
        }
        
        return data; // Now returns { success, message, likes, comment }
        
    } catch (error) {
        console.error('Error liking comment:', error);
        throw error;
    }
},
  
  async deleteComment(commentId) {
    try {
      const response = await fetch(`${this.baseURL}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: Auth.currentUser ? Auth.currentUser.id : null
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete comment');
      }
      
      return data;
      
    } catch (error) {
      console.error('Error deleting comment:', error);
      throw error;
    }
  }
};

// Helper function to load comments
async function loadComments(contentDiv, storyId) {
    const commentsList = contentDiv.querySelector('.comments-list');
    const commentCount = contentDiv.querySelector('.comment-count');
    
    try {
        const comments = await CommentsAPI.getComments(storyId);
        
        console.log('Loading comments, count:', comments.length);
        console.log('Comments list element:', commentsList);
        console.log('Comment count element:', commentCount);
        
        if (comments.length === 0) {
            return;
        }
        
        const noCommentsMsg = contentDiv.querySelector('.no-comments');
        if (noCommentsMsg) {
            noCommentsMsg.remove();
        }
        
        commentsList.innerHTML = '';
        
        if (comments.length === 0) {
            // Show "no comments" message
            const noCommentsMsg = document.createElement('p');
            noCommentsMsg.className = 'no-comments';
            noCommentsMsg.style.cssText = `
                text-align: center;
                color: var(--color);
                opacity: 0.7;
                font-style: italic;
                padding: 20px;
            `;
            noCommentsMsg.textContent = 'No comments yet. Be the first to share your thoughts!';
            commentsList.appendChild(noCommentsMsg);
            return;
        }
        
        // Add each comment
        comments.forEach(comment => {
            const commentElement = createCommentElement(comment);
            commentsList.appendChild(commentElement);
        });
        
    } catch (error) {
        console.error('Failed to load comments:', error);
        
        // Show error state
        commentsList.innerHTML = `
            <p style="text-align: center; color: #ff6b6b; padding: 20px;">
                Failed to load comments. Please try again.
            </p>
        `;
        commentCount.textContent = '0';
    }
}

// Function to create a comment element
function createCommentElement(comment) {
    const div = document.createElement('div');
    div.className = 'comment-item';
    div.style.cssText = `
        padding: 20px;
        margin-bottom: 20px;
        background: white;
        border-radius: var(--border-radius);
        border-left: 4px solid #FF8A4C;
        position: relative;
    `;
    
    const timeAgo = getTimeAgo(comment.timestamp);
    
    // Check if current user owns this comment
    const isOwnComment = Auth.currentUser && (
        comment.userId === Auth.currentUser.id || 
        comment.username === Auth.currentUser.username
    );
    
    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
            <div style="display: flex; align-items: center;">
                <div style="
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: var(--header-bg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 15px;
                    font-weight: bold;
                    color: #FF8A4C;
                ">
                    ${comment.username.charAt(0).toUpperCase()}
                </div>
                <div>
                    <strong style="color: var(--color);">${comment.username}</strong>
                    <div style="color: var(--color); opacity: 0.7; font-size: 0.9rem;">
                        ${timeAgo}
                    </div>
                </div>
            </div>
            ${isOwnComment ? `
                <button class="delete-comment-btn" data-id="${comment.id}" style="
                    background: none;
                    border: none;
                    color: #ff6b6b;
                    cursor: pointer;
                    opacity: 0.6;
                    font-size: 1.2rem;
                    padding: 5px;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                " title="Delete comment">
                    ×
                </button>
            ` : ''}
        </div>
        <p style="color: var(--color); line-height: 1.6; margin: 0 0 15px 0;">
            ${comment.content}
        </p>
        <div style="display: flex; align-items: center; gap: 10px;">
            <button class="like-comment-btn" data-id="${comment.id}" style="
                background: none;
                border: none;
                color: var(--color);
                cursor: pointer;
                opacity: 0.7;
                display: flex;
                align-items: center;
                gap: 5px;
                font-size: 0.9rem;
                padding: 5px 10px;
                border-radius: 15px;
                transition: all 0.3s ease;
            ">
                ♡ <span class="like-count">${comment.likes || 0}</span>
            </button>
        </div>
    `;
    
    // Add like functionality (improved version)
    const likeBtn = div.querySelector('.like-comment-btn');
    likeBtn.addEventListener('click', async function() {
        const commentId = this.dataset.id;
        const commentElement = this.closest('.comment-item');
        
        // Store current state for error recovery
        const currentLikeCount = this.querySelector('.like-count').textContent;
        const currentButtonHTML = this.innerHTML;
        
        try {
            // Show loading state
            this.disabled = true;
            this.innerHTML = '...';
            
            const result = await CommentsAPI.likeComment(commentId);
            
            // Update ONLY the like count, don't recreate the entire element
            const likeCountSpan = this.querySelector('.like-count');
            if (likeCountSpan) {
                likeCountSpan.textContent = result.likes;
            }
            
            // Update button appearance
            this.innerHTML = '❤️ <span class="like-count">' + result.likes + '</span>';
            this.style.color = '#FF8A4C';
            
            // Re-enable button after delay
            setTimeout(() => {
                this.disabled = false;
                // Keep the red heart but allow clicking again
            }, 1000);
            
        } catch (error) {
            console.error('Error liking comment:', error);
            
            // Restore original state
            this.innerHTML = currentButtonHTML;
            const likeCountSpan = this.querySelector('.like-count');
            if (likeCountSpan) {
                likeCountSpan.textContent = currentLikeCount;
            }
            this.disabled = false;
            this.style.color = '';
            
            showNotification('Failed to like comment', 'error');
        }
    });
    
    // Add delete functionality if it's the user's own comment
    if (isOwnComment) {
        const deleteBtn = div.querySelector('.delete-comment-btn');
        deleteBtn.addEventListener('click', async function() {
            const commentId = this.dataset.id;
            const commentElement = this.closest('.comment-item');
            
            // Confirm deletion
            if (!confirm('Are you sure you want to delete this comment?')) {
                return;
            }
            
            try {
                // Show loading on delete button
                this.textContent = '...';
                this.disabled = true;
                
                // Delete the comment
                await CommentsAPI.deleteComment(commentId);
                
                // Remove comment from UI with animation
                commentElement.style.opacity = '0.5';
                commentElement.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    commentElement.remove();
                    
                    // Update comment count
                    const commentsList = commentElement.closest('.comments-list');
                    const commentCount = commentElement.closest('.comments-section').querySelector('.comment-count');
                    const remainingComments = commentsList.querySelectorAll('.comment-item').length;
                    commentCount.textContent = remainingComments;
                    
                    // Show "no comments" message if all comments deleted
                    if (remainingComments === 0) {
                        const noCommentsMsg = document.createElement('p');
                        noCommentsMsg.className = 'no-comments';
                        noCommentsMsg.style.cssText = `
                            text-align: center;
                            color: var(--color);
                            opacity: 0.7;
                            font-style: italic;
                            padding: 20px;
                        `;
                        noCommentsMsg.textContent = 'No comments yet. Be the first to share your thoughts!';
                        commentsList.appendChild(noCommentsMsg);
                    }
                    
                    showNotification('Comment deleted successfully', 'success');
                }, 300);
                
            } catch (error) {
                console.error('Error deleting comment:', error);
                showNotification('Failed to delete comment', 'error');
                
                // Reset delete button
                this.textContent = '×';
                this.disabled = false;
            }
        });
        
        // Add hover effect for delete button
        deleteBtn.addEventListener('mouseenter', function() {
            this.style.opacity = '1';
            this.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
        });
        
        deleteBtn.addEventListener('mouseleave', function() {
            this.style.opacity = '0.6';
            this.style.backgroundColor = 'transparent';
        });
    }
    
    return div;
}

// Helper function for time ago
function getTimeAgo(timestamp) {
    const now = new Date();
    const commentDate = new Date(timestamp);
    const diffMs = now - commentDate;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    return commentDate.toLocaleDateString();
}

// Update UI based on user login state
function updateUIForUser(user) {
    const loginBtn = document.getElementById('loginBtn');

    if (!loginBtn) return;

    loginBtn.classList.add('login-btn-hover');
    
    if (user) {
        loginBtn.textContent = `Hi, ${user.username}`;
        loginBtn.style.backgroundColor = '#FF8A4C';
        loginBtn.style.color = 'white';
        
        loginBtn.onclick = async function() {
            if (confirm('Are you sure you want to logout?')) {
                Auth.logout();
                updateUIForUser(null);
                showNotification('Logged out successfully!', 'success');
            }
        };
    } else {
        loginBtn.textContent = 'Login';
        loginBtn.style.backgroundColor = '';
        loginBtn.style.color = '';
        loginBtn.onclick = showAuthModal;
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'error' ? '#ff6b6b' : type === 'success' ? '#51cf66' : '#339af0'};
        color: white;
        border-radius: var(--border-radius);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Show authentication modal (login/register/reset password)
function showAuthModal() {
    const existingModal = document.querySelector('.auth-modal');
    if (existingModal) {
        document.body.removeChild(existingModal);
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'auth-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    modal.innerHTML = `
    <div class="auth-modal-content">
        <button class="close-auth-btn">×</button>
        
        <div class="auth-tabs">
            <button class="auth-tab active" data-tab="login">Login</button>
            <button class="auth-tab" data-tab="register">Register</button>
        </div>
        
        <div id="authMessage"></div>
        
        <div class="auth-forms">
            <!-- Login Form -->
            <form id="loginForm" class="auth-form active">
                <div class="form-group">
                    <input type="text" id="loginUsername" placeholder="Username" required>
                </div>
                <div class="form-group">
                    <input type="password" id="loginPassword" placeholder="Password" required>
                </div>
                <div class="form-group" style="text-align: right;">
                    <button type="button" class="show-reset-btn">Reset password?</button>
                </div>
                <button type="submit" class="auth-submit-btn">Log In</button>
            </form>
            
            <!-- Register Form -->
            <form id="registerForm" class="auth-form">
                <div class="form-group">
                    <input type="text" id="regUsername" placeholder="Username (min 3 characters)" required>
                </div>
                <div class="form-group">
                    <input type="email" id="regEmail" placeholder="Email (optional)">
                </div>
                <div class="form-group">
                    <input type="password" id="regPassword" placeholder="Password (min 6 characters)" required>
                </div>
                <div class="form-group">
                    <input type="password" id="regConfirmPassword" placeholder="Confirm Password" required>
                </div>
                <button type="submit" class="auth-submit-btn">Create Account</button>
            </form>
            
            <!-- Reset Password Form -->
            <form id="resetForm" class="auth-form">
                <div class="form-group">
                    <input type="text" id="resetUsername" placeholder="Enter your username" required>
                </div>
                <div class="form-group">
                    <input type="password" id="currentPassword" placeholder="Current password" required>
                </div>
                <div class="form-group">
                    <input type="password" id="newPassword" placeholder="New password (min 6 characters)" required>
                </div>
                <div class="form-group">
                    <input type="password" id="confirmNewPassword" placeholder="Confirm new password" required>
                </div>
                
                <div class="form-buttons">
                    <button type="button" class="back-to-login-btn">← Back</button>
                    <button type="submit" class="auth-submit-btn reset-btn">
                        <span id="resetBtnText">Update Password</span>
                        <span id="resetBtnSpinner" class="btn-spinner">⏳</span>
                    </button>
                </div>
                
                <div class="reset-info">
                    <p>Enter your username, current password, and new password</p>
                </div>
            </form>
        </div>
    </div>
`;
    
    document.body.appendChild(modal);
    
    // Helper function to show message
    function showAuthMessage(text, type = 'info') {
        const messageEl = modal.querySelector('#authMessage');
        messageEl.textContent = text;
        messageEl.style.display = 'block';
        
        // Set colors based on type
        if (type === 'error') {
            messageEl.style.backgroundColor = '#f8d7da';
            messageEl.style.color = '#721c24';
            messageEl.style.border = '1px solid #f5c6cb';
        } else if (type === 'success') {
            messageEl.style.backgroundColor = '#d4edda';
            messageEl.style.color = '#155724';
            messageEl.style.border = '1px solid #c3e6cb';
        } else {
            messageEl.style.backgroundColor = '#d1ecf1';
            messageEl.style.color = '#0c5460';
            messageEl.style.border = '1px solid #bee5eb';
        }
        
        // Auto-hide after 5 seconds for success/info
        if (type !== 'error') {
            setTimeout(() => {
                messageEl.style.display = 'none';
            }, 5000);
        }
    }
    
    // Tab switching
    const tabs = modal.querySelectorAll('.auth-tab');
    const forms = modal.querySelectorAll('.auth-form');
    
    function switchTab(tabName) {
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        modal.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Show corresponding form
        forms.forEach(form => {
            form.classList.remove('active');
            if (form.id === `${tabName}Form`) {
                form.classList.add('active');
            }
        });
        
        // Clear message when switching tabs
        modal.querySelector('#authMessage').style.display = 'none';
        
        // Clear all form fields when switching
        if (tabName === 'reset') {
            modal.querySelector('#resetUsername').value = '';
            modal.querySelector('#currentPassword').value = '';
            modal.querySelector('#newPassword').value = '';
            modal.querySelector('#confirmNewPassword').value = '';
        }
    }
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // "Reset password?" button in login form
    const showResetBtn = modal.querySelector('.show-reset-btn');
    showResetBtn.addEventListener('click', function() {
        switchTab('reset');
    });
    
    // "Back to Login" button in reset password form
    const backToLoginBtn = modal.querySelector('.back-to-login-btn');
    backToLoginBtn.addEventListener('click', function() {
        switchTab('login');
    });
    
    // Login form submission
    modal.querySelector('#loginForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        
        const result = await Auth.login(username, password);
        
        if (result.success) {
            showNotification('Login successful! Welcome back.', 'success');
            updateUIForUser(result.user);
            document.body.removeChild(modal);
        } else {
            showAuthMessage(result.message, 'error');
        }
    });
    
    // Register form submission
    modal.querySelector('#registerForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        
        // Validation
        if (password !== confirmPassword) {
            showAuthMessage('Passwords do not match', 'error');
            return;
        }
        
        if (password.length < 6) {
            showAuthMessage('Password must be at least 6 characters', 'error');
            return;
        }
        
        if (username.length < 3) {
            showAuthMessage('Username must be at least 3 characters', 'error');
            return;
        }
        
        const result = await Auth.register(username, email, password);
        
        if (result.success) {
            showNotification('Registration successful! Welcome to Novu.', 'success');
            updateUIForUser(result.user);
            document.body.removeChild(modal);
        } else {
            showAuthMessage(result.message, 'error');
        }
    });
    
    // Reset Password form submission
    modal.querySelector('#resetForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = document.getElementById('resetUsername').value.trim();
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmNewPassword = document.getElementById('confirmNewPassword').value;
        
        // Validation
        if (!username) {
            showAuthMessage('Please enter your username', 'error');
            return;
        }
        
        if (!currentPassword) {
            showAuthMessage('Please enter your current password', 'error');
            return;
        }
        
        if (!newPassword || !confirmNewPassword) {
            showAuthMessage('Please enter and confirm your new password', 'error');
            return;
        }
        
        if (newPassword !== confirmNewPassword) {
            showAuthMessage('New passwords do not match', 'error');
            return;
        }
        
        if (newPassword.length < 6) {
            showAuthMessage('New password must be at least 6 characters', 'error');
            return;
        }
        
        // Don't allow same password
        if (currentPassword === newPassword) {
            showAuthMessage('New password cannot be the same as current password', 'error');
            return;
        }
        
        // Show loading
        const resetBtnText = modal.querySelector('#resetBtnText');
        const resetBtnSpinner = modal.querySelector('#resetBtnSpinner');
        resetBtnText.textContent = 'Updating...';
        resetBtnSpinner.style.display = 'inline-block';
        modal.querySelector('#resetForm button[type="submit"]').disabled = true;
        
        try {
            // Reset password request
            const response = await fetch('http://localhost:3000/api/reset-password-simple', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    username,
                    currentPassword,
                    newPassword,
                    confirmPassword: confirmNewPassword
                })
            });
            
            const data = await response.json();
            
            // Reset button
            resetBtnText.textContent = 'Update Password';
            resetBtnSpinner.style.display = 'none';
            modal.querySelector('#resetForm button[type="submit"]').disabled = false;
            
            if (data.success) {
                showAuthMessage(data.message, 'success');
                
                // Clear form
                document.getElementById('resetUsername').value = '';
                document.getElementById('currentPassword').value = '';
                document.getElementById('newPassword').value = '';
                document.getElementById('confirmNewPassword').value = '';
                
                // Switch to login after delay
                setTimeout(() => {
                    switchTab('login');
                }, 2000);
                
            } else {
                showAuthMessage(data.message, 'error');
            }
            
        } catch (error) {
            console.error('Reset password error:', error);
            showAuthMessage('Failed to update password. Please try again.', 'error');
            
            // Reset button
            resetBtnText.textContent = 'Update Password';
            resetBtnSpinner.style.display = 'none';
            modal.querySelector('#resetForm button[type="submit"]').disabled = false;
        }
    });
    
    // Close modal
    const closeBtn = modal.querySelector('.close-auth-btn');
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.auth-modal');
            if (modal) {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', closeOnEscape);
            }
        }
    });
}

// Add CSS for auth modal and notifications
const customCSS = `
.auth-modal-content {
    font-family: var(--font-family);
}

.auth-tabs {
    display: flex;
    margin-bottom: 25px;
    border-bottom: 2px solid var(--header-bg);
}

.auth-tab {
    flex: 1;
    padding: 12px;
    background: none;
    border: none;
    font-family: var(--font-family);
    font-size: 1.1rem;
    color: var(--color);
    cursor: pointer;
    border-bottom: 3px solid transparent;
}

.auth-tab.active {
    color: var(--hover-color);
    font-weight: 600;
}

.auth-form {
    display: none;
}

.auth-form.active {
    display: block;
}

.form-group {
    margin-bottom: 20px;
}

.form-group input {
    width: 100%;
    padding: 12px;
    border: 2px solid #eee;
    border-radius: var(--border-radius);
    font-family: var(--font-family);
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input:focus {
    outline: none;
    border-color: var(--button-bg);
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.story-card {
    cursor: pointer;
    transition: transform 0.3s ease;
}

.story-card:hover {
    transform: translateY(-5px);
}

.read-btn {
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.read-btn:hover {
    background-color: var(--hover-color);
}

.login-btn-hover {
    transition: all 0.3s ease !important;
}

.login-btn-hover:hover {
    background-color: #f6742f !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
}

.story-reader-content::-webkit-scrollbar {
    display: none;
}

.story-reader-content {
    scrollbar-width: none;
    -ms-overflow-style: none;
}
`;

// Add the CSS to the page
const style = document.createElement('style');
style.textContent = customCSS;
document.head.appendChild(style);

// Check for existing user on page load
document.addEventListener('DOMContentLoaded', function() {
    Auth.checkAuth().then(user => {
        updateUIForUser(user);
    });
});