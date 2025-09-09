namespace MESSAGE {
  type GetMessageRes = {
    success: boolean;
    data: Array<{
      id: number;
      userId: number;
      message: string;
      createdAt: string;
      updatedAt: string;
      user: {
        id: number;
        email: string;
        fullName?: string;
        age?: number;
        supabaseId: string;
        createdAt: string;
        updatedAt: string;
      };
    }>;
  };
  type GetMessageReq = void;
  //!
  type SendMessageRes = {
    success: boolean;
    data: {
      id: number;
      userId: number;
      message: string;
      createdAt: string;
      updatedAt: string;
      user: {
        id: number;
        email: string;
        fullName: string;
        age: number;
        supabaseId: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
  type SendMessageReq = {
    message: string;
  };
  //!
  type GetUsersMessageRes = {
    success: boolean;
    data: Array<{
      id: number;
      email: string;
      fullName?: string;
      age?: number;
      supabaseId: string;
      createdAt: string;
      updatedAt: string;
    }>;
  };
  type GetUsersMessageReq = void;
  //!
  type GetPrivateMessageRes = {
    success: boolean;
    data: Array<{
      id: number;
      senderId: number;
      receiverId: number;
      message: string;
      createdAt: string;
      updatedAt: string;
    }>;
  };
  type GetPrivateMessageReq = number;
  //!
  type SendMessageToUserRes = {
    success: boolean;
    data: {
      id: number;
      senderId: number;
      receiverId: number;
      message: string;
      createdAt: string;
      updatedAt: string;
    };
  };
  type SendMessageToUserReq = {
    receiverId: number;
    message: string;
  };
}
