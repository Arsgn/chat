import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "..";
import { useAuthStore } from "@/stores/useAuthStore";

const useSignUpMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<AUTH.RegisterRes, Error, AUTH.RegisterReq>({
    mutationFn: async (data) => {
      const response = await api.post(`/user/sign-up`, data);
      return response.data;
    },
    onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: ["me"],
			});
		},
  });
};

const useSignInMutation = () => {
  const queryClient = useQueryClient();
	const { setTokens } = useAuthStore();
	return useMutation<AUTH.LoginRes, Error, AUTH.LoginReq>({
		mutationFn: async (data) => {
			const response = await api.post("/user/sign-in", data);
			return response.data;
		},
		onSuccess: (data) => {
			if (data.success && data.data.session) {
				setTokens(
					data.data.session.access_token,
					data.data.session.refresh_token
				);
			}
			queryClient.invalidateQueries({
				queryKey: ["me"],
			});
		},
	});
};

const useUserMe = (query: AUTH.UserMeReq) => {
  return useQuery<AUTH.UserMeRes>({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await api.get(`/user/me`);
      return response.data;
    },
    enabled: query.enabled,
    retry: false,
    retryDelay: 100,
  });
};

const useUpdateMe = () => {
  return useMutation<
    AUTH.UpdateMeRes,
    Error,
    { id: number | undefined; data: AUTH.UpdateMeReq }
  >({
    mutationFn: async ({ id, data }) => {
      const response = await api.patch(`/user/update/${id}`, data);
      return response.data;
    },
  });
};


export { useSignUpMutation, useSignInMutation, useUserMe, useUpdateMe };
