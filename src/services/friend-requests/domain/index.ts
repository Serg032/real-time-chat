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
  newRequests?: FriendRequest;
  error?: string;
}
