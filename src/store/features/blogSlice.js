// blogSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id:1,
      heading: "The Art of War",
      author: "Sun Tzu",
      summary:
        "Sun Tzu's 'The Art of War' is a timeless classic that provides strategic insights" +
        " into warfare and conflict. This ancient Chinese military treatise offers profound wisdom " +
        " on strategy, tactics, and the importance of adaptability in the face of changing " +
        " circumstances. Sun Tzu emphasizes the significance of intelligence, planning, and " +
        " deception in achieving victory, making it a must-read for military leaders, business " +
        " strategists, and anyone seeking to navigate complex challenges effectively",
      content:
        "Written over two thousand years ago, 'The Art of War' by Sun Tzu remains one of " +
        " the most influential works on strategy and tactics. The treatise is composed of 13 " +
        " chapters, each dedicated to a different aspect of warfare, from planning and deception " +
        " to the use of spies and the importance of adaptability. Sun Tzu's core message is that " +
        " the outcome of any conflict, whether in war or daily life, is determined by one's ability " +
        " to adapt to changing circumstances and outmaneuver opponents. He argues that direct " +
        " confrontation should be avoided whenever possible, and victory can often be achieved " +
        " without battle through strategic positioning and psychological warfare. The principles " +
        " outlined in 'The Art of War' have transcended their military origins and are now " +
        " applicable to various fields, including business, sports, and personal development. " +
        " Leaders and strategists worldwide continue to draw inspiration from Sun Tzu's insights, " +
        " finding his advice on leadership, preparation, and strategic thinking timeless and " +
        " universally applicable.",
    },
    {
      id:"2",
      heading: "1984",
      author: "George Orwell",
      summary:
        "George Orwell's '1984' is a dystopian novel that explores themes of totalitarianism, " +
        " surveillance, and individuality. Set in a future where the government exerts total control " +
        " over every aspect of life, the novel follows Winston Smith, a man struggling to retain " +
        " his sense of self in a world where independent thought is a crime. Orwell's powerful " +
        " narrative serves as a warning against the dangers of oppressive regimes and the loss " +
        " of personal freedom ",
      content:
        "Published in 1949, '1984' by George Orwell is a profound exploration of a dystopian  " +
        "future where the state wields absolute power over its citizens. The story is set in Airstrip  " +
        "One (formerly known as Great Britain), a province of the superstate Oceania. The government,  " +
        "led by the Party and its enigmatic leader Big Brother, employs constant surveillance,  " +
        "propaganda, and mind control to maintain its authority. The protagonist, Winston Smith,  " +
        "works at the Ministry of Truth, where his job is to alter historical records to fit the  " +
        "Party's ever-changing narrative. Despite the oppressive environment, Winston begins to  " +
        "harbor rebellious thoughts and starts a covert love affair with Julia, a colleague.  " +
        "As he delves deeper into acts of rebellion, Winston becomes increasingly aware of the  " +
        "extent of the Party's control and the futility of resistance. '1984' is not just a tale  " +
        "of political tyranny but also a chilling commentary on the fragility of truth and the  " +
        "erosion of individual freedoms. Orwell's vision of a world where reality is manipulated  " +
        "and personal autonomy is obliterated continues to resonate, serving as a stark reminder  " +
        "of the value of vigilance and the enduring struggle for freedom ",
    },
    {
      id:3,
      heading: "To Kill a Mockingbird",
      author: "Harper Lee",
      summary:
        "Harper Lee's 'To Kill a Mockingbird' is a poignant exploration of racial injustice " +
        " and moral growth in the Deep South. Through the eyes of Scout Finch, a young girl, the novel" +
        " portrays the impact of prejudice and the importance of empathy. Set in the 1930s, it follows" +
        " the trial of a black man, Tom Robinson, who is falsely accused of raping a white woman. Scou" +
        " father, Atticus Finch, serves as his defense lawyer, embodying the principles of justice" +
        " and integrity.",
      content:
        "Published in 1960, 'To Kill a Mockingbird' by Harper Lee is a seminal work in " +
        "  American literature that addresses complex issues of race, class, and morality. The novel is " +
        "  set in the fictional town of Maycomb, Alabama, during the Great Depression, and is narrated " +
        "  by Scout Finch, a young girl with a keen sense of curiosity and justice. Scout's father, " +
        "  Atticus Finch, is a lawyer who takes on the case of Tom Robinson, a black man accused of " +
        "  raping Mayella Ewell, a white woman. Despite overwhelming evidence of Tom's innocence, " +
        "  the deeply entrenched racism of the time leads to a foregone conclusion. Throughout the " +
        "  novel, Scout and her brother Jem grapple with the harsh realities of prejudice and learn " +
        "  valuable life lessons from their father's unwavering commitment to doing what is right. " +
        "  'To Kill a Mockingbird' not only critiques the systemic racism of its time but also " +
        "  underscores the importance of empathy and understanding. Harper Lee's masterful storytelling " +
        "  and rich character development make this novel a powerful and enduring exploration of human " +
        "  decency and moral courage",
    },
    {
      id:4,
      heading: "Pride and Prejudice",
      author: "Jane Austen",
      summary:
        "Jane Austen's 'Pride and Prejudice' is a classic novel that delves into themes of" +
        "  love, social class, and personal growth. The story centers on Elizabeth Bennet, a sharp-witted " +
        "  young woman, and her evolving relationship with the enigmatic Mr. Darcy. Through witty dialogue " +
        "  and keen observations, Austen critiques the societal norms and expectations of 19th-century " +
        "  England, creating a timeless and beloved narrative.",
      content:
        "'Pride and Prejudice', first published in 1813, is one of Jane Austen's most famous " +
        " works. The novel follows the lives of the Bennet family, particularly Elizabeth Bennet, as " +
        " they navigate the complexities of love, marriage, and social standing. Elizabeth, known for " +
        " her intelligence and independence, initially clashes with the wealthy and aloof Mr. Darcy. " +
        " However, as the story progresses, both characters undergo significant personal transformations. " +
        " Elizabeth learns to look beyond her initial prejudices, while Mr. Darcy overcomes his pride " +
        " and social prejudices. Austen's novel is celebrated for its rich characterizations, " +
        " intricate plot, and insightful commentary on the societal pressures of her time. The themes " +
        " of 'Pride and Prejudice' – including the importance of personal integrity and the critique " +
        " of superficial judgments – continue to resonate with readers today. Austen's sharp wit and " +
        " engaging storytelling make 'Pride and Prejudice' a timeless exploration of human relationships " +
        " and social conventions",
    },
    {
      id:5,
      heading: "Moby-Dick",
      author: "Herman Melville",
      summary:
        "Herman Melville's 'Moby-Dick' is an epic tale of obsession and revenge. The novel " +
        "  chronicles the journey of the Pequod, a whaling ship led by the vengeful Captain Ahab, who is " +
        "  determined to hunt down Moby Dick, the great white whale that maimed him. Through rich " +
        "  symbolism and complex characters, Melville explores themes of fate, humanity, and the " +
        "  relentless pursuit of an unattainable goal.",
      content:
        "First published in 1851, 'Moby-Dick' by Herman Melville is a monumental work of" +
        " American literature that blends adventure, philosophy, and a deep examination of the human " +
        " condition. The novel is narrated by Ishmael, a sailor on the whaling ship Pequod, which is " +
        " commanded by Captain Ahab. Ahab is driven by an all-consuming desire to kill Moby Dick, the " +
        " enormous white whale that previously destroyed his ship and severed his leg. As the Pequod " +
        " embarks on its perilous voyage, the crew encounters various challenges and reflects on the " +
        " broader implications of their quest. Melville's narrative is rich with symbolism, from the " +
        " whiteness of the whale representing the ambiguity of good and evil to the Pequod itself " +
        " symbolizing a microcosm of society. 'Moby-Dick' delves into profound themes such as the " +
        " destructive nature of obsession, the inevitability of fate, and the struggle between man and " +
        " nature. Although initially met with mixed reviews, 'Moby-Dick' has since become a cornerstone " +
        " of Western literature, celebrated for its complex structure, intricate prose, and philosophical " +
        " depth. The novel remains a powerful exploration of the human spirit and the relentless drive " +
        " to conquer the unconquerable",
    },
    {id:6,
      heading: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      summary:
        "F. Scott Fitzgerald's 'The Great Gatsby' is a quintessential American novel that" +
        " captures the spirit of the Roaring Twenties. Set in the summer of 1922, the story follows " +
        " the enigmatic Jay Gatsby and his unrelenting pursuit of wealth, status, and his lost love, " +
        " Daisy Buchanan. Through lavish parties and tragic events, Fitzgerald critiques the American " +
        " Dream and explores themes of excess, idealism, and social stratification.",
      content:
        "Published in 1925, 'The Great Gatsby' by F. Scott Fitzgerald is a literary masterpiece " +
        "that paints a vivid picture of the Jazz Age, a period marked by economic prosperity and cultural " +
        "change in the United States. The novel is narrated by Nick Carraway, a young man from Minnesota " +
        "who moves to New York to learn about the bond business. Nick becomes entangled in the world of " +
        "his mysterious neighbor, Jay Gatsby, a wealthy and enigmatic man known for his extravagant " +
        "parties. As Nick learns more about Gatsby, he discovers that his wealth is amassed in an attempt " +
        "to win back his former lover, Daisy Buchanan, who is now married to the affluent but unfaithful " +
        "Tom Buchanan. The novel's portrayal of the American Dream is complex and often critical, " +
        "highlighting the emptiness and moral decay that can accompany the pursuit of wealth and social " +
        "status. Fitzgerald's elegant prose and keen social commentary make 'The Great Gatsby' a timeless " +
        "exploration of ambition, love, and the illusions that shape our lives. Despite its initial " +
        "lukewarm reception, the novel has grown to be considered one of the greatest works in American " +
        "literature, offering enduring insights into the human condition and the American experience",
    },
    {id:7,
      heading: "War and Peace",
      author: "Leo Tolstoy",
      summary:
        "Leo Tolstoy's 'War and Peace' is an epic novel that intertwines the lives of multiple" +
        "   characters during the Napoleonic Wars. Through detailed characterizations and sweeping " +
        "   historical narratives, Tolstoy examines the impact of war on society and individuals. The " +
        "   novel delves into themes of fate, free will, and the complexity of human nature, offering a " +
        "   profound meditation on history and the human experience.",
      content:
        "First published in 1869, 'War and Peace' by Leo Tolstoy is a monumental work that" +
        " stands as one of the greatest achievements in world literature. The novel is set against the " +
        " backdrop of the Napoleonic Wars and follows the lives of several aristocratic families, " +
        " including the Rostovs, the Bolkonskys, and the Bezukhovs. Central to the narrative are Pierre " +
        " Bezukhov, an awkward but kind-hearted young man who unexpectedly inherits a vast fortune, " +
        " Andrei Bolkonsky, a disillusioned prince seeking purpose, and Natasha Rostov, a vivacious " +
        " young woman whose growth and experiences encapsulate the emotional heart of the novel. " +
        " Through these and many other characters, Tolstoy explores themes of love, honor, and the " +
        " search for meaning in a tumultuous world. 'War and Peace' is renowned for its deep philosophical " +
        " reflections, its detailed portrayal of historical events, and its profound insights into the " +
        " nature of human existence. Tolstoy's masterful storytelling and rich character development " +
        " provide a panoramic view of Russian society and the broader human condition, making 'War and " +
        " Peace' a timeless exploration of the interplay between history and individual lives. The novel's " +
        " enduring relevance and universal themes continue to resonate with readers worldwide, cementing " +
        " its status as a literary masterpiece",
    },
    {
      id:8,
      heading: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      summary:
        "Fyodor Dostoevsky's 'Crime and Punishment' is a profound psychological exploration of" +
        " guilt, redemption, and the human condition. The novel follows Raskolnikov, a former student who " +
        " commits a murder and grapples with the moral and psychological consequences. Dostoevsky's " +
        " intricate character development and philosophical depth make this novel a gripping and " +
        " thought-provoking read.",
      content:
        "Published in 1866, 'Crime and Punishment' by Fyodor Dostoevsky is a seminal work of" +
        "   Russian literature that delves into the complexities of morality, justice, and human psychology. " +
        "   The story centers on Rodion Raskolnikov, a destitute ex-student living in St. Petersburg, who " +
        "   formulates a theory that certain extraordinary individuals have the right to transgress moral " +
        "   boundaries for the greater good. Believing himself to be one such individual, Raskolnikov " +
        "   commits a brutal murder of a pawnbroker, hoping to use the stolen money to improve his " +
        "   circumstances. However, instead of feeling liberated, he is consumed by guilt and paranoia, " +
        "   leading to a psychological unraveling. Throughout the novel, Raskolnikov encounters various " +
        "   characters who embody different aspects of the human experience, including the virtuous Sonia " +
        "   Marmeladov, whose faith and compassion challenge his nihilistic worldview. Dostoevsky's " +
        "   exploration of Raskolnikov's inner turmoil is both intense and deeply philosophical, raising " +
        "   questions about the nature of evil, the possibility of redemption, and the societal forces " +
        "   that shape individual actions. 'Crime and Punishment' remains a powerful study of the human " +
        "   psyche, and its themes of guilt, moral ambiguity, and the search for meaning continue to " +
        "   resonate with readers",
    },
    {id:9,
      heading: "Brave New World",
      author: "Aldous Huxley",
      summary:
        "Aldous Huxley's 'Brave New World' is a dystopian novel that examines a future" +
        " society driven by technological advancements and conditioned conformity. Set in a world " +
        " where human beings are engineered and societal roles are predetermined, the novel explores " +
        " themes of individuality, freedom, and the consequences of sacrificing humanity for progress. " +
        " Huxley's chilling vision serves as a cautionary tale about the potential perils of unchecked " +
        " technological and social control.",
      content:
        "Published in 1932, 'Brave New World' by Aldous Huxley is a landmark work of science " +
        " fiction that offers a haunting vision of a future society. The novel is set in a World State " +
        " where technological advancements have eradicated disease, poverty, and war, but at the cost of " +
        " individuality and freedom. Human beings are created and conditioned for specific societal roles " +
        " in hatcheries and conditioning centers, ensuring a rigidly controlled and stable society. " +
        " The story follows Bernard Marx, an Alpha-plus who feels out of place in this conformist world, " +
        " and John the Savage, a man raised outside of the World State's influence. As John experiences " +
        " this new society, his reactions and resistance highlight the stark contrasts between the " +
        " controlled utopia and the natural human experience. Huxley's 'Brave New World' critiques " +
        " the dangers of losing humanity in the pursuit of technological and societal perfection. " +
        " The novel's exploration of themes such as the dehumanizing effects of technology, the loss of " +
        " individual autonomy, and the illusion of happiness through artificial means remains " +
        " profoundly relevant today. Huxley's incisive social commentary and imaginative storytelling " +
        " make 'Brave New World' a timeless and thought-provoking read",
    },
    {
      id:10,
      heading: "The Catcher in the Rye",
      author: "J.D. Salinger",
      summary:
        "J.D. Salinger's 'The Catcher in the Rye' is a novel that delves into the mind of" +
        "    Holden Caulfield, a teenager grappling with alienation and identity. Through Holden's " +
        "    narrative, Salinger captures the essence of teenage angst and the struggle to find one's " +
        "    place in a world perceived as phony. The novel's introspective and candid portrayal of " +
        "    adolescence has made it a lasting favorite among readers of all ages.",
      content:
        "Published in 1951, 'The Catcher in the Rye' by J.D. Salinger is a seminal work that " +
        "    explores the complexities of adolescence through the eyes of its protagonist, Holden Caulfield. " +
        "    The novel begins with Holden being expelled from his prep school and deciding to spend a few days " +
        "    in New York City before returning home. During this time, he reflects on his experiences, " +
        "    struggles with the death of his younger brother Allie, and expresses his disdain for the " +
        "    'phoniness' he perceives in the adult world. Holden's interactions with various characters " +
        "    reveal his deep sense of alienation and his yearning for genuine human connection. The title " +
        "    of the novel refers to Holden's fantasy of being 'the catcher in the rye', a guardian who " +
        "    saves children from losing their innocence. Salinger's poignant and authentic portrayal of " +
        "    Holden's inner turmoil resonates with readers, capturing the universal experience of growing up " +
        "    and searching for identity. 'The Catcher in the Rye' remains a touchstone in American literature, " +
        "    celebrated for its honest and empathetic exploration of the challenges of adolescence",
    },
  ],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog(state, action) {
      state.blogs.push(action.payload);
    },
  },
});

export const { addBlog } = blogSlice.actions;

export default blogSlice.reducer;
