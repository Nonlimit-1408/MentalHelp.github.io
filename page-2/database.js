const QUOTE_POOL = {
        'tired': [
            { th: "วันนี้เก่งมากแล้วนะที่ผ่านมันมาได้<br>พักผ่อนให้เต็มที่เถอะ", en: "You did great getting through today.<br>Rest up." },
            { th: "ไม่เป็นไรเลยถ้าวันนี้จะทำอะไรไม่ได้ดั่งใจ<br>พรุ่งนี้ค่อยเริ่มใหม่ก็ได้", en: "It's okay if things didn't go as planned today.<br>Start again tomorrow." },
            { th: "ความเหนื่อยเป็นสัญญาณว่าคุณทุ่มเทมามากพอแล้ว<br>ถึงเวลาต้องใจดีกับตัวเองบ้าง", en: "Exhaustion is a sign you've given your all.<br>Be kind to yourself now." },
            { th: "การหยุดพักไม่ใช่ความล้มเหลว<br>แต่มันคือการเตรียมพร้อมเพื่อก้าวต่อ", en: "Resting is not failing.<br>It's preparing for the next step." },
            { th: "ขอบคุณนะที่อดทนมาขนาดนี้<br>คุณสำคัญกว่างานหรือสิ่งที่ทำอยู่นะ", en: "Thank you for enduring.<br>You are more important than your tasks." },
            { th: "อย่าปล่อยให้ความคาดหวังของคนอื่น<br>มาทำลายความสงบในใจเราเลย", en: "Don't let others' expectations<br>destroy your inner peace." },
            { th: "ท้องฟ้ายังมีวันหม่นหมอง<br>ใจเราก็มีวันอ่อนล้าได้เป็นธรรมดา", en: "Even the sky gets gloomy.<br>It's normal for your heart to feel tired." },
            { th: "ลดความเร็วลงบ้างก็ได้<br>โลกไม่ได้จะแตกถ้าเราจะเดินช้าลงสักวัน", en: "Slow down.<br>The world won't end if you take it easy today." },
            { th: "คุณมีสิทธิ์ที่จะเหนื่อย<br>และมีสิทธิ์ที่จะเลือกความสุขของตัวเองก่อน", en: "You have the right to be tired<br>and to choose your happiness first." },
            { th: "กอดตัวเองแน่นๆ แล้วบอกว่า 'ไม่เป็นไรนะ'<br>เดี๋ยวทุกอย่างจะค่อยๆ ดีขึ้นเอง", en: "Hug yourself and say 'it's okay'.<br>Things will gradually get better." }
        ],
        'stress': [
            { th: "หายใจเข้าลึกๆ ก่อนนะ<br>เรื่องที่เจออยู่ตอนนี้มันหนัก แต่มันจะผ่านไป", en: "Take a deep breath.<br>It's heavy now, but it will pass." },
            { th: "ไม่เป็นไรเลยถ้าวันนี้จะทำพลาดบ้าง<br>มนุษย์เรียนรู้จากรอยร้าวเสมอ", en: "It's okay to make mistakes.<br>We learn from our cracks." },
            { th: "ความกดดันคือสัญญาณว่าคุณกำลังเติบโต<br>แต่อย่าปล่อยให้มันทำร้ายตัวคุณ", en: "Pressure means you're growing,<br>but don't let it hurt you." },
            { th: "ลดความคาดหวังลงสักนิด<br>แล้วจะเห็นว่าคุณทำมาได้ไกลมากแล้ว", en: "Lower your expectations a bit,<br>and see how far you've come." },
            { th: "บอกตัวเองว่า 'ฉันจะทำเท่าที่ไหว'<br>ส่วนที่เหลือปล่อยให้เป็นเรื่องของจังหวะเวลา", en: "Tell yourself 'I'll do my best'.<br>Leave the rest to timing." },
            { th: "ขอบคุณตัวเองที่อดทนมาตลอด<br>คุณแข็งแกร่งกว่าที่ตัวเองคิดนะ", en: "Thank yourself for enduring.<br>You're stronger than you think." },
            { th: "ไม่ต้องรีบวิ่งตามจังหวะใคร<br>หาจังหวะที่เดินแล้วไม่เหนื่อยหอบของตัวเองให้เจอ", en: "Don't rush to anyone's pace.<br>Find your own comfortable rhythm." },
            { th: "เรื่องบางเรื่องเราควบคุมไม่ได้<br>ก็แค่ต้องปล่อยให้มันเป็นไป", en: "Some things are out of our control.<br>Just let them be." },
            { th: "วันนี้พยายามได้ดีที่สุดแล้ว<br>พรุ่งนี้ค่อยว่ากันใหม่นะ", en: "You tried your best today.<br>Let's try again tomorrow." },
            { th: "ส่งกอดอุ่นๆ ให้ตัวเองหน่อยนะ<br>วันนี้คุณแบกโลกไว้หนักเกินไปแล้ว", en: "Give yourself a warm hug.<br>You carried too much today." }
        ],
        'down': [
            { th: "ไม่เป็นไรนะถ้าตอนนี้จะยังหาคำตอบไม่ได้<br>บางอย่างต้องใช้เวลา", en: "It's okay not to have answers now.<br>Some things take time." },
            { th: "อนุญาตให้ตัวเองเศร้าได้ ร้องไห้ได้<br>ความรู้สึกของคุณสำคัญเสมอ", en: "Allow yourself to be sad.<br>Your feelings always matter." },
            { th: "โลกอาจจะมืดมนในตอนนี้<br>แต่มันไม่ได้แปลว่าแสงสว่างหายไปถาวร", en: "The world may seem dark now,<br>but the light isn't gone forever." },
            { th: "วันนี้แค่ประคองตัวเองให้ผ่านไปได้<br>ก็ถือเป็นชัยชนะที่ยิ่งใหญ่แล้ว", en: "Just getting through today<br>is already a massive victory." },
            { th: "ความสับสนคือสัญญาณ<br>ว่าคุณกำลังค้นหาทางที่ใช่", en: "Confusion is a sign<br>you are finding the right path." },
            { th: "คุณไม่จำเป็นต้องเข้มแข็งตลอดเวลา<br>การยอมรับว่าอ่อนแอก็คือความกล้า", en: "You don't always need to be strong.<br>Accepting weakness is brave." },
            { th: "หายใจเข้าลึกๆ ทีละครั้ง<br>โฟกัสแค่ลมหายใจนี้ก่อน", en: "Breathe deeply, one at a time.<br>Focus only on this breath." },
            { th: "ถึงตอนนี้จะมองไม่เห็นทางข้างหน้า<br>แต่ขอให้เชื่อมั่นในก้าวต่อไปทีละนิด", en: "Even if you can't see the path,<br>trust your next small step." },
            { th: "คุณไม่ได้อยู่ตัวคนเดียวในความสับสนนี้<br>พักผ่อนก่อนนะ", en: "You're not alone in this confusion.<br>Get some rest." },
            { th: "แม้จะรู้สึกไร้ค่าในตอนนี้<br>แต่ตัวคุณในวันพรุ่งนี้จะขอบคุณที่คุณไม่ออมมือให้ตัวเอง", en: "Even if you feel worthless now,<br>your future self will thank you." }
        ],
        'lonely': [
            { th: "ความเงียบไม่ได้แปลว่าไม่มีใคร<br>แต่อาจเป็นช่วงเวลาให้คุณได้ยินเสียงตัวเองชัดขึ้น", en: "Silence doesn't mean you're alone;<br>it helps you hear yourself." },
            { th: "แม้ในวันที่รู้สึกเคว้งคว้างที่สุด<br>จำไว้ว่าคุณยังมี 'ตัวเอง' เสมอ", en: "On your emptiest days,<br>remember you always have 'yourself'." },
            { th: "ความว่างเปล่าไม่ใช่ความล้มเหลว<br>แต่มันคือพื้นที่ว่างที่รอเติมสิ่งใหม่", en: "Emptiness isn't failure.<br>It's space waiting for new things." },
            { th: "ไม่เป็นไรที่จะรู้สึกเหมือนโลกหลงลืมคุณไปชั่วขณะ<br>พักตรงนี้ก่อนนะ", en: "It's okay to feel forgotten by the world for a moment.<br>Rest here." },
            { th: "ดวงจันทร์ยังอยู่คนเดียวบนฟ้าได้<br>และมันยังคงงดงามในแบบของมัน", en: "The moon is alone in the sky,<br>and it's still beautiful." },
            { th: "ความรู้สึกโดดเดี่ยวเป็นเพียงเมฆหมอก<br>เดี๋ยวสายลมจะพามันจางไป", en: "Loneliness is just a fog.<br>The wind will eventually blow it away." },
            { th: "คุณไม่จำเป็นต้องมีใครตลอดเวลา<br>เพื่อที่จะมีค่า", en: "You don't need someone all the time<br>to be valuable." },
            { th: "ในความเงียบงันนี้<br>ลองโอบกอดความเหงาดูบ้าง", en: "In this silence,<br>try embracing your loneliness." },
            { th: "ถ้าโลกนี้กว้างเกินไปจนรู้สึกเคว้ง<br>ลองทำให้โลกเหลือแค่ 'ตอนนี้' พอ", en: "If the world feels too vast,<br>just focus on 'here and now'." },
            { th: "ส่งความรักให้ใจที่ว่างเปล่าดวงนี้หน่อยนะ<br>คุณเก่งมากที่ประคองมันมาได้", en: "Send love to your empty heart.<br>You did great holding it together." }
        ],
        'sad': [
            { th: "ร้องไห้ออกมาเถอะ น้ำตาไม่ใช่ความพ่ายแพ้<br>แต่มันคือการล้างแผลให้ใจ", en: "Let it out. Tears aren't a defeat;<br>they wash your heart." },
            { th: "เรื่องที่เสียใจไปแล้ว เปลี่ยนแปลงไม่ได้<br>แต่เราโอบกอดตัวเองได้นะ", en: "You can't change the past,<br>but you can embrace yourself now." },
            { th: "ไม่เป็นไรที่จะแตกสลายในวันนี้<br>เพราะเศษเสี้ยวที่เหลือจะทำให้คุณแกร่งขึ้น", en: "It's okay to break today.<br>The pieces will make you stronger." },
            { th: "ความเศร้าก็เหมือนฤดูกาล<br>มันมาเพื่อให้เราเรียนรู้ แล้วมันจะผ่านไป", en: "Sadness is like a season.<br>It teaches us, and then it passes." },
            { th: "วันนี้ใจคุณคงหนักมาก<br>วางมันลงก่อนนะ พักผ่อนให้เต็มที่", en: "Your heart is heavy today.<br>Put it down and rest fully." },
            { th: "ขอบคุณที่ทนเจ็บมาได้ขนาดนี้<br>คุณเก่งและอดทนที่สุดแล้วจริงๆ", en: "Thank you for enduring the pain.<br>You are incredibly strong." },
            { th: "แม้ในวันที่เศร้าที่สุด<br>แสงสว่างในตัวคุณก็ยังไม่ดับไปไหนหรอก", en: "Even on the saddest days,<br>your inner light never goes out." },
            { th: "โลกไม่ได้ใจร้ายกับคุณตลอดไปหรอกนะ<br>วันนี้แค่เป็นวันพักผ่อนของความสุข", en: "The world isn't always cruel.<br>Happiness is just taking a day off." },
            { th: "ค่อยๆ เยียวยาไปนะ ไม่ต้องรีบหายเศร้าเพื่อใคร<br>เอาที่ใจคุณไหวก็พอ", en: "Heal slowly.<br>Don't rush your recovery for anyone else." },
            { th: "ส่งกอดแน่นๆ ไปให้นะ<br>ขอให้ความอบอุ่นนี้ช่วยซับน้ำตาในใจคุณ", en: "Sending tight hugs.<br>Hope this warmth wipes your tears." }
        ],
        'need_hug': [
            { th: "คุณเก่งกว่าที่ตัวเองคิด<br>และอดทนได้มากกว่าที่ตัวเองเชื่อนะ สู้เขา!", en: "You're smarter and stronger than you believe.<br>Keep going!" },
            { th: "ส่งพลังบวกให้รัวๆ เลยนะ<br>วันนี้อาจจะหนัก แต่คุณผ่านมันไปได้แน่นอน", en: "Sending massive positive vibes!<br>It's hard, but you'll pass it." },
            { th: "อย่าเพิ่งถอดใจนะ<br>อีกนิดเดียวจะถึงเส้นชัยแล้ว", en: "Don't give up yet.<br>The finish line is near." },
            { th: "รอยยิ้มของคุณมีค่ามากนะ<br>อย่าปล่อยให้เรื่องแย่ๆ มาขโมยมันไปนานล่ะ", en: "Your smile is precious.<br>Don't let bad things steal it for too long." },
            { th: "ภูมิใจในตัวคุณที่สุดเลยที่สู้มาได้ขนาดนี้<br>คุณคือยอดมนุษย์นะ", en: "So proud of how hard you've fought.<br>You are a superhero." },
            { th: "ต่อให้โลกจะใจร้ายใส่คุณแค่ไหน<br>จำไว้ว่าคุณยังมีตัวเองที่เจ๋งที่สุดอยู่", en: "No matter how cruel the world is,<br>you still have your awesome self." },
            { th: "หายใจเข้าลึกๆ เติมพลังให้เต็มปอด<br>แล้วลุยต่อแบบสับๆ ไปเลย!", en: "Take a deep breath, fill your lungs with power,<br>and keep pushing!" },
            { th: "ความพยายามของคุณไม่สูญเปล่าหรอก<br>วันหนึ่งมันจะเบ่งบาน", en: "Your efforts are never wasted.<br>One day they will bloom." },
            { th: "พักยกกินน้ำกินขนมก่อนนะ<br>แล้วค่อยกลับไปสู้ใหม่ด้วยใจที่ฟูขึ้น", en: "Take a break, grab a snack,<br>and return with a fuller heart." },
            { th: "ส่งกอดอุ่นๆ และพลังใจกองโตไปให้<br>รับไว้แล้วยิ้มกว้างๆ นะครับ", en: "Sending warm hugs and tons of energy.<br>Take them and smile wide!" }
        ]
    };

    const ADVICE_POOL = {
        'tired': [
            { th: "อนุญาตให้ตัวเองห่วยบ้างก็ได้<br>ไม่ต้องเก่งทุกวันหรอก", en: "Allow yourself to be messy.<br>You don't need to be perfect every day." },
            { th: "ตัดการเชื่อมต่อซะ<br>ลองปิดแจ้งเตือนสัก 2 ชั่วโมง", en: "Disconnect for a while.<br>Try turning off notifications for 2 hours." },
            { th: "นอนคือยาวิเศษ<br>ปัญหาที่ดูใหญ่โตจะเล็กลงถ้าได้นอนอิ่ม", en: "Sleep is magic.<br>Huge problems shrink after a good rest." },
            { th: "กินของอร่อย<br>ไอศกรีมหรือชาบูช่วยเยียวยาใจได้นะ", en: "Eat something tasty.<br>Ice cream or hotpot can heal the heart." },
            { th: "ใจดีกับตัวเอง<br>ยอมรับขีดจำกัดเรา", en: "Be kind to yourself<br>and accept your current limits." },
            { th: "ปรึกษาผู้เชี่ยวชาญ<br>การคุยกับนักจิตวิทยาช่วยได้นะ", en: "Seek a professional.<br>Talking to a therapist really helps." },
            { th: "เปลี่ยนบรรยากาศ<br>ย้ายที่ทำงานหรือไปคาเฟ่ช่วยได้", en: "Change your scenery.<br>Moving to a cafe can refresh your mind." },
            { th: "ระบายออกมาเถอะ<br>เขียนลงกระดาษ อย่าเก็บไว้คนเดียว", en: "Let it out.<br>Write it on paper, don't hold it all inside." },
            { th: "หัดเซย์ 'โน' บ้าง<br>ปฏิเสธเพื่อรักษาใจไม่ใช่เรื่องเห็นแก่ตัว", en: "Learn to say 'No'.<br>Protecting your peace is not selfish." },
            { th: "จัดลำดับความสำคัญ<br>ทำเรื่องที่จำเป็นวันละ 1-3 อย่างพอ", en: "Prioritize.<br>Just do 1-3 essential things a day." }
        ],
        'stress': [
            { th: "ฝึกหายใจ 4-7-8<br>ช่วยสงบระบบประสาท", en: "Try 4-7-8 breathing<br>to calm your nervous system." },
            { th: "จดสิ่งที่กังวล<br>เขียนออกมาช่วยให้ปล่อยวางได้", en: "Write down your worries.<br>It helps you let them go." },
            { th: "กฎ 5 นาที<br>เรื่องไหนแก้ไม่ได้ให้ล้างหน้าดื่มน้ำเย็น", en: "The 5-minute rule:<br>If it can't be fixed, wash your face and drink water." },
            { th: "ลดโซเชีลมีเดีย<br>เลิกเปรียบเทียบชีวิตกับคนอื่น", en: "Cut back on social media.<br>Stop comparing your life." },
            { th: "อยู่กับปัจจุบัน<br>โฟกัสแค่ชั่วโมงนี้หรืองานตรงหน้า", en: "Stay in the present.<br>Focus only on this hour or task." },
            { th: "หาที่ระบาย<br>ตะโกนใส่หมอนหรือเล่าให้เพื่อนฟัง", en: "Find an outlet.<br>Scream into a pillow or vent to a friend." },
            { th: "ปรับสภาพแวดล้อม<br>จัดโต๊ะใหม่หรือเปิดไฟโทนอุ่น", en: "Adjust your environment.<br>Tidy up or use warm lighting." },
            { th: "ฟังเพลงคลื่นความถี่ต่ำ<br>เพลง Lofi ช่วยกล่อมเกลาใจ", en: "Listen to Lofi or low-frequency music<br>to soothe your mind." },
            { th: "อนุญาตให้ตัวเอง 'ไม่รู้'<br>ไม่ต้องมีคำตอบทันทีก็ได้", en: "Allow yourself 'not to know'.<br>Answers don't need to be immediate." },
            { th: "มองหาข้อผิดพลาดที่น่ารัก<br>ลองหัวเราะให้ตัวเองบ้าง", en: "Look for cute mistakes.<br>Try laughing at yourself." }
        ],
        'down': [
            { th: "อย่าเพิ่งตัดสินใจเรื่องใหญ่<br>รอให้ใจนิ่งกว่านี้ก่อน", en: "Don't make big decisions yet.<br>Wait until you're calmer." },
            { th: "เขียนระบายลงกระดาษ<br>เอาความวุ่นวายออกไปจากหัว", en: "Write it all down<br>to get the chaos out of your head." },
            { th: "อาบน้ำอุ่นๆ<br>ปล่อยให้น้ำไหลผ่านปลอบประโลมร่างกาย", en: "Take a warm shower.<br>Let the water soothe your body." },
            { th: "หา Safe Zone ของตัวเอง<br>ไปอยู่ตรงนั้นสักพัก", en: "Find your Safe Zone<br>and stay there for a while." },
            { th: "ปิดโซเชียลไปเลย<br>พักหน้าจอสักวันนะ", en: "Log off completely.<br>Take a screen break for a day." },
            { th: "ทำอะไรที่ใช้มือทำ<br>ปลูกต้นไม้ วาดรูป ระบายสี", en: "Do hands-on activities<br>like gardening or drawing." },
            { th: "กอดตัวเองแน่นๆ<br>บอกตัวเองว่าเราจะผ่านไปได้", en: "Hug yourself tightly<br>and say you'll get through this." },
            { th: "ออกไปเจอแสงแดดบ้าง<br>ให้ร่างกายรับวิตามิน", en: "Go out and get some sunlight.<br>Let your body absorb vitamins." },
            { th: "ยอมรับว่า 'ไม่โอเค'<br>คือก้าวแรกของการเยียวยา", en: "Accepting that you are 'not okay'<br>is the first step to healing." },
            { th: "คุยกับใครสักคนเถอะ<br>ทักเพื่อนหรือหาหมอก็ได้", en: "Talk to someone.<br>Reach out to a friend or a doctor." }
        ],
        'lonely': [
            { th: "เปิด Podcast หรือเสียงคนคุยกัน<br>ทิ้งไว้เป็นเพื่อน", en: "Play a Podcast or conversation audio<br>to keep you company." },
            { th: "คุยกับสัตว์เลี้ยง<br>หรือดูคลิปสัตว์น่ารักช่วยเติมเต็มใจ", en: "Talk to pets or watch cute animal videos<br>to fill your heart." },
            { th: "หาโกโก้หรือชาร้อนดื่ม<br>ความอุ่นจะช่วยลดความหนาวในใจ", en: "Drink hot cocoa or tea.<br>Warmth reduces the coldness inside." },
            { th: "ไปนั่งดูผู้คนเดินผ่านไปมา<br>ในสวนหรือห้างให้พอหายเคว้ง", en: "People-watch in a park or mall<br>to feel less adrift." },
            { th: "ทำงานอดิเรกที่ต้องใช้สมาธิ<br>เช่น ต่อเลโก้ หรือทำอาหาร", en: "Do focused hobbies<br>like building Lego or cooking." },
            { th: "เขียน 'ขอบคุณ' 3 อย่าง<br>ช่วยให้เห็นสิ่งดีๆ ที่มีอยู่", en: "Write 3 'Thank You's.<br>It highlights the good things around you." },
            { th: "กอดหมอนข้างหรือตุ๊กตา<br>สัมผัสที่นุ่มนวลช่วยให้รู้สึกปลอดภัย", en: "Hug a pillow.<br>Soft touches make you feel safer." },
            { th: "จดบันทึก<br>ระบายความว่างเปล่าจากอกลงสู่กระดาษ", en: "Journal to transfer the emptiness<br>from your chest to paper." },
            { th: "หาต้นไม้มาเลี้ยงสักต้น<br>การเห็นมันเติบโตช่วยให้มีเป้าหมาย", en: "Grow a plant.<br>Watching it thrive gives a sense of purpose." },
            { th: "ทักหาเพื่อนสนิทของคุณ<br>เขาพร้อมรับฟังแน่นอน", en: "Text your best friend.<br>They are definitely ready to listen." }
        ],
        'sad': [
            { th: "ปล่อยโฮออกมาเลย<br>การร้องไห้ช่วยระบายความเครียดได้ดีที่สุด", en: "Cry it out.<br>Crying is the best way to release stress." },
            { th: "กินของหวาน<br>ช็อกโกแลตหรือไอศกรีมช่วยปลอบใจได้นิดนึง", en: "Eat sweets.<br>Chocolate or ice cream helps comfort the soul." },
            { th: "ฟังเพลงเศร้า<br>เพื่อให้รู้สึกว่า 'มีคนเข้าใจความรู้สึกเรา'", en: "Listen to sad songs<br>to feel that 'someone understands'." },
            { th: "มุดตัวในผ้าห่ม<br>สร้างพื้นที่ปลอดภัยให้ตัวเองได้พักนิ่งๆ", en: "Hide under a blanket.<br>Create a safe space to rest quietly." },
            { th: "เขียนจดหมายที่ไม่ส่ง<br>ระบายเรื่องที่เสียใจแล้วขยำทิ้งไปซะ", en: "Write an unsent letter.<br>Vent your sadness, then crush it." },
            { th: "ล้างหน้าด้วยน้ำเย็น<br>เพื่อดึงสติและลดอาการตาบวม", en: "Wash your face with cold water<br>to refresh and reduce puffiness." },
            { th: "ดูหนังฟีลกู๊ดหรือการ์ตูน<br>ให้สมองได้พักจากเรื่องจริงบ้าง", en: "Watch a feel-good movie or cartoon<br>to escape reality." },
            { th: "อย่าเพิ่งโทษตัวเอง<br>ใจดีกับตัวเองในวันที่ใจมันหนักหนา", en: "Don't blame yourself.<br>Be gentle on heavy-hearted days." },
            { th: "นอนหลับไปก่อน<br>การพักผ่อนคือการ Restart สมองที่ดีที่สุด", en: "Go to sleep.<br>Resting is the best way to restart your brain." },
            { th: "ระบายกับพ่อแม่หรือคนที่รัก<br>พวกเขาพร้อมโอบกอดคุณเสมอ", en: "Vent to your loved ones.<br>They are always ready to hug you." }
        ],
        'need_hug': [
            { th: "ทักหาเพื่อนสายซัพพอร์ต<br>บอกไปเลยว่า 'ขอกำลังใจหน่อย'", en: "Message a supportive friend.<br>Just say 'I need some cheering up'." },
            { th: "ย้อนดูความสำเร็จเก่าๆ<br>เพื่อย้ำกับตัวเองว่าเราก็เจ๋งไม่เบา", en: "Look back at past success<br>to remind yourself how awesome you are." },
            { th: "พูดหน้ากระจก<br>บอกตัวเองว่า 'วันนี้แกทำได้!'", en: "Look in the mirror<br>and tell yourself 'You can do this today!'" },
            { th: "ฟังเพลงฮึกเหิมหรือเพลงสู้ชีวิต<br>ให้ใจเต้นตามจังหวะ", en: "Listen to hype music<br>to get your heart pumping to the beat." },
            { th: "ดูคลิปแรงบันดาลใจจากคนสู้ชีวิต<br>เพื่อปลุกไฟในใจ", en: "Watch motivational videos<br>to reignite the fire inside you." },
            { th: "ยืดตัวตรง เชิดหน้าขึ้น<br>ท่าทางที่มั่นใจจะช่วยให้รู้สึกดีขึ้น", en: "Stand tall, chin up.<br>Confident posture improves how you feel." },
            { th: "ให้รางวัลเล็กๆ กับตัวเอง<br>เมื่อทำงานพาร์ทนั้นเสร็จ", en: "Give yourself a small reward<br>when you finish a task." },
            { th: "สร้าง Note สะสมคำชม<br>เอาไว้เปิดอ่านเวลาที่นอยด์", en: "Create a 'Compliment Note'<br>to read when you're feeling down." },
            { th: "กอดสัตว์เลี้ยงหรือตุ๊กตา<br>ความอบอุ่นจะช่วยให้ใจฟูขึ้นได้", en: "Hug a pet or plushie.<br>Warmth makes your heart swell." },
            { th: "เปิด Playlist ปลุกใจ<br>ที่รวมเพลงที่ฟังแล้วรู้สึกเป็นผู้ชนะ", en: "Play a hype playlist<br>that makes you feel like a champion." }
        ]
    };