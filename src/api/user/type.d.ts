namespace AUTH {
  type RegisterReq = {
    email: string;
    password: string;
    fullName: string;
    age: number;
  };

  type RegisterRes = {
    success: boolean;
    data: {
      success: boolean;
      message: string;
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

  type LoginReq = {
    email: string;
    password: string;
  };
  type LoginRes = {
    success: boolean;
    data: {
      user: {
        id: number;
        email: string;
        fullName: string;
        age: number;
        supabaseId: string;
        createdAt: string;
        updatedAt: string;
      };
      session: {
        access_token: string;
        token_type: string;
        expires_in: number;
        expires_at: number;
        refresh_token: string;
      };
    };
  };

  type UserMeRes = {
    success: boolean;
    data: {
      id: number;
      email: string;
      fullName: string;
      age: number;
      supabaseId: string;
      createdAt: string;
      updatedAt: string;
    };
  };

  type UserMeReq = {
    enabled?: boolean;
  };

  type UpdateMeReq = {
    fullName: string;
    age: number | undefined;
  };

  type UpdateMeRes = {
    success: boolean;
    data: {
      id: number;
      email: string;
      fullName: string;
      age: number;
      supabaseId: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}
