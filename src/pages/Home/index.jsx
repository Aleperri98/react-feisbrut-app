import { useState } from 'react';
import { FriendPreview } from '../../components/FriendPreview';
import { MessagePreview } from ' ../../components/MessagePreview';
import { Post } from '../../components/Post';
import styles from './Home.module.scss';

const friends = [
    { name:"Chandler", photo:"https://randomuser.me/api/portraits/lego/7.jpg"},
    { name:"Pippo", photo:"https://randomuser.me/api/portraits/lego/6.jpg"},
    { name:"Geralt", photo:"https://randomuser.me/api/portraits/lego/0.jpg"}
]

const messages= [
    {  text: "lorem ipsum", date: new Date(), sender: "Pippo" },
    {  text: "ciao", date: new Date(),sender: "Chandler" },
    {  text: "come state?", date: new Date(),sender: "Geralt" },
    {  text: "belloo sto React", date: new Date(),sender: "Geralt" },
    {  text: "Cosa è React?", date: new Date(),sender: "Pippo" },
];

const posts = [
    {
        author: 'User',
        text: 'Oggi ho mangiato bene',
        date: newDate(),
        photo: ""
    },
    {
        author: 'User',
        text: 'ieri sono stato male',
        date: newDate()
    },
    {
        author: 'User',
        text: 'Che bella giornata!',
        date: newDate()
    },
    {
        author: 'User',
        text: 'Le temperature si sono abbassate, amici!',
        date: newDate()
    
    }
];


const Home = () => {
    const [friendsPreview, setFriendsPreview] = useState(friends);
    const [allPosts, setAllPosts] = useState(posts);
    const [messagesPreview, setMessagesPreview] = useState(messages);

    // setFriendsPreview([])

    return (
        <section className={styles.home}>
        <h3> Benvenuto utent</h3>
        <div className={styles.grid}>
            <aside>
                {friendsPreview.map((friend, index) =>(
                <FriendPreview key={index} data={friend}/>
                ))}
            </aside>
            <main>
                {allPosts.map((post, index) =>(
                <Post key={index} data={post}/>
                ))}
            </main>
            <aside>
            {messagesPreview.map((message, index) =>(
                <MessagePreview key={index} data={message}/>
                ))}
            </aside>
        </div>
        </section>
    );
};

export default Home;