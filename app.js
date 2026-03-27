const data = {
  vocabulary: {
    HSK1: [
      { id: 1, hanzi: '你好', pinyin: 'nǐ hǎo', meaning: 'xin chào' },
      { id: 2, hanzi: '谢谢', pinyin: 'xiè xie', meaning: 'cảm ơn' },
      { id: 3, hanzi: '学生', pinyin: 'xué shēng', meaning: 'học sinh' },
      { id: 4, hanzi: '老师', pinyin: 'lǎo shī', meaning: 'giáo viên' },
      { id: 5, hanzi: '中国', pinyin: 'Zhōng guó', meaning: 'Trung Quốc' },
      { id: 6, hanzi: '朋友', pinyin: 'péng you', meaning: 'bạn bè' }
    ],
    HSK2: [
      { id: 1, hanzi: '帮助', pinyin: 'bāng zhù', meaning: 'giúp đỡ' },
      { id: 2, hanzi: '一起', pinyin: 'yì qǐ', meaning: 'cùng nhau' },
      { id: 3, hanzi: '准备', pinyin: 'zhǔn bèi', meaning: 'chuẩn bị' },
      { id: 4, hanzi: '觉得', pinyin: 'jué de', meaning: 'cảm thấy' },
      { id: 5, hanzi: '运动', pinyin: 'yùn dòng', meaning: 'vận động' },
      { id: 6, hanzi: '时间', pinyin: 'shí jiān', meaning: 'thời gian' }
    ],
    HSK3: [
      { id: 1, hanzi: '经验', pinyin: 'jīng yàn', meaning: 'kinh nghiệm' },
      { id: 2, hanzi: '除了', pinyin: 'chú le', meaning: 'ngoài ra' },
      { id: 3, hanzi: '认真', pinyin: 'rèn zhēn', meaning: 'nghiêm túc' },
      { id: 4, hanzi: '重要', pinyin: 'zhòng yào', meaning: 'quan trọng' },
      { id: 5, hanzi: '突然', pinyin: 'tū rán', meaning: 'đột nhiên' },
      { id: 6, hanzi: '习惯', pinyin: 'xí guàn', meaning: 'thói quen' }
    ],
    HSK4: [
      { id: 1, hanzi: '安排', pinyin: 'ān pái', meaning: 'sắp xếp' },
      { id: 2, hanzi: '交流', pinyin: 'jiāo liú', meaning: 'giao lưu' },
      { id: 3, hanzi: '压力', pinyin: 'yā lì', meaning: 'áp lực' },
      { id: 4, hanzi: '选择', pinyin: 'xuǎn zé', meaning: 'lựa chọn' },
      { id: 5, hanzi: '理解', pinyin: 'lǐ jiě', meaning: 'hiểu' },
      { id: 6, hanzi: '适应', pinyin: 'shì yìng', meaning: 'thích nghi' }
    ],
    HSK5: [
      { id: 1, hanzi: '效率', pinyin: 'xiào lǜ', meaning: 'hiệu suất' },
      { id: 2, hanzi: '分析', pinyin: 'fēn xī', meaning: 'phân tích' },
      { id: 3, hanzi: '坚持', pinyin: 'jiān chí', meaning: 'kiên trì' },
      { id: 4, hanzi: '影响', pinyin: 'yǐng xiǎng', meaning: 'ảnh hưởng' },
      { id: 5, hanzi: '沟通', pinyin: 'gōu tōng', meaning: 'giao tiếp' },
      { id: 6, hanzi: '目标', pinyin: 'mù biāo', meaning: 'mục tiêu' }
    ],
    HSK6: [
      { id: 1, hanzi: '积累', pinyin: 'jī lěi', meaning: 'tích lũy' },
      { id: 2, hanzi: '逻辑', pinyin: 'luó jí', meaning: 'logic' },
      { id: 3, hanzi: '观察', pinyin: 'guān chá', meaning: 'quan sát' },
      { id: 4, hanzi: '适当', pinyin: 'shì dàng', meaning: 'thích đáng' },
      { id: 5, hanzi: '反映', pinyin: 'fǎn yìng', meaning: 'phản ánh' },
      { id: 6, hanzi: '深入', pinyin: 'shēn rù', meaning: 'sâu sắc, đi sâu' }
    ]
  },
  speaking: {
    HSK1: [
      { vi: 'Xin chào, bạn khỏe không?', hanzi: '你好，你好吗？', pinyin: 'Nǐ hǎo, nǐ hǎo ma?' },
      { vi: 'Tôi là học sinh mới.', hanzi: '我是新学生。', pinyin: 'Wǒ shì xīn xuéshēng.' },
      { vi: 'Hôm nay trời rất đẹp.', hanzi: '今天天气很好。', pinyin: 'Jīntiān tiānqì hěn hǎo.' }
    ],
    HSK2: [
      { vi: 'Chiều nay chúng ta cùng đi thư viện nhé.', hanzi: '今天下午我们一起去图书馆吧。', pinyin: 'Jīntiān xiàwǔ wǒmen yìqǐ qù túshūguǎn ba.' },
      { vi: 'Tôi đã chuẩn bị xong bài tập rồi.', hanzi: '我已经准备好作业了。', pinyin: 'Wǒ yǐjīng zhǔnbèi hǎo zuòyè le.' }
    ],
    HSK3: [
      { vi: 'Nếu bạn luyện tập mỗi ngày, phát âm sẽ tiến bộ nhanh hơn.', hanzi: '如果你每天练习，你的发音会进步得更快。', pinyin: 'Rúguǒ nǐ měitiān liànxí, nǐ de fāyīn huì jìnbù de gèng kuài.' },
      { vi: 'Tôi muốn dùng tiếng Trung để giới thiệu về thành phố của mình.', hanzi: '我想用汉语介绍一下我的城市。', pinyin: 'Wǒ xiǎng yòng Hànyǔ jièshào yíxià wǒ de chéngshì.' }
    ],
    HSK4: [
      { vi: 'Mặc dù công việc rất bận, tôi vẫn cố gắng dành thời gian học tiếng Trung.', hanzi: '虽然工作很忙，但是我还是尽量抽时间学习汉语。', pinyin: 'Suīrán gōngzuò hěn máng, dànshì wǒ háishì jǐnliàng chōu shíjiān xuéxí Hànyǔ.' }
    ],
    HSK5: [
      { vi: 'Học ngoại ngữ không chỉ giúp mở rộng kiến thức mà còn làm thay đổi cách chúng ta suy nghĩ.', hanzi: '学习外语不仅能够扩大知识面，而且会改变我们思考问题的方式。', pinyin: 'Xuéxí wàiyǔ bùjǐn nénggòu kuòdà zhīshi miàn, érqiě huì gǎibiàn wǒmen sīkǎo wèntí de fāngshì.' }
    ],
    HSK6: [
      { vi: 'Khi khả năng diễn đạt ngày càng chính xác hơn, người học sẽ tự tin hơn trong mọi tình huống giao tiếp.', hanzi: '当表达能力越来越准确的时候，学习者在各种交流场景中也会变得更加自信。', pinyin: 'Dāng biǎodá nénglì yuèláiyuè zhǔnquè de shíhou, xuéxízhě zài gèzhǒng jiāoliú chǎngjǐng zhōng yě huì biànde gèngjiā zìxìn.' }
    ]
  },
  reading: {
    HSK1: [
      {
        title: '我的学校',
        meta: 'HSK1 · Bài đọc ngắn',
        hanzi: '我的学校很漂亮。学校有很多学生，也有很多老师。每天早上我七点起床，八点到学校。上课的时候，我认真听老师说话。下课以后，我和朋友一起练习汉语。我们觉得学习中文很有意思。',
        pinyin: 'Wǒ de xuéxiào hěn piàoliang. Xuéxiào yǒu hěn duō xuéshēng, yě yǒu hěn duō lǎoshī. Měitiān zǎoshang wǒ qī diǎn qǐchuáng, bā diǎn dào xuéxiào. Shàngkè de shíhou, wǒ rènzhēn tīng lǎoshī shuōhuà. Xiàkè yǐhòu, wǒ hé péngyou yìqǐ liànxí Hànyǔ. Wǒmen juéde xuéxí Zhōngwén hěn yǒu yìsi.',
        meaning: 'Trường của tôi rất đẹp. Trường có rất nhiều học sinh và cũng có nhiều giáo viên. Mỗi sáng tôi thức dậy lúc bảy giờ và đến trường lúc tám giờ. Khi lên lớp, tôi chăm chú nghe thầy cô nói. Sau giờ học, tôi luyện tiếng Trung cùng bạn bè. Chúng tôi cảm thấy học tiếng Trung rất thú vị.'
      }
    ],
    HSK2: [
      {
        title: '周末计划',
        meta: 'HSK2 · Bài đọc vừa',
        hanzi: '这个周末我不想一直待在家里，因为最近学习和工作都比较忙，所以我想出去走一走，换一换心情。星期六早上，我打算先去附近的公园跑步，然后买一点水果和蔬菜。下午我会在家复习汉语，整理这周学过的词汇和句子。晚上如果朋友有时间，我们就一起吃饭，顺便练习口语。星期天我准备把房间打扫干净，再看一部中文电影。虽然周末很短，但是如果安排得好，我觉得两天也可以过得很充实。',
        pinyin: 'Zhège zhōumò wǒ bù xiǎng yìzhí dāi zài jiālǐ, yīnwèi zuìjìn xuéxí hé gōngzuò dōu bǐjiào máng, suǒyǐ wǒ xiǎng chūqù zǒu yi zǒu, huàn yi huàn xīnqíng. Xīngqīliù zǎoshang, wǒ dǎsuàn xiān qù fùjìn de gōngyuán pǎobù, ránhòu mǎi yìdiǎn shuǐguǒ hé shūcài. Xiàwǔ wǒ huì zài jiā fùxí Hànyǔ, zhěnglǐ zhè zhōu xué guò de cíhuì hé jùzi. Wǎnshang rúguǒ péngyou yǒu shíjiān, wǒmen jiù yìqǐ chīfàn, shùnbiàn liànxí kǒuyǔ. Xīngqītiān wǒ zhǔnbèi bǎ fángjiān dǎsǎo gānjìng, zài kàn yí bù Zhōngwén diànyǐng. Suīrán zhōumò hěn duǎn, dànshì rúguǒ ānpái de hǎo, wǒ juéde liǎng tiān yě kěyǐ guò de hěn chōngshí.',
        meaning: 'Cuối tuần này tôi không muốn ở mãi trong nhà, vì gần đây cả việc học và công việc đều khá bận nên tôi muốn ra ngoài đi dạo để đổi tâm trạng. Sáng thứ bảy, tôi dự định chạy bộ ở công viên gần nhà trước, sau đó mua ít trái cây và rau. Buổi chiều tôi sẽ ôn tiếng Trung ở nhà, sắp xếp lại từ vựng và câu đã học trong tuần. Buổi tối nếu bạn bè có thời gian, chúng tôi sẽ cùng ăn cơm và tiện luyện nói. Chủ nhật tôi định dọn phòng sạch sẽ rồi xem một bộ phim tiếng Trung. Cuối tuần tuy ngắn nhưng nếu biết sắp xếp thì hai ngày vẫn có thể rất ý nghĩa.'
      }
    ],
    HSK3: [
      {
        title: '第一次用中文介绍自己',
        meta: 'HSK3 · Đoạn văn hoàn chỉnh',
        hanzi: '上个月，我参加了一个语言交流活动。活动开始的时候，每个人都要用自己正在学习的外语做一个简单的自我介绍。轮到我的时候，我心里有一点紧张，因为这是我第一次在很多人面前用中文说话。我先介绍了自己的名字、工作和兴趣，然后说我为什么开始学习汉语。我告诉大家，我很喜欢中国文化，也希望以后有机会去中国旅行。虽然我说得不算特别流利，但是台下的人一直认真地听，还给了我很多鼓励。活动结束以后，一位中国朋友对我说，只要坚持练习，我一定会说得越来越自然。这句话让我印象很深，也让我更有信心继续学习下去。',
        pinyin: 'Shàng ge yuè, wǒ cānjiā le yí ge yǔyán jiāoliú huódòng. Huódòng kāishǐ de shíhou, měi ge rén dōu yào yòng zìjǐ zhèngzài xuéxí de wàiyǔ zuò yí ge jiǎndān de zìwǒ jièshào. Lún dào wǒ de shíhou, wǒ xīnlǐ yǒu yìdiǎn jǐnzhāng, yīnwèi zhè shì wǒ dì yī cì zài hěn duō rén miànqián yòng Zhōngwén shuōhuà. Wǒ xiān jièshào le zìjǐ de míngzi, gōngzuò hé xìngqù, ránhòu shuō wǒ wèishénme kāishǐ xuéxí Hànyǔ. Wǒ gàosu dàjiā, wǒ hěn xǐhuan Zhōngguó wénhuà, yě xīwàng yǐhòu yǒu jīhuì qù Zhōngguó lǚxíng. Suīrán wǒ shuō de bù suàn tèbié liúlì, dànshì táixià de rén yìzhí rènzhēn de tīng, hái gěi le wǒ hěn duō gǔlì. Huódòng jiéshù yǐhòu, yí wèi Zhōngguó péngyou duì wǒ shuō, zhǐyào jiānchí liànxí, wǒ yídìng huì shuō de yuèláiyuè zìrán. Zhè jù huà ràng wǒ yìnxiàng hěn shēn, yě ràng wǒ gèng yǒu xìnxīn jìxù xuéxí xiàqù.',
        meaning: 'Tháng trước, tôi tham gia một hoạt động giao lưu ngôn ngữ. Khi hoạt động bắt đầu, mỗi người đều phải dùng ngoại ngữ mình đang học để tự giới thiệu ngắn gọn. Đến lượt tôi, trong lòng hơi căng thẳng vì đây là lần đầu tôi nói tiếng Trung trước nhiều người. Tôi giới thiệu tên, công việc, sở thích, rồi nói vì sao mình bắt đầu học tiếng Trung. Tôi nói rằng mình rất thích văn hóa Trung Quốc và hy vọng sau này có cơ hội đi du lịch ở Trung Quốc. Dù tôi nói chưa thật trôi chảy, mọi người bên dưới vẫn lắng nghe và động viên rất nhiều. Sau hoạt động, một người bạn Trung Quốc nói với tôi rằng chỉ cần kiên trì luyện tập thì tôi chắc chắn sẽ nói ngày càng tự nhiên hơn. Câu nói đó để lại ấn tượng sâu sắc và giúp tôi có thêm tự tin để tiếp tục học.'
      }
    ],
    HSK4: [
      {
        title: '学习语言带来的改变',
        meta: 'HSK4 · Bài đọc dài',
        hanzi: '很多人在开始学习一门新语言之前，都会担心自己记不住单词、听不懂发音，或者没有足够的时间坚持下去。我以前也有过同样的想法，总觉得学习语言是一件很难、很远的事情。可是当我真正开始以后，我慢慢发现，语言学习带来的改变并不只是在考试成绩上，更是在日常生活和思维方式上。\n\n比如，现在我遇到不懂的问题时，不会马上觉得自己不行，而是会先想一想，有没有别的方法可以理解和解决。学习汉语让我习惯了反复练习，也让我更加注意表达的准确性。以前我和别人交流时，常常想到什么就说什么；现在我会先整理自己的思路，再更清楚地表达出来。\n\n另外，通过语言，我接触到了不同国家的人，也听到了很多和我原来完全不一样的故事。正因为这样，我越来越觉得，学习一门语言其实也是在学习怎样理解别人、怎样理解世界。虽然这个过程并不轻松，但是每一次小小的进步，都会让人感到非常值得。',
        pinyin: 'Hěn duō rén zài kāishǐ xuéxí yì mén xīn yǔyán zhīqián, dōu huì dānxīn zìjǐ jì bù zhù dāncí, tīng bù dǒng fāyīn, huòzhě méiyǒu zúgòu de shíjiān jiānchí xiàqù. Wǒ yǐqián yě yǒu guò tóngyàng de xiǎngfǎ, zǒng juéde xuéxí yǔyán shì yí jiàn hěn nán, hěn yuǎn de shìqing. Kěshì dāng wǒ zhēnzhèng kāishǐ yǐhòu, wǒ màn man fāxiàn, yǔyán xuéxí dàilái de gǎibiàn bìng bù zhǐ shì zài kǎoshì chéngjì shàng, gèng shì zài rìcháng shēnghuó hé sīwéi fāngshì shàng.\n\nBǐrú, xiànzài wǒ yùdào bù dǒng de wèntí shí, bú huì mǎshàng juéde zìjǐ bù xíng, ér shì huì xiān xiǎng yi xiǎng, yǒu méiyǒu bié de fāngfǎ kěyǐ lǐjiě hé jiějué. Xuéxí Hànyǔ ràng wǒ xíguàn le fǎnfù liànxí, yě ràng wǒ gèngjiā zhùyì biǎodá de zhǔnquè xìng. Yǐqián wǒ hé biérén jiāoliú shí, chángcháng xiǎngdào shénme jiù shuō shénme; xiànzài wǒ huì xiān zhěnglǐ zìjǐ de sīlù, zài gèng qīngchu de biǎodá chūlái.\n\nLìngwài, tōngguò yǔyán, wǒ jiēchù dào le bùtóng guójiā de rén, yě tīng dào le hěn duō hé wǒ yuánlái wánquán bù yíyàng de gùshi. Zhèng yīnwèi zhèyàng, wǒ yuèláiyuè juéde, xuéxí yì mén yǔyán qíshí yě shì zài xuéxí zěnyàng lǐjiě biérén, zěnyàng lǐjiě shìjiè. Suīrán zhège guòchéng bìng bù qīngsōng, dànshì měi yí cì xiǎoxiǎo de jìnbù, dōu huì ràng rén gǎndào fēicháng zhídé.',
        meaning: 'Nhiều người trước khi bắt đầu học một ngoại ngữ mới thường lo rằng mình không nhớ được từ, không nghe được phát âm hoặc không có đủ thời gian để kiên trì. Trước đây tôi cũng nghĩ như vậy và luôn cảm thấy việc học ngôn ngữ là chuyện rất khó và rất xa vời. Nhưng khi thực sự bắt đầu, tôi dần nhận ra sự thay đổi mà việc học ngôn ngữ mang lại không chỉ thể hiện ở điểm số mà còn ở cuộc sống hằng ngày và cách tư duy.\n\nVí dụ, bây giờ khi gặp vấn đề chưa hiểu, tôi không còn lập tức nghĩ rằng mình không làm được, mà sẽ tìm xem có cách nào khác để hiểu và giải quyết hay không. Việc học tiếng Trung khiến tôi quen với sự luyện tập lặp lại và chú ý hơn đến độ chính xác trong biểu đạt. Trước đây khi giao tiếp tôi thường nghĩ gì nói nấy; bây giờ tôi sẽ sắp xếp ý trước rồi diễn đạt rõ ràng hơn.\n\nNgoài ra, thông qua ngôn ngữ, tôi tiếp xúc với những con người ở nhiều quốc gia khác nhau và nghe được nhiều câu chuyện khác hẳn trải nghiệm ban đầu của mình. Vì thế tôi ngày càng cảm thấy rằng học một ngôn ngữ cũng là học cách hiểu người khác và hiểu thế giới. Dù quá trình này không hề nhẹ nhàng, mỗi bước tiến nhỏ đều khiến người ta cảm thấy rất xứng đáng.'
      }
    ],
    HSK5: [
      {
        title: '为什么长期阅读能真正提高语言能力',
        meta: 'HSK5 · Văn bản dài nhiều đoạn',
        hanzi: '很多学习者在学语言的时候，把大部分时间都放在背单词和做题上。这些方法当然有用，但是如果长期忽略阅读，语言能力往往很难真正稳定下来。阅读的价值并不只是在于认识更多的新词，更重要的是，它能帮助我们在完整的语境中理解语言是怎样自然地连接起来的。\n\n当我们阅读一篇文章时，不只是看见一个个孤立的词，而是在观察这些词怎样组成句子，句子又怎样发展成段落，最后表达出一个完整的观点。通过这个过程，学习者会逐渐熟悉常见的表达方式、语气变化和逻辑顺序。哪怕一开始读得很慢，只要坚持下去，大脑也会慢慢建立起对语言结构的敏感度。\n\n另外，阅读还能改变一个人使用语言的方式。很多人在说话或写作时，会发现自己明明认识不少词，却很难组织出自然、清楚的句子。原因往往不是词汇量不够，而是输入不够。长期阅读会给学习者大量高质量的输入，让人记住更地道的搭配和更自然的表达。久而久之，这些内容会在不知不觉中进入自己的语言系统。\n\n当然，要想通过阅读获得真正的进步，也不能只是追求数量。选择适合自己水平、同时又有一点挑战性的材料最重要。太简单的内容容易让人停留在舒适区，太难的文章又会消耗大量耐心。只有在能够理解大意的基础上不断接触略高一级的内容，阅读才会持续推动能力向前发展。\n\n所以，从长远来看，阅读不仅是一种学习方法，更是一种建立语言感觉、扩大知识范围和培养思考能力的过程。那些愿意耐心读下去的人，往往会在不知不觉中，拥有更加扎实而持久的语言能力。',
        pinyin: 'Hěn duō xuéxízhě zài xué yǔyán de shíhou, bǎ dà bùfen shíjiān dōu fàng zài bèi dāncí hé zuò tí shàng. Zhèxiē fāngfǎ dāngrán yǒuyòng, dànshì rúguǒ chángqī hūlüè yuèdú, yǔyán nénglì wǎngwǎng hěn nán zhēnzhèng wěndìng xiàlái. Yuèdú de jiàzhí bìng bù zhǐ shì zài yú rènshi gèng duō de xīn cí, gèng zhòngyào de shì, tā néng bāngzhù wǒmen zài wánzhěng de yǔjìng zhōng lǐjiě yǔyán shì zěnyàng zìrán de liánjiē qǐlái de.\n\nDāng wǒmen yuèdú yì piān wénzhāng shí, bù zhǐ shì kànjiàn yí ge ge gūlì de cí, ér shì zài guānchá zhèxiē cí zěnyàng zǔchéng jùzi, jùzi yòu zěnyàng fāzhǎn chéng duànluò, zuìhòu biǎodá chū yí ge wánzhěng de guāndiǎn. Tōngguò zhège guòchéng, xuéxízhě huì zhújiàn shúxī chángjiàn de biǎodá fāngshì, yǔqì biànhuà hé luójí shùnxù. Nǎpà yì kāishǐ dú de hěn màn, zhǐyào jiānchí xiàqù, dànǎo yě huì màn man jiànlì qǐ duì yǔyán jiégòu de mǐngǎndù.\n\nLìngwài, yuèdú hái néng gǎibiàn yí ge rén shǐyòng yǔyán de fāngshì. Hěn duō rén zài shuōhuà huò xiězuò shí, huì fāxiàn zìjǐ míngmíng rènshi bù shǎo cí, què hěn nán zǔzhī chū zìrán, qīngchu de jùzi. Yuányīn wǎngwǎng bù shì cíhuìliàng bùgòu, ér shì shūrù bùgòu. Chángqī yuèdú huì gěi xuéxízhě dàliàng gāo zhìliàng de shūrù, ràng rén jìzhù gèng dìdao de dāpèi hé gèng zìrán de biǎodá. Jiǔ ér jiǔ zhī, zhèxiē nèiróng huì zài bù zhī bù jué zhōng jìnrù zìjǐ de yǔyán xìtǒng.\n\nDāngrán, yào xiǎng tōngguò yuèdú huòdé zhēnzhèng de jìnbù, yě bù néng zhǐ shì zhuīqiú shùliàng. Xuǎnzé shìhé zìjǐ shuǐpíng, tóngshí yòu yǒu yìdiǎn tiǎozhànxìng de cáiliào zuì zhòngyào. Tài jiǎndān de nèiróng róngyì ràng rén tíngliú zài shūshìqū, tài nán de wénzhāng yòu huì xiāohào dàliàng nàixīn. Zhǐyǒu zài nénggòu lǐjiě dàyì de jīchǔ shàng búduàn jiēchù lüè gāo yì jí de nèiróng, yuèdú cái huì chíxù tuīdòng nénglì xiàng qián fāzhǎn.\n\nSuǒyǐ, cóng chángyuǎn lái kàn, yuèdú bùjǐn shì yì zhǒng xuéxí fāngfǎ, gèng shì yì zhǒng jiànlì yǔyán gǎnjué, kuòdà zhīshi fànwéi hé péiyǎng sīkǎo nénglì de guòchéng. Nàxiē yuànyì nàixīn dú xiàqù de rén, wǎngwǎng huì zài bù zhī bù jué zhōng, yōngyǒu gèngjiā zhāshi ér chíjiǔ de yǔyán nénglì.',
        meaning: 'Nhiều người học ngôn ngữ dành phần lớn thời gian cho việc học từ và làm bài tập. Những phương pháp đó dĩ nhiên hữu ích, nhưng nếu lâu dài bỏ qua đọc, năng lực ngôn ngữ thường khó ổn định thật sự. Giá trị của việc đọc không chỉ nằm ở việc biết thêm từ mới mà quan trọng hơn là nó giúp chúng ta hiểu ngôn ngữ được kết nối tự nhiên trong ngữ cảnh như thế nào.\n\nKhi đọc một bài viết, chúng ta không chỉ nhìn thấy những từ riêng lẻ mà đang quan sát cách các từ tạo thành câu, câu phát triển thành đoạn và cuối cùng thể hiện trọn vẹn một quan điểm. Qua quá trình đó, người học dần quen với cách diễn đạt, sắc thái và trật tự logic. Dù ban đầu đọc chậm, chỉ cần kiên trì thì não bộ cũng sẽ dần hình thành sự nhạy cảm với cấu trúc ngôn ngữ.\n\nNgoài ra, việc đọc còn thay đổi cách một người sử dụng ngôn ngữ. Nhiều người khi nói hoặc viết nhận ra mình biết khá nhiều từ nhưng rất khó tổ chức thành câu tự nhiên, rõ ràng. Lý do thường không phải vì thiếu từ mà vì thiếu đầu vào. Đọc lâu dài sẽ cung cấp lượng đầu vào chất lượng cao, giúp ghi nhớ những kết hợp từ và cách diễn đạt tự nhiên hơn. Dần dần, những điều đó sẽ đi vào hệ thống ngôn ngữ của chính người học.\n\nTất nhiên, để tiến bộ thật qua đọc, không thể chỉ chạy theo số lượng. Điều quan trọng là chọn tài liệu phù hợp với trình độ của mình nhưng vẫn có một chút thử thách. Nội dung quá dễ khiến ta ở mãi vùng an toàn, còn bài quá khó lại tiêu hao kiên nhẫn. Chỉ khi có thể hiểu ý chính và liên tục tiếp xúc với chất liệu cao hơn một chút thì việc đọc mới thúc đẩy năng lực tiến lên.\n\nVì vậy, nhìn về lâu dài, đọc không chỉ là một phương pháp học mà còn là quá trình xây dựng cảm giác ngôn ngữ, mở rộng tri thức và rèn luyện tư duy. Những người đủ kiên nhẫn để đọc tiếp thường sẽ sở hữu năng lực ngôn ngữ bền vững và chắc chắn hơn theo thời gian.'
      }
    ],
    HSK6: [
      {
        title: '真正的进步往往来自长期而安静的积累',
        meta: 'HSK6 · Văn bản rất dài',
        hanzi: '在很多人的想象中，进步似乎应该表现得非常明显：成绩突然提高，表达忽然流利，或者某一天醒来以后，发现自己终于“学会了”。然而，真实的成长过程往往并不是这样。尤其是在语言学习这件事上，真正有价值的变化，通常发生得缓慢、安静，甚至在相当长的一段时间里几乎不容易被察觉。\n\n一个人刚开始学习中文的时候，最在意的往往是眼前的困难：这个词为什么总记不住，那句话为什么一紧张就说不出来，听力为什么明明练了很多次却还是反应不过来。于是，不少学习者会怀疑自己的能力，甚至把暂时的停滞理解成“自己不适合学语言”。但如果稍微把时间拉长一点来看，就会发现，许多曾经觉得无法跨越的障碍，其实都在日复一日的输入、模仿、练习和修正之中，被一点一点地削弱了。\n\n语言能力的形成，很少依赖某一个“决定性的瞬间”。它更像是一种长期积累后的自然结果。你今天读过的一段文章，也许不会立刻让你学会某种表达；你反复听过的一段录音，也许不会马上改善你的语音；你今天写下的一小段文字，可能也不会立刻显现出多大的变化。可是这些看似分散、微小，甚至有些重复的努力，会在不知不觉中彼此连接，形成一种稳定的内部结构。等到某一天，你忽然能够更准确地表达复杂的想法、更自然地理解陌生的材料，或者更从容地参与一场交流时，你才会意识到，那些曾经看起来不起眼的练习，其实从来没有白费。\n\n更重要的是，长期学习所带来的收获并不只属于语言本身。一个在漫长过程中仍然愿意保持耐心的人，通常也会慢慢学会怎样面对不确定、怎样接受不完美、怎样在看不到立刻回报的时候仍然继续努力。这样的能力，会在学习之外的很多地方发挥作用。也就是说，语言学习不只是帮助我们掌握另一种表达工具，它也在塑造一个人的思考方式、行动习惯和看待世界的角度。\n\n因此，如果现在的你还觉得自己的进步不够快，不妨暂时放下对“立刻见效”的焦虑，把注意力重新放回每天能够完成的小事上：认真读完一篇文章，仔细听懂一段录音，开口模仿一个地道的句子，或者耐心改好一段自己写下来的话。真正能把人带向更高水平的，往往不是偶尔爆发出来的热情，而是那些看似平凡、却持续不断的积累。只要方向正确，时间最终会让所有认真走过的路，慢慢显现出意义。',
        pinyin: 'Zài hěn duō rén de xiǎngxiàng zhōng, jìnbù sìhū yīnggāi biǎoxiàn de fēicháng míngxiǎn: chéngjì tūrán tígāo, biǎodá hūrán liúlì, huòzhě mǒu yì tiān xǐng lái yǐhòu, fāxiàn zìjǐ zhōngyú "xuéhuì le". Rán ér, zhēnshí de chéngzhǎng guòchéng wǎngwǎng bìng bú shì zhèyàng. Yóuqí shì zài yǔyán xuéxí zhè jiàn shì shàng, zhēnzhèng yǒu jiàzhí de biànhuà, tōngcháng fāshēng de huǎnmàn, ānjìng, shènzhì zài xiāngdāng cháng de yí duàn shíjiān lǐ jīhū bù róngyì bèi chájué.\n\nYí ge rén gāng kāishǐ xuéxí Zhōngwén de shíhou, zuì zàiyì de wǎngwǎng shì yǎnqián de kùnnán: zhège cí wèishénme zǒng jì bù zhù, nà jù huà wèishénme yì jǐnzhāng jiù shuō bù chū lái, tīnglì wèishénme míngmíng liàn le hěn duō cì què háishi fǎnyìng bù guòlái. Yúshì, bù shǎo xuéxízhě huì huáiyí zìjǐ de nénglì, shènzhì bǎ zànshí de tíngzhì lǐjiě chéng "zìjǐ bù shìhé xué yǔyán". Dàn rúguǒ shāowēi bǎ shíjiān lā cháng yìdiǎn lái kàn, jiù huì fāxiàn, xǔduō céngjīng juéde wúfǎ kuàyuè de zhàngài, qíshí dōu zài rìfùyírì de shūrù, mófǎng, liànxí hé xiūzhèng zhī zhōng, bèi yìdiǎn yìdiǎn de xuēruò le.\n\nYǔyán nénglì de xíngchéng, hěn shǎo yīlài mǒu yí ge "juédìngxìng de shùnjiān". Tā gèng xiàng shì yì zhǒng chángqī jīlěi hòu de zìrán jiéguǒ. Nǐ jīntiān dú guò de yí duàn wénzhāng, yěxǔ bù huì lìkè ràng nǐ xuéhuì mǒu zhǒng biǎodá; nǐ fǎnfù tīng guò de yí duàn lùyīn, yěxǔ bù huì mǎshàng gǎishàn nǐ de yǔyīn; nǐ jīntiān xiě xià de yí xiǎo duàn wénzì, kěnéng yě bù huì lìkè xiǎnxiàn chū duō dà de biànhuà. Kěshì zhèxiē kànshì fēnsàn, wēixiǎo, shènzhì yǒuxiē chóngfù de nǔlì, huì zài bù zhī bù jué zhōng bǐcǐ liánjiē, xíngchéng yì zhǒng wěndìng de nèibù jiégòu. Děng dào mǒu yì tiān, nǐ hūrán nénggòu gèng zhǔnquè de biǎodá fùzá de xiǎngfǎ, gèng zìrán de lǐjiě mòshēng de cáiliào, huòzhě gèng cóngróng de cānyù yì chǎng jiāoliú shí, nǐ cái huì yìshí dào, nàxiē céngjīng kàn qǐlái bù qǐyǎn de liànxí, qíshí cónglái méiyǒu báifèi.\n\nGèng zhòngyào de shì, chángqī xuéxí suǒ dàilái de shōuhuò bìng bù zhǐ shǔyú yǔyán běnshēn. Yí ge zài màncháng guòchéng zhōng réngrán yuànyì bǎochí nàixīn de rén, tōngcháng yě huì màn man xuéhuì zěnyàng miànduì bù quèdìng, zěnyàng jiēshòu bù wánměi, zěnyàng zài kàn bú dào lìkè huíbào de shíhou réngrán jìxù nǔlì. Zhèyàng de nénglì, huì zài xuéxí zhīwài de hěn duō dìfang fāhuī zuòyòng. Yě jiù shì shuō, yǔyán xuéxí bù zhǐ shì bāngzhù wǒmen zhǎngwò lìng yì zhǒng biǎodá gōngjù, tā yě zài sùzào yí ge rén de sīkǎo fāngshì, xíngdòng xíguàn hé kàndài shìjiè de jiǎodù.\n\nYīncǐ, rúguǒ xiànzài de nǐ hái juéde zìjǐ de jìnbù bùgòu kuài, bùfáng zànshí fàngxià duì "lìkè jiànxiào" de jiāolǜ, bǎ zhùyìlì chóngxīn fàng huí měitiān nénggòu wánchéng de xiǎoshì shàng: rènzhēn dú wán yì piān wénzhāng, zǐxì tīng dǒng yí duàn lùyīn, kāikǒu mófǎng yí ge dìdao de jùzi, huòzhě nàixīn gǎi hǎo yí duàn zìjǐ xiě xiàlái de huà. Zhēnzhèng néng bǎ rén dài xiàng gèng gāo shuǐpíng de, wǎngwǎng bú shì ǒuěr bàofā chūlái de rèqíng, ér shì nàxiē kànshì píngfán, què chíxù búduàn de jīlěi. Zhǐyào fāngxiàng zhèngquè, shíjiān zuìzhōng huì ràng suǒyǒu rènzhēn zǒu guò de lù, màn man xiǎnxiàn chū yìyì.',
        meaning: 'Trong tưởng tượng của nhiều người, sự tiến bộ dường như phải thể hiện rất rõ ràng: điểm số đột nhiên tăng, khả năng biểu đạt bỗng trôi chảy, hoặc một ngày nào đó thức dậy và nhận ra mình cuối cùng đã “học được”. Nhưng quá trình trưởng thành thực sự thường không phải như vậy. Đặc biệt với việc học ngôn ngữ, những thay đổi có giá trị thật sự thường diễn ra chậm, yên lặng và đôi khi trong một quãng thời gian khá dài gần như khó nhận thấy.\n\nKhi mới bắt đầu học tiếng Trung, điều khiến người học bận tâm nhất thường là những khó khăn trước mắt: tại sao từ này cứ nhớ rồi quên, tại sao khi căng thẳng lại không nói ra được câu kia, tại sao đã luyện nghe nhiều lần mà phản xạ vẫn chậm. Vì thế, không ít người học nghi ngờ năng lực bản thân, thậm chí xem giai đoạn chững lại tạm thời là bằng chứng cho thấy mình “không hợp học ngôn ngữ”. Nhưng nếu kéo dài khung thời gian ra một chút, ta sẽ thấy nhiều trở ngại từng tưởng như không thể vượt qua thực ra đều đang dần yếu đi trong quá trình tiếp xúc, bắt chước, luyện tập và sửa sai mỗi ngày.\n\nSự hình thành năng lực ngôn ngữ hiếm khi dựa vào một khoảnh khắc mang tính quyết định. Nó giống như kết quả tự nhiên sau một quá trình tích lũy lâu dài. Đoạn văn bạn đọc hôm nay có thể chưa khiến bạn học được cách biểu đạt mới ngay lập tức; đoạn ghi âm bạn nghe đi nghe lại có thể chưa cải thiện phát âm ngay; đoạn văn bạn viết hôm nay cũng chưa chắc tạo ra thay đổi lớn. Nhưng những nỗ lực nhỏ, rời rạc, thậm chí lặp đi lặp lại ấy sẽ kết nối với nhau trong vô thức và hình thành một cấu trúc nội tại vững chắc. Đến một ngày bạn bỗng diễn đạt chính xác hơn, hiểu tài liệu lạ tự nhiên hơn, hoặc tham gia một cuộc trò chuyện bình tĩnh hơn, bạn mới nhận ra những lần luyện tập tưởng như nhỏ bé ấy chưa từng lãng phí.\n\nQuan trọng hơn, điều thu hoạch được từ học lâu dài không chỉ thuộc về bản thân ngôn ngữ. Một người vẫn giữ được sự kiên nhẫn trong hành trình dài thường cũng sẽ dần học được cách đối diện với điều chưa chắc chắn, chấp nhận sự chưa hoàn hảo và tiếp tục cố gắng ngay cả khi chưa thấy kết quả tức thì. Năng lực đó sẽ phát huy tác dụng ở rất nhiều lĩnh vực khác ngoài học tập. Nói cách khác, học ngôn ngữ không chỉ giúp chúng ta có thêm một công cụ biểu đạt mà còn âm thầm định hình cách suy nghĩ, thói quen hành động và góc nhìn về thế giới.\n\nVì vậy, nếu hiện tại bạn vẫn thấy mình tiến bộ chưa đủ nhanh, hãy tạm đặt xuống nỗi lo phải “thấy kết quả ngay” và đưa sự chú ý trở lại những việc nhỏ có thể hoàn thành mỗi ngày: đọc xong một bài viết thật chăm chú, nghe hiểu một đoạn ghi âm thật kỹ, mở miệng bắt chước một câu nói tự nhiên, hoặc kiên nhẫn sửa một đoạn văn mình đã viết. Điều thật sự đưa con người tới trình độ cao hơn thường không phải là những đợt hứng khởi bùng lên nhất thời, mà là những tích lũy tưởng chừng bình thường nhưng liên tục. Chỉ cần đi đúng hướng, thời gian sẽ dần cho thấy ý nghĩa của mọi bước đường nghiêm túc mà ta đã đi qua.'
      }
    ]
  },
  writing: {
    HSK1: [
      { char: '好', pinyin: 'hǎo', meaning: 'tốt', radical: '女', strokes: 6, explain: 'Chữ 好 gồm 女 (nữ) và 子 (con). Với người mới, cứ nhớ đơn giản là chữ này xuất hiện rất nhiều trong 你好. Học chữ bằng cách tách thành các phần nhỏ sẽ dễ hơn.', steps: ['Viết phần 女 ở bên trái trước.', 'Sau đó viết phần 子 ở bên phải.', 'Giữ tỷ lệ hai phần cân đối, bên trái gọn hơn bên phải.'] },
      { char: '你', pinyin: 'nǐ', meaning: 'bạn', radical: '亻', strokes: 7, explain: 'Chữ 你 là chữ rất quan trọng của người mới học. Bên trái là bộ đứng 亻 liên quan đến người, bên phải là phần 尔 tạo âm gần đúng.', steps: ['Viết bộ đứng 亻 bên trái trước.', 'Viết phần 尔 bên phải từ trên xuống dưới.', 'Chú ý khoảng cách giữa hai phần để chữ không bị chật.'] }
    ],
    HSK2: [
      { char: '学', pinyin: 'xué', meaning: 'học', radical: '子', strokes: 8, explain: 'Chữ 学 nhìn hơi nhiều nét nhưng vẫn có logic. Hãy chia thành phần mái ở trên và phần con ở dưới, đừng cố nhìn cả chữ cùng lúc.', steps: ['Viết phần trên trước, theo thứ tự từ trên xuống.', 'Hoàn thành nét chấm và phần giữa.', 'Viết 子 ở dưới cùng để kết thúc chữ.'] }
    ],
    HSK3: [
      { char: '想', pinyin: 'xiǎng', meaning: 'nghĩ, muốn', radical: '心', strokes: 13, explain: 'Chữ 想 gồm phần 相 ở trên và 心 ở dưới. Có thể nhớ rằng suy nghĩ thường liên quan đến tim/tâm nên chữ này có bộ 心.', steps: ['Viết 相 ở trên theo thứ tự trái sang phải.', 'Hoàn thành phần 木 rồi đến 目.', 'Viết bộ 心 phía dưới để kết thúc.'] }
    ],
    HSK4: [
      { char: '懂', pinyin: 'dǒng', meaning: 'hiểu', radical: '忄', strokes: 15, explain: 'Chữ 懂 có bộ 忄 ở bên trái, thường liên quan đến cảm xúc hoặc trạng thái tâm lý. Hãy viết theo từng cụm, không lao vào từng nét rời rạc.', steps: ['Viết bộ 忄 bên trái trước.', 'Viết phần giữa và trên của 董.', 'Hoàn thành phần dưới của 董, giữ chữ cao vừa phải.'] }
    ],
    HSK5: [
      { char: '赢', pinyin: 'yíng', meaning: 'chiến thắng', radical: '月', strokes: 17, explain: 'Đây là chữ nhiều nét. Với chữ khó, cách tốt nhất là chia nhóm bộ phận, nhẩm thứ tự lớn trước rồi mới luyện từng nét nhỏ.', steps: ['Quan sát tổng thể chữ trước khi viết.', 'Viết phần trên theo nguyên tắc từ trên xuống dưới.', 'Viết lần lượt từng phần dưới, không vội vàng.'] }
    ],
    HSK6: [
      { char: '辩', pinyin: 'biàn', meaning: 'biện luận, phân biệt', radical: '辛', strokes: 16, explain: 'Chữ 辩 thuộc nhóm dễ nhầm. Khi học chữ nâng cao, bạn nên quan sát sự khác nhau giữa các phần giống nhau và luôn đối chiếu với bộ chính.', steps: ['Viết phần trái trước theo trục dọc.', 'Hoàn thành phần giữa rồi sang phần phải.', 'So lại bố cục tổng thể để tránh hai bên lệch nhau.'] }
    ]
  },
  strokes: [
    { char: '一', name: 'Nét ngang', note: 'Viết từ trái sang phải.' },
    { char: '丨', name: 'Nét sổ', note: 'Viết từ trên xuống dưới.' },
    { char: '丿', name: 'Nét phẩy', note: 'Hướng xuống trái.' },
    { char: '㇏', name: 'Nét mác', note: 'Hướng xuống phải.' },
    { char: '丶', name: 'Nét chấm', note: 'Ngắn, dứt khoát.' },
    { char: '㇀', name: 'Nét hất', note: 'Kết thúc bằng nhấc bút nhẹ.' }
  ]
};

