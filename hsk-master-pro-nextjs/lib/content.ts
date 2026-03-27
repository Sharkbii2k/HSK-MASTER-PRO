import { ReadingLesson, SpeakingLesson, StrokeBasic, WritingCharLesson } from '@/lib/types';

export const HSK_LEVELS = ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'] as const;

export const speakingLessons: SpeakingLesson[] = [
  { id: 's1-1', level: 'HSK1', vietnamese: 'Xin chào, bạn khỏe không?', hanzi: '你好，你好吗？', pinyin: 'Nǐ hǎo, nǐ hǎo ma?' },
  { id: 's1-2', level: 'HSK1', vietnamese: 'Tôi là học sinh.', hanzi: '我是学生。', pinyin: 'Wǒ shì xuésheng.' },
  { id: 's2-1', level: 'HSK2', vietnamese: 'Hôm nay thời tiết rất đẹp, chúng ta đi dạo nhé.', hanzi: '今天天气很好，我们去散步吧。', pinyin: 'Jīntiān tiānqì hěn hǎo, wǒmen qù sànbù ba.' },
  { id: 's2-2', level: 'HSK2', vietnamese: 'Tôi muốn uống một ly cà phê nóng.', hanzi: '我想喝一杯热咖啡。', pinyin: 'Wǒ xiǎng hē yì bēi rè kāfēi.' },
  { id: 's3-1', level: 'HSK3', vietnamese: 'Học tiếng Trung mỗi ngày giúp tôi tiến bộ nhanh hơn.', hanzi: '每天学习中文让我进步得更快。', pinyin: 'Měitiān xuéxí Zhōngwén ràng wǒ jìnbù de gèng kuài.' },
  { id: 's3-2', level: 'HSK3', vietnamese: 'Cuối tuần này tôi định đi nhà sách mua vài cuốn sách mới.', hanzi: '这个周末我打算去书店买几本新书。', pinyin: 'Zhège zhōumò wǒ dǎsuàn qù shūdiàn mǎi jǐ běn xīn shū.' },
  { id: 's4-1', level: 'HSK4', vietnamese: 'Nếu bạn chuẩn bị đều đặn, việc thi cử sẽ bớt căng thẳng hơn nhiều.', hanzi: '如果你平时准备得很认真，考试的时候就不会那么紧张。', pinyin: 'Rúguǒ nǐ píngshí zhǔnbèi de hěn rènzhēn, kǎoshì de shíhou jiù bú huì nàme jǐnzhāng.' },
  { id: 's4-2', level: 'HSK4', vietnamese: 'Tôi rất thích những thành phố vừa hiện đại vừa giữ được nét văn hóa riêng.', hanzi: '我很喜欢那些既现代又保留自己文化特色的城市。', pinyin: 'Wǒ hěn xǐhuan nàxiē jì xiàndài yòu bǎoliú zìjǐ wénhuà tèsè de chéngshì.' },
  { id: 's5-1', level: 'HSK5', vietnamese: 'Muốn sử dụng ngôn ngữ linh hoạt, bạn phải nghe và nói trong nhiều tình huống thật.', hanzi: '想把一门语言用得灵活，你必须在各种真实场景里反复听和说。', pinyin: 'Xiǎng bǎ yì mén yǔyán yòng de línghuó, nǐ bìxū zài gè zhǒng zhēnshí chǎngjǐng lǐ fǎnfù tīng hé shuō.' },
  { id: 's5-2', level: 'HSK5', vietnamese: 'Nhiều người tưởng rằng tiến bộ phải rất rõ ràng, nhưng thật ra thay đổi lớn thường đến từ tích lũy nhỏ.', hanzi: '很多人以为进步一定很明显，可是真正的变化往往来自一点一点的积累。', pinyin: 'Hěn duō rén yǐwéi jìnbù yídìng hěn míngxiǎn, kěshì zhēnzhèng de biànhuà wǎngwǎng láizì yì diǎn yì diǎn de jīlěi.' },
  { id: 's6-1', level: 'HSK6', vietnamese: 'Trong quá trình học ngôn ngữ, điều đáng quý nhất không chỉ là nhớ được bao nhiêu từ, mà là dần hình thành khả năng suy nghĩ bằng chính ngôn ngữ ấy.', hanzi: '在语言学习的过程中，最可贵的并不只是记住了多少词语，而是逐渐形成了用这种语言思考的能力。', pinyin: 'Zài yǔyán xuéxí de guòchéng zhōng, zuì kěguì de bìng bú zhǐshì jìzhù le duōshao cíyǔ, ér shì zhújiàn xíngchéng le yòng zhè zhǒng yǔyán sīkǎo de nénglì.' },
  { id: 's6-2', level: 'HSK6', vietnamese: 'Khi đã vượt qua giai đoạn ban đầu, người học nên chủ động tiếp xúc với những nội dung dài và khó hơn để mở rộng tầm hiểu biết.', hanzi: '当学习者度过最初的阶段以后，就应该主动接触更长、更难的内容，从而不断拓宽自己的理解范围。', pinyin: 'Dāng xuéxízhě dùguò zuìchū de jiēduàn yǐhòu, jiù yīnggāi zhǔdòng jiēchù gèng cháng, gèng nán de nèiróng, cóng\'ér bùduàn tuòkuān zìjǐ de lǐjiě fànwéi.' }
];

