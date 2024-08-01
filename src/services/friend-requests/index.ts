/* eslint-disable import/no-unused-modules */
import { CreateFriendRequestCommand, FriendRequest } from "./domain";

export const create = async (
  command: CreateFriendRequestCommand
): Promise<null | FriendRequest> => {
  try {
    const url = process.env.NEXT_PUBLIC_CREATE_FRIEND_REQUEST_URL;
    if (url) {
      const response = await fetch(
        process.env.NEXT_PUBLIC_CREATE_FRIEND_REQUEST_URL!,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(command),
        }
      );

      if (!response.ok) {
        return null;
      }

      return (await response.json()) as FriendRequest;
    }
    throw new Error("Theres no url");
  } catch (error) {
    throw error;
  }
};

export function buildCreatePayload(
  message: string,
  senderId: string,
  recieverId: string
): CreateFriendRequestCommand {
  return {
    message,
    recieverId,
    senderId,
  };
}

export async function getNewFriendRequestsByRecieverId(
  id: string
): Promise<FriendRequest[] | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_GET_NEW_FRIEND_REQUEST_BY_RECIEVER_ID_URL;
  if (!baseUrl) {
    return null;
  }
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "GET",
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as FriendRequest[];
}