const state = {
  currentScreen: 'home',
  vocabLevel: 'HSK1',
  showHanzi: true,
  showPinyin: true,
  vocabAnswers: {},
  speakingLevel: 'HSK1',
  speakingIndex: 0,
  readingLevel: 'HSK1',
  readingIndex: 0,
  writingLevel: 'HSK1',
  writingIndex: 0,
  progress: {
    words: new Set(),
    speak: new Set(),
    read: new Set(),
    write: new Set()
  }
};

let introTimer;
let speakingTimer;
let voicesLoaded = false;

const intro = document.getElementById('intro');
const introProgress = document.getElementById('introProgress');
const introPercent = document.getElementById('introPercent');
const app = document.getElementById('app');
const drawer = document.getElementById('drawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const menuButton = document.getElementById('menuButton');
const drawerLinks = document.querySelectorAll('.drawer-link');
const screenButtons = document.querySelectorAll('[data-open-screen]');

const vocabLevel = document.getElementById('vocabLevel');
const toggleHanzi = document.getElementById('toggleHanzi');
const togglePinyin = document.getElementById('togglePinyin');
const vocabBody = document.getElementById('vocabBody');

const speakingLevel = document.getElementById('speakingLevel');
const shadowVietnamese = document.getElementById('shadowVietnamese');
const shadowCountdown = document.getElementById('shadowCountdown');
const shadowReveal = document.getElementById('shadowReveal');
const shadowHanzi = document.getElementById('shadowHanzi');
const shadowPinyin = document.getElementById('shadowPinyin');
const speakPrev = document.getElementById('speakPrev');
const speakReplay = document.getElementById('speakReplay');
const speakNext = document.getElementById('speakNext');

const readingLevel = document.getElementById('readingLevel');
const readingLesson = document.getElementById('readingLesson');
const readingTitle = document.getElementById('readingTitle');
const readingMeta = document.getElementById('readingMeta');
const readingHanzi = document.getElementById('readingHanzi');
const readingPinyin = document.getElementById('readingPinyin');
const readingMeaning = document.getElementById('readingMeaning');

const writingLevel = document.getElementById('writingLevel');
const writingChar = document.getElementById('writingChar');
const writingBigChar = document.getElementById('writingBigChar');
const writingPinyin = document.getElementById('writingPinyin');
const writingMeaning = document.getElementById('writingMeaning');
const writingRadical = document.getElementById('writingRadical');
const writingStrokeCount = document.getElementById('writingStrokeCount');
const writingExplain = document.getElementById('writingExplain');
const writingSteps = document.getElementById('writingSteps');
const strokeBasics = document.getElementById('strokeBasics');

const statWords = document.getElementById('statWords');
const statSpeak = document.getElementById('statSpeak');
const statRead = document.getElementById('statRead');
const statWrite = document.getElementById('statWrite');

function init() {
  fillLevelSelect(vocabLevel, Object.keys(data.vocabulary), state.vocabLevel);
  fillLevelSelect(speakingLevel, Object.keys(data.speaking), state.speakingLevel);
  fillLevelSelect(readingLevel, Object.keys(data.reading), state.readingLevel);
  fillLevelSelect(writingLevel, Object.keys(data.writing), state.writingLevel);

  renderVocabTable();
  renderSpeaking();
  renderReadingLessons();
  renderReading();
  renderWritingChars();
  renderWriting();
  renderStrokeBasics();
  bindEvents();
  updateStats();
  startIntro();

  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = () => { voicesLoaded = true; };
  }
}

