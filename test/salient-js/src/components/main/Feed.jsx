import { Card } from "@material-tailwind/react";
import card from "@material-tailwind/react/theme/components/card";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";

export default function Feed() {
    return(
        <>
        <PostForm/>
        <PostFeed/>
        </>
    );
}   