export const readingLessons: ReadingLesson[] = [
  {
    id: 'r1-1',
    level: 'HSK1',
    title: 'Tôi là học sinh',
    meta: 'HSK1 · Văn bản ngắn',
    hanzi: '我是学生。我学习汉语。我喜欢老师，也喜欢同学。每天我都去学校。',
    pinyin: 'Wǒ shì xuésheng. Wǒ xuéxí Hànyǔ. Wǒ xǐhuan lǎoshī, yě xǐhuan tóngxué. Měitiān wǒ dōu qù xuéxiào.',
    meaning: 'Tôi là học sinh. Tôi học tiếng Trung. Tôi thích giáo viên và cũng thích bạn học. Mỗi ngày tôi đều đến trường.'
  },
  {
    id: 'r2-1',
    level: 'HSK2',
    title: 'Một ngày cuối tuần',
    meta: 'HSK2 · Văn bản ngắn vừa',
    hanzi: '星期六上午，我和朋友一起去公园散步。公园里有很多人，有的人跑步，有的人唱歌，还有小朋友在玩游戏。中午我们去附近的饭馆吃米饭和菜，下午再回家休息。',
    pinyin: 'Xīngqīliù shàngwǔ, wǒ hé péngyou yìqǐ qù gōngyuán sànbù. Gōngyuán lǐ yǒu hěn duō rén, yǒu de rén pǎobù, yǒu de rén chànggē, hái yǒu xiǎo péngyou zài wán yóuxì. Zhōngwǔ wǒmen qù fùjìn de fànguǎn chī mǐfàn hé cài, xiàwǔ zài huíjiā xiūxi.',
    meaning: 'Sáng thứ bảy, tôi cùng bạn đi dạo ở công viên. Trong công viên có rất nhiều người, có người chạy bộ, có người hát, còn có trẻ em đang chơi trò chơi. Buổi trưa chúng tôi đến quán ăn gần đó ăn cơm và món ăn, buổi chiều mới về nhà nghỉ ngơi.'
  },
  {
    id: 'r3-1',
    level: 'HSK3',
    title: 'Sự thay đổi nhỏ mỗi ngày',
    meta: 'HSK3 · Một đoạn hoàn chỉnh',
    hanzi: '很多人觉得学习语言很难，因为他们希望在很短的时间里看到很大的变化。其实，真正的进步常常不是一下子出现的，而是每天学一点、练一点、用一点，最后慢慢积累起来的。只要你愿意坚持，哪怕每天只有二十分钟，也能看到明显的效果。',
    pinyin: 'Hěn duō rén juéde xuéxí yǔyán hěn nán, yīnwèi tāmen xīwàng zài hěn duǎn de shíjiān lǐ kàndào hěn dà de biànhuà. Qíshí, zhēnzhèng de jìnbù chángcháng bú shì yíxiàzi chūxiàn de, ér shì měitiān xué yì diǎn, liàn yì diǎn, yòng yì diǎn, zuìhòu mànmàn jīlěi qǐlái de. Zhǐyào nǐ yuànyì jiānchí, nǎpà měitiān zhǐ yǒu èrshí fēnzhōng, yě néng kàndào míngxiǎn de xiàoguǒ.',
    meaning: 'Nhiều người cảm thấy học ngôn ngữ rất khó, vì họ hy vọng nhìn thấy thay đổi lớn trong thời gian ngắn. Thực ra, sự tiến bộ thật sự thường không xuất hiện ngay lập tức, mà là kết quả của việc mỗi ngày học một chút, luyện một chút, dùng một chút rồi dần dần tích lũy lại. Chỉ cần bạn sẵn sàng kiên trì, dù mỗi ngày chỉ có hai mươi phút, bạn vẫn có thể nhìn thấy hiệu quả rõ rệt.'
  },
  {
    id: 'r4-1',
    level: 'HSK4',
    title: 'Chuyến đi đáng nhớ',
    meta: 'HSK4 · Hai đoạn văn',
    hanzi: '去年夏天，我和几个朋友一起去云南旅行。我们原来只是想放松一下，可是到了那里以后，才发现这个地方不仅风景特别美，而且生活节奏也很舒服。白天，我们坐车去看山、看湖，还在小市场里买了很多当地的小东西。\n\n晚上，大家坐在客栈的小院子里聊天。有人说起自己的工作压力，有人谈到未来的计划，也有人只是安静地听别人说。那几天让我明白，旅行的意义不只是去新的地方，更重要的是在新的环境里重新认识自己。',
    pinyin: 'Qùnián xiàtiān, wǒ hé jǐ ge péngyou yìqǐ qù Yúnnán lǚxíng. Wǒmen yuánlái zhǐshì xiǎng fàngsōng yíxià, kěshì dào le nàli yǐhòu, cái fāxiàn zhège dìfang bújǐn fēngjǐng tèbié měi, érqiě shēnghuó jiézòu yě hěn shūfu. Báitiān, wǒmen zuòchē qù kàn shān, kàn hú, hái zài xiǎo shìchǎng lǐ mǎi le hěn duō dāngdì de xiǎo dōngxi.\n\nWǎnshang, dàjiā zuò zài kèzhàn de xiǎo yuànzi lǐ liáotiān. Yǒu rén shuōqǐ zìjǐ de gōngzuò yālì, yǒu rén tándào wèilái de jìhuà, yě yǒu rén zhǐshì ānjìng de tīng biéren shuō. Nà jǐ tiān ràng wǒ míngbai, lǚxíng de yìyì bú zhǐshì qù xīn de dìfang, gèng zhòngyào de shì zài xīn de huánjìng lǐ chóngxīn rènshi zìjǐ.',
    meaning: 'Mùa hè năm ngoái, tôi cùng vài người bạn đi du lịch Vân Nam. Ban đầu chúng tôi chỉ muốn thư giãn một chút, nhưng sau khi đến nơi mới phát hiện vùng đất này không chỉ có phong cảnh rất đẹp mà nhịp sống cũng rất dễ chịu. Ban ngày, chúng tôi đi xe ngắm núi, ngắm hồ, còn mua nhiều món đồ địa phương nhỏ ở chợ.\n\nBuổi tối, mọi người ngồi trong sân nhỏ của nhà trọ và trò chuyện. Có người nói về áp lực công việc, có người nói về kế hoạch tương lai, cũng có người chỉ lặng lẽ lắng nghe. Những ngày ấy giúp tôi hiểu rằng ý nghĩa của du lịch không chỉ là đến một nơi mới, mà quan trọng hơn là trong môi trường mới, bạn có thể hiểu lại chính mình.'
  },
  {
    id: 'r5-1',
    level: 'HSK5',
    title: 'Tiến bộ thầm lặng',
    meta: 'HSK5 · Văn bản dài',
    hanzi: '在很多人的想象中，进步似乎应该表现得非常明显：成绩突然提高，表达忽然流利，或者某一天醒来以后，发现自己终于“学会了”。然而，真实的成长过程往往并不是这样。尤其是在语言学习这件事上，真正有价值的变化，通常发生得缓慢、安静，甚至在相当长的一段时间里几乎不容易被察觉。\n\n一个人也许会在某个阶段不断怀疑自己：为什么学了这么久，还是会忘词？为什么看了那么多文章，开口的时候还是会犹豫？其实，这些问题并不说明努力没有效果，而恰恰说明学习已经进入了更深的层次。因为当你开始注意细微差别、开始不满足于“差不多会”，那就意味着你的标准已经提高了。\n\n很多能力并不是通过一次成功建立起来的，而是在无数次不太满意的尝试中慢慢形成的。所谓积累，往往看上去没有戏剧性，却最可靠。',
    pinyin: 'Zài hěn duō rén de xiǎngxiàng zhōng, jìnbù sìhū yīnggāi biǎoxiàn de fēicháng míngxiǎn: chéngjì tūrán tígāo, biǎodá hūrán liúlì, huòzhě mǒu yì tiān xǐnglái yǐhòu, fāxiàn zìjǐ zhōngyú “xuéhuì le”. Rán\'ér, zhēnshí de chéngzhǎng guòchéng wǎngwǎng bìng bú shì zhèyàng. Yóuqí shì zài yǔyán xuéxí zhè jiàn shì shàng, zhēnzhèng yǒu jiàzhí de biànhuà, tōngcháng fāshēng de huǎnmàn, ānjìng, shènzhì zài xiāngdāng cháng de yí duàn shíjiān lǐ jīhū bú róngyì bèi chájué.\n\nYí ge rén yěxǔ huì zài mǒu ge jiēduàn búduàn huáiyí zìjǐ: wèishénme xué le zhème jiǔ, háishì huì wàng cí? Wèishénme kàn le nàme duō wénzhāng, kāikǒu de shíhou háishì huì yóuyù? Qíshí, zhèxiē wèntí bìng bú shuōmíng nǔlì méiyǒu xiàoguǒ, ér qiàqià shuōmíng xuéxí yǐjīng jìnrù le gèng shēn de céngcì. Yīnwèi dāng nǐ kāishǐ zhùyì xìwēi chābié, kāishǐ bú mǎnzú yú “chàbuduō huì”, nà jiù yìwèizhe nǐ de biāozhǔn yǐjīng tígāo le.\n\nHěn duō nénglì bìng bú shì tōngguò yí cì chénggōng jiànlì qǐlái de, ér shì zài wúshù cì bú tài mǎnyì de chángshì zhōng mànmàn xíngchéng de. Suǒwèi jīlěi, wǎngwǎng kàn shangqù méiyǒu xìjùxìng, què zuì kěkào.',
    meaning: 'Trong tưởng tượng của nhiều người, tiến bộ dường như phải được thể hiện thật rõ ràng: điểm số tăng đột ngột, khả năng diễn đạt bỗng trở nên lưu loát, hoặc một ngày nào đó thức dậy và nhận ra mình cuối cùng đã “học được rồi”. Thế nhưng, quá trình trưởng thành thật sự thường không diễn ra như vậy. Đặc biệt trong việc học ngôn ngữ, những thay đổi có giá trị thực sự thường đến rất chậm, rất yên lặng, thậm chí trong một khoảng thời gian khá dài gần như khó nhận ra.\n\nMột người có thể liên tục nghi ngờ bản thân ở một giai đoạn nào đó: tại sao học lâu như vậy mà vẫn quên từ? Tại sao đã đọc nhiều bài như thế mà khi mở miệng vẫn còn do dự? Thực ra, những câu hỏi ấy không chứng minh rằng nỗ lực không hiệu quả, mà ngược lại cho thấy việc học đã bước sang tầng sâu hơn. Bởi vì khi bạn bắt đầu chú ý đến những khác biệt tinh tế, bắt đầu không còn hài lòng với mức “gần như biết”, điều đó có nghĩa là tiêu chuẩn của bạn đã cao hơn.\n\nRất nhiều năng lực không được xây dựng chỉ bằng một lần thành công, mà được hình thành dần dần qua vô số lần thử chưa thật sự hài lòng. Cái gọi là tích lũy thường không kịch tính, nhưng lại đáng tin nhất.'
  },
  {
    id: 'r6-1',
    level: 'HSK6',
    title: 'Sự tích lũy bền bỉ tạo nên bước tiến dài',
    meta: 'HSK6 · Văn bản rất dài',
    hanzi: '在很多人的想象中，真正的进步往往应该是显眼的、震撼的，甚至带有某种“顿悟”的意味：考试成绩忽然提高，表达能力突然变得流畅，或者在某一天不经意地发现，原本觉得困难的内容竟然已经能够轻松处理。然而，现实中的成长很少按照这种戏剧化的方式发生。特别是在语言学习这件事情上，那些最深层、最稳固、最能长期保留下来的变化，通常都来得十分缓慢，甚至安静得让人误以为自己根本没有前进。\n\n许多学习者在漫长的过程中都会经历一种看似矛盾的感受：学得越久，越觉得自己不会；了解得越多，越意识到自己的不足。这并不是退步，也不是努力白费了，而是一种认知层次提高之后自然出现的现象。因为当一个人只能看到表面的时候，他往往会高估自己的掌握程度；而当他逐渐能够分辨细微差别、理解语境变化、感受到表达中的分寸与节奏时，他反而会更清楚地意识到，真正的熟练远比想象中复杂。\n\n也正因为如此，语言学习中的“积累”看起来常常不够激动人心。它不像一次比赛获胜那样有明确的终点，也不像完成某个短期目标那样立刻带来满足感。积累更多时候意味着重复、修正、遗忘之后再捡起来，意味着今天只比昨天准确一点点，明天又比今天自然一点点。这种进步幅度小到几乎无法在单日内被察觉，但当时间被拉长之后，人们才会忽然意识到：原来那些曾经看不见的微小变化，早已在不知不觉中塑造了一个完全不同的自己。\n\n从这个角度看，坚持并不是一种简单的性格优点，而更像是一种理解世界和理解自己的方式。它要求我们接受缓慢，接受反复，接受暂时看不到结果的阶段，同时仍然愿意继续向前。能够做到这一点的人，最终往往不只是学会了一门语言，更培养出了一种面对长期目标时少见而珍贵的耐心。',
    pinyin: 'Zài hěn duō rén de xiǎngxiàng zhōng, zhēnzhèng de jìnbù wǎngwǎng yīnggāi shì xiǎnyǎn de, zhènhàn de, shènzhì dàiyǒu mǒu zhǒng “dùnwù” de yìwèi: kǎoshì chéngjì hūrán tígāo, biǎodá nénglì tūrán biàn de liúchàng, huòzhě zài mǒu yì tiān bùjīngyì de fāxiàn, yuánběn juéde kùnnán de nèiróng jìngrán yǐjīng nénggòu qīngsōng chǔlǐ. Rán\'ér, xiànshí zhōng de chéngzhǎng hěn shǎo ànzhào zhè zhǒng xìjùhuà de fāngshì fāshēng. Tèbié shì zài yǔyán xuéxí zhè jiàn shìqing shàng, nàxiē zuì shēncéng, zuì wěngù, zuì néng chángqī bǎoliú xiàlái de biànhuà, tōngcháng dōu lái de shífēn huǎnmàn, shènzhì ānjìng de ràng rén wù yǐwéi zìjǐ gēnběn méiyǒu qiánjìn.\n\nXǔduō xuéxízhě zài màncháng de guòchéng zhōng dōu huì jīnglì yì zhǒng kàn shì máodùn de gǎnshòu: xué de yuè jiǔ, yuè juéde zìjǐ bú huì; liǎojiě de yuè duō, yuè yìshí dào zìjǐ de bùzú. Zhè bìng bú shì tuìbù, yě bú shì nǔlì báifèi le, ér shì yì zhǒng rènzhī céngcì tígāo zhīhòu zìrán chūxiàn de xiànxiàng. Yīnwèi dāng yí ge rén zhǐ néng kàn dào biǎomiàn de shíhou, tā wǎngwǎng huì gāogū zìjǐ de zhǎngwò chéngdù; ér dāng tā zhújiàn nénggòu fēnbiàn xìwēi chābié, lǐjiě yǔjìng biànhuà, gǎnshòu dào biǎodá zhōng de fēncùn yǔ jiézòu shí, tā fǎn\'ér huì gèng qīngchu de yìshí dào, zhēnzhèng de shúliàn yuǎn bǐ xiǎngxiàng zhōng fùzá.\n\nYě zhèng yīnwèi rúcǐ, yǔyán xuéxí zhōng de “jīlěi” kàn qǐlái chángcháng búgòu jīdòng rénxīn. Tā bú xiàng yí cì bǐsài huòshèng nàyàng yǒu míngquè de zhōngdiǎn, yě bú xiàng wánchéng mǒu ge duǎnqī mùbiāo nàyàng lìkè dàilái mǎnzúgǎn. Jīlěi gèng duō shíhou yìwèizhe chóngfù, xiūzhèng, yíwàng zhīhòu zài jiǎn qǐlái, yìwèizhe jīntiān zhǐ bǐ zuótiān zhǔnquè yìdiǎndiǎn, míngtiān yòu bǐ jīntiān zìrán yìdiǎndiǎn. Zhè zhǒng jìnbù fúdù xiǎo dào jīhū wúfǎ zài dānrì nèi bèi chájué, dàn dāng shíjiān bèi lā cháng zhīhòu, rénmen cái huì hūrán yìshí dào: yuánlái nàxiē céngjīng kànbujiàn de wēixiǎo biànhuà, zǎoyǐ zài bùzhībùjué zhōng sùzào le yí ge wánquán bùtóng de zìjǐ.\n\nCóng zhège jiǎodù kàn, jiānchí bìng bú shì yì zhǒng jiǎndān de xìnggé yōudiǎn, ér gèng xiàng shì yì zhǒng lǐjiě shìjiè hé lǐjiě zìjǐ de fāngshì. Tā yāoqiú wǒmen jiēshòu huǎnmàn, jiēshòu fǎnfù, jiēshòu zànshí kànbujiàn jiéguǒ de jiēduàn, tóngshí réngrán yuànyì jìxù xiàng qián. Nénggòu zuòdào zhè yìdiǎn de rén, zuìzhōng wǎngwǎng bú zhǐshì xuéhuì le yì mén yǔyán, gèng péiyǎng chū le yì zhǒng miànduì chángqī mùbiāo shí shǎojiàn ér zhēnguì de nàixīn.',
    meaning: 'Trong tưởng tượng của nhiều người, sự tiến bộ thật sự thường phải rất rõ ràng, gây ấn tượng mạnh, thậm chí mang màu sắc của một khoảnh khắc “ngộ ra”: điểm số bỗng tăng lên, khả năng diễn đạt đột nhiên trở nên trôi chảy, hoặc một ngày nào đó bạn bất chợt nhận ra những nội dung từng thấy khó giờ lại có thể xử lý nhẹ nhàng. Thế nhưng, sự trưởng thành ngoài đời thực hiếm khi xảy ra theo cách kịch tính như vậy. Đặc biệt trong việc học ngôn ngữ, những thay đổi sâu nhất, bền nhất và có thể giữ lại lâu nhất thường đến rất chậm, đến mức yên lặng khiến người ta lầm tưởng rằng mình chẳng hề tiến lên.\n\nTrong suốt chặng đường dài, nhiều người học đều trải qua một cảm giác tưởng như mâu thuẫn: càng học lâu càng thấy mình chưa biết; càng hiểu nhiều càng nhận ra chỗ thiếu. Đó không phải là thụt lùi, cũng không phải nỗ lực trở nên vô ích, mà là hiện tượng tự nhiên xuất hiện sau khi tầng nhận thức được nâng cao. Khi một người chỉ nhìn thấy bề mặt, họ thường đánh giá quá cao mức độ nắm vững của bản thân; còn khi đã dần phân biệt được những khác biệt tinh tế, hiểu được sự thay đổi của ngữ cảnh và cảm nhận được nhịp điệu trong biểu đạt, họ lại càng ý thức rõ rằng sự thành thạo thật sự phức tạp hơn rất nhiều so với tưởng tượng.\n\nChính vì vậy, sự “tích lũy” trong học ngôn ngữ thường không đủ gây phấn khích. Nó không giống một lần thắng cuộc có điểm kết thúc rõ ràng, cũng không giống việc hoàn thành một mục tiêu ngắn hạn có thể lập tức mang lại cảm giác thỏa mãn. Tích lũy thường đồng nghĩa với lặp lại, sửa sai, quên rồi nhặt lại, nghĩa là hôm nay chỉ chính xác hơn hôm qua một chút, ngày mai lại tự nhiên hơn hôm nay một chút. Mức tiến bộ ấy nhỏ tới mức gần như không thể nhận ra trong từng ngày, nhưng khi thời gian kéo dài đủ lâu, người ta mới chợt nhận ra rằng chính những thay đổi rất nhỏ từng vô hình ấy đã âm thầm tạo nên một phiên bản hoàn toàn khác của bản thân.\n\nNhìn từ góc độ này, kiên trì không đơn thuần là một ưu điểm tính cách, mà giống như một cách hiểu thế giới và hiểu chính mình. Nó đòi hỏi ta chấp nhận sự chậm rãi, chấp nhận lặp lại, chấp nhận giai đoạn tạm thời chưa nhìn thấy kết quả mà vẫn tiếp tục bước tới. Người làm được điều đó, cuối cùng thường không chỉ học được một ngôn ngữ, mà còn nuôi dưỡng được một sự kiên nhẫn hiếm có và đáng quý trước những mục tiêu dài hạn.'
  }
];