function bindEvents() {
  menuButton.addEventListener('click', openDrawer);
  drawerBackdrop.addEventListener('click', closeDrawer);
  drawerLinks.forEach(btn => btn.addEventListener('click', () => {
    showScreen(btn.dataset.screen);
    closeDrawer();
  }));
  screenButtons.forEach(btn => btn.addEventListener('click', () => showScreen(btn.dataset.openScreen)));

  vocabLevel.addEventListener('change', () => {
    state.vocabLevel = vocabLevel.value;
    renderVocabTable();
  });
  toggleHanzi.addEventListener('change', () => {
    state.showHanzi = toggleHanzi.checked;
    updateVocabVisibility();
  });
  togglePinyin.addEventListener('change', () => {
    state.showPinyin = togglePinyin.checked;
    updateVocabVisibility();
  });

  speakingLevel.addEventListener('change', () => {
    state.speakingLevel = speakingLevel.value;
    state.speakingIndex = 0;
    renderSpeaking();
  });
  speakPrev.addEventListener('click', () => moveSpeaking(-1));
  speakNext.addEventListener('click', () => moveSpeaking(1));
  speakReplay.addEventListener('click', () => replaySpeaking());

  readingLevel.addEventListener('change', () => {
    state.readingLevel = readingLevel.value;
    state.readingIndex = 0;
    renderReadingLessons();
    renderReading();
  });
  readingLesson.addEventListener('change', () => {
    state.readingIndex = Number(readingLesson.value);
    renderReading();
  });

  writingLevel.addEventListener('change', () => {
    state.writingLevel = writingLevel.value;
    state.writingIndex = 0;
    renderWritingChars();
    renderWriting();
  });
  writingChar.addEventListener('change', () => {
    state.writingIndex = Number(writingChar.value);
    renderWriting();
  });
}

