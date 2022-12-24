import Provider, { Configuration } from "oidc-provider";

const configuration: Configuration = {
	// ... see the available options in Configuration options section
	clients: [
		{
			client_id: "foo",
			client_secret: "bar",
			redirect_uris: ["https://oidcdebugger.com/debug"],
			grant_types: ["implicit", "authorization_code"],
			response_types: ["id_token", "code", "code id_token"],
			scope: "openid",
			token_endpoint_auth_method: "client_secret_post",
		},
	],
};

const oidc = new Provider("http://localhost:3000", configuration);

export const oidcController = oidc.callback();