export const writingLessons: WritingCharLesson[] = [
  {
    id: 'w1-1',
    level: 'HSK1',
    hanzi: '好',
    pinyin: 'hǎo',
    meaning: 'tốt; ổn',
    radical: '女',
    strokeCount: 6,
    explain: 'Chữ 好 gồm 女 (nữ) và 子 (con). Với người mới học, cách tốt nhất là tách chữ thành từng phần nhỏ để nhớ và viết đúng thứ tự.',
    steps: ['Viết bộ 女 bên trái trước.', 'Sau đó viết phần 子 ở bên phải.', 'Luôn viết từ trái sang phải và từ trên xuống dưới.']
  },
  {
    id: 'w2-1',
    level: 'HSK2',
    hanzi: '学',
    pinyin: 'xué',
    meaning: 'học',
    radical: '子',
    strokeCount: 8,
    explain: 'Chữ 学 có phần trên giống mái che, phần giữa biểu thị sự truyền dạy, phần dưới là 子. Hãy quan sát hình tổng thể trước rồi mới nhớ từng nét.',
    steps: ['Viết phần trên cùng trước.', 'Tiếp tục phần giữa theo chiều từ trái qua phải.', 'Kết thúc bằng phần 子 bên dưới để giữ bố cục cân đối.']
  },
  {
    id: 'w3-1',
    level: 'HSK3',
    hanzi: '想',
    pinyin: 'xiǎng',
    meaning: 'nghĩ; muốn',
    radical: '心',
    strokeCount: 13,
    explain: 'Chữ 想 gồm 相 ở trên và 心 ở dưới. Đây là ví dụ tốt để người mới hiểu rằng nhiều chữ Hán được ghép từ các phần có logic, không phải hình vẽ ngẫu nhiên.',
    steps: ['Viết 相 phía trên trước.', 'Sau đó viết bộ 心 phía dưới.', 'Giữ phần dưới gọn để chữ không bị nặng ở cuối.']
  },
  {
    id: 'w4-1',
    level: 'HSK4',
    hanzi: '谢',
    pinyin: 'xiè',
    meaning: 'cảm ơn; cảm tạ',
    radical: '讠',
    strokeCount: 12,
    explain: 'Chữ 谢 có bộ lời nói 讠 ở bên trái, nhắc người học rằng chữ này liên quan tới ngôn ngữ, cách nói và sự bày tỏ.',
    steps: ['Viết bộ 讠 ở bên trái trước.', 'Viết phần thân chữ bên phải theo cấu trúc từ trên xuống.', 'Nét cuối cần dứt khoát để chữ đứng vững.']
  },
  {
    id: 'w5-1',
    level: 'HSK5',
    hanzi: '静',
    pinyin: 'jìng',
    meaning: 'yên tĩnh; tĩnh lặng',
    radical: '青',
    strokeCount: 14,
    explain: 'Chữ 静 xuất hiện nhiều trong văn bản nâng cao. Với chữ nhiều nét, người mới nên nhìn bố cục lớn trước rồi mới nhớ chi tiết từng bộ phận.',
    steps: ['Viết phần trái trước để xác định trục chữ.', 'Viết phần phải từ trên xuống dưới.', 'Khi hoàn thiện, kiểm tra lại khoảng cách giữa hai nửa chữ.']
  },
  {
    id: 'w6-1',
    level: 'HSK6',
    hanzi: '积',
    pinyin: 'jī',
    meaning: 'tích lũy; gom lại',
    radical: '禾',
    strokeCount: 10,
    explain: 'Chữ 积 thường gặp trong những bài đọc trừu tượng hơn. Học chữ này rất hợp với tinh thần của app: tiến bộ lớn đến từ tích lũy nhỏ mỗi ngày.',
    steps: ['Viết bộ 禾 bên trái trước.', 'Viết phần 只 bên phải sau.', 'Cố giữ chiều cao hai phần cân bằng để chữ đẹp hơn.']
  }
];

export const strokeBasics: StrokeBasic[] = [
  { id: 'stroke-1', name: 'Nét ngang', symbol: '一', hint: 'Viết từ trái sang phải.' },
  { id: 'stroke-2', name: 'Nét sổ', symbol: '丨', hint: 'Viết từ trên xuống dưới.' },
  { id: 'stroke-3', name: 'Nét chấm', symbol: '丶', hint: 'Ngắn, gọn và dứt khoát.' },
  { id: 'stroke-4', name: 'Nét phẩy', symbol: '丿', hint: 'Kéo xiên xuống về bên trái.' },
  { id: 'stroke-5', name: 'Nét mác', symbol: '㇏', hint: 'Kéo xiên xuống về bên phải.' },
  { id: 'stroke-6', name: 'Nét hất', symbol: '㇀', hint: 'Kết thúc bằng một cú hất nhẹ.' }
];
