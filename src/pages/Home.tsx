import { PropsOf } from "@chakra-ui/react";
import { TimelineDivider } from "@/components/TimelineDivider";
import { PostList } from "@/components/PostList";

const fakeMessages: PropsOf<typeof PostList>["messages"] = [
    {
        id: "msg1",
        userId: "user1",
        username: "Alice",
        profilePictureUrl: "https://picsum.photos/200?random=user1",
        publishedAt: "5 minutes ago",
        text: 'Hi'
    },
    {
        id: "msg2",
        userId: "user2",
        username: "Bob",
        profilePictureUrl: "https://picsum.photos/200?random=user2",
        publishedAt: "15 minutes ago",
        text: 'Hi, there....'
    },
    {
        id: "msg3",
        userId: "user3",
        username: "Charles",
        profilePictureUrl: "https://picsum.photos/200?random=user3",
        publishedAt: "1 hour ago",
        text: 'Hi, bro !'
    },
]

export const Home = () => {

    return (
        <>
        <TimelineDivider text="For you" />
        <PostList messages={fakeMessages} />
        </>
    );
};