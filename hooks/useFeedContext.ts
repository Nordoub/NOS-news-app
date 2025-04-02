import { useContext } from "react";
import { FeedContext } from "../context/FeedProvider";
import { FeedContextType } from "../models/feedContext";

export const useFeedContext = () => useContext(FeedContext) as FeedContextType;
