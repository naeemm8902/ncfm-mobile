export const categoryConfig = {
  spiritual: {
    slug: 'spiritual',
    label: 'Spiritual',
    imageKey: 'categorySpiritual',
    tags: ['Faith', 'Prayer', 'Missions', 'Teachable Moments', 'The Bible'],
    description: 'Faith-centered stories, biblical insight, and encouragement for everyday life.',
  },
  family: {
    slug: 'family',
    label: 'Family',
    imageKey: 'categoryFamily',
    tags: ['Parenting', 'Marriage', 'Kids/Youth', 'Finances', 'Home Life'],
    description: 'Guidance and inspiration for building strong, faith-filled families.',
  },
  lifestyle: {
    slug: 'lifestyle',
    label: 'Lifestyle',
    imageKey: 'categoryLifestyle',
    tags: ['Health & Wellness', 'Community & Business', 'Work & Career', 'Seniors'],
    description: 'Practical advice and inspiration for healthy, intentional living.',
  },
  entertainment: {
    slug: 'entertainment',
    label: 'Inspiration & Entertainment',
    imageKey: 'categoryEntertainment',
    tags: ['Sports', 'Movies', 'Music', 'Events', 'Local Highlights'],
    description: 'Family-friendly sports, entertainment, and local happenings through a faith-based lens.',
  },
};

export const categoryList = Object.values(categoryConfig);

const thumbKeys = ['articleThumb1', 'articleThumb2', 'articleThumb3', 'articleThumb4', 'articleThumb5'];