function fillLevelSelect(el, levels, selected) {
  el.innerHTML = levels.map(level => `<option value="${level}">${level}</option>`).join('');
  el.value = selected;
}

function startIntro() {
  let value = 0;
  introTimer = setInterval(() => {
    value += value < 60 ? 8 : value < 88 ? 4 : 2;
    if (value > 100) value = 100;
    introProgress.style.width = `${value}%`;
    introPercent.textContent = `${value}%`;
    if (value === 100) {
      clearInterval(introTimer);
      setTimeout(() => {
        intro.classList.add('hidden');
        app.classList.remove('hidden');
      }, 320);
    }
  }, 120);
}

function openDrawer() {
  drawer.classList.remove('closed');
  drawerBackdrop.classList.remove('hidden');
}

function closeDrawer() {
  drawer.classList.add('closed');
  drawerBackdrop.classList.add('hidden');
}

function showScreen(name) {
  state.currentScreen = name;
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.toggle('active', screen.id === `screen-${name}`);
  });
  drawerLinks.forEach(link => link.classList.toggle('active', link.dataset.screen === name));
  if (name === 'speaking') renderSpeaking();
}

function renderVocabTable() {
  const rows = data.vocabulary[state.vocabLevel];
  vocabBody.innerHTML = '';
  rows.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.dataset.key = `${state.vocabLevel}-${item.id}`;
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td class="hanzi-cell" data-role="hanzi"></td>
      <td class="pinyin-cell" data-role="pinyin"></td>
      <td>${item.meaning}</td>
      <td>
        <input type="text" class="vocab-input input-idle" placeholder="Nhập Hán tự..." autocomplete="off" autocapitalize="off" spellcheck="false" />
      </td>
      <td><span class="result-pill result-idle">Đoán Xem</span></td>
    `;
    const input = tr.querySelector('input');
    const resultEl = tr.querySelector('.result-pill');
    const key = `${state.vocabLevel}-${item.id}`;
    const existing = state.vocabAnswers[key]?.value || '';
    input.value = existing;
    input.dataset.key = key;
    input.dataset.hanzi = item.hanzi;
    input.dataset.composing = 'false';

    input.addEventListener('compositionstart', () => {
      input.dataset.composing = 'true';
      paintResult(input, resultEl, 'compose');
    });
    input.addEventListener('compositionend', () => {
      input.dataset.composing = 'false';
      storeVocabAnswer(input.dataset.key, input.value);
      paintLiveResult(input, resultEl);
    });
    input.addEventListener('input', () => {
      storeVocabAnswer(input.dataset.key, input.value);
      if (input.dataset.composing === 'true') {
        paintResult(input, resultEl, 'compose');
      } else {
        paintLiveResult(input, resultEl);
      }
    });

    vocabBody.appendChild(tr);
    applyVisibilityToRow(tr, item);
    paintLiveResult(input, resultEl);
  });
}

function storeVocabAnswer(key, value) {
  state.vocabAnswers[key] = { value };
  if (value.trim()) {
    state.progress.words.add(key);
    updateStats();
  }
}

function paintLiveResult(input, resultEl) {
  const value = input.value.trim();
  const answer = input.dataset.hanzi;
  if (!value) {
    paintResult(input, resultEl, 'idle');
  } else if (value === answer) {
    paintResult(input, resultEl, 'good');
  } else {
    paintResult(input, resultEl, 'bad');
  }
}

function paintResult(input, resultEl, mode) {
  input.classList.remove('input-idle', 'input-good', 'input-bad');
  resultEl.className = 'result-pill';
  if (mode === 'good') {
    input.classList.add('input-good');
    resultEl.classList.add('result-good');
    resultEl.textContent = 'Đúng';
  } else if (mode === 'bad') {
    input.classList.add('input-bad');
    resultEl.classList.add('result-bad');
    resultEl.textContent = 'Sai rồi';
  } else if (mode === 'compose') {
    input.classList.add('input-idle');
    resultEl.classList.add('result-compose');
    resultEl.textContent = 'Đang gõ...';
  } else {
    input.classList.add('input-idle');
    resultEl.classList.add('result-idle');
    resultEl.textContent = 'Đoán Xem';
  }
}

function updateVocabVisibility() {
  const rows = data.vocabulary[state.vocabLevel];
  [...vocabBody.children].forEach((tr, index) => applyVisibilityToRow(tr, rows[index]));
}

function applyVisibilityToRow(tr, item) {
  const hanziCell = tr.querySelector('[data-role="hanzi"]');
  const pinyinCell = tr.querySelector('[data-role="pinyin"]');
  hanziCell.textContent = state.showHanzi ? item.hanzi : '••••';
  hanziCell.classList.toggle('masked', !state.showHanzi);
  pinyinCell.textContent = state.showPinyin ? item.pinyin : '••••••';
  pinyinCell.classList.toggle('masked', !state.showPinyin);
}

function moveSpeaking(delta) {
  const list = data.speaking[state.speakingLevel];
  state.speakingIndex = (state.speakingIndex + delta + list.length) % list.length;
  renderSpeaking();
}

function replaySpeaking() {
  const item = data.speaking[state.speakingLevel][state.speakingIndex];
  shadowReveal.classList.remove('hidden');
  shadowCountdown.textContent = '✓';
  shadowHanzi.textContent = item.hanzi;
  shadowPinyin.textContent = item.pinyin;
  speakChinese(item.hanzi);
}

function renderSpeaking() {
  clearInterval(speakingTimer);
  const item = data.speaking[state.speakingLevel][state.speakingIndex];
  speakingLevel.value = state.speakingLevel;
  shadowVietnamese.textContent = item.vi;
  shadowReveal.classList.add('hidden');
  let countdown = 3;
  shadowCountdown.textContent = countdown;
  speakingTimer = setInterval(() => {
    countdown -= 1;
    if (countdown > 0) {
      shadowCountdown.textContent = countdown;
    } else {
      clearInterval(speakingTimer);
      shadowCountdown.textContent = '✓';
      shadowReveal.classList.remove('hidden');
      shadowHanzi.textContent = item.hanzi;
      shadowPinyin.textContent = item.pinyin;
      speakChinese(item.hanzi);
      state.progress.speak.add(`${state.speakingLevel}-${state.speakingIndex}`);
      updateStats();
    }
  }, 1000);
}

function pickChineseVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = speechSynthesis.getVoices();
  if (!voices.length && !voicesLoaded) return null;
  return voices.find(v => v.lang === 'zh-CN' && /Ting|Tian|Sin|Chinese|Mandarin/i.test(v.name))
    || voices.find(v => v.lang.startsWith('zh-CN'))
    || voices.find(v => v.lang.startsWith('zh'))
    || null;
}

function speakChinese(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  const voice = pickChineseVoice();
  if (voice) utter.voice = voice;
  utter.lang = voice?.lang || 'zh-CN';
  utter.rate = 0.9;
  utter.pitch = 1;
  window.speechSynthesis.speak(utter);
}

function renderReadingLessons() {
  const lessons = data.reading[state.readingLevel];
  readingLesson.innerHTML = lessons.map((lesson, idx) => `<option value="${idx}">${lesson.title}</option>`).join('');
  readingLesson.value = state.readingIndex;
}

function renderReading() {
  const lesson = data.reading[state.readingLevel][state.readingIndex];
  readingLevel.value = state.readingLevel;
  readingTitle.textContent = lesson.title;
  readingMeta.textContent = lesson.meta;
  readingHanzi.textContent = lesson.hanzi;
  readingPinyin.textContent = lesson.pinyin;
  readingMeaning.textContent = lesson.meaning;
  state.progress.read.add(`${state.readingLevel}-${state.readingIndex}`);
  updateStats();
}

function renderWritingChars() {
  const chars = data.writing[state.writingLevel];
  writingChar.innerHTML = chars.map((entry, idx) => `<option value="${idx}">${entry.char} · ${entry.meaning}</option>`).join('');
  writingChar.value = state.writingIndex;
}

function renderWriting() {
  const entry = data.writing[state.writingLevel][state.writingIndex];
  writingLevel.value = state.writingLevel;
  writingBigChar.textContent = entry.char;
  writingPinyin.textContent = entry.pinyin;
  writingMeaning.textContent = entry.meaning;
  writingRadical.textContent = `Bộ thủ: ${entry.radical}`;
  writingStrokeCount.textContent = `Số nét: ${entry.strokes}`;
  writingExplain.textContent = entry.explain;
  writingSteps.innerHTML = entry.steps.map(step => `<li>${step}</li>`).join('');
  state.progress.write.add(`${state.writingLevel}-${state.writingIndex}`);
  updateStats();
}

function renderStrokeBasics() {
  strokeBasics.innerHTML = data.strokes.map(item => `
    <div class="stroke-item">
      <div class="stroke-char">${item.char}</div>
      <div class="stroke-name">${item.name}</div>
      <div class="stroke-note">${item.note}</div>
    </div>
  `).join('');
}

function updateStats() {
  statWords.textContent = state.progress.words.size;
  statSpeak.textContent = state.progress.speak.size;
  statRead.textContent = state.progress.read.size;
  statWrite.textContent = state.progress.write.size;
}

init();
