#SSO Basics:

https://auth0.com/blog/what-is-and-how-does-single-sign-on-work/

    **federated identity terms**
        a linked or centralized identity

    **authentication**: credential and identity validatation

    **authorization**: allows/denys access to certain roles and actions a user has

    **attributes exchange**: sharing the same information across management systems (name, member #, etc)

    **user management**: CRUD user accounts

    notes:

        SSO is only concerned with authentication. establishing identities and sharing information / data

        same origin policy prevents cookies/session data from being shared across domains (can only access what you create)

        common solution to same origin is using a central domain which shares session info across other domains/services

            central domain generates a JWT (possibly encrypted with JWE) 

        auth0 connects other SSO frameworks together

JWT: https://auth0.com/docs/jwt

    JSON web token, pronounced "Jot", are a compact and self-contained way to securely transmit and verify information 

    all JWTs are tokens but there are tokens that follow other standards 

    can be sent in a URL, POST parameter or in a http header with all information needed to validate the token

    **benefits vs SWTs abd SAML tokens**

        **compact**, a fraction of the size of other tokens

        **secure**, less security holes so easier to implement secure encryption

        **common**, json has natural doc-to-object mapping, something lacking in the xml solutions used with SAML. easier to work with

        **quicker**, easier to process on user devices

    **uses**

        **authentication**: successful log in returns an ID token, which is always a JWT

        **authorization**: access tokens can be passed in JWT form, allows easy access/denial to routes, resources and actions available to the user

        **info exchange**: JWT can securly transmitting signed information with content that can be verified as unchanged by receiver/requester

OAuth: https://auth0.com/docs/protocols/oauth2

    OAuth 2.0 authorization framework is a protocol that allows a user to grant a third-party web site or application access to the user's protected resources, without necessarily revealing their long-term credentials or even their identity.

    Instead of using the resource owner's credentials to access protected resources, the client obtains an access token--a string denoting a specific scope, lifetime, and other access attributes. Access tokens are issued to third-party clients by an authorization server with the approval of the resource owner. Then the client uses the access token to access the protected resources hosted by the resource server.

    so OAuth provides a layer between resources, users and 3rd parities. allowing information to be securly exchanged without exposing user credentials / identity to the 3rd parties

    OAuth generates JWT with permissions represented by the access token, allowing OAuth to return a "scope" of actions/resources the user is authorized to access

    **roles**

        resource owner, end-user

        resource server, the api you're accessing

        client, application making request for resource owner

        auth server, server that authenticates the resource owner and issues tokens after successful authorization 

    **grants**

        OAuth 2.0 uses two endpoints: the /authorize endpoint and the /oauth/token endpoint.

        /authorize endpoint is used to interact with the resource owner and get the authorization to access the protected resource. used by the Authorization Code and the Implicit grant types. response_mode can be used to specify how the result of the request is formatted 

            request parameters

             **response_type**  Tells the authorization server which grant to execute. 

             **response_mode**  (Optional) How the result of the authorization request is formatted. Values: - query: for Authorization Code grant. 302 Found triggers redirect. - fragment: for Implicit grant. 302 Found triggers redirect. - form_post: 200 OK with response parameters embedded in an HTML form as hidden parameters. - web_message: For Silent Authentication. Uses HTML5 web messaging. 

             **client_id**  The ID of the application that asks for authorization. 

             **redirect_uri**  Holds a URL. A successful response from this endpoint results in a redirect to this URL. 

             **scope**  A space-delimited list of permissions that the application requires. 

             **state**  An opaque value, used for security purposes. If this request parameter is set in the request, then it is returned to the application as part of the redirect_uri. 

        /oauth/token is used to get or refresh access to a token. used by all but Implicit Flow because in that case token is issued directly 

            in Authorization Code Flow, app exchanges auth code it gets from the endpoint for access token

            in Client Credentials Flow and Resource Owner Credentials Exchange, app authenticates using a set of creds and gets access token

            to mitigate CSRF attacks, the state parameter allows you to restore the previous state of the app. 

SAML: https://auth0.com/docs/protocols/saml

    Security Assertion Markup Language is an open standard, xml based framework for authentications and authorization between two entities w/o a password

    Server Provider agress to trust identity provider to authenticate users

    Identity provider (IdP) authenticates users and provides service providers authentication assertion that indicates a user was authenticated

    OAuth provides a lot of possible SAML integrations, applications, bindings and options.

    there are many SAML service providers and they can even be custom made

    applications like Salesforce operate as SAML identity providers

Recap:

As briefly as possible, what does SSO do?

    provides a centralized login system across multiple domains/services