export const allArticles = [
  {
    title: 'The Christmas Truce',
    date: 'December 1, 2025',
    author: 'Editorial Staff',
    excerpt: 'In December 1914, along parts of the Western Front, something extraordinary happened. Soldiers who had been firing at...',
    slug: 'the-christmas-truce',
    category: 'spiritual',
    body: [
      'In April of 1944, 12-year-old Fritz Vinzken was living in the German city of Aachen when a bomb destroyed his home.',
      '"My mother and I were sitting in the basement when the bomb went off and our home collapsed," he said in a 1997 interview. "So bitterly we were homeless. I was twelve years old when the heavy bombing raid on the city of Aachen left my family homeless. My parents, bless God, had faith in Christ and together we were all evacuated out of the smoldering ruins to a village near the river Rhine, where we found shelter."',
      'Also long after, on a bitter, cold Christmas Eve, Fritz and his mother, Elisabeth, were eating a meager Christmas meal of rooster and potatoes when they heard a loud knock at the door.',
      'Answering the door, Fritz’s mother suddenly stood face to face with three American GIs of the 5th Infantry Division, one badly injured.',
      '"My mother knew the penalty for harboring the enemy, but when she looked into the young Americans’ eyes and saw that one was badly hurt, she opened the door and let them in," Fritz recounted. "We did not speak English." So one of the Americans spoke French to my mother and she could communicate with him. She learned the young, dark-haired fellow was Jim. His comrade, tall and slender, was Ralph. Hardy was the wounded one. We added more potatoes to our dinner and made extra places at the table.',
      'Suddenly, a tense situation became potentially deadly as the family heard a second knock at the door.',
      'Fritz held his breath, fearing that the second wave of guests were his own countrymen. Upon answering the door, his fears were confirmed: there were four German soldiers at the door.',
      'Facing the intruders, Elisabeth stood firm and spoke to the German soldiers. As it turned out, they were lost and were nothing deadlier than the sub-zero temperatures after days of wandering. She agreed to let them in, but under two conditions: accept the American guests and leave their weapons outside.',
      'Agreeing to her terms, both the Americans and Germans, enemies in war, were temporarily reclassified and permitted to stay in the shack.',
      'The icy demarcation inside the cabin began to thaw when one Wehrmacht soldier — a medical student before the war — began to patch up Hardy’s wounds.',
      'Sitting down to a meal, Elisabeth said a prayer, asking God for one night of peace and that all those seated at the table would survive the war. By the end of the prayer, all the soldiers were quite emotional.',
      'From then on, things were different. For one night, there was no war. On a snowy hill and a family in a cabin, trying to stay warm, eat a hot meal, and get some sleep.',
      'By the time morning rolled around, the soldiers were to leave with their weapons, but not a shot was fired. The Germans helped fashion a splint for Hardy’s knee, formed a compass for the Americans, and gave them directions to get back to their lines.',
      'Knowing they couldn’t stay, Elisabeth and Fritz went back to the German line, with the three Germans, eventually reuniting with Fritz’s father.',
      'When asked what kept him alive, Fritz gave full credit to his mother.',
      '"The seven silent gifts of a single woman, who, by her acts and intuition, prevented bloodshed, taught me the practical meaning of the words: Good Will Toward Mankind," he said.',
      'Fritz eventually told his story publicly. Thanks to that, Fritz was put in contact with Ralph Blank, one of the soldiers from that first encounter. In 1996, the two were reunited at Ralph’s home in Maryland.',
      '"When he told me, ‘Your mother saved my life,’ it was the high point of my life," Vinzken said at the time. "Now, I can die in peace. My mother’s courage lives on, and it shows what one act of grace can build."',
    ],
  },
  {
    title: 'God Is Good All the Time: Part Two',
    date: 'November 18, 2025',
    author: 'Editorial Staff',
    excerpt: 'In December 1914, along parts of the Western Front, something extraordinary happened. Soldiers who had been firing at...',
    slug: 'god-is-good-all-the-time-part-two',
    category: 'spiritual',
    body: [
      'God is good all the time, and all the time God is good. This timeless declaration has carried believers through seasons of joy and seasons of sorrow alike.',
      'Part two of this series explores how that goodness manifests in the everyday moments of life — in answered prayers, in unexpected provision, and in the quiet peace that surpasses understanding.',
    ],
  },
  {
    title: 'Faith In Fractured America',
    date: 'December 1, 2025',
    author: 'Editorial Staff',
    excerpt: 'In December 1914, along parts of the Western Front, something extraordinary happened. Soldiers who had been firing at...',
    slug: 'faith-in-fractured-america',
    category: 'spiritual',
    body: [
      'In a nation increasingly divided, faith communities across Middle Tennessee are finding ways to bridge gaps, serve neighbors, and hold fast to hope.',
      'This article explores how local churches and believers are living out their faith in practical, tangible ways — even when the cultural landscape feels uncertain.',
    ],
  },
  {
    title: 'God Is Good All the Time: Part One',
    date: 'December 1, 2025',
    author: 'Editorial Staff',
    excerpt: 'In December 1914, along parts of the Western Front, something extraordinary happened. Soldiers who had been firing at...',
    slug: 'god-is-good-all-the-time-part-one',
    category: 'spiritual',
    body: [
      'The phrase "God is good all the time" is more than a call-and-response in Sunday worship. It is a declaration of trust forged in the fires of real life.',
      'Part one of this series looks at the biblical foundation for this belief and how it has sustained generations of believers through hardship and triumph alike.',
    ],
  },
  {
    title: 'Reflecting on Hickman Recovery Fest',
    date: 'November 18, 2025',
    author: 'Editorial Staff',
    excerpt: 'In December 1914, along parts of the Western Front, something extraordinary happened. Soldiers who had been firing at...',
    slug: 'reflecting-on-hickman-recovery-fest',
    category: 'spiritual',
    body: [
      'The Hickman Recovery Fest brought together hundreds of community members to celebrate healing, hope, and new beginnings.',
      'From live music to testimonies of transformation, the event was a powerful reminder that recovery is possible and that community makes all the difference.',
    ],
  },
  {
    title: 'We Are Living In Historical Times',
    date: 'December 1, 2025',
    author: 'Editorial Staff',
    excerpt: 'In December 1914, along parts of the Western Front, something extraordinary happened. Soldiers who had been firing at...',
    slug: 'we-are-living-in-historical-times',
    category: 'spiritual',
    body: [
      'Every generation believes it lives in extraordinary times — and perhaps every generation is right.',
      'But the convergence of cultural, political, and spiritual forces in our current moment calls believers to a heightened awareness and a deeper dependence on God’s unchanging Word.',
    ],
  },
  {
    title: 'Building a Faith-Filled Home',
    date: 'December 1, 2025',
    author: 'Editorial Staff',
    excerpt: 'A strong family doesn’t happen by accident. It is built intentionally, one conversation, one prayer, and one shared meal at a time...',
    slug: 'building-a-faith-filled-home',
    category: 'family',
    body: [
      'A strong family doesn’t happen by accident. It is built intentionally, one conversation, one prayer, and one shared meal at a time.',
      'For many Middle Tennessee families, faith is the cornerstone of everything — the lens through which they parent, the foundation on which they build their marriages, and the compass that guides their children into adulthood.',
      'But what does it actually look like to build a faith-filled home in today’s world? With screens competing for attention, schedules packed to the brim, and cultural pressures pulling from every direction, many parents feel the weight of that question deeply.',
      'The answer, say local pastors and family counselors, begins with intentionality. "You have to be deliberate," says one Spring Hill pastor. "Faith doesn’t just trickle down — it has to be modeled, talked about, and woven into the rhythms of daily life."',
      'That might mean a simple prayer before dinner, a Bible verse on the refrigerator, or a weekly family night where everyone puts down their phones and connects. It doesn’t have to be elaborate — it just has to be consistent.',
      'It’s never too late to start. Whether your children are toddlers or teenagers, whether your marriage is thriving or in need of repair, the decision to build something better begins today.',
    ],
  },
  {
    title: 'Raising Kids Who Love God and Others',
    date: 'November 18, 2025',
    author: 'Editorial Staff',
    excerpt: 'Every parent wants their child to grow up with strong values. But how do you nurture a heart that genuinely loves God and serves others?',
    slug: 'raising-kids-who-love-god-and-others',
    category: 'family',
    body: [
      'Every parent wants their child to grow up with strong values. But how do you nurture a heart that genuinely loves God and serves others — not out of obligation, but out of authentic faith?',
      'It starts earlier than most parents think. Research consistently shows that the spiritual habits formed in childhood — prayer, Scripture, worship, service — tend to stick.',
      'Service is another powerful teacher. When children volunteer at a food pantry, visit a nursing home, or help a neighbor in need, they experience the joy of giving firsthand.',
      'Finally, model what you want to see. Children are far more influenced by what they observe than what they are told.',
    ],
  },
  {
    title: 'The Power of a Praying Marriage',
    date: 'December 1, 2025',
    author: 'Editorial Staff',
    excerpt: 'Couples who pray together report deeper intimacy, greater resilience through hardship, and a shared sense of purpose that carries them through life’s storms.',
    slug: 'the-power-of-a-praying-marriage',
    category: 'family',
    body: [
      'There is an old saying that couples who pray together stay together. And while no single habit guarantees a lasting marriage, the research — and the testimonies of countless couples — suggests there is something profoundly true in that idea.',
      '"Prayer changes the atmosphere in a marriage," says one Nashville-area marriage counselor. "When you kneel together before God, you are reminded that you are on the same team."',
      'If you’ve never prayed with your spouse, today is a good day to start. Reach across the table, take their hand, and say a simple prayer.',
    ],
  },
  {
    title: 'Teaching Your Children About Money God’s Way',
    date: 'November 18, 2025',
    author: 'Editorial Staff',
    excerpt: 'Financial literacy is one of the most practical gifts you can give your children. But when it’s rooted in biblical principles, it becomes something even more lasting.',
    slug: 'teaching-your-children-about-money',
    category: 'family',
    body: [
      'Financial literacy is one of the most practical gifts you can give your children. But when it’s rooted in biblical principles, it becomes something even more lasting — a framework for generosity, integrity, and wise stewardship.',
      'Start with the basics: earn, save, give, spend. Even young children can understand these four buckets.',
      'The goal is not to raise children who are merely financially savvy. It is to raise children who see themselves as stewards of God’s resources.',
    ],
  },
  {
    title: 'When Home Life Gets Hard: Finding Grace in the Chaos',
    date: 'December 1, 2025',
    author: 'Editorial Staff',
    excerpt: 'Every family goes through hard seasons. The question is not whether difficulty will come, but how we will face it when it does.',
    slug: 'when-home-life-gets-hard',
    category: 'family',
    body: [
      'Every family goes through hard seasons. The question is not whether difficulty will come, but how we will face it when it does.',
      'The Christian faith offers something the world cannot — a God who enters into our suffering, who does not stand at a distance but draws near to the brokenhearted.',
      'If your home life feels hard right now, take heart. Hard seasons do not last forever.',
    ],
  },
  {
    title: 'Marriage After Kids: Keeping Your Relationship Strong',
    date: 'November 18, 2025',
    author: 'Editorial Staff',
    excerpt: 'Children are a blessing — but they can also put enormous pressure on a marriage. Here’s how couples in Middle Tennessee are keeping their relationships strong.',
    slug: 'marriage-after-kids',
    category: 'family',
    body: [
      'Children are a blessing — but they can also put enormous pressure on a marriage. Sleep deprivation, financial stress, shifting roles, and the sheer busyness of family life can leave couples feeling more like co-managers than partners.',
      '"You have to protect your marriage the same way you protect your children," says one Franklin-based marriage therapist.',
      'Invest in your marriage. It is worth every effort.',
    ],
  },
];

export function getArticleBySlug(slug) {
  return allArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug) {
  return allArticles.filter((a) => a.category === categorySlug);
}

export function thumbKeyForIndex(i) {
  return thumbKeys[i % thumbKeys.length];
}

export default { categoryConfig, categoryList, allArticles, getArticleBySlug, getArticlesByCategory, thumbKeyForIndex };
