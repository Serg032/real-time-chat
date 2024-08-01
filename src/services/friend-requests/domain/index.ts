import { User } from "@/services/auth/domain";

/* eslint-disable import/no-unused-modules */
export interface FriendRequest {
  id: string;
  senderId: string;
  recieverId: string;
  message: string;
  accepted: boolean | undefined;
}
export type CreateFriendRequestCommand = Omit<FriendRequest, "id" | "accepted">;

export interface GetNewFriendRequestByRecieverIdResponse {
  newrequests?: FriendRequest[];
  error?: string;
}

export interface MarshledFriendRequest {
  sender: User;
  message: string;
}
