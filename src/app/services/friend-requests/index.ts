/* eslint-disable import/no-unused-modules */
import { CreateFriendRequestCommand } from "./domain";

export const create = async (command: CreateFriendRequestCommand) => {
  try {
    const url = process.env.NEXT_PUBLIC_CREATE_FRIEND_REQUEST_URL;
    if (url) {
      const response = await fetch(
        process.env.NEXT_PUBLIC_CREATE_FRIEND_REQUEST_URL!,
        {
          method: "POST",
          body: JSON.stringify(command),
        }
      );

      return await response.json();
    }
    throw new Error("Theres no url");
  } catch (error) {
    throw error;
  }
};

export function buildCreatePayload(
  message: string,
  senderId: string,
  possibleFriendId: string
): CreateFriendRequestCommand {
  return {
    message,
    possibleFriendId,
    senderId,
  };
